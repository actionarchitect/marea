import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import { leadership, ceoMessage } from '@/lib/data/team'

export default async function LeadershipPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '리더십' : 'Leadership'}
        subtitle={locale === 'ko' ? 'CEO 메시지와 경영진을 소개합니다' : 'A message from our CEO and executive team'}
        badge="About"
      />
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <RevealSection>
              <blockquote className="text-xl leading-relaxed text-muted-foreground font-light italic mb-8 border-l-4 border-[var(--brand)] pl-6">
                &ldquo;{locale === 'ko' ? ceoMessage.messageKo : ceoMessage.messageEn}&rdquo;
              </blockquote>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {leadership.map((member, i) => (
                <RevealSection key={member.id} delay={i * 0.08}>
                  <div className="rounded-2xl border border-border p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-foreground/5 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-foreground/20">M</span>
                    </div>
                    <p className="font-semibold">{locale === 'ko' ? member.nameKo : member.nameEn}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {locale === 'ko' ? member.titleKo : member.titleEn}
                    </p>
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
