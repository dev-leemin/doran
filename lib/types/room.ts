/**
 * 방(Room) 관련 공용 타입 정의
 *
 * 서버(API route, room-store)와 클라이언트(room 페이지)
 * 양쪽에서 동일한 타입을 사용하기 위해 별도 파일로 분리.
 */

/** 참가자 데이터 (API 응답 형태) */
export interface ParticipantData {
  nickname: string
  scores: Record<string, number>
  resultType: string
  joinedAt: number
}

/** 방 데이터 (API 응답 형태) */
export interface RoomData {
  code: string
  name: string               // 방 이름
  testId: string
  questionCount: number      // 선택된 문항 수
  questionIds: number[]      // 선택된 문항 ID 배열
  createdAt: number
  participants: ParticipantData[]
}
