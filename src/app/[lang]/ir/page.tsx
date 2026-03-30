import Link from 'next/link'
import { isValidLocale, type Locale } from '../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? 'IR | 마레아홀딩스' : 'IR | Marea Holdings',
    description:
      locale === 'ko'
        ? '마레아홀딩스의 투자 정보, 경영 현황, 공시 정보'
        : 'Investor relations, business overview, and corporate disclosures for Marea Holdings',
  }
}

const content = {
  ko: {
    overview: {
      heading: '투자자 여러분께',
      body: '마레아홀딩스는 AI를 통해 불평등을 해소하는 사업을 전개하는 글로벌 AI 홀딩스 컴퍼니입니다. "AI가 세상을 평평하게 만든다"는 철학 아래, 배움, 기회, 지역, 문화의 격차를 해소하는 사업 생태계를 구축하고 있습니다. 2022년 설립 이후 각 사업 부문에서 구체적인 성과를 만들어가고 있으며, 장기적 가치 창출을 위한 기반을 구축하고 있습니다.',
    },
    keyFacts: [
      { label: '설립', value: '2022' },
      { label: '본사', value: '서울, 대한민국' },
      { label: '핵심 철학', value: '불평등 해소' },
      { label: '비전', value: 'AI가 세상을 평평하게' },
    ],
    sections: [
      {
        title: '경영현황',
        desc: '마레아홀딩스의 사업 구조, 핵심 지표, 주요 사업 부문의 현황을 확인하실 수 있습니다.',
        href: '/ir/overview',
      },
      {
        title: '공시정보',
        desc: '기업 공시 자료와 주요 경영 관련 정보를 투명하게 공개합니다.',
        href: '/ir/disclosures',
      },
    ],
    cta: '바로가기',
  },
  en: {
    overview: {
      heading: 'To Our Investors',
      body: 'Marea Holdings is a global AI holding company dedicated to resolving inequality through AI. Under the philosophy that "AI can make the world flat," we are building a business ecosystem that closes gaps in learning, opportunity, geography, and culture. Since our founding in 2022, we have been delivering tangible results across each business segment and building the foundation for long-term value creation.',
    },
    keyFacts: [
      { label: 'Founded', value: '2022' },
      { label: 'Headquarters', value: 'Seoul, South Korea' },
      { label: 'Core Philosophy', value: 'Resolving Inequality' },
      { label: 'Vision', value: 'AI Levels the World' },
    ],
    sections: [
      {
        title: 'Business Overview',
        desc: 'Explore Marea Holdings\' corporate structure, key metrics, and the status of our business divisions.',
        href: '/ir/overview',
      },
      {
        title: 'Disclosures',
        desc: 'We transparently publish corporate disclosures and key management information.',
        href: '/ir/disclosures',
      },
    ],
    cta: 'View Details',
  },
}

export default async function IRPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]

  return (
    <>
      <PageHero
        title="Investor Relations"
        subtitle={locale === 'ko'
          ? '마레아홀딩스의 투자 정보와 기업 공시'
          : 'Investment information and corporate disclosures'}
        badge="IR"
      />

      {/* Investor message */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-8">{t.overview.heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.overview.body}</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.keyFacts.map((fact, i) => (
              <RevealSection key={fact.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-border p-6 text-center h-full">
                  <p className="font-display text-2xl md:text-3xl font-bold mb-2">{fact.value}</p>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* IR sub-pages */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {t.sections.map((section, i) => (
              <RevealSection key={section.title} delay={i * 0.1}>
                <Link
                  href={`/${locale}${section.href}`}
                  className="block rounded-2xl border border-border p-8 h-full hover:border-foreground/20 transition-colors group relative overflow-hidden"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: 'var(--brand)' }}
                  />
                  <h3 className="text-xl font-display font-semibold mb-4">{section.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{section.desc}</p>
                  <span className="text-sm font-medium group-hover:underline transition-all">
                    {t.cta} &rarr;
                  </span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
