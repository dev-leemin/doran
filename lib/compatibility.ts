/**
 * 궁합 점수 계산 유틸 (순수 함수)
 *
 * 서버(room-store)와 클라이언트(room 페이지) 양쪽에서
 * 동일하게 사용할 수 있도록 별도 파일로 분리.
 * DB나 서버 전용 모듈에 의존하지 않는다.
 */

/**
 * 두 참가자의 점수 축(axis)별 차이를 계산하여
 * 0~100% 유사도를 반환한다.
 *
 * @param scoresA - 참가자 A의 축별 점수
 * @param scoresB - 참가자 B의 축별 점수
 * @returns 0~100 사이의 궁합 퍼센트
 */
export function calculateCompatibility(
  scoresA: Record<string, number>,
  scoresB: Record<string, number>
): number {
  const allKeys = new Set([...Object.keys(scoresA), ...Object.keys(scoresB)])
  let totalDiff = 0
  let maxPossible = 0

  allKeys.forEach(key => {
    const a = scoresA[key] || 0
    const b = scoresB[key] || 0
    totalDiff += Math.abs(a - b)
    maxPossible += Math.max(a, b, 10)
  })

  if (maxPossible === 0) return 50
  return Math.round((1 - totalDiff / maxPossible) * 100)
}
