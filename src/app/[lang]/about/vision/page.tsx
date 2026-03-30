import { businesses } from '@/lib/data/businesses'
import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? '비전 | 마레아홀딩스' : 'Vision | Marea Holdings',
    description:
      locale === 'ko'
        ? 'AI가 세상을 평평하게 만든다 — 마레아홀딩스의 비전과 불평등을 해소하는 사업 생태계'
        : 'AI Levels the World — Marea Holdings\' vision and the business ecosystem that resolves inequality',
  }
}

const pillarColors: Record<string, string> = {
  education: 'var(--color-sapphire-500)',
  economy: 'var(--color-gold-500)',
  global: 'var(--color-jade-500)',
  entertainment: 'var(--color-garnet-500)',
}

const content = {
  ko: {
    manifesto: {
      heading: '선언',
      body: '우리는 AI가 단순한 기술 트렌드가 아니라, 인류 문명의 근본 인프라가 되리라 믿습니다. 전기가 모든 산업의 기반이 되었듯, AI는 배움과 기회, 지역과 문화의 경계를 허물고 새로운 가치 사슬을 만들어냅니다. 마레아홀딩스는 이 불가역적 전환의 한가운데에 서서, AI를 통해 불평등의 구조를 재설계하는 기업이 되고자 합니다.',
    },
    thesis: {
      heading: 'AI가 세상을 평평하게 만드는 방법',
      intro: '세상의 불균형은 정보, 자본, 인프라, 기회의 비대칭에서 발생합니다. AI는 이 네 가지 비대칭을 동시에 해소할 수 있는 유일한 기술입니다.',
      items: [
        {
          label: '정보의 민주화',
          desc: 'AI 기반 개인화 학습은 서울의 학생과 나이로비의 학생에게 동일한 수준의 교육을 제공합니다. 언어 장벽은 실시간 번역과 수어 아바타로 해소됩니다.',
        },
        {
          label: '자본의 접근성',
          desc: '소규모 창업자도 AI 분석 도구를 통해 대기업 수준의 시장 인사이트를 얻습니다. 금융 포용의 새로운 표준을 만들어갑니다.',
        },
        {
          label: '인프라의 도약',
          desc: '아프리카 에너지 사업에서 AI는 현지 환경 데이터를 분석해 최적의 전력 솔루션을 설계합니다. 인프라가 없는 곳에 인프라 이상의 가치를 제공합니다.',
        },
        {
          label: '기회의 균등',
          desc: '엔터테인먼트와 콘텐츠 영역에서 AI는 창작의 장벽을 낮춥니다. 자본이 아닌 아이디어가 가치를 결정하는 시대를 열어갑니다.',
        },
      ],
    },
    connection: {
      heading: 'AI 연결 구조',
      intro: 'AI는 모든 사업의 데이터를 관통하며, 각 사업의 인사이트가 전체 생태계를 강화합니다.',
    },
    pillars: {
      heading: '각 기둥에서 AI는 어떻게 작동하는가',
      intro: 'AI는 단순한 도구가 아니라 각 사업의 핵심 의사결정 레이어입니다.',
    },
    closing: {
      badge: 'Our Belief',
      heading: '"기술은 세상의 격차를 줄이기 위해 존재한다"',
      body: '마레아홀딩스는 AI를 통해 배움, 기회, 지역, 문화의 불평등을 해소하고, 모두에게 동등한 출발선이 주어지는 세상을 만들어갑니다.',
    },
  },
  en: {
    manifesto: {
      heading: 'Manifesto',
      body: 'We believe AI is not merely a technology trend but the fundamental infrastructure of human civilization. Just as electricity became the foundation of every industry, AI dissolves the boundaries between learning and opportunity, geography and culture — forging new value chains. Marea Holdings stands at the center of this irreversible shift, using AI to redesign the structures of inequality in the world.',
    },
    thesis: {
      heading: 'How AI Levels the World',
      intro: 'The world\'s imbalances arise from asymmetries in information, capital, infrastructure, and opportunity. AI is the only technology capable of addressing all four simultaneously.',
      items: [
        {
          label: 'Democratizing Information',
          desc: 'AI-powered personalized learning delivers the same quality of education to a student in Seoul and a student in Nairobi. Language barriers dissolve through real-time translation and sign language avatars.',
        },
        {
          label: 'Unlocking Capital Access',
          desc: 'Small entrepreneurs gain enterprise-grade market insights through AI analytics tools. We are establishing a new standard for financial inclusion.',
        },
        {
          label: 'Leapfrogging Infrastructure',
          desc: 'In our Africa energy initiative, AI analyzes local environmental data to design optimal power solutions. It delivers more than infrastructure where infrastructure doesn\'t exist.',
        },
        {
          label: 'Equalizing Opportunity',
          desc: 'In entertainment and content, AI lowers the barriers to creation. We are ushering in an era where ideas — not capital — determine value.',
        },
      ],
    },
    connection: {
      heading: 'AI Connection Architecture',
      intro: 'AI flows through the data of every business, with each division\'s insights reinforcing the entire ecosystem.',
    },
    pillars: {
      heading: 'How AI Works in Each Pillar',
      intro: 'AI is not just a tool — it is the core decision-making layer of each business.',
    },
    closing: {
      badge: 'Our Belief',
      heading: '"Technology exists to close the gaps in the world"',
      body: 'Marea Holdings uses AI to resolve imbalances in education, economy, geography, and culture — building a world where equal opportunity is given to all.',
    },
  },
}

const pillarDetails: Record<string, { ko: string; en: string; icon: string }> = {
  education: {
    ko: '교육 부문에서 AI는 세 가지 역할을 수행합니다. 첫째, 학습자의 이해도와 취약 영역을 실시간으로 분석하여 개인별 최적 커리큘럼을 설계합니다. 둘째, Veltis AI Studio를 통해 스크립트 하나로 전문 교육 영상을 자동 생성하여 콘텐츠 제작 비용을 90% 절감합니다. 셋째, Veltis Sign으로 수어 아바타를 생성하여 청각장애인도 동등하게 학습할 수 있는 환경을 만듭니다.',
    en: 'In education, AI performs three roles. First, it analyzes learner comprehension and weak areas in real time to design optimal personalized curricula. Second, through Veltis AI Studio, it auto-generates professional educational videos from scripts, reducing content production costs by 90%. Third, Veltis Sign creates sign language avatars so the hearing impaired can learn equally.',
    icon: '🎓',
  },
  economy: {
    ko: '경제 부문에서 AI는 정보 비대칭을 해소합니다. 창업자에게는 시장 규모 분석과 경쟁사 분석, 투자자 매칭을 제공하고, 마케터에게는 고객 세그먼트 추출과 광고 크리에이티브 생성을 자동화합니다. 부동산과 금융 영역에서는 시세 예측과 포트폴리오 최적화를 통해 개인도 기관 투자자 수준의 의사결정을 할 수 있도록 지원합니다.',
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

export default async function VisionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]

  return (
    <>
      <PageHero
        title={locale === 'ko' ? 'AI가 세상을 평평하게 만든다' : 'AI Levels the World'}
        subtitle={
          locale === 'ko'
            ? '마레아홀딩스의 모든 사업에는 AI가 관통합니다. AI가 관통하는 사업들이 하나의 생태계를 이루어, 불평등의 구조를 재설계합니다.'
            : 'AI permeates every business of Marea Holdings. Together, they form a single ecosystem that redesigns the structures of inequality.'
        }
        badge={locale === 'ko' ? '비전' : 'Vision'}
      />

      {/* Manifesto */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-8">{t.manifesto.heading}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed italic">{t.manifesto.body}</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* How AI levels the world — 4 pillars of thesis */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-4">{t.thesis.heading}</h2>
              <p className="text-muted-foreground mb-12 max-w-2xl">{t.thesis.intro}</p>
            </RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.thesis.items.map((item, i) => (
                <RevealSection key={item.label} delay={i * 0.1}>
                  <div className="rounded-2xl border border-border p-8 h-full relative overflow-hidden">
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ backgroundColor: 'var(--brand)' }}
                    />
                    <div className="text-5xl font-display font-bold text-foreground/[0.06] mb-4 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Connection Architecture Diagram */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold text-center mb-4">
              {t.connection.heading}
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {t.connection.intro}
            </p>
          </RevealSection>

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

              {/* Connection lines */}
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
                        {locale === 'ko' ? biz.nameKo : biz.nameEn}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {locale === 'ko' ? biz.taglineKo : biz.taglineEn}
                      </p>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* How AI works in each pillar — detailed */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-4">
              {t.pillars.heading}
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              {t.pillars.intro}
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
                          {locale === 'ko' ? biz.nameKo : biz.nameEn}
                        </h3>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                          {biz.taglineEn}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {locale === 'ko' ? detail?.ko : detail?.en}
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
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <RevealSection>
              <div className="rounded-2xl p-10 md:p-14 bg-[var(--color-teal-600)] text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-6">{t.closing.badge}</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold leading-snug mb-6">
                  {t.closing.heading}
                </h2>
                <p className="text-white/80 leading-relaxed max-w-xl mx-auto">
                  {t.closing.body}
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  )
}
