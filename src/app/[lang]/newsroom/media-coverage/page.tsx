import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import { mediaCoverage } from '@/lib/data/news'

const categoryLabels: Record<string, { ko: string; en: string }> = {
  education:     { ko: '교육', en: 'Education' },
  economy:       { ko: '경제', en: 'Economy' },
  global:        { ko: '글로벌', en: 'Global' },
  entertainment: { ko: '엔터', en: 'Entertainment' },
  company:       { ko: '회사', en: 'Company' },
}

export default async function MediaCoveragePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const isKo = locale === 'ko'

  return (
    <>
      <PageHero
        title={isKo ? '언론 보도' : 'Media Coverage'}
        subtitle={isKo ? '마레아홀딩스에 대한 국내외 언론 보도 모음' : 'Press coverage of Marea Holdings from domestic and international media'}
        badge="Newsroom"
      />

      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {mediaCoverage.map((item, i) => {
                const label = categoryLabels[item.category]
                return (
                  <RevealSection key={item.id} delay={i * 0.06}>
                    <a
                      href={item.href}
                      className="block rounded-2xl border border-border p-6 h-full hover:border-foreground/20 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                          style={{
                            backgroundColor: 'color-mix(in oklch, var(--brand) 12%, transparent)',
                            color: 'var(--brand)',
                          }}
                        >
                          {(isKo ? item.titleKo : item.titleEn).slice(0, 1)}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground">
                            {label ? (isKo ? label.ko : label.en) : item.category}
                          </p>
                          <p className="text-xs font-mono text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                      <h3 className="text-sm font-display font-semibold leading-snug text-foreground/85">
                        {isKo ? item.titleKo : item.titleEn}
                      </h3>
                    </a>
                  </RevealSection>
                )
              })}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Media inquiry */}
      <section className="py-20 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mx-auto max-w-xl text-center">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-4">
                {isKo ? '언론 문의' : 'Media Inquiries'}
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">
                {isKo
                  ? '취재·인터뷰·자료 요청은 PR 팀으로 연락 주시기 바랍니다.'
                  : 'For press inquiries, interviews, and material requests, please contact our PR team.'}
              </p>
              <a
                href="mailto:pr@mareahd.com"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--brand)' }}
              >
                pr@mareahd.com
              </a>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  )
}
