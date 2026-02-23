/**
 * 비로그인 사용자 히스토리 관리 (localStorage)
 *
 * 테스트 결과와 방 참여 기록을 localStorage에 저장해서
 * 다음에 방문했을 때 최근 활동을 볼 수 있게 한다.
 */

const RESULTS_KEY = 'doran_history_results'
const ROOMS_KEY = 'doran_history_rooms'
const MAX_ITEMS = 20

/** 저장되는 테스트 결과 */
export interface SavedResult {
  testId: string
  resultType: string
  scores: Record<string, number>
  date: string // 'YYYY.MM.DD'
}

/** 저장되는 방 참여 기록 */
export interface SavedRoom {
  code: string
  name: string
  testId: string
  nickname: string
  date: string // 'YYYY.MM.DD'
  participantCount?: number
}

function today(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}

/** 테스트 결과 저장 (같은 테스트는 최신으로 덮어쓰기) */
export function saveTestResult(
  testId: string,
  resultType: string,
  scores: Record<string, number>,
) {
  try {
    const saved: SavedResult[] = JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]')
    const filtered = saved.filter(r => r.testId !== testId)
    filtered.unshift({ testId, resultType, scores, date: today() })
    localStorage.setItem(RESULTS_KEY, JSON.stringify(filtered.slice(0, MAX_ITEMS)))
  } catch { /* localStorage 사용 불가 */ }
}

/** 최근 테스트 결과 조회 */
export function getRecentResults(): SavedResult[] {
  try {
    return JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]')
  } catch {
    return []
  }
}

/** 방 참여 기록 저장 (같은 방 코드는 최신으로 덮어쓰기) */
export function saveRoomParticipation(
  code: string,
  name: string,
  testId: string,
  nickname: string,
  participantCount?: number,
) {
  try {
    const saved: SavedRoom[] = JSON.parse(localStorage.getItem(ROOMS_KEY) || '[]')
    const filtered = saved.filter(r => r.code !== code)
    filtered.unshift({ code, name, testId, nickname, date: today(), participantCount })
    localStorage.setItem(ROOMS_KEY, JSON.stringify(filtered.slice(0, MAX_ITEMS)))
  } catch { /* localStorage 사용 불가 */ }
}

/** 최근 방 참여 기록 조회 */
export function getRecentRooms(): SavedRoom[] {
  try {
    return JSON.parse(localStorage.getItem(ROOMS_KEY) || '[]')
  } catch {
    return []
  }
}
