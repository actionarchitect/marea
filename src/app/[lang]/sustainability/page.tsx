import Link from 'next/link'
import { isValidLocale, type Locale } from '../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? '지속가능경영 | 마레아홀딩스' : 'Sustainability | Marea Holdings',
    description:
      locale === 'ko'
        ? '마레아홀딩스의 ESG 경영, 사회공헌, 거버넌스 철학과 실천'
        : 'Marea Holdings\' ESG management, social impact, and governance philosophy',
  }
}

const content = {
  ko: {
    intro: {
      heading: '기술로 만드는 지속가능한 세상',
      body: '마레아홀딩스는 AI 기술이 경제적 가치 창출에 그치지 않고, 환경, 사회, 거버넌스 전반에 걸친 지속가능한 발전의 동력이 되어야 한다고 믿습니다. 배움의 격차를 줄이는 기술, 기회의 문턱을 낮추는 인프라, 지역 간 불평등을 해소하는 프로젝트 — 마레아홀딩스의 모든 사업은 지속가능성을 핵심 원칙으로 삼고 있습니다.',
    },
    pillars: [
      {
        title: 'ESG 경영',
        subtitle: '환경, 사회, 지배구조의 균형 잡힌 성장',
        desc: '기후변화 대응을 위한 에너지 인프라 사업, 포용적 기술 개발, 투명한 경영 시스템을 통해 ESG 경영을 실천합니다.',
        href: '/sustainability/esg',
        icon: 'E',
        color: 'var(--color-jade-500)',
      },
      {
        title: '사회공헌',
        subtitle: 'AI로 해소하는 사회적 격차',
        desc: '아프리카 대학 프로젝트, Veltis Sign 접근성 기술, 교육 민주화를 통해 기술이 만들어내는 사회적 임팩트를 확대합니다.',
        href: '/sustainability/social-impact',
        icon: 'S',
        color: 'var(--color-sapphire-500)',
      },
      {
        title: '거버넌스',
        subtitle: '투명하고 책임 있는 의사결정',
        desc: '이사회 독립성, 윤리경영, 컴플라이언스 체계를 통해 이해관계자의 신뢰를 구축합니다.',
        href: '/sustainability/governance',
        icon: 'G',
        color: 'var(--color-gold-500)',
      },
    ],
    cta: '자세히 보기',
  },
  en: {
    intro: {
      heading: 'A Sustainable World Through Technology',
      body: 'Marea Holdings believes AI technology must extend beyond economic value creation to become a driving force for sustainable development across environment, society, and governance. Technology that closes learning gaps, infrastructure that lowers barriers to opportunity, projects that resolve geographic inequality — sustainability is a core principle embedded in every business Marea Holdings operates.',
    },
    pillars: [
      {
        title: 'ESG Management',
        subtitle: 'Balanced Growth Across Environment, Society, and Governance',
        desc: 'We practice ESG management through energy infrastructure to address climate change, inclusive technology development, and transparent management systems.',
        href: '/sustainability/esg',
        icon: 'E',
        color: 'var(--color-jade-500)',
      },
      {
        title: 'Social Impact',
        subtitle: 'Closing Social Gaps with AI',
        desc: 'Through the Africa university project, Veltis Sign accessibility technology, and education democratization, we expand the social impact that technology creates.',
        href: '/sustainability/social-impact',
        icon: 'S',
        color: 'var(--color-sapphire-500)',
      },
      {
        title: 'Governance',
        subtitle: 'Transparent and Accountable Decision-Making',
        desc: 'We build stakeholder trust through board independence, ethical management, and a robust compliance framework.',
        href: '/sustainability/governance',
        icon: 'G',
        color: 'var(--color-gold-500)',
      },
    ],
    cta: 'Learn More',
  },
}

export default async function SustainabilityPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '지속가능경영' : 'Sustainability'}
        subtitle={locale === 'ko'
          ? '마레아홀딩스의 ESG 경영 철학과 사회적 책임 실천'
          : 'Marea Holdings\' ESG philosophy and commitment to social responsibility'}
        badge="Sustainability"
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-8">{t.intro.heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.intro.body}</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Three ESG pillars */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pillars.map((pillar, i) => (
              <RevealSection key={pillar.title} delay={i * 0.1}>
                <Link
                  href={`/${locale}${pillar.href}`}
                  className="block rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:border-foreground/20 transition-colors group"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold mb-6"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pillar.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pillar.desc}</p>
                  <span className="text-sm font-medium group-hover:underline transition-all">
                    {t.cta} &rarr;
                  </span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key commitment statement */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <RevealSection>
              <div className="rounded-2xl p-10 md:p-14 bg-[var(--color-jade-500)] text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">Commitment</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold leading-snug mb-6">
                  {locale === 'ko'
                    ? '"성장의 과실은 사회와 나누어야 비로소 완성된다"'
                    : '"Growth is only complete when its fruits are shared with society"'}
                </h2>
                <p className="text-white/80 leading-relaxed max-w-xl mx-auto">
                  {locale === 'ko'
                    ? '마레아홀딩스는 사업의 모든 영역에서 지속가능성을 핵심 가치로 삼아, 이해관계자와 함께 성장하는 기업이 되겠습니다.'
                    : 'Marea Holdings embeds sustainability as a core value across every business domain, committed to growing together with our stakeholders.'}
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  )
}
