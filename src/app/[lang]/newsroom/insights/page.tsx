import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import { insights } from '@/lib/data/news'

const categoryLabels: Record<string, { ko: string; en: string }> = {
  education:     { ko: '교육', en: 'Education' },
  economy:       { ko: '경제', en: 'Economy' },
  global:        { ko: '글로벌', en: 'Global' },
  entertainment: { ko: '엔터', en: 'Entertainment' },
  company:       { ko: '회사', en: 'Company' },
}

export default async function InsightsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const isKo = locale === 'ko'

  return (
    <>
      <PageHero
        title={isKo ? '인사이트' : 'Insights & Blog'}
        subtitle={isKo ? '마레아홀딩스 팀의 산업 인사이트와 시각' : 'Industry insights and perspectives from the Marea Holdings team'}
        badge="Newsroom"
      />

      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {insights.map((item, i) => {
                const label = categoryLabels[item.category]
                return (
                  <RevealSection key={item.id} delay={i * 0.08}>
                    <div className="rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:border-foreground/20 transition-colors">
                      <div
                        className="absolute inset-x-0 top-0 h-0.5"
                        style={{ backgroundColor: 'var(--brand)' }}
                      />
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                          style={{
                            backgroundColor: 'color-mix(in oklch, var(--brand) 12%, transparent)',
                            color: 'var(--brand)',
                          }}
                        >
                          {label ? (isKo ? label.ko : label.en) : item.category}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-display font-semibold text-base leading-snug">
                        {isKo ? item.titleKo : item.titleEn}
                      </h3>
                    </div>
                  </RevealSection>
                )
              })}
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
