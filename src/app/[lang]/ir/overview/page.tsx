import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? '경영현황 | 마레아홀딩스' : 'Business Overview | Marea Holdings',
    description:
      locale === 'ko'
        ? '마레아홀딩스의 사업 구조, 주요 사업 부문, 핵심 경영 지표'
        : 'Marea Holdings\' corporate structure, business divisions, and key metrics',
  }
}

const content = {
  ko: {
    intro: {
      heading: '기업 개요',
      body: '마레아홀딩스(Marea Holdings)는 "AI가 세상을 평평하게 만든다"는 철학 아래, AI를 공통 연결 레이어로 삼아 불평등을 해소하는 사업 생태계를 운영하는 글로벌 홀딩스 컴퍼니입니다. 각 사업부는 독립적으로 글로벌 스탠더드를 추구하면서도, 마레아홀딩스라는 지붕 아래에서 데이터와 인사이트를 공유하며 시너지를 창출합니다.',
    },
    corporate: {
      heading: '기업 정보',
      items: [
        { label: '회사명', value: '주식회사 마레아홀딩스' },
        { label: '영문명', value: 'Marea Holdings Co., Ltd.' },
        { label: '설립일', value: '2022년' },
        { label: '대표이사', value: '이슬기' },
        { label: '감사', value: '장대철' },
        { label: '본사 소재지', value: '서울특별시, 대한민국' },
        { label: '사업 영역', value: 'AI를 통한 불평등 해소 사업' },
        { label: '비전', value: 'AI가 세상을 평평하게 만든다' },
      ],
    },
    pillars: {
      heading: '주요 사업 부문',
      subtitle: '각 사업 부문은 독립적 경쟁력과 상호 시너지를 동시에 추구합니다',
      items: [
        {
          name: '교육 (Education)',
          entity: 'Veltis AI',
          desc: 'AI 기반 개인화 학습 플랫폼, AI Studio 교육 영상 자동 생성, Veltis Sign 수어 아바타 기술을 통해 교육의 접근성과 효율성을 혁신합니다.',
          color: 'var(--color-sapphire-500)',
        },
        {
          name: '사회/금융 (Economy)',
          entity: 'Marea Economy',
          desc: 'AI 기반 창업 지원, 마케팅 자동화, 부동산/금융 분석 도구를 통해 정보 비대칭을 해소하고 개인에게 기관 수준의 의사결정 역량을 제공합니다.',
          color: 'var(--color-gold-500)',
        },
        {
          name: '글로벌 임팩트 (Global)',
          entity: 'Marea Global',
          desc: '아프리카 대학 프로젝트, 에너지 인프라, 현지화 교육 콘텐츠를 통해 개발도상국의 교육과 에너지 접근성을 확대합니다.',
          color: 'var(--color-jade-500)',
        },
        {
          name: '엔터테인먼트 (Entertainment)',
          entity: 'Marea Entertainment',
          desc: 'AI 기반 콘텐츠 기획과 제작 자동화, 게임 밸런스 최적화를 통해 글로벌 엔터테인먼트 시장에서의 경쟁력을 구축합니다.',
          color: 'var(--color-garnet-500)',
        },
      ],
    },
    strategy: {
      heading: '성장 전략',
      items: [
        {
          title: 'AI 코어 레이어 강화',
          desc: '모든 사업 기둥을 관통하는 AI 핵심 기술 역량을 지속적으로 고도화합니다. 자체 모델 개발과 전략적 파트너십을 통해 기술 경쟁력을 확보합니다.',
        },
        {
          title: '글로벌 확장',
          desc: '한국에서 시작하되, 각 사업부는 설립 초기부터 글로벌 시장을 목표로 합니다. 아프리카 프로젝트를 시작으로 동남아, 중동, 남미 시장으로의 확장을 계획합니다.',
        },
        {
          title: '시너지 극대화',
          desc: '교육 데이터가 콘텐츠 전략을 강화하고, 글로벌 사업이 에너지 인프라와 교육을 연결하며, 경제 사업이 금융 접근성을 확대합니다. 사업 간 유기적 연결이 마레아홀딩스의 핵심 차별화 요소입니다.',
        },
      ],
    },
  },
  en: {
    intro: {
      heading: 'Corporate Overview',
      body: 'Marea Holdings is a global holding company operating a business ecosystem dedicated to resolving inequality, with AI as a shared connective layer, under the philosophy that "AI can make the world flat." Each division pursues global standards independently while sharing data and insights under the Marea Holdings umbrella to generate synergies.',
    },
    corporate: {
      heading: 'Corporate Information',
      items: [
        { label: 'Company Name', value: 'Marea Holdings Co., Ltd.' },
        { label: 'Korean Name', value: '주식회사 마레아홀딩스' },
        { label: 'Founded', value: '2022' },
        { label: 'CEO', value: 'Seul Gi Lee' },
        { label: 'Auditor', value: 'Daecheol Jang' },
        { label: 'Headquarters', value: 'Seoul, South Korea' },
        { label: 'Business Scope', value: 'Resolving inequality through AI' },
        { label: 'Vision', value: 'AI Levels the World' },
      ],
    },
    pillars: {
      heading: 'Business Divisions',
      subtitle: 'Each division pursues independent competitiveness while generating mutual synergies',
      items: [
        {
          name: 'Education',
          entity: 'Veltis AI',
          desc: 'Innovating educational accessibility and efficiency through AI-powered personalized learning platforms, AI Studio for automated video generation, and Veltis Sign language avatar technology.',
          color: 'var(--color-sapphire-500)',
        },
        {
          name: 'Social & Finance (Economy)',
          entity: 'Marea Economy',
          desc: 'Eliminating information asymmetry and providing institutional-grade decision-making capabilities to individuals through AI-powered entrepreneurship support, marketing automation, and real estate/financial analysis tools.',
          color: 'var(--color-gold-500)',
        },
        {
          name: 'Global Impact',
          entity: 'Marea Global',
          desc: 'Expanding educational and energy access in developing nations through the Africa university project, energy infrastructure, and localized educational content.',
          color: 'var(--color-jade-500)',
        },
        {
          name: 'Entertainment',
          entity: 'Marea Entertainment',
          desc: 'Building competitiveness in the global entertainment market through AI-powered content planning, production automation, and game balance optimization.',
          color: 'var(--color-garnet-500)',
        },
      ],
    },
    strategy: {
      heading: 'Growth Strategy',
      items: [
        {
          title: 'Strengthening the AI Core Layer',
          desc: 'We continuously advance the core AI technology capabilities that permeate all business pillars. Proprietary model development and strategic partnerships secure our technology edge.',
        },
        {
          title: 'Global Expansion',
          desc: 'Starting in Korea, each division targets global markets from inception. Beginning with the Africa project, we plan expansion into Southeast Asia, the Middle East, and Latin America.',
        },
        {
          title: 'Maximizing Synergy',
          desc: 'Education data strengthens content strategy, global operations connect energy infrastructure with education, and the economy division expands financial access. The organic connection between business divisions is Marea Holdings\' core differentiator.',
        },
      ],
    },
  },
}

export default async function IROverviewPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '경영현황' : 'Business Overview'}
        subtitle={locale === 'ko'
          ? '마레아홀딩스의 기업 구조와 주요 사업 부문'
          : 'Marea Holdings\' corporate structure and business divisions'}
        badge="IR"
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

      {/* Corporate information table */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-8">{t.corporate.heading}</h2>
          </RevealSection>
          <RevealSection delay={0.1}>
            <div className="rounded-2xl border border-border overflow-hidden max-w-3xl">
              {t.corporate.items.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex ${i > 0 ? 'border-t border-border' : ''}`}
                >
                  <div className="w-40 md:w-48 shrink-0 bg-foreground/[0.03] px-6 py-4 text-sm font-medium">
                    {item.label}
                  </div>
                  <div className="px-6 py-4 text-sm text-muted-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Four business pillars */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-2">{t.pillars.heading}</h2>
            <p className="text-muted-foreground mb-12">{t.pillars.subtitle}</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.pillars.items.map((pillar, i) => (
              <RevealSection key={pillar.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-border p-8 h-full relative overflow-hidden hover:border-foreground/20 transition-colors">
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: pillar.color }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold mb-4"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.name[0]}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{pillar.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{pillar.entity}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Growth strategy */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-12">{t.strategy.heading}</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            {t.strategy.items.map((item, i) => (
              <RevealSection key={item.title} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-border p-8 h-full overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: 'var(--brand)' }}
                  />
                  <div className="text-5xl font-display font-bold text-foreground/[0.06] mb-4 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
