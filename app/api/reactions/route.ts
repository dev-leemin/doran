import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/* ── GET: 특정 테스트의 좋아요/싫어요 수 조회 ── */
export async function GET(request: NextRequest) {
  try {
    const testId = request.nextUrl.searchParams.get('testId')
    const sessionId = request.nextUrl.searchParams.get('sessionId') || ''

    if (!testId) {
      return NextResponse.json({ error: 'testId가 필요합니다' }, { status: 400 })
    }

    const [likes, dislikes] = await Promise.all([
      prisma.testReaction.count({ where: { testId, type: 'like' } }),
      prisma.testReaction.count({ where: { testId, type: 'dislike' } }),
    ])

    // 현재 세션의 반응 상태
    let myReaction: string | null = null
    if (sessionId) {
      const existing = await prisma.testReaction.findFirst({
        where: { testId, sessionId },
      })
      if (existing) myReaction = existing.type
    }

    return NextResponse.json({ likes, dislikes, myReaction })
  } catch (err) {
    console.error('[Reactions API] GET error:', err)
    return NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 })
  }
}

/* ── POST: 좋아요/싫어요 토글 ── */
export async function POST(request: NextRequest) {
  try {
    const { testId, type, sessionId } = await request.json()

    if (!testId || !type || !sessionId) {
      return NextResponse.json({ error: '필수 항목이 누락되었습니다' }, { status: 400 })
    }

    if (type !== 'like' && type !== 'dislike') {
      return NextResponse.json({ error: '잘못된 반응 타입입니다' }, { status: 400 })
    }

    // 기존 반응 확인
    const existing = await prisma.testReaction.findFirst({
      where: { testId, sessionId },
    })

    if (existing) {
      if (existing.type === type) {
        // 같은 타입 클릭 → 취소 (삭제)
        await prisma.testReaction.delete({ where: { id: existing.id } })
      } else {
        // 다른 타입 클릭 → 변경
        await prisma.testReaction.update({
          where: { id: existing.id },
          data: { type },
        })
      }
    } else {
      // 새로 생성
      await prisma.testReaction.create({
        data: { testId, type, sessionId },
      })
    }

    // 최신 카운트 반환
    const [likes, dislikes] = await Promise.all([
      prisma.testReaction.count({ where: { testId, type: 'like' } }),
      prisma.testReaction.count({ where: { testId, type: 'dislike' } }),
    ])

    const current = await prisma.testReaction.findFirst({
      where: { testId, sessionId },
    })

    return NextResponse.json({
      likes,
      dislikes,
      myReaction: current?.type || null,
    })
  } catch (err) {
    console.error('[Reactions API] POST error:', err)
    return NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 })
  }
}
