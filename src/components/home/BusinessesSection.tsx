import { businesses } from '@/lib/data/businesses'
import { BusinessCard } from './BusinessCard'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

interface BusinessesSectionProps {
  locale: Locale
  title: string
  subtitle: string
}

export function BusinessesSection({ locale, title, subtitle }: BusinessesSectionProps) {
  const education = businesses.find((b) => b.slug === 'education')!
  const rest = businesses.filter((b) => b.slug !== 'education')

  return (
    <section id="businesses" className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        </RevealSection>

        <RevealSection delay={0.1}>
          {/* Education — featured (full width) */}
          <div className="mb-4">
            <BusinessCard business={education} locale={locale} isAI />
          </div>
          {/* 3 remaining pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rest.map((biz) => (
              <BusinessCard key={biz.slug} business={biz} locale={locale} />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
