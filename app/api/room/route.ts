/**
 * 방(Room) API
 *
 * POST: 방 생성/참여/삭제/잠금/리액션 등
 * GET:  방 코드로 방 정보 조회
 */
import { NextRequest, NextResponse } from 'next/server'
import { createRoom, getRoom, joinRoom, deleteRoom, verifyRoomPassword, kickParticipant, updateRoomName, toggleRoomLock, toggleReaction } from '@/lib/room-store'

/* ── POST ── */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action } = body

    /* 방 생성 */
    if (action === 'create') {
      const { testId, password, questionCount, questionIds, name } = body
      if (!testId || !password || !questionCount || !questionIds) {
        return NextResponse.json({ error: '테스트ID, 비밀번호, 문항수, 문항목록이 필요합니다' }, { status: 400 })
      }
      if (password.length !== 4) {
        return NextResponse.json({ error: '비밀번호는 4글자여야 합니다' }, { status: 400 })
      }
      const room = await createRoom(testId, password, questionCount, questionIds, name || '')
      return NextResponse.json({ room })
    }

    /* 방 참여 */
    if (action === 'join') {
      const { code, nickname, scores, resultType } = body
      if (!code || !nickname || !scores || !resultType) {
        return NextResponse.json({ error: '필수 정보가 누락되었습니다' }, { status: 400 })
      }
      const room = await joinRoom(code, nickname, scores, resultType)
      if (!room) {
        return NextResponse.json({ error: '방을 찾을 수 없거나 잠금되어 있습니다' }, { status: 404 })
      }
      return NextResponse.json({ room })
    }

    /* 비밀번호 검증 */
    if (action === 'verify') {
      const { code, password } = body
      if (!code || !password) return NextResponse.json({ error: '방 코드와 비밀번호가 필요합니다' }, { status: 400 })
      const result = await verifyRoomPassword(code, password)
      if (result === 'not_found') return NextResponse.json({ error: '방을 찾을 수 없습니다' }, { status: 404 })
      if (result === 'wrong_password') return NextResponse.json({ error: '비밀번호가 일치하지 않습니다' }, { status: 403 })
      return NextResponse.json({ success: true })
    }

    /* 참가자 제거 */
    if (action === 'kick') {
      const { code, password, nickname } = body
      if (!code || !password || !nickname) return NextResponse.json({ error: '필수 정보가 누락되었습니다' }, { status: 400 })
      const result = await kickParticipant(code, password, nickname)
      if (result === 'not_found') return NextResponse.json({ error: '방을 찾을 수 없습니다' }, { status: 404 })
      if (result === 'wrong_password') return NextResponse.json({ error: '비밀번호가 일치하지 않습니다' }, { status: 403 })
      if (result === 'participant_not_found') return NextResponse.json({ error: '참가자를 찾을 수 없습니다' }, { status: 404 })
      return NextResponse.json({ success: true })
    }

    /* 방 이름 변경 */
    if (action === 'rename') {
      const { code, password, name } = body
      if (!code || !password || name === undefined) return NextResponse.json({ error: '필수 정보가 누락되었습니다' }, { status: 400 })
      const result = await updateRoomName(code, password, name)
      if (result === 'not_found') return NextResponse.json({ error: '방을 찾을 수 없습니다' }, { status: 404 })
      if (result === 'wrong_password') return NextResponse.json({ error: '비밀번호가 일치하지 않습니다' }, { status: 403 })
      return NextResponse.json({ success: true })
    }

    /* 방 잠금/해제 토글 */
    if (action === 'lock') {
      const { code, password } = body
      if (!code || !password) return NextResponse.json({ error: '필수 정보가 누락되었습니다' }, { status: 400 })
      const { result, locked } = await toggleRoomLock(code, password)
      if (result === 'not_found') return NextResponse.json({ error: '방을 찾을 수 없습니다' }, { status: 404 })
      if (result === 'wrong_password') return NextResponse.json({ error: '비밀번호가 일치하지 않습니다' }, { status: 403 })
      return NextResponse.json({ success: true, locked })
    }

    /* 리액션 토글 */
    if (action === 'react') {
      const { code, fromNick, toNick, type } = body
      if (!code || !fromNick || !toNick || !type) return NextResponse.json({ error: '필수 정보가 누락되었습니다' }, { status: 400 })
      const result = await toggleReaction(code, fromNick, toNick, type)
      if (result === 'not_found') return NextResponse.json({ error: '방을 찾을 수 없습니다' }, { status: 404 })
      return NextResponse.json({ result })
    }

    /* 방 삭제 */
    if (action === 'delete') {
      const { code, password } = body
      if (!code || !password) return NextResponse.json({ error: '방 코드와 비밀번호가 필요합니다' }, { status: 400 })
      const result = await deleteRoom(code, password)
      if (result === 'not_found') return NextResponse.json({ error: '방을 찾을 수 없습니다' }, { status: 404 })
      if (result === 'wrong_password') return NextResponse.json({ error: '비밀번호가 일치하지 않습니다' }, { status: 403 })
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: '알 수 없는 요청' }, { status: 400 })
  } catch (err) {
    console.error('[Room API] POST error:', err)
    return NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 })
  }
}

/* ── GET: 방 조회 ── */
export async function GET(request: NextRequest) {
  try {
    const code = request.nextUrl.searchParams.get('code')
    if (!code) return NextResponse.json({ error: '방 코드가 필요합니다' }, { status: 400 })

    const room = await getRoom(code)
    if (!room) return NextResponse.json({ error: '방을 찾을 수 없습니다' }, { status: 404 })

    return NextResponse.json({ room })
  } catch (err) {
    console.error('[Room API] GET error:', err)
    return NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 })
  }
}
