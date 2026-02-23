/**
 * 결과 유형별 통계 API
 * GET: 특정 테스트의 결과 유형별 비율 조회
 * POST: 결과 유형 카운트 증가
 */
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const testId = request.nextUrl.searchParams.get('testId')
    if (!testId) return NextResponse.json({ error: 'testId 필요' }, { status: 400 })

    const stats = await prisma.resultTypeStat.findMany({
      where: { testId },
    })

    const total = stats.reduce((s, st) => s + st.count, 0)
    const distribution: Record<string, { count: number; percentage: number }> = {}
    stats.forEach(st => {
      distribution[st.resultType] = {
        count: st.count,
        percentage: total > 0 ? Math.round((st.count / total) * 100) : 0,
      }
    })

    return NextResponse.json({ total, distribution })
  } catch (err) {
    console.error('[ResultStats API] GET error:', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { testId, resultType } = await request.json()
    if (!testId || !resultType) return NextResponse.json({ error: 'testId, resultType 필요' }, { status: 400 })

    await prisma.resultTypeStat.upsert({
      where: { testId_resultType: { testId, resultType } },
      create: { testId, resultType, count: 1 },
      update: { count: { increment: 1 } },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[ResultStats API] POST error:', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}
