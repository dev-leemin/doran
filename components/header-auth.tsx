'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function HeaderAuth() {
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // 바깥 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  if (status === 'loading') {
    return (
      <div
        className="w-8 h-8 rounded-full animate-pulse"
        style={{ background: 'var(--sky-100)' }}
      />
    )
  }

  if (!session) {
    return (
      <Link
        href="/login"
        className="w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer"
        style={{ background: 'var(--sky-50)', color: 'var(--sky-500)' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </Link>
    )
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 rounded-full overflow-hidden transition-all"
        style={{
          border: open ? '2px solid var(--sky-400)' : '2px solid var(--border)',
        }}
      >
        {session.user?.image ? (
          <img
            src={session.user.image}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-xs font-bold"
            style={{ background: 'var(--sky-100)', color: 'var(--sky-600)' }}
          >
            {session.user?.name?.[0] || '?'}
          </div>
        )}
      </button>

      {open && (
        <div
          className="absolute right-0 top-11 w-48 rounded-xl overflow-hidden shadow-lg animate-scale-in"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
          }}
        >
          {/* 유저 정보 */}
          <div className="px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
            <p className="text-sm font-bold truncate">{session.user?.name}</p>
            <p className="text-xs truncate" style={{ color: 'var(--muted)' }}>
              {session.user?.email}
            </p>
          </div>

          {/* 메뉴 */}
          <div className="py-1">
            <Link
              href="/mypage"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm transition-colors hover:bg-[var(--sky-50)]"
            >
              마이페이지
            </Link>
            <button
              onClick={() => { setOpen(false); signOut() }}
              className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--sky-50)]"
              style={{ color: 'var(--danger)' }}
            >
              로그아웃
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
