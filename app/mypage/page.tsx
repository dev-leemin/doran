'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getTest, getResult } from '@/lib/tests'
import { FileText, MessageSquare, LogOut } from 'lucide-react'

/** 깨진 날짜 포맷 복구 (예: '202601.02' → '2026.01.02') */
function fixDate(d: string): string {
  if (/^\d{4}\.\d{2}\.\d{2}$/.test(d)) return d
  const digits = d.replace(/\D/g, '')
  if (digits.length === 8) return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6, 8)}`
  return d
}

interface SavedResult {
  testId: string
  resultType: string
  scores: Record<string, number>
  date: string
}

export default function MyPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [results, setResults] = useState<SavedResult[]>([])
  const [nickname, setNickname] = useState('')
  const [editingNick, setEditingNick] = useState(false)
  const [nickInput, setNickInput] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [status, router])

  // 닉네임 불러오기
  useEffect(() => {
    if (session?.user?.email) {
      const savedNick = localStorage.getItem(`doran_nickname_${session.user.email}`)
      setNickname(savedNick || session.user.name || '')
    }
  }, [session])

  // 테스트 결과 불러오기
  useEffect(() => {
    if (session?.user?.email) {
      const key = `doran_results_${session.user.email}`
      const saved = localStorage.getItem(key)
      if (saved) {
        try { setResults(JSON.parse(saved)) } catch {}
      }
    }
  }, [session])

  const saveNickname = () => {
    if (!nickInput.trim()) return
    if (session?.user?.email) {
      localStorage.setItem(`doran_nickname_${session.user.email}`, nickInput.trim())
      setNickname(nickInput.trim())
    }
    setEditingNick(false)
  }

  if (status === 'loading') {
    return (
      <div className="max-w-lg mx-auto pt-24 text-center">
        <div className="w-12 h-12 rounded-full mx-auto mb-4 animate-pulse" style={{ background: 'var(--sky-100)' }} />
        <p className="text-sm" style={{ color: 'var(--muted)' }}>불러오는 중...</p>
      </div>
    )
  }

  if (!session) return null

  const testLabels: Record<string, string> = {
    office: '회사 캐릭터',
    lunch: '점심 뭐 먹지',
    compatibility: '취향 궁합',
  }

  return (
    <div className="max-w-lg mx-auto pt-8 pb-4">
      {/* 프로필 */}
      <div className="text-center mb-8 animate-fade-up">
        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4" style={{ border: '3px solid var(--sky-200)' }}>
          {session.user?.image ? (
            <img src={session.user.image} alt="" className="w-full h-full object-cover" />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-2xl font-bold"
              style={{ background: 'var(--sky-100)', color: 'var(--sky-600)' }}
            >
              {(nickname || session.user?.name)?.[0] || '?'}
            </div>
          )}
        </div>

        {/* 닉네임 (수정 가능) */}
        {editingNick ? (
          <div className="flex items-center justify-center gap-2 mb-1">
            <input
              type="text"
              value={nickInput}
              onChange={e => setNickInput(e.target.value)}
              maxLength={10}
              autoFocus
              className="w-36 px-3 py-1.5 rounded-lg text-sm text-center outline-none"
              style={{ border: '1.5px solid var(--sky-400)', background: 'var(--card)' }}
              onKeyDown={e => { if (e.key === 'Enter') saveNickname(); if (e.key === 'Escape') setEditingNick(false) }}
            />
            <button
              onClick={saveNickname}
              className="px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{ background: 'var(--sky-500)', color: 'white' }}
            >
              저장
            </button>
            <button
              onClick={() => setEditingNick(false)}
              className="px-2 py-1.5 rounded-lg text-xs"
              style={{ color: 'var(--muted)' }}
            >
              취소
            </button>
          </div>
        ) : (
          <button
            onClick={() => { setNickInput(nickname); setEditingNick(true) }}
            className="inline-flex items-center gap-1.5 group"
          >
            <h1 className="text-lg font-bold">{nickname || session.user?.name}</h1>
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: 'var(--muted)' }}
            >
              <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          </button>
        )}

        <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{session.user?.email}</p>
      </div>

      {/* 내 테스트 결과 */}
      <div className="mb-8 animate-fade-up delay-100">
        <p className="text-sm font-bold mb-3">내 테스트 결과</p>

        {results.length === 0 ? (
          <div
            className="text-center py-10 rounded-2xl"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center" style={{ background: 'var(--sky-50)', color: 'var(--sky-400)' }}>
              <FileText size={24} />
            </div>
            <p className="text-sm font-medium mb-1">아직 테스트 결과가 없어요</p>
            <p className="text-xs mb-4" style={{ color: 'var(--muted)' }}>테스트를 하면 여기에 저장돼요</p>
            <Link
              href="/"
              className="inline-block px-5 py-2.5 rounded-xl text-xs font-medium"
              style={{ background: 'var(--sky-50)', color: 'var(--sky-600)' }}
            >
              테스트 하러가기
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {results.map((r, i) => {
              const test = getTest(r.testId)
              const result = getResult(r.testId, r.resultType)
              if (!test || !result) return null
              return (
                <Link
                  key={i}
                  href={`/result/${r.testId}/${r.resultType}?s=${encodeURIComponent(JSON.stringify(r.scores))}`}
                  className="flex items-center gap-3 p-4 rounded-2xl transition-all"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 overflow-hidden"
                    style={{ background: `${result.color}12` }}
                  >
                    {result.icon ? <img src={result.icon} alt={result.title} className="w-full h-full object-contain" /> : result.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      {testLabels[r.testId] || r.testId}
                    </p>
                    <p className="font-bold text-sm">{result.title}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[11px]" style={{ color: 'var(--muted)' }}>{fixDate(r.date)}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: result.color }}>{result.subtitle}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>

      {/* 메뉴 */}
      <div className="space-y-2 animate-fade-up delay-200">
        <Link
          href="/"
          className="block w-full text-left px-4 py-3.5 rounded-2xl text-sm font-medium transition-all"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <span className="flex items-center gap-2"><MessageSquare size={16} /> 테스트 목록</span>
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full text-left px-4 py-3.5 rounded-2xl text-sm font-medium transition-all"
          style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--danger)' }}
        >
          <span className="flex items-center gap-2"><LogOut size={16} /> 로그아웃</span>
        </button>
      </div>
    </div>
  )
}
