/**
 * 방(Room) 데이터 관리 모듈 (서버 전용)
 *
 * PostgreSQL + Prisma 기반으로 방 생성/조회/참여/삭제를 처리한다.
 * API route에서만 import해서 사용한다.
 *
 * 타입은 lib/types/room.ts에서 별도 관리 (클라이언트 공용)
 * 궁합 계산은 lib/compatibility.ts에서 별도 관리 (클라이언트 공용)
 */
import { prisma } from '@/lib/prisma'
import type { RoomData } from '@/lib/types/room'

// 타입 re-export (API route에서 편의상 사용)
export type { RoomData, ParticipantData } from '@/lib/types/room'

/* ────────────────────────────────────────────
 * 유틸: 6자리 방 코드 생성
 * 혼동 쉬운 문자(0, O, 1, I) 제외
 * ──────────────────────────────────────────── */
function generateCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

/* ────────────────────────────────────────────
 * DB → API 응답 형태로 변환
 * Prisma 결과를 프론트엔드가 기대하는 형태로 매핑
 * ──────────────────────────────────────────── */
function toRoomData(room: {
  code: string
  name: string
  testId: string
  questionCount: number
  questionIds: unknown
  locked: boolean
  createdAt: Date
  participants: {
    nickname: string
    scores: unknown
    resultType: string
    createdAt: Date
  }[]
  reactions?: {
    fromNick: string
    toNick: string
    type: string
  }[]
}): RoomData {
  return {
    code: room.code,
    name: room.name,
    testId: room.testId,
    questionCount: room.questionCount,
    questionIds: (room.questionIds as number[]) ?? [],
    locked: room.locked,
    createdAt: room.createdAt.getTime(),
    participants: room.participants.map(p => ({
      nickname: p.nickname,
      scores: p.scores as Record<string, number>,
      resultType: p.resultType,
      joinedAt: p.createdAt.getTime(),
    })),
    reactions: (room.reactions || []).map(r => ({
      fromNick: r.fromNick,
      toNick: r.toNick,
      type: r.type,
    })),
  }
}

/* ────────────────────────────────────────────
 * 방 생성
 * - 중복 코드가 없을 때까지 재시도
 * - 비밀번호(4글자)와 선택된 문항 정보를 저장
 * ──────────────────────────────────────────── */
export async function createRoom(
  testId: string,
  password: string,
  questionCount: number,
  questionIds: number[],
  name: string = ''
): Promise<RoomData> {
  let code = generateCode()

  // 중복 코드 방지 (최대 5회 재시도)
  for (let i = 0; i < 5; i++) {
    const existing = await prisma.room.findUnique({ where: { code } })
    if (!existing) break
    code = generateCode()
  }

  const room = await prisma.room.create({
    data: {
      code,
      name,
      testId,
      password,
      questionCount,
      questionIds,
    },
    include: { participants: true },
  })

  return toRoomData(room)
}

/* ────────────────────────────────────────────
 * 방 조회 (코드로 검색)
 * 참가자 목록을 가입 순서로 정렬해서 반환
 * ──────────────────────────────────────────── */
export async function getRoom(code: string): Promise<RoomData | null> {
  const room = await prisma.room.findUnique({
    where: { code: code.toUpperCase() },
    include: {
      participants: {
        orderBy: { createdAt: 'asc' },
      },
      reactions: true,
    },
  })

  if (!room) return null
  return toRoomData(room)
}

/* ────────────────────────────────────────────
 * 방 참여 (닉네임 중복 시 결과 업데이트)
 * upsert로 같은 닉네임이면 점수/결과를 갱신
 * ──────────────────────────────────────────── */
export async function joinRoom(
  code: string,
  nickname: string,
  scores: Record<string, number>,
  resultType: string
): Promise<RoomData | null> {
  // 방 존재 확인
  const room = await prisma.room.findUnique({
    where: { code: code.toUpperCase() },
  })
  if (!room) return null

  // 잠금된 방인 경우 기존 참가자만 업데이트 허용
  if (room.locked) {
    const existing = await prisma.participant.findUnique({
      where: { roomId_nickname: { roomId: room.id, nickname } },
    })
    if (!existing) return null // 잠금된 방에 새로운 참가자 불가
  }

  // 참가자 추가 또는 업데이트 (같은 닉네임이면 덮어쓰기)
  await prisma.participant.upsert({
    where: {
      roomId_nickname: {
        roomId: room.id,
        nickname,
      },
    },
    create: {
      roomId: room.id,
      nickname,
      scores,
      resultType,
    },
    update: {
      scores,
      resultType,
    },
  })

  // 업데이트된 방 데이터 반환
  return getRoom(code)
}

/* ────────────────────────────────────────────
 * 방 삭제 (비밀번호 검증 후 삭제)
 * 비밀번호가 일치하면 방과 참가자 모두 삭제 (cascade)
 * 반환: 'success' | 'not_found' | 'wrong_password'
 * ──────────────────────────────────────────── */
/* ────────────────────────────────────────────
 * 비밀번호 검증 (관리 모드 진입용)
 * ──────────────────────────────────────────── */
export async function verifyRoomPassword(
  code: string,
  password: string
): Promise<'success' | 'not_found' | 'wrong_password'> {
  const room = await prisma.room.findUnique({
    where: { code: code.toUpperCase() },
  })
  if (!room) return 'not_found'
  if (room.password !== password) return 'wrong_password'
  return 'success'
}

/* ────────────────────────────────────────────
 * 참가자 제거 (비밀번호 검증 후)
 * ──────────────────────────────────────────── */
export async function kickParticipant(
  code: string,
  password: string,
  nickname: string
): Promise<'success' | 'not_found' | 'wrong_password' | 'participant_not_found'> {
  const room = await prisma.room.findUnique({
    where: { code: code.toUpperCase() },
  })
  if (!room) return 'not_found'
  if (room.password !== password) return 'wrong_password'

  const participant = await prisma.participant.findUnique({
    where: { roomId_nickname: { roomId: room.id, nickname } },
  })
  if (!participant) return 'participant_not_found'

  await prisma.participant.delete({ where: { id: participant.id } })
  return 'success'
}

/* ────────────────────────────────────────────
 * 방 이름 변경 (비밀번호 검증 후)
 * ──────────────────────────────────────────── */
export async function updateRoomName(
  code: string,
  password: string,
  name: string
): Promise<'success' | 'not_found' | 'wrong_password'> {
  const room = await prisma.room.findUnique({
    where: { code: code.toUpperCase() },
  })
  if (!room) return 'not_found'
  if (room.password !== password) return 'wrong_password'

  await prisma.room.update({
    where: { id: room.id },
    data: { name },
  })
  return 'success'
}

/* ────────────────────────────────────────────
 * 방 삭제 (비밀번호 검증 후 삭제)
 * 비밀번호가 일치하면 방과 참가자 모두 삭제 (cascade)
 * 반환: 'success' | 'not_found' | 'wrong_password'
 * ──────────────────────────────────────────── */
export async function deleteRoom(
  code: string,
  password: string
): Promise<'success' | 'not_found' | 'wrong_password'> {
  const room = await prisma.room.findUnique({
    where: { code: code.toUpperCase() },
  })

  if (!room) return 'not_found'
  if (room.password !== password) return 'wrong_password'

  // cascade 설정으로 참가자도 함께 삭제됨
  await prisma.room.delete({
    where: { id: room.id },
  })

  return 'success'
}

/* ────────────────────────────────────────────
 * 방 잠금/해제 토글 (비밀번호 검증 후)
 * ──────────────────────────────────────────── */
export async function toggleRoomLock(
  code: string,
  password: string,
): Promise<{ result: 'success' | 'not_found' | 'wrong_password'; locked?: boolean }> {
  const room = await prisma.room.findUnique({
    where: { code: code.toUpperCase() },
  })
  if (!room) return { result: 'not_found' }
  if (room.password !== password) return { result: 'wrong_password' }

  const updated = await prisma.room.update({
    where: { id: room.id },
    data: { locked: !room.locked },
  })
  return { result: 'success', locked: updated.locked }
}

/* ────────────────────────────────────────────
 * 리액션 토글 (이미 있으면 삭제, 없으면 추가)
 * ──────────────────────────────────────────── */
export async function toggleReaction(
  code: string,
  fromNick: string,
  toNick: string,
  type: string,
): Promise<'added' | 'removed' | 'not_found'> {
  const room = await prisma.room.findUnique({
    where: { code: code.toUpperCase() },
  })
  if (!room) return 'not_found'

  const existing = await prisma.roomReaction.findUnique({
    where: {
      roomId_fromNick_toNick_type: {
        roomId: room.id,
        fromNick,
        toNick,
        type,
      },
    },
  })

  if (existing) {
    await prisma.roomReaction.delete({ where: { id: existing.id } })
    return 'removed'
  } else {
    await prisma.roomReaction.create({
      data: { roomId: room.id, fromNick, toNick, type },
    })
    return 'added'
  }
}
