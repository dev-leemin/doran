'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const pathname = usePathname()
  const router = useRouter()

  // 홈이면 숨김
  if (pathname === '/') return null

  return (
    <button
      onClick={() => router.back()}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-[var(--sky-50)] active:scale-95"
      style={{ color: 'var(--fg)' }}
      aria-label="뒤로가기"
    >
      <ArrowLeft size={20} strokeWidth={1.8} />
    </button>
  )
}
