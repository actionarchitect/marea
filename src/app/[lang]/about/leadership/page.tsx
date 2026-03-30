import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import { leadership, ceoMessage } from '@/lib/data/team'

const roleSummary: Record<string, { ko: string; en: string }> = {
  ceo: { ko: '마레아홀딩스 창업자 · AI 사업 생태계 설계', en: 'Founder of Marea Holdings · AI Business Ecosystem Design' },
  cto: { ko: 'AI 핵심 기술 아키텍처 및 제품 개발 총괄', en: 'AI Core Technology Architecture & Product Development' },
  coo: { ko: '글로벌 사업 운영 및 전략적 파트너십 총괄', en: 'Global Business Operations & Strategic Partnerships' },
  auditor: { ko: '경영 투명성 및 내부통제 체계 총괄', en: 'Management Transparency & Internal Control Systems' },
}

export default async function LeadershipPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '리더십' : 'Leadership'}
        subtitle={locale === 'ko' ? '마레아홀딩스의 경영진을 소개합니다' : 'Meet the executive team of Marea Holdings'}
        badge="About"
      />

      {/* CEO Message */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <RevealSection>
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light italic whitespace-pre-line">
                &ldquo;{locale === 'ko' ? ceoMessage.messageKo : ceoMessage.messageEn}&rdquo;
              </blockquote>
              <p className="mt-8 text-sm text-muted-foreground">
                — {locale === 'ko' ? '대표이사' : 'CEO'}
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Leadership List */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <p className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase mb-12">
              {locale === 'ko' ? 'LEADERSHIP' : 'LEADERSHIP'}
            </p>
          </RevealSection>

          <div className="divide-y divide-border">
            {leadership.map((member, i) => (
              <RevealSection key={member.id} delay={i * 0.06}>
                <div className="py-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                  <div className="md:w-48 shrink-0">
                    <p className="font-semibold text-lg text-foreground">
                      {member.nameKo}
                    </p>
                    <p className="text-xs font-mono tracking-wider text-muted-foreground mt-1">
                      {member.nameEn.toUpperCase()}
                    </p>
                  </div>
                  <div className="md:w-56 shrink-0">
                    <p className="text-sm text-foreground/70">
                      {locale === 'ko' ? member.titleKo : member.titleEn}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {locale === 'ko' ? roleSummary[member.id]?.ko : roleSummary[member.id]?.en}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
