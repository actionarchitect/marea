'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { newsArticles } from '@/lib/data/news'
import { businesses } from '@/lib/data/businesses'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

interface NewsDict {
  title: string
  viewAll: string
  all: string
  company: string
}

export function LatestNewsSection({ dict, locale }: { dict: NewsDict; locale: Locale }) {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filters = [
    { key: 'all', label: dict.all },
    { key: 'company', label: dict.company },
    ...businesses.slice(0, 4).map((b) => ({
      key: b.slug,
      label: locale === 'ko' ? b.nameKo : b.nameEn,
    })),
  ]

  const filtered =
    activeFilter === 'all'
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeFilter)

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-muted/30">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{dict.title}</h2>
          <Link
            href={`/${locale}/newsroom`}
            className="text-sm font-medium flex items-center gap-2 text-primary hover:opacity-70 transition-opacity shrink-0"
          >
            {dict.viewAll} <ArrowRight className="size-4" />
          </Link>
        </RevealSection>

        {/* Filter tabs */}
        <RevealSection delay={0.05}>
          <div className="flex gap-2 flex-wrap mb-8 overflow-x-auto pb-1">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
                  activeFilter === f.key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealSection>

        {/* News cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.slice(0, 3).map((article, i) => (
            <RevealSection key={article.id} delay={i * 0.08}>
              <Link
                href={`/${locale}${article.href}`}
                className="group block rounded-2xl border border-border bg-card p-6 hover:border-primary/20 hover:shadow-md transition-all"
              >
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{
                    color: {
                    education: 'var(--color-sapphire-500)',
                    economy: 'var(--color-gold-500)',
                    global: 'var(--color-jade-500)',
                    entertainment: 'var(--color-garnet-500)',
                  }[article.category as string] ?? undefined,
                  }}
                >
                  {article.category === 'company'
                    ? dict.company
                    : businesses.find((b) => b.slug === article.category)?.[locale === 'ko' ? 'nameKo' : 'nameEn']}
                </span>
                <h3 className="mt-3 font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-3">
                  {locale === 'ko' ? article.titleKo : article.titleEn}
                </h3>
                <p className="mt-4 text-xs text-muted-foreground">{formatDate(article.date)}</p>
              </Link>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
