import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? '사회공헌 | 마레아홀딩스' : 'Social Impact | Marea Holdings',
    description:
      locale === 'ko'
        ? '아프리카 대학 프로젝트, 청각장애인 접근성 기술, 교육 민주화 — 마레아홀딩스의 사회적 임팩트'
        : 'Africa university project, accessibility for the hearing impaired, education democratization — Marea Holdings\' social impact',
  }
}

const content = {
  ko: {
    intro: {
      heading: 'AI로 연결하는 기회의 평등',
      body: '마레아홀딩스는 기술이 가장 빛나는 순간은 소외된 이들에게 도달할 때라고 믿습니다. 우리의 사회공헌은 자선이 아닙니다. AI 기술을 활용해 구조적 불균형을 해소하고, 모든 사람에게 동등한 기회가 주어지는 세상을 만들어가는 것이 우리 사업 모델의 핵심입니다.',
    },
    projects: [
      {
        title: '아프리카 대학 프로젝트',
        subtitle: '교육 인프라가 없는 곳에 세계 수준의 대학을',
        paragraphs: [
          '마레아홀딩스의 글로벌 임팩트 사업부는 아프리카 대륙에 AI 기반 스마트 대학을 설립합니다. 이 프로젝트는 단순한 학교 건립이 아니라, 교육, 에너지, 기술이 결합된 통합 캠퍼스 생태계를 구축하는 것입니다.',
          'AI 개인화 학습 시스템이 학생 개개인의 수준과 목표에 맞춘 커리큘럼을 제공하고, 인터넷이 불안정한 환경에서도 작동하는 오프라인 학습 모드를 지원합니다. 캠퍼스 자체는 재생에너지로 운영되며, 스마트 그리드 기술로 에너지 자립을 실현합니다.',
          '이 대학에서 배출되는 인재들은 현지 경제 발전의 핵심 동력이 됩니다. 교육은 가장 지속가능한 투자입니다.',
        ],
        stats: [
          { value: 'AI', label: '개인화 학습 시스템' },
          { value: '100%', label: '재생에너지 캠퍼스' },
          { value: 'Offline', label: '오프라인 학습 지원' },
        ],
      },
      {
        title: 'Veltis Sign',
        subtitle: '청각장애인을 위한 AI 수어 아바타 기술',
        paragraphs: [
          '전 세계 약 4억 6천만 명의 청각장애인이 정보 접근에 구조적 제약을 겪고 있습니다. Veltis Sign은 AI 기반 수어 아바타를 통해 이 장벽을 허뭅니다.',
          '텍스트와 음성을 실시간으로 자연스러운 수어 동작으로 변환하는 Veltis Sign은 교육 콘텐츠, 공공 서비스 안내, 미디어 콘텐츠 등 모든 영역에서 청각장애인의 정보 접근권을 보장합니다.',
          '수어는 국가마다 다릅니다. Veltis Sign은 한국 수어(KSL)에서 시작해 미국 수어(ASL), 국제 수어까지 확장하며, AI의 학습 능력을 활용해 지속적으로 수어 표현의 정확도와 자연스러움을 개선해가고 있습니다.',
        ],
        stats: [
          { value: '460M+', label: '전 세계 청각장애인' },
          { value: 'Real-time', label: '실시간 수어 변환' },
          { value: 'Multi', label: '다국어 수어 지원' },
        ],
      },
      {
        title: '교육 민주화',
        subtitle: '경제적, 지리적 장벽 없는 배움의 기회',
        paragraphs: [
          '양질의 교육은 여전히 소수의 특권입니다. 마레아홀딩스는 AI 기술을 통해 이 불균형을 해소합니다.',
          'Veltis AI Studio는 스크립트 하나로 전문 교육 영상을 자동 생성하여 콘텐츠 제작 비용을 90% 절감합니다. 이를 통해 개발도상국과 소외 지역에서도 세계 최고 수준의 교육 콘텐츠에 접근할 수 있습니다.',
          '다국어 지원, AI 튜터링, 적응형 학습 경로를 통해 모든 학습자가 자신의 속도와 수준에 맞게 성장할 수 있는 환경을 만듭니다. 교육의 평등은 모든 다른 평등의 출발점입니다.',
        ],
        stats: [
          { value: '90%', label: '콘텐츠 제작 비용 절감' },
          { value: 'AI Tutor', label: '개인화 AI 튜터링' },
          { value: 'Global', label: '다국어 학습 지원' },
        ],
      },
    ],
  },
  en: {
    intro: {
      heading: 'Equal Opportunity, Connected by AI',
      body: 'Marea Holdings believes technology shines brightest when it reaches the underserved. Our social impact work is not charity. Using AI technology to resolve structural imbalances and create a world of equal opportunity is at the heart of our business model.',
    },
    projects: [
      {
        title: 'Africa University Project',
        subtitle: 'World-class education where infrastructure doesn\'t exist',
        paragraphs: [
          'Marea Holdings\' Global Impact division is establishing AI-powered smart universities across the African continent. This is not simply building schools — it is constructing an integrated campus ecosystem that combines education, energy, and technology.',
          'An AI personalized learning system delivers curricula tailored to each student\'s level and goals, with offline learning modes that function even with unstable internet connectivity. The campus itself runs on renewable energy, achieving energy independence through smart grid technology.',
          'The talent cultivated at these universities becomes a core engine for local economic development. Education is the most sustainable investment.',
        ],
        stats: [
          { value: 'AI', label: 'Personalized Learning System' },
          { value: '100%', label: 'Renewable Energy Campus' },
          { value: 'Offline', label: 'Offline Learning Support' },
        ],
      },
      {
        title: 'Veltis Sign',
        subtitle: 'AI sign language avatar technology for the hearing impaired',
        paragraphs: [
          'Approximately 460 million people worldwide with hearing impairment face structural barriers to information access. Veltis Sign breaks down these barriers through AI-powered sign language avatars.',
          'Converting text and speech into natural sign language movements in real time, Veltis Sign ensures information accessibility for the hearing impaired across educational content, public service guidance, and media.',
          'Sign language differs by country. Starting with Korean Sign Language (KSL), Veltis Sign expands to American Sign Language (ASL) and International Sign, continuously improving accuracy and naturalness of expressions through AI learning capabilities.',
        ],
        stats: [
          { value: '460M+', label: 'Hearing Impaired Worldwide' },
          { value: 'Real-time', label: 'Live Sign Translation' },
          { value: 'Multi', label: 'Multilingual Sign Support' },
        ],
      },
      {
        title: 'Education Democratization',
        subtitle: 'Learning without economic or geographic barriers',
        paragraphs: [
          'Quality education remains a privilege of the few. Marea Holdings uses AI technology to resolve this imbalance.',
          'Veltis AI Studio auto-generates professional educational videos from a single script, reducing content production costs by 90%. This enables access to world-class educational content even in developing countries and underserved regions.',
          'Through multilingual support, AI tutoring, and adaptive learning paths, we create an environment where every learner can grow at their own pace and level. Educational equality is the starting point for all other equalities.',
        ],
        stats: [
          { value: '90%', label: 'Content Production Cost Reduction' },
          { value: 'AI Tutor', label: 'Personalized AI Tutoring' },
          { value: 'Global', label: 'Multilingual Learning' },
        ],
      },
    ],
  },
}

export default async function SocialImpactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '사회공헌' : 'Social Impact'}
        subtitle={locale === 'ko'
          ? 'AI 기술로 해소하는 교육, 접근성, 경제적 기회의 격차'
          : 'Closing gaps in education, accessibility, and economic opportunity through AI'}
        badge="Sustainability"
        accentColor="var(--color-sapphire-500)"
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

      {/* Projects */}
      {t.projects.map((project, projectIndex) => (
        <section
          key={project.title}
          className={`py-16 md:py-24 ${projectIndex % 2 === 1 ? 'bg-foreground/[0.02]' : ''}`}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <RevealSection>
                <div className="text-5xl font-display font-bold text-foreground/[0.06] mb-4 select-none">
                  {String(projectIndex + 1).padStart(2, '0')}
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-8">{project.subtitle}</p>
              </RevealSection>

              <RevealSection delay={0.1}>
                <div className="space-y-6 mb-12">
                  {project.paragraphs.map((p, i) => (
                    <p key={i} className={`leading-relaxed text-foreground/80 ${i === 0 ? 'text-lg' : ''}`}>
                      {p}
                    </p>
                  ))}
                </div>
              </RevealSection>

              <RevealSection delay={0.2}>
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border p-6 text-center">
                      <p className="font-display text-2xl md:text-3xl font-bold mb-2">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
