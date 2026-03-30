import { businesses } from '@/lib/data/businesses'
import { getDictionary, isValidLocale, type Locale } from '../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? 'AI 비전' : 'AI Vision',
    description:
      locale === 'ko'
        ? 'AI가 관통하는 사업들이 하나의 생태계를 이루어 세상을 평평하게 만드는 마레아홀딩스의 비전'
        : 'How AI permeates every business to form one ecosystem that levels the world — the Marea Holdings vision',
  }
}

const pillarColors: Record<string, string> = {
  education: 'var(--color-sapphire-500)',
  economy: 'var(--color-gold-500)',
  global: 'var(--color-jade-500)',
  entertainment: 'var(--color-garnet-500)',
}

const pillarDetails: Record<string, { ko: string; en: string; icon: string }> = {
  education: {
    ko: '교육 부문에서 AI는 세 가지 역할을 수행합니다. 첫째, 학습자의 이해도와 취약 영역을 실시간으로 분석하여 개인별 최적 커리큘럼을 설계합니다. 둘째, Veltis AI Studio를 통해 스크립트 하나로 전문 교육 영상을 자동 생성하여 콘텐츠 제작 비용을 90% 절감합니다. 셋째, Veltis Sign으로 수어 아바타를 생성하여 청각장애인도 동등하게 학습할 수 있는 환경을 만듭니다.',
    en: 'In education, AI performs three roles. First, it analyzes learner comprehension and weak areas in real time to design optimal personalized curricula. Second, through Veltis AI Studio, it auto-generates professional educational videos from scripts, reducing content production costs by 90%. Third, Veltis Sign creates sign language avatars so the hearing impaired can learn equally.',
    icon: '🎓',
  },
  economy: {
    ko: '경제 부문에서 AI는 정보 비대칭을 해소합니다. 창업자에게는 시장 규모 분석과 경쟁사 분석, 투자자 매칭을 제공하고, 마케터에게는 고객 세그먼트 추출과 광고 크리에이티브 생성을 자동화합니다. 부동산·금융 영역에서는 시세 예측과 포트폴리오 최적화를 통해 개인도 기관 투자자 수준의 의사결정을 할 수 있도록 지원합니다.',
    en: 'In the economy sector, AI eliminates information asymmetry. For entrepreneurs, it provides market sizing, competitor analysis, and investor matching. For marketers, it automates customer segmentation and ad creative generation. In real estate and finance, it enables individuals to make institutional-grade decisions through price forecasting and portfolio optimization.',
    icon: '📈',
  },
  global: {
    ko: '글로벌 임팩트에서 AI는 언어와 인프라의 장벽을 동시에 해결합니다. 현지 언어 교육 콘텐츠를 자동 생성하고, 인터넷이 불안정한 환경에서도 작동하는 오프라인 학습 시스템을 구축합니다. 에너지 인프라 설계에서도 AI가 현지 환경 데이터를 분석하여 최적의 전력 솔루션을 제안합니다.',
    en: 'In global impact, AI tackles language and infrastructure barriers simultaneously. It auto-generates educational content in local languages and builds offline learning systems that work with unstable internet. In energy infrastructure design, AI analyzes local environmental data to recommend optimal power solutions.',
    icon: '🌍',
  },
  entertainment: {
    ko: '엔터테인먼트에서 AI는 콘텐츠 기획 단계에서부터 글로벌 트렌드를 분석하여 성공 확률이 높은 소재를 추천합니다. 제작 과정에서는 시나리오 분석, 후반 작업 자동화로 비용을 절감하고, 게임에서는 플레이어 행동을 실시간 분석하여 난이도와 경제 밸런스를 동적으로 조정합니다.',
    en: 'In entertainment, AI analyzes global trends from the planning stage to recommend high-potential content themes. During production, it reduces costs through scenario analysis and post-production automation. In gaming, it analyzes player behavior in real time to dynamically adjust difficulty and economic balance.',
    icon: '🎬',
  },
}

export default async function AIVisionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const isKo = locale === 'ko'
  await getDictionary(locale)

  return (
    <>
      {/* Hero */}
      <PageHero
        title={isKo ? 'AI가 세상을 평평하게 만든다' : 'AI Levels the World'}
        subtitle={
          isKo
            ? '마레아홀딩스의 모든 사업에는 AI가 관통합니다. AI가 관통하는 사업들이 하나의 생태계를 이루어, 불평등의 구조를 재설계합니다.'
            : 'AI permeates every business of Marea Holdings. Together, they form a single ecosystem that redesigns the structures of inequality.'
        }
        badge="AI Vision"
      />

      {/* Visual Diagram — AI connecting 4 pillars */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold text-center mb-4">
              {isKo ? 'AI 연결 구조' : 'AI Connection Architecture'}
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {isKo
                ? 'AI는 모든 사업의 데이터를 관통하며, 각 사업의 인사이트가 전체 생태계를 강화합니다.'
                : 'AI flows through the data of every business, with each division\'s insights reinforcing the entire ecosystem.'}
            </p>
          </RevealSection>

          {/* Diagram */}
          <RevealSection delay={0.15}>
            <div className="relative max-w-3xl mx-auto">
              {/* Center AI Hub */}
              <div className="flex justify-center mb-8">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--color-teal-600)] flex items-center justify-center shadow-lg shadow-[var(--color-teal-600)]/20">
                  <div className="text-center text-white">
                    <p className="text-2xl md:text-3xl font-display font-bold">AI</p>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70 mt-1">Core Layer</p>
                  </div>
                </div>
              </div>

              {/* Connection lines — simple visual */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-gradient-to-b from-[var(--color-teal-600)] to-border" />
              </div>
              <div className="flex justify-center mb-8">
                <div className="w-3/4 max-w-lg h-px bg-border relative">
                  <div className="absolute left-0 top-0 w-px h-4 bg-border" />
                  <div className="absolute left-1/3 top-0 w-px h-4 bg-border" />
                  <div className="absolute left-2/3 top-0 w-px h-4 bg-border" />
                  <div className="absolute right-0 top-0 w-px h-4 bg-border" />
                </div>
              </div>

              {/* 4 Pillar cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {businesses.map((biz, i) => (
                  <RevealSection key={biz.slug} delay={0.2 + i * 0.1}>
                    <div className="rounded-2xl border border-border bg-card p-5 text-center hover:border-foreground/20 transition-colors h-full">
                      <div
                        className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg"
                        style={{ backgroundColor: pillarColors[biz.slug] }}
                      >
                        <span className="text-white text-sm font-bold">
                          {biz.slug[0].toUpperCase()}
                        </span>
                      </div>
                      <p className="font-semibold text-sm mb-1">
                        {isKo ? biz.nameKo : biz.nameEn}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {isKo ? biz.taglineKo : biz.taglineEn}
                      </p>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* How AI works in each pillar */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-muted/30">
        <div className="max-w-[1440px] mx-auto">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-4">
              {isKo ? '각 사업에서 AI는 어떻게 작동하는가' : 'How AI Works in Each Business'}
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              {isKo
                ? 'AI는 단순한 도구가 아니라 각 사업의 핵심 의사결정 레이어입니다.'
                : 'AI is not just a tool — it is the core decision-making layer of each business.'}
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businesses.map((biz, i) => {
              const detail = pillarDetails[biz.slug]
              return (
                <RevealSection key={biz.slug} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border bg-card p-8 h-full relative overflow-hidden hover:border-foreground/20 transition-colors">
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ backgroundColor: pillarColors[biz.slug] }}
                    />
                    <div className="flex items-start gap-4">
                      <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">
                        {detail?.icon}
                      </span>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {isKo ? biz.nameKo : biz.nameEn}
                        </h3>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                          {biz.taglineEn}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {isKo ? detail?.ko : detail?.en}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto max-w-3xl text-center">
          <RevealSection>
            <div className="rounded-2xl p-10 md:p-14 bg-[var(--color-teal-600)] text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">Our Belief</p>
              <h2 className="text-2xl md:text-3xl font-display font-bold leading-snug mb-6">
                {isKo
                  ? '"기술은 세상의 격차를 줄이기 위해 존재한다"'
                  : '"Technology exists to close the gaps in the world"'}
              </h2>
              <p className="text-white/80 leading-relaxed max-w-xl mx-auto">
                {isKo
                  ? '마레아홀딩스는 AI를 통해 교육·경제·지역·문화의 불균형을 해소하고, 모두에게 동등한 기회가 주어지는 세상을 만들어갑니다.'
                  : 'Marea Holdings uses AI to resolve imbalances in education, economy, geography, and culture — building a world where equal opportunity is given to all.'}
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
