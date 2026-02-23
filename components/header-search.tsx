'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { testList, CATEGORY_LABELS } from '@/lib/tests'

export default function HeaderSearch() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setQuery('')
    }
  }, [open])

  /* ESC 닫기 */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const filtered = testList.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.description.toLowerCase().includes(query.toLowerCase()) ||
    CATEGORY_LABELS[t.category].includes(query)
  )

  const handleSelect = (testId: string) => {
    setOpen(false)
    router.push(`/quiz/${testId}`)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[var(--sky-50)] active:scale-95"
        style={{ color: 'var(--fg)' }}
        aria-label="검색"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {/* 검색 오버레이 */}
      {open && (
        <div className="fixed inset-0 z-[80] animate-fade-in" onClick={() => setOpen(false)}>
          {/* 배경 */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* 검색 패널 */}
          <div
            className="relative max-w-lg mx-auto mt-16 mx-4 sm:mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              {/* 검색 입력 */}
              <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--muted)', flexShrink: 0 }}>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="테스트 검색..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--border)', color: 'var(--muted)' }}
                  >
                    지우기
                  </button>
                )}
              </div>

              {/* 결과 목록 */}
              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <div className="py-8 text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center" style={{ background: 'var(--sky-50)', color: 'var(--sky-400)' }}>
                      <Search size={20} />
                    </div>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>검색 결과가 없어요</p>
                  </div>
                ) : (
                  filtered.map(test => (
                    <button
                      key={test.id}
                      onClick={() => handleSelect(test.id)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-150 text-left hover:bg-[var(--border)]"
                    >
                      {test.icon ? (
                        <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                          <Image src={test.icon} alt={test.title} width={40} height={40} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                          style={{ background: `${test.color}12` }}
                        >
                          {test.emoji}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm">{test.title}</p>
                        <p className="text-[11px] truncate" style={{ color: 'var(--muted)' }}>
                          {test.description}
                        </p>
                      </div>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full shrink-0"
                        style={{ background: `${test.color}10`, color: test.color }}
                      >
                        {CATEGORY_LABELS[test.category]}
                      </span>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
