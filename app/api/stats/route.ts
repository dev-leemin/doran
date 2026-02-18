/**
 * 테스트 통계 API
 *
 * GET:  모든 테스트의 참여 횟수 조회
 * POST: 특정 테스트의 참여 횟수 증가 (테스트 완료 시 호출)
 *
 * TestStat 테이블을 사용하여 테스트별 누적 참여 횟수를 관리한다.
 */
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/* ── GET: 모든 테스트 통계 조회 ── */
export async function GET() {
  try {
    const stats = await prisma.testStat.findMany()

    /* { testId: playCount } 형태로 변환 */
    const result: Record<string, number> = {}
    for (const stat of stats) {
      result[stat.testId] = stat.playCount
    }

    return NextResponse.json({ stats: result })
  } catch (err) {
    console.error('[Stats API] GET error:', err)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}

/* ── POST: 참여 횟수 증가 ── */
export async function POST(request: NextRequest) {
  try {
    const { testId } = await request.json()
    if (!testId) {
      return NextResponse.json(
        { error: '테스트 ID가 필요합니다' },
        { status: 400 }
      )
    }

    /* upsert: 레코드가 없으면 생성(1), 있으면 +1 */
    const stat = await prisma.testStat.upsert({
      where: { testId },
      create: { testId, playCount: 1 },
      update: { playCount: { increment: 1 } },
    })

    return NextResponse.json({ playCount: stat.playCount })
  } catch (err) {
    console.error('[Stats API] POST error:', err)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}
