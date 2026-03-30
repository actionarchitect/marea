'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'
import { navigation } from '@/lib/data/navigation'
import { cn } from '@/lib/utils'
import type { Locale } from '@/app/[lang]/dictionaries'

interface HeaderProps {
  dict: { nav: Record<string, string> }
  locale: Locale
}

export function Header({ dict, locale }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.split('#')[1]
      if (hash) {
        e.preventDefault()
        const target = document.getElementById(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setMobileOpen(false)
      }
    },
    []
  )

  const localizedHref = (href: string) => `/${locale}${href}`

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setOpenDropdown(key)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  return (
    <header
      className={cn(
        'fixed top-[var(--announcement-height,32px)] inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass-panel border-b border-border'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="hover:opacity-80 transition-opacity"
          >
            <span className="font-display text-lg font-bold tracking-tight">MAREA <span className="font-sans font-normal text-muted-foreground text-sm">HOLDINGS</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const href = localizedHref(item.href)
              const hasChildren = item.children && item.children.length > 0

              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleDropdownEnter(item.key)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors inline-flex items-center gap-1"
                  >
                    {locale === 'ko' ? item.labelKo : item.labelEn}
                    {hasChildren && (
                      <svg
                        className={cn(
                          'size-3 transition-transform duration-200',
                          openDropdown === item.key && 'rotate-180'
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {hasChildren && openDropdown === item.key && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="glass-panel rounded-xl border border-border min-w-[200px] py-2 shadow-lg">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={localizedHref(child.href)}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                          >
                            {locale === 'ko' ? child.labelKo : child.labelEn}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-foreground/10 transition-colors ml-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border glass-panel">
          <nav className="max-w-[1440px] mx-auto px-6 py-4 space-y-1">
            {navigation.map((item) => {
              const href = localizedHref(item.href)
              return (
                <div key={item.key}>
                  <Link
                    href={href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-foreground/10 transition-colors"
                  >
                    {locale === 'ko' ? item.labelKo : item.labelEn}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <div className="ml-4 border-l border-border pl-4 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={localizedHref(child.href)}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {locale === 'ko' ? child.labelKo : child.labelEn}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
