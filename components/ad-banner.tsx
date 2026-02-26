'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

interface AdBannerProps {
  slot?: string
  format?: 'auto' | 'horizontal' | 'rectangle' | 'fluid'
  className?: string
}

export default function AdBanner({ slot, format = 'auto', className = '' }: AdBannerProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  const adRef = useRef<HTMLModElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (!client || pushed.current) return
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch {}
  }, [client])

  if (!client) return null
  // slot이 없거나 플레이스홀더면 렌더링 안 함
  if (slot && slot.startsWith('SLOT_')) return null

  return (
    <div className={`ad-container ${className}`} style={{ minHeight: '90px' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        {...(slot && !slot.startsWith('SLOT_') ? { 'data-ad-slot': slot } : {})}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
