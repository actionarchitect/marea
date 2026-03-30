import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? 'ESG 경영 | 마레아홀딩스' : 'ESG Management | Marea Holdings',
    description:
      locale === 'ko'
        ? '마레아홀딩스의 환경, 사회, 지배구조 통합 ESG 경영 전략'
        : 'Marea Holdings\' integrated ESG management strategy across environment, society, and governance',
  }
}

const content = {
  ko: {
    intro: '마레아홀딩스는 환경, 사회, 지배구조 세 축의 균형을 통해 장기적이고 지속가능한 기업 가치를 창출합니다. "AI가 세상을 평평하게 만든다"는 철학은 ESG 경영과 자연스럽게 연결됩니다. ESG는 부가적인 활동이 아니라 마레아홀딩스 사업 전략의 핵심 프레임워크입니다.',
    environmental: {
      heading: 'Environmental',
      subtitle: '환경 — 에너지와 지속가능한 인프라',
      items: [
        {
          title: '아프리카 에너지 인프라',
          desc: '글로벌 임팩트 사업부를 통해 아프리카 대륙의 에너지 접근성을 확대합니다. AI 기반 환경 분석으로 태양광, 풍력 등 현지에 최적화된 재생에너지 솔루션을 설계하고, 에너지 빈곤 해소에 기여합니다.',
        },
        {
          title: '지속가능한 캠퍼스 설계',
          desc: '아프리카 대학 프로젝트에서 건축 설계 단계부터 에너지 효율과 탄소 배출 최소화를 핵심 원칙으로 적용합니다. 스마트 그리드 기술과 자연 채광 극대화를 통해 운영 탄소 발자국을 최소화합니다.',
        },
        {
          title: '디지털 전환을 통한 자원 절감',
          desc: 'AI 기반 교육 콘텐츠 자동 생성은 물리적 교재와 인쇄물의 필요성을 줄이고, 원격 학습 인프라 확대를 통해 이동에 따른 탄소 배출을 저감합니다.',
        },
      ],
    },
    social: {
      heading: 'Social',
      subtitle: '사회 — 포용과 접근성',
      items: [
        {
          title: '교육 접근성 확대',
          desc: 'AI 개인화 학습 시스템을 통해 경제적, 지리적 제약에 관계없이 양질의 교육에 접근할 수 있는 환경을 만듭니다. 다국어 지원과 오프라인 학습 모드로 글로벌 교육 격차를 해소합니다.',
        },
        {
          title: 'Veltis Sign — 청각장애인 접근성',
          desc: 'AI 수어 아바타 기술을 통해 청각장애인도 교육 콘텐츠, 공공 서비스, 미디어에 동등하게 접근할 수 있습니다. 기술이 사회적 장벽을 허무는 구체적 사례입니다.',
        },
        {
          title: '경제적 기회 창출',
          desc: 'AI 기반 창업 지원 도구와 금융 포용 서비스를 통해 소외 계층에도 경제적 기회를 제공합니다. 정보 비대칭 해소가 경제적 평등의 시작입니다.',
        },
      ],
    },
    governance: {
      heading: 'Governance',
      subtitle: '지배구조 — 투명성과 책임',
      items: [
        {
          title: '투명한 경영 체계',
          desc: '이사회 중심의 의사결정 구조와 감사위원 제도를 통해 경영 투명성을 확보합니다. 주요 의사결정은 이사회 승인을 거치며, 이해관계 상충 방지를 위한 내부 기준을 운영합니다.',
        },
        {
          title: '컴플라이언스 시스템',
          desc: '법규 준수와 윤리경영을 위한 체계적인 컴플라이언스 프로그램을 운영합니다. 반부패, 공정거래, 개인정보보호 등 핵심 영역에서 글로벌 수준의 기준을 적용합니다.',
        },
        {
          title: '이해관계자 소통',
          desc: '투자자, 임직원, 지역사회, 파트너와의 정기적이고 투명한 소통을 통해 신뢰를 구축합니다. ESG 성과를 주기적으로 보고하고 외부 검증을 추진합니다.',
        },
      ],
    },
  },
  en: {
    intro: 'Marea Holdings creates long-term, sustainable corporate value through balanced stewardship of environmental, social, and governance principles. The philosophy that "AI can make the world flat" is naturally aligned with ESG management. ESG is not ancillary — it is the core framework of Marea Holdings\' business strategy.',
    environmental: {
      heading: 'Environmental',
      subtitle: 'Energy and Sustainable Infrastructure',
      items: [
        {
          title: 'Africa Energy Infrastructure',
          desc: 'Through the Global Impact division, we expand energy access across the African continent. AI-driven environmental analysis designs locally optimized renewable energy solutions — solar, wind, and hybrid systems — contributing to the eradication of energy poverty.',
        },
        {
          title: 'Sustainable Campus Design',
          desc: 'Our Africa university project incorporates energy efficiency and carbon minimization as foundational design principles. Smart grid technology and maximized natural lighting minimize the operational carbon footprint.',
        },
        {
          title: 'Resource Reduction Through Digital Transformation',
          desc: 'AI-powered educational content generation reduces the need for physical textbooks and printed materials, while expanded remote learning infrastructure lowers transportation-related carbon emissions.',
        },
      ],
    },
    social: {
      heading: 'Social',
      subtitle: 'Inclusion and Accessibility',
      items: [
        {
          title: 'Expanding Educational Access',
          desc: 'Our AI personalized learning system ensures access to quality education regardless of economic or geographic constraints. Multilingual support and offline learning modes help bridge the global education gap.',
        },
        {
          title: 'Veltis Sign — Hearing Impaired Accessibility',
          desc: 'AI sign language avatar technology enables the hearing impaired to equally access educational content, public services, and media. This is a concrete example of technology dismantling social barriers.',
        },
        {
          title: 'Creating Economic Opportunity',
          desc: 'AI-powered entrepreneurship tools and financial inclusion services deliver economic opportunity to underserved populations. Eliminating information asymmetry is where economic equality begins.',
        },
      ],
    },
    governance: {
      heading: 'Governance',
      subtitle: 'Transparency and Accountability',
      items: [
        {
          title: 'Transparent Management Systems',
          desc: 'A board-centric decision-making structure and audit oversight ensure management transparency. Major decisions require board approval, and internal standards prevent conflicts of interest.',
        },
        {
          title: 'Compliance Framework',
          desc: 'We operate a systematic compliance program for legal adherence and ethical management. Global-standard criteria are applied across anti-corruption, fair trade, and data privacy.',
        },
        {
          title: 'Stakeholder Communication',
          desc: 'Regular and transparent communication with investors, employees, communities, and partners builds trust. ESG performance is periodically reported and externally verified.',
        },
      ],
    },
  },
}

const esgColors: Record<string, string> = {
  Environmental: 'var(--color-jade-500)',
  Social: 'var(--color-sapphire-500)',
  Governance: 'var(--color-gold-500)',
}

export default async function ESGPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]
  const sections = [t.environmental, t.social, t.governance]

  return (
    <>
      <PageHero
        title={locale === 'ko' ? 'ESG 경영' : 'ESG Management'}
        subtitle={locale === 'ko'
          ? '환경, 사회, 지배구조의 균형 위에 세우는 지속가능한 성장'
          : 'Sustainable growth built on balanced stewardship of environment, society, and governance'}
        badge="Sustainability"
        accentColor="var(--color-jade-500)"
      />

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.intro}</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* E, S, G sections */}
      {sections.map((section, sectionIndex) => (
        <section
          key={section.heading}
          className={`py-16 md:py-24 ${sectionIndex % 2 === 1 ? 'bg-foreground/[0.02]' : ''}`}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
            <RevealSection>
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: esgColors[section.heading] }}
                >
                  {section.heading[0]}
                </div>
                <h2 className="text-2xl font-display font-semibold">{section.heading}</h2>
              </div>
              <p className="text-muted-foreground mb-12 max-w-2xl">{section.subtitle}</p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <RevealSection key={item.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border p-8 h-full relative overflow-hidden">
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ backgroundColor: esgColors[section.heading] }}
                    />
                    <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
