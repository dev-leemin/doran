'use client'

import { useState, useEffect, use } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { getTest } from '@/lib/tests'
import AdBanner from '@/components/ad-banner'

interface Review {
  id: string
  nickname: string
  content: string
  rating: number
  createdAt: string
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
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    if (!test) return

    // 참여 수 + 좋아요 수 조회
    fetch('/api/stats')
      .then(r => r.json())
      .then(d => {
        setPlayCount(d.stats?.[testId] ?? 0)
        setLikes(d.likes?.[testId] ?? 0)
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

  const formatCount = (n: number) => n.toLocaleString('ko-KR')

  return (
    <div className="max-w-lg mx-auto pt-8 pb-8">
      {/* 테스트 헤더 — 히어로 이미지 + 제목 분리 */}
      <div className="text-center mb-6 animate-fade-up">
        {test.icon ? (
          <div
            className="relative w-full rounded-3xl overflow-hidden mb-5"
          >
            <Image src={test.icon} alt={test.title} width={1024} height={1024} className="w-full h-auto" />
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

      {/* 좋아요 수 (읽기 전용) */}
      {likes > 0 && (
        <div className="flex items-center justify-center gap-1.5 mb-6 animate-fade-up delay-200">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="text-sm font-medium" style={{ color: '#ef4444' }}>
            {formatCount(likes)}명이 좋아해요
          </span>
        </div>
      )}

      {/* 광고: 시작 버튼 하단 */}
      <AdBanner format="rectangle" className="mb-6" />

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
