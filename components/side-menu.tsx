'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useEffect } from 'react'

interface SideMenuProps {
  open: boolean
  onClose: () => void
}

export default function SideMenu({ open, onClose }: SideMenuProps) {
  const { data: session } = useSession()

  // ESC 키로 닫기
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <>
      {/* 오버레이 */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* 패널 */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-72 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'var(--bg)',
          borderRight: '1px solid var(--border)',
        }}
      >
        {/* 상단 */}
        <div className="flex items-center justify-between px-5 h-14">
          <div className="flex items-center gap-1.5">
            <img src="/logo.png" alt="도란" className="w-6 h-6" />
            <span className="text-lg font-bold gradient-text font-logo">도란</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ color: 'var(--muted)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 유저 정보 */}
        {session ? (
          <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0" style={{ border: '2px solid var(--sky-200)' }}>
                {session.user?.image ? (
                  <img src={session.user.image} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-sm font-bold"
                    style={{ background: 'var(--sky-100)', color: 'var(--sky-600)' }}
                  >
                    {session.user?.name?.[0] || '?'}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold truncate">{session.user?.name}</p>
                <p className="text-[11px] truncate" style={{ color: 'var(--muted)' }}>{session.user?.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium justify-center"
              style={{ background: 'var(--sky-50)', color: 'var(--sky-600)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              로그인
            </Link>
          </div>
        )}

        {/* 메뉴 목록 */}
        <nav className="py-3 px-3">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-colors hover:bg-[var(--sky-50)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--sky-500)' }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            테스트 목록
          </Link>

          {session && (
            <Link
              href="/mypage"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-colors hover:bg-[var(--sky-50)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--sky-500)' }}>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              마이페이지
            </Link>
          )}
        </nav>

        {/* 하단 로그아웃 */}
        {session && (
          <div className="absolute bottom-0 left-0 right-0 p-4" style={{ borderTop: '1px solid var(--border)' }}>
            <button
              onClick={() => { onClose(); signOut({ callbackUrl: '/' }) }}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm w-full transition-colors hover:bg-[var(--sky-50)]"
              style={{ color: 'var(--danger)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              로그아웃
            </button>
          </div>
        )}
      </div>
    </>
  )
}
