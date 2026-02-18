'use client'

import { useState } from 'react'
import SideMenu from './side-menu'

export default function HeaderMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-[var(--sky-50)] active:scale-95"
        style={{ color: 'var(--fg)' }}
        aria-label="메뉴"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <SideMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
