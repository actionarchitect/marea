import { RevealSection } from '@/components/shared/RevealSection'
import { PageHero } from '@/components/pages/shared/PageHero'
import type { Business } from '@/lib/data/types'
import type { Locale } from '@/app/[lang]/dictionaries'

interface BusinessPageTemplateProps {
  business: Business
  locale: Locale
}

const divisionClassMap: Record<string, string> = {
  education: 'division-education',
  economy: 'division-economy',
  global: 'division-global',
  entertainment: 'division-entertainment',
}

const pillarColors: Record<string, string> = {
  education: 'var(--color-sapphire-500)',
  economy: 'var(--color-gold-500)',
  global: 'var(--color-jade-500)',
  entertainment: 'var(--color-garnet-500)',
}

const aiConnectContent: Record<string, { ko: string; en: string }> = {
  education:     { ko: 'AI가 학습자 개인별 수준을 분석해 맞춤형 커리큘럼을 실시간으로 설계합니다', en: 'AI analyzes each learner to design personalized curricula in real time' },
  economy:       { ko: 'AI가 시장 데이터를 분석해 최적 투자 시점과 포트폴리오를 설계합니다', en: 'AI analyzes market data to design optimal investment timing and portfolio strategies' },
  global:        { ko: 'AI가 지역 격차를 해소하고 현지 맞춤형 교육 시스템을 구축합니다', en: 'AI bridges regional gaps and builds locally tailored education systems' },
  entertainment: { ko: 'AI가 글로벌 콘텐츠 트렌드를 분석해 제작 전략을 수립합니다', en: 'AI analyzes global content trends to inform production strategy' },
}

export function BusinessPageTemplate({ business, locale }: BusinessPageTemplateProps) {
  const name = locale === 'ko' ? business.nameKo : business.nameEn
  const desc = locale === 'ko' ? business.descKo : business.descEn
  const aiConn = aiConnectContent[business.slug]
  const divisionClass = divisionClassMap[business.slug] ?? ''

  return (
    <div className={divisionClass}>
      <PageHero
        title={name}
        subtitle={business.taglineEn}
        accentColor={pillarColors[business.slug]}
        badge="Marea Businesses"
      />

      {/* Overview */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto max-w-4xl">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-6">
              {locale === 'ko' ? '사업 소개' : 'Overview'}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{desc}</p>
          </RevealSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-muted/30">
        <div className="max-w-[1440px] mx-auto">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-10">
              {locale === 'ko' ? '주요 서비스' : 'Services'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {business.services.map((svc, i) => (
                <RevealSection key={svc.nameEn} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-card p-6 h-full relative overflow-hidden hover:border-division-accent/30 transition-colors">
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-division-accent opacity-60" />
                    <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center bg-division-accent-surface">
                      <div className="w-3 h-3 rounded-sm bg-division-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      {locale === 'ko' ? svc.nameKo : svc.nameEn}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {locale === 'ko' ? svc.descKo : svc.descEn}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* AI Connect */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto max-w-4xl">
          <RevealSection>
            <div className="rounded-2xl p-8 md:p-12 bg-[var(--color-teal-600)] text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
                {locale === 'ko' ? 'AI 연결' : 'AI Connect'}
              </p>
              <h2 className="text-2xl font-display font-semibold mb-4">
                {locale === 'ko'
                  ? '이 사업에서 AI는 어떻게 작동하나요?'
                  : 'How AI Works in This Business'}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {locale === 'ko' ? aiConn?.ko : aiConn?.en}
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-muted/30">
        <div className="max-w-[1440px] mx-auto max-w-xl text-center">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-4">
              {locale === 'ko' ? '문의하기' : 'Get in Touch'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {locale === 'ko'
                ? '사업 제휴 및 투자 문의를 환영합니다'
                : 'We welcome partnership and investment inquiries'}
            </p>
            <a
              href="mailto:contact@mareahd.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-division-accent text-white font-medium transition-opacity hover:opacity-90"
            >
              {locale === 'ko' ? '이메일 문의' : 'Contact via Email'}
            </a>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}
