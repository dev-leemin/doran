'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()

  // 이미 로그인이면 홈으로
  useEffect(() => {
    if (session) router.replace('/')
  }, [session, router])

  return (
    <div className="max-w-lg mx-auto pt-16 pb-8">
      <div className="text-center mb-10 animate-fade-up">
        <p className="text-4xl mb-3">👋</p>
        <h1 className="text-xl font-bold mb-2">도란에 오신 걸 환영해요</h1>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          로그인하면 테스트 결과를 저장하고<br />
          친구와 비교할 수 있어요
        </p>
      </div>

      <div className="space-y-3 max-w-xs mx-auto animate-fade-up delay-100">
        {/* 카카오 로그인 */}
        <button
          onClick={() => signIn('kakao', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl font-medium text-sm transition-all btn-bounce"
          style={{
            background: '#FEE500',
            color: '#191919',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 0.6C4.029 0.6 0 3.713 0 7.55C0 9.948 1.558 12.064 3.93 13.306L2.933 16.828C2.845 17.138 3.213 17.384 3.479 17.2L7.624 14.434C8.074 14.484 8.533 14.5 9 14.5C13.971 14.5 18 11.387 18 7.55C18 3.713 13.971 0.6 9 0.6Z" fill="#191919"/>
          </svg>
          카카오로 시작하기
        </button>

        {/* 구글 로그인 */}
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl font-medium text-sm transition-all btn-bounce"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            color: 'var(--fg)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
            <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
          Google로 시작하기
        </button>
      </div>

      {/* 비로그인 안내 */}
      <div className="text-center mt-10 animate-fade-up delay-200">
        <button
          onClick={() => router.push('/')}
          className="text-xs underline"
          style={{ color: 'var(--muted)' }}
        >
          로그인 없이 둘러보기
        </button>
      </div>
    </div>
  )
}
