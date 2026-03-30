import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import { newsArticles } from '@/lib/data/news'

const categoryLabels: Record<string, { ko: string; en: string }> = {
  education:     { ko: '교육', en: 'Education' },
  economy:       { ko: '경제', en: 'Economy' },
  global:        { ko: '글로벌', en: 'Global' },
  entertainment: { ko: '엔터', en: 'Entertainment' },
  company:       { ko: '회사', en: 'Company' },
}

export default async function PressReleasesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const isKo = locale === 'ko'

  return (
    <>
      <PageHero
        title={isKo ? '공식 보도자료' : 'Press Releases'}
        subtitle={isKo ? '마레아홀딩스의 공식 발표 및 보도자료' : 'Official announcements and press releases from Marea Holdings'}
        badge="Newsroom"
      />

      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <div className="space-y-4 max-w-5xl mx-auto">
              {newsArticles.map((article, i) => {
                const label = categoryLabels[article.category]
                return (
                  <RevealSection key={article.id} delay={i * 0.05}>
                    <div className="rounded-2xl border border-border p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-foreground/20 transition-colors">
                      <div className="shrink-0 min-w-[100px]">
                        <p className="text-xs font-mono text-muted-foreground mb-2">{article.date}</p>
                        <span
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                          style={{
                            backgroundColor: 'color-mix(in oklch, var(--brand) 10%, transparent)',
                            color: 'var(--brand)',
                          }}
                        >
                          {label ? (isKo ? label.ko : label.en) : article.category}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-sm leading-snug">
                          {isKo ? article.titleKo : article.titleEn}
                        </h3>
                      </div>
                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          {isKo ? '보기' : 'Read'} →
                        </span>
                      </div>
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
