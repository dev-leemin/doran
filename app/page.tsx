'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Users } from 'lucide-react'
import { testList, CATEGORY_LABELS, CATEGORY_COLORS, getTest, getResult } from '@/lib/tests'
import type { TestCategory, TestConfig } from '@/lib/tests'
import { getRecentResults, getRecentRooms } from '@/lib/history'
import type { SavedResult, SavedRoom } from '@/lib/history'

/** 깨진 날짜 포맷 복구 (예: '202601.02' → '2026.01.02') */
function fixDate(d: string): string {
  if (/^\d{4}\.\d{2}\.\d{2}$/.test(d)) return d
  const digits = d.replace(/\D/g, '')
  if (digits.length === 8) return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6, 8)}`
  return d
}

type SortMode = 'latest' | 'popular'

export default function Home() {
  const [stats, setStats] = useState<Record<string, number>>({})
  const [sortMode, setSortMode] = useState<SortMode>('latest')
  const [categoryFilter, setCategoryFilter] = useState<TestCategory | null>(null)
  const [recentResults, setRecentResults] = useState<SavedResult[]>([])
  const [recentRooms, setRecentRooms] = useState<SavedRoom[]>([])

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data.stats ?? {}))
      .catch(() => {})

    // localStorage에서 정렬 모드 복원
    const saved = localStorage.getItem('doran_sort_mode')
    if (saved === 'popular') setSortMode('popular')

    // 최근 활동 불러오기
    setRecentResults(getRecentResults())
    const rooms = getRecentRooms()
    setRecentRooms(rooms)

    // 방 존재 여부 확인 + 참여자 수 업데이트 + 삭제된 방 정리
    ;(async () => {
      const deletedCodes: string[] = []
      await Promise.all(rooms.map(async (room) => {
        try {
          const res = await fetch(`/api/room?code=${room.code}`)
          const data = await res.json()
          if (data.error || !data.room) {
            deletedCodes.push(room.code)
          } else if (data.room.participants) {
            setRecentRooms(prev =>
              prev.map(r =>
                r.code === room.code
                  ? { ...r, participantCount: data.room.participants.length, name: data.room.name || r.name }
                  : r
              )
            )
          }
        } catch {
          deletedCodes.push(room.code)
        }
      }))
      if (deletedCodes.length > 0) {
        setRecentRooms(prev => {
          const filtered = prev.filter(r => !deletedCodes.includes(r.code))
          try { localStorage.setItem('doran_history_rooms', JSON.stringify(filtered)) } catch {}
          return filtered
        })
      }
    })()
  }, [])

  const toggleSort = (mode: SortMode) => {
    setSortMode(mode)
    localStorage.setItem('doran_sort_mode', mode)
  }

  const formatCount = (n: number) => n.toLocaleString('ko-KR')

  /* 테스트에 존재하는 카테고리 목록 (순서 유지) */
  const categories = useMemo(() => {
    const seen = new Set<TestCategory>()
    const result: TestCategory[] = []
    testList.forEach(t => {
      if (!seen.has(t.category)) {
        seen.add(t.category)
        result.push(t.category)
      }
    })
    return result
  }, [])

  /* 필터 + 정렬된 테스트 목록 */
  const sortedTests = useMemo(() => {
    let list = [...testList]
    if (categoryFilter) {
      list = list.filter(t => t.category === categoryFilter)
    }
    if (sortMode === 'latest') {
      list.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    } else {
      list.sort((a, b) => (stats[b.id] ?? 0) - (stats[a.id] ?? 0))
    }
    return list
  }, [sortMode, stats, categoryFilter])

  /* 카드 렌더링 */
  const renderCard = (test: TestConfig, i: number) => {
    const count = stats[test.id] ?? 0
    return (
      <Link
        key={test.id}
        href={`/quiz/${test.id}`}
        className={`block shrink-0 snap-start animate-fade-up delay-${Math.min((i + 1) * 100, 800)}`}
        style={{ width: '160px', minWidth: '160px' }}
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
            className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-[0.08]"
            style={{ background: `radial-gradient(circle, ${test.color}, transparent 70%)` }}
          />

          <div className="relative p-4 flex flex-col items-center text-center flex-1">
            {/* 아이콘 */}
            {test.icon ? (
              <div className="w-11 h-11 rounded-xl overflow-hidden mb-2">
                <Image src={test.icon} alt={test.title} width={44} height={44} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-2"
                style={{ background: `${test.color}12` }}
              >
                {test.emoji}
              </div>
            )}

            {/* 제목 + 설명 */}
            <h2 className="font-bold text-sm mb-0.5">{test.title}</h2>
            <p className="text-[11px] mb-2 leading-snug flex-1" style={{ color: 'var(--muted)' }}>
              {test.description}
            </p>

            {/* 참여 수 + 시작 */}
            <div className="flex items-center gap-1.5 mt-auto">
              {count > 0 && (
                <span
                  className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                  style={{ background: `${test.color}10`, color: test.color }}
                >
                  {formatCount(count)}명
                </span>
              )}
              <span
                className="text-[10px] font-bold px-3 py-1 rounded-full text-white"
                style={{ background: `linear-gradient(135deg, ${test.color}, ${test.color}cc)` }}
              >
                시작 →
              </span>
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

      {/* 카테고리 필터 칩 */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-5 px-5 mb-3 animate-fade-up">
        <button
          onClick={() => setCategoryFilter(null)}
          className="shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 cursor-pointer"
          style={{
            background: categoryFilter === null ? 'var(--sky-500)' : 'var(--card)',
            color: categoryFilter === null ? '#fff' : 'var(--muted)',
            border: `1px solid ${categoryFilter === null ? 'var(--sky-500)' : 'var(--border)'}`,
          }}
        >
          전체
        </button>
        {categories.map(cat => {
          const active = categoryFilter === cat
          const catColor = CATEGORY_COLORS[cat]
          return (
            <button
              key={cat}
              onClick={() => setCategoryFilter(active ? null : cat)}
              className="shrink-0 px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 cursor-pointer"
              style={{
                background: active ? catColor : 'var(--card)',
                color: active ? '#fff' : 'var(--muted)',
                border: `1px solid ${active ? catColor : 'var(--border)'}`,
              }}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          )
        })}
      </div>

      {/* 정렬 토글 */}
      <div className="flex items-center justify-between mb-4 animate-fade-up">
        <span className="text-xs font-bold" style={{ color: 'var(--fg)' }}>
          테스트
        </span>
        <div
          className="flex rounded-full p-0.5"
          style={{ background: 'var(--sky-50)', border: '1px solid var(--border)' }}
        >
          {([['latest', '최신순'], ['popular', '인기순']] as [SortMode, string][]).map(([mode, label]) => (
            <button
              key={mode}
              onClick={() => toggleSort(mode)}
              className="px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-200 cursor-pointer"
              style={{
                background: sortMode === mode ? 'var(--card)' : 'transparent',
                color: sortMode === mode ? 'var(--sky-500)' : 'var(--muted)',
                boxShadow: sortMode === mode ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 가로 스크롤 카드 */}
      <div
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-5 px-5 pb-2 animate-fade-up delay-100"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {sortedTests.map((test, i) => renderCard(test, i))}
      </div>

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
                      {res.icon ? <img src={res.icon} alt={res.title} className="w-9 h-9 rounded-lg object-contain shrink-0" style={{ background: `${res.color}10` }} /> : <span className="text-2xl shrink-0">{res.emoji}</span>}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold truncate">{res.title}</p>
                        <p className="text-[10px] truncate" style={{ color: 'var(--muted)' }}>
                          {t.title}
                        </p>
                      </div>
                      <span className="text-[10px] shrink-0" style={{ color: 'var(--muted)' }}>
                        {fixDate(r.date)}
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
                  const roomColor = t?.color || '#6366f1'
                  return (
                    <Link
                      key={r.code}
                      href={`/room/${r.code}`}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = roomColor
                        e.currentTarget.style.background = `${roomColor}06`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--border)'
                        e.currentTarget.style.background = 'var(--card)'
                      }}
                    >
                      {t?.icon ? (
                        <img src={t.icon} alt={t.title} className="w-9 h-9 rounded-lg object-contain shrink-0" style={{ background: `${roomColor}10` }} />
                      ) : (
                        <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${roomColor}10`, color: roomColor }}>
                          <Users size={18} />
                        </span>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold truncate">{r.name || r.code}</p>
                        <p className="text-[10px] truncate" style={{ color: 'var(--muted)' }}>
                          {t?.title || '테스트'} · {r.nickname}
                          {r.participantCount != null && ` · ${r.participantCount}명`}
                        </p>
                      </div>
                      <span className="text-[10px] shrink-0" style={{ color: 'var(--muted)' }}>
                        {fixDate(r.date)}
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
