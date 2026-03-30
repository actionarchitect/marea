import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import { milestones } from '@/lib/data/milestones'

const tagColors: Record<string, string> = {
  founding: 'var(--color-indigo-500)',
  expansion: 'var(--color-jade-500)',
  product: 'var(--color-teal-500)',
  partnership: 'var(--color-gold-500)',
}

const tagLabelsKo: Record<string, string> = {
  founding: '창립',
  expansion: '확장',
  product: '제품',
  partnership: '파트너십',
}

const tagLabelsEn: Record<string, string> = {
  founding: 'Founding',
  expansion: 'Expansion',
  product: 'Product',
  partnership: 'Partnership',
}

export default async function HistoryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '연혁' : 'History'}
        subtitle={locale === 'ko' ? '마레아홀딩스의 성장 여정' : 'The growth journey of Marea Holdings'}
        badge="About"
      />

      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <RevealSection key={`${m.year}-${m.month}-${i}`} delay={i * 0.05}>
                  <div className="relative flex gap-8">
                    <div
                      className="relative z-10 w-4 h-4 rounded-full shrink-0 mt-1 border-2 border-background"
                      style={{ backgroundColor: tagColors[m.tag] }}
                    />
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-muted-foreground">
                          {m.year}.{m.month}
                        </span>
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `color-mix(in oklch, ${tagColors[m.tag]} 12%, transparent)`,
                            color: tagColors[m.tag],
                          }}
                        >
                          {locale === 'ko' ? tagLabelsKo[m.tag] : tagLabelsEn[m.tag]}
                        </span>
                      </div>
                      <h3 className="font-semibold text-base">
                        {locale === 'ko' ? m.titleKo : m.titleEn}
                      </h3>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
