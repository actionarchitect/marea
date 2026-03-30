'use client'

import { RevealSection } from '@/components/shared/RevealSection'
import { NumberCounter } from '@/components/shared/NumberCounter'
import { stats } from '@/lib/data/numbers'
import type { Locale } from '@/app/[lang]/dictionaries'

export function NumbersSection({ locale }: { locale: Locale }) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-primary text-primary-foreground">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.labelEn}>
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                  <NumberCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-primary-foreground/60 text-sm uppercase tracking-wider">
                  {locale === 'ko' ? stat.labelKo : stat.labelEn}
                </p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
