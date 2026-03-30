'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/app/[lang]/dictionaries'

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const otherLocale: Locale = locale === 'ko' ? 'en' : 'ko'
  const targetPath = pathname.replace(`/${locale}`, `/${otherLocale}`)

  return (
    <Link
      href={targetPath}
      className="text-sm font-medium px-2 py-1 rounded hover:bg-foreground/10 transition-colors tracking-wide"
    >
      {locale === 'ko' ? 'EN' : 'KO'}
    </Link>
  )
}
