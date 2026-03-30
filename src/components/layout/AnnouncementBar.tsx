'use client'

import { useState } from 'react'

interface AnnouncementBarProps {
  text: string
  cta: string
  href: string
}

export function AnnouncementBar({ text, cta, href }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) {
    return <div style={{ height: 0 }} />
  }

  return (
    <div className="relative bg-foreground text-background" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60 }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2 text-center text-xs tracking-wide hover:opacity-80 transition-opacity"
      >
        <span className="opacity-70">{text}</span>
        {' '}
        <span className="font-medium">{cta} &rarr;</span>
      </a>
      <button
        onClick={() => {
          setDismissed(true)
          document.documentElement.style.setProperty('--announcement-height', '0px')
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-60 transition-opacity text-xs"
        aria-label="Close"
      >
        &#10005;
      </button>
    </div>
  )
}
