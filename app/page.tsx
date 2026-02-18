'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { testList, CATEGORY_LABELS, CATEGORY_COLORS, getTest, getResult } from '@/lib/tests'
import type { TestCategory, TestConfig } from '@/lib/tests'
import { getRecentResults, getRecentRooms } from '@/lib/history'
import type { SavedResult, SavedRoom } from '@/lib/history'

export default function Home() {
  const [stats, setStats] = useState<Record<string, number>>({})
  const [groupByCategory, setGroupByCategory] = useState(false)
  const [recentResults, setRecentResults] = useState<SavedResult[]>([])
  const [recentRooms, setRecentRooms] = useState<SavedRoom[]>([])

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data.stats ?? {}))
      .catch(() => {})

    // localStorage에서 보기 모드 복원
    const saved = localStorage.getItem('doran_view_mode')
    if (saved === 'grouped') setGroupByCategory(true)

    // 최근 활동 불러오기
    setRecentResults(getRecentResults())
    setRecentRooms(getRecentRooms())
  }, [])

  const toggleView = () => {
    const next = !groupByCategory
    setGroupByCategory(next)
    localStorage.setItem('doran_view_mode', next ? 'grouped' : 'flat')
  }

  const formatCount = (n: number) => n.toLocaleString('ko-KR')

  /* 카테고리별 그룹핑 */
  const grouped = useMemo(() => {
    const map = new Map<TestCategory, typeof testList>()
    testList.forEach(test => {
      const list = map.get(test.category) || []
      list.push(test)
      map.set(test.category, list)
    })
    return Array.from(map.entries())
  }, [])

  /* 카드 렌더링 */
  const renderCard = (test: TestConfig, i: number, delayBase = 0) => {
    const count = stats[test.id] ?? 0
    return (
      <Link
        key={test.id}
        href={`/quiz/${test.id}`}
        className={`block animate-fade-up delay-${Math.min((i + 1) * 100 + delayBase, 800)}`}
      >
        <div
          className="relative overflow-hidden rounded-2xl h-full transition-all duration-300 btn-bounce flex flex-col"
          style={{
            background: `linear-gradient(145deg, ${test.color}06, ${test.color}15)`,
            border: `1px solid ${test.color}20`,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
            e.currentTarget.style.boxShadow = `0 12px 30px ${test.color}18`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
          }}
        >
          {/* 배경 장식 */}
          <div
            className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-[0.08]"
            style={{ background: `radial-gradient(circle, ${test.color}, transparent 70%)` }}
          />

          <div className="relative p-5 flex flex-col items-center text-center flex-1">
            {/* 아이콘 */}
            {test.icon ? (
              <div className="w-14 h-14 rounded-2xl overflow-hidden mb-3">
                <Image src={test.icon} alt={test.title} width={56} height={56} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3"
                style={{ background: `${test.color}12` }}
              >
                {test.emoji}
              </div>
            )}

            {/* 제목 + 설명 */}
            <h2 className="font-bold text-base mb-1">{test.title}</h2>
            <p className="text-xs mb-3 leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
              {test.description}
            </p>

            {/* 참여 수 */}
            {count > 0 && (
              <div
                className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium mb-2"
                style={{ background: `${test.color}10`, color: test.color }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                {formatCount(count)}명
              </div>
            )}

            {/* 시작 버튼 */}
            <div
              className="flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold text-white mt-auto"
              style={{ background: `linear-gradient(135deg, ${test.color}, ${test.color}cc)` }}
            >
              시작
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="pt-8 pb-8">
      {/* 히어로 */}
      <section className="text-center mb-6 animate-fade-up">
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          도란도란, 서로를 알아가는 테스트
        </p>
      </section>

      {/* 보기 모드 토글 */}
      <div className="flex justify-end mb-5 animate-fade-up">
        <button
          onClick={toggleView}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 btn-bounce cursor-pointer"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            color: 'var(--muted)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--sky-50)'
            e.currentTarget.style.borderColor = 'var(--sky-300)'
            e.currentTarget.style.color = 'var(--sky-500)'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--card)'
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--muted)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          {groupByCategory ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
              </svg>
              전체보기
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              카테고리별
            </>
          )}
        </button>
      </div>

      {groupByCategory ? (
        /* ── 카테고리별 보기 ── */
        grouped.map(([category, tests], gi) => {
          const catColor = CATEGORY_COLORS[category]
          return (
            <section key={category} className="mb-8 animate-fade-up delay-100">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${catColor}12`, color: catColor }}
                >
                  {CATEGORY_LABELS[category]}
                </span>
                <div className="flex-1 h-px" style={{ background: `${catColor}20` }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tests.map((test, i) => renderCard(test, i, gi * 100))}
              </div>
            </section>
          )
        })
      ) : (
        /* ── 전체 보기 ── */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testList.map((test, i) => renderCard(test, i))}
        </div>
      )}

      {/* 최근 활동 */}
      {(recentResults.length > 0 || recentRooms.length > 0) && (
        <section className="mt-10 animate-fade-up delay-300">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ background: 'var(--sky-50)', color: 'var(--sky-500)' }}>
              최근 활동
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          {/* 최근 테스트 결과 */}
          {recentResults.length > 0 && (
            <div className="mb-4">
              <p className="text-[11px] font-medium mb-2" style={{ color: 'var(--muted)' }}>내 결과</p>
              <div className="space-y-2">
                {recentResults.slice(0, 5).map(r => {
                  const t = getTest(r.testId)
                  const res = getResult(r.testId, r.resultType)
                  if (!t || !res) return null
                  return (
                    <Link
                      key={r.testId}
                      href={`/result/${r.testId}/${r.resultType}?s=${encodeURIComponent(JSON.stringify(r.scores))}`}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = t.color
                        e.currentTarget.style.background = `${t.color}06`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.background = 'var(--card)'
                      }}
                    >
                      <span className="text-2xl shrink-0">{res.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold truncate">{res.title}</p>
                        <p className="text-[10px] truncate" style={{ color: 'var(--muted)' }}>
                          {t.title}
                        </p>
                      </div>
                      <span className="text-[10px] shrink-0" style={{ color: 'var(--muted)' }}>
                        {r.date}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* 최근 참여한 방 */}
          {recentRooms.length > 0 && (
            <div>
              <p className="text-[11px] font-medium mb-2" style={{ color: 'var(--muted)' }}>참여한 방</p>
              <div className="space-y-2">
                {recentRooms.slice(0, 5).map(r => {
                  const t = getTest(r.testId)
                  return (
                    <Link
                      key={r.code}
                      href={`/room/${r.code}`}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                      onMouseEnter={e => {
                        const c = t?.color || '#6366f1'
                        e.currentTarget.style.borderColor = c
                        e.currentTarget.style.background = `${c}06`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.background = 'var(--card)'
                      }}
                    >
                      <span className="text-2xl shrink-0">👥</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold truncate">{r.name || r.code}</p>
                        <p className="text-[10px] truncate" style={{ color: 'var(--muted)' }}>
                          {t?.title || '테스트'} · {r.nickname}
                        </p>
                      </div>
                      <span className="text-[10px] shrink-0" style={{ color: 'var(--muted)' }}>
                        {r.date}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 하단 안내 */}
      <section className="text-center mt-10 animate-fade-up delay-400">
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          결과를 공유하고 친구와 비교해보세요
        </p>
      </section>
    </div>
  )
}
