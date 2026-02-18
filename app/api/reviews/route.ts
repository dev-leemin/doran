import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/* ── GET: 특정 테스트의 리뷰 목록 조회 ── */
export async function GET(request: NextRequest) {
  try {
    const testId = request.nextUrl.searchParams.get('testId')
    if (!testId) {
      return NextResponse.json({ error: 'testId가 필요합니다' }, { status: 400 })
    }

    const reviews = await prisma.review.findMany({
      where: { testId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    })

    return NextResponse.json({ reviews })
  } catch (err) {
    console.error('[Reviews API] GET error:', err)
    return NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 })
  }
}

/* ── POST: 리뷰 작성 ── */
export async function POST(request: NextRequest) {
  try {
    const { testId, nickname, content, rating } = await request.json()

    if (!testId || !nickname?.trim() || !content?.trim()) {
      return NextResponse.json({ error: '필수 항목을 입력해주세요' }, { status: 400 })
    }

    if (content.trim().length > 200) {
      return NextResponse.json({ error: '리뷰는 200자 이내로 작성해주세요' }, { status: 400 })
    }

    const review = await prisma.review.create({
      data: {
        testId,
        nickname: nickname.trim().slice(0, 10),
        content: content.trim(),
        rating: Math.min(5, Math.max(1, rating || 5)),
      },
    })

    return NextResponse.json({ review })
  } catch (err) {
    console.error('[Reviews API] POST error:', err)
    return NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 })
  }
}
