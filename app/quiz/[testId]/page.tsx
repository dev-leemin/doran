'use client'

import { useState, useEffect, use } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { getTest } from '@/lib/tests'

interface Review {
  id: string
  nickname: string
  content: string
  rating: number
  createdAt: string
}

function getSessionId() {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem('doran_session_id')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('doran_session_id', id)
  }
  return id
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return '방금'
  if (mins < 60) return `${mins}분 전`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}시간 전`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}일 전`
  return `${Math.floor(days / 30)}달 전`
}

export default function TestDetailPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = use(params)
  const test = getTest(testId)

  const [playCount, setPlayCount] = useState(0)
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [myReaction, setMyReaction] = useState<string | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    if (!test) return
    const sessionId = getSessionId()

    // 참여 수 조회
    fetch('/api/stats')
      .then(r => r.json())
      .then(d => setPlayCount(d.stats?.[testId] ?? 0))
      .catch(() => {})

    // 좋아요/싫어요 조회
    fetch(`/api/reactions?testId=${testId}&sessionId=${sessionId}`)
      .then(r => r.json())
      .then(d => {
        setLikes(d.likes ?? 0)
        setDislikes(d.dislikes ?? 0)
        setMyReaction(d.myReaction ?? null)
      })
      .catch(() => {})

    // 리뷰 조회
    fetch(`/api/reviews?testId=${testId}`)
      .then(r => r.json())
      .then(d => setReviews(d.reviews ?? []))
      .catch(() => {})
  }, [testId, test])

  if (!test) {
    return (
      <div className="max-w-lg mx-auto pt-20 text-center">
        <img src="/icons/status/no-test.png" alt="not found" className="w-20 h-20 mx-auto mb-4 object-contain" />
        <p className="font-bold text-lg">존재하지 않는 테스트예요</p>
      </div>
    )
  }

  const handleReaction = async (type: 'like' | 'dislike') => {
    const sessionId = getSessionId()
    try {
      const res = await fetch('/api/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testId, type, sessionId }),
      })
      const data = await res.json()
      setLikes(data.likes ?? 0)
      setDislikes(data.dislikes ?? 0)
      setMyReaction(data.myReaction ?? null)
    } catch {}
  }

  const formatCount = (n: number) => n.toLocaleString('ko-KR')

  return (
    <div className="max-w-lg mx-auto pt-8 pb-8">
      {/* 테스트 헤더 */}
      <div className="text-center mb-6 animate-fade-up">
        {test.icon ? (
          <div className="w-28 h-28 rounded-3xl overflow-hidden mx-auto mb-5 animate-float">
            <Image src={test.icon} alt={test.title} width={112} height={112} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className="w-28 h-28 rounded-3xl flex items-center justify-center text-6xl mx-auto mb-5 animate-float"
            style={{ background: `${test.color}12` }}
          >
            {test.emoji}
          </div>
        )}
        <h1 className="text-2xl font-bold mb-2">{test.title}</h1>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          {test.description}
        </p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-3 gap-3 mb-6 animate-fade-up delay-100">
        <div
          className="text-center py-3 rounded-2xl"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-lg font-bold" style={{ color: test.color }}>
            {formatCount(playCount)}
          </p>
          <p className="text-[10px]" style={{ color: 'var(--muted)' }}>참여</p>
        </div>
        <div
          className="text-center py-3 rounded-2xl"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-lg font-bold" style={{ color: test.color }}>
            {test.avgTime ?? '3분'}
          </p>
          <p className="text-[10px]" style={{ color: 'var(--muted)' }}>소요시간</p>
        </div>
        <div
          className="text-center py-3 rounded-2xl"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-lg font-bold" style={{ color: test.color }}>
            {test.questions.length}
          </p>
          <p className="text-[10px]" style={{ color: 'var(--muted)' }}>문항</p>
        </div>
      </div>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2 mb-6 animate-fade-up delay-100">
        {test.tags.map(tag => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-full"
            style={{ background: 'var(--sky-50)', color: 'var(--muted)' }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 시작 버튼 */}
      <Link
        href={`/quiz/${testId}/play`}
        className="block w-full py-4 rounded-2xl text-white font-bold text-base text-center transition-all duration-200 btn-bounce mb-4 animate-fade-up delay-200"
        style={{
          background: `linear-gradient(135deg, ${test.color}, ${test.color}dd)`,
          boxShadow: `0 4px 15px ${test.color}30`,
        }}
      >
        테스트 시작하기
      </Link>

      {/* 좋아요 / 싫어요 */}
      <div className="flex gap-3 mb-8 animate-fade-up delay-200">
        <button
          onClick={() => handleReaction('like')}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium transition-all btn-bounce"
          style={{
            background: myReaction === 'like' ? `${test.color}15` : 'var(--card)',
            border: myReaction === 'like' ? `1.5px solid ${test.color}40` : '1px solid var(--border)',
            color: myReaction === 'like' ? test.color : 'var(--fg)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={myReaction === 'like' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
          좋아요 {likes > 0 && <span className="text-xs">({formatCount(likes)})</span>}
        </button>
        <button
          onClick={() => handleReaction('dislike')}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium transition-all btn-bounce"
          style={{
            background: myReaction === 'dislike' ? '#ef444415' : 'var(--card)',
            border: myReaction === 'dislike' ? '1.5px solid #ef444440' : '1px solid var(--border)',
            color: myReaction === 'dislike' ? '#ef4444' : 'var(--fg)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={myReaction === 'dislike' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(180deg)' }}>
            <path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
          싫어요 {dislikes > 0 && <span className="text-xs">({formatCount(dislikes)})</span>}
        </button>
      </div>

      {/* 리뷰 섹션 */}
      <div className="animate-fade-up delay-300">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold">리뷰 ({reviews.length})</p>
        </div>

        {/* 리뷰 목록 */}
        {reviews.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-2xl mb-2">💬</p>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>
              아직 리뷰가 없어요. 첫 번째 리뷰를 남겨보세요!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {reviews.map(review => (
              <div
                key={review.id}
                className="p-4 rounded-2xl"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold">{review.nickname}</span>
                  <span className="text-[10px]" style={{ color: 'var(--muted)' }}>
                    {timeAgo(review.createdAt)}
                  </span>
                </div>
                <p className="text-sm leading-relaxed">{review.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
