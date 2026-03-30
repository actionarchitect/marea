import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'

const content = {
  ko: {
    origin: {
      heading: '마레아홀딩스의 시작',
      paragraphs: [
        '마레아홀딩스는 하나의 믿음에서 출발했습니다. AI가 세상을 평평하게 만들 수 있다는 것.',
        '양질의 교육은 소수의 특권이었습니다. 전문가의 지식은 높은 문턱 뒤에 있었습니다. 기회는 태어난 곳에 따라 결정되었고, 창작의 도구는 자본을 가진 이들의 것이었습니다. 우리는 이 모든 격차의 근원에 같은 구조가 있다는 것을 알았습니다\n— 정보, 자본, 인프라, 기회의 비대칭.\n\nAI는 이 비대칭을 동시에 해소할 수 있는 유일한 기술입니다. 마레아홀딩스는 이 확신 위에 세워졌습니다. 우리의 철학이 닿는 곳마다 보이지 않던 장벽이 사라지고, 그 자리에 누구에게나 열린 기회가 만들어집니다. 그것이 마레아홀딩스가 불평등을 해소하는 방식입니다.',
      ],
    },
    thesis: {
      heading: '우리의 테제',
      items: [
        { label: '배움의 불평등', desc: '서울의 학생과 나이로비의 학생이 같은 수준의 교육을 받을 수 있어야 합니다. AI는 언어와 장애의 장벽을 허물고, 수천만 원짜리 교육을 누구나 접근할 수 있는 인프라로 전환합니다.' },
        { label: '기회의 불평등', desc: '전문가만 접근 가능했던 시장 분석, 투자 전략, 금융 도구를 AI가 민주화합니다. 정보 비대칭이 만들어낸 격차를 기술이 좁히고, 누구에게나 같은 출발선을 만듭니다.' },
        { label: '지역의 불평등', desc: '교육 인프라가 없는 곳에 AI가 대학을 짓고, 전기를 연결하고, 가르칩니다. 서울에서 카메룬까지, AI는 지리적 불평등을 넘어 기회를 연결하는 다리가 됩니다.' },
      ],
    },
    name: {
      heading: '"마레아"라는 이름',
      body: '마레아(Marea)는 스페인어로 "조류(潮流)"를 의미합니다. 거스를 수 없는 흐름, 그러나 방향을 읽으면 올라탈 수 있는 힘. AI가 만들어내는 새로운 세상의 흐름 위에서, 불평등의 구조를 재설계하겠다는 의지를 담았습니다.',
    },
  },
  en: {
    origin: {
      heading: 'Where Marea Holdings Began',
      paragraphs: [
        'Marea Holdings started from one belief: AI can make the world flat.',
        'Quality education was a privilege of the few. Expert knowledge hid behind high barriers. Opportunity was determined by where you were born, and the tools of creation belonged to those with capital. We recognized the same structure at the root of every gap — asymmetries of information, capital, infrastructure, and opportunity.',
        'AI is the only technology capable of addressing all of these asymmetries at once. Marea Holdings was built on this conviction. We do not define ourselves by the number of businesses we operate. We define ourselves by the inequalities we resolve.',
      ],
    },
    thesis: {
      heading: 'Our Thesis',
      items: [
        { label: 'Inequality in Learning', desc: 'A student in Seoul and a student in Nairobi should have access to the same quality of education. AI dismantles barriers of language and disability, transforming education that once cost tens of thousands into infrastructure accessible to all.' },
        { label: 'Inequality in Opportunity', desc: 'AI democratizes market analysis, investment strategies, and financial tools that were once reserved for experts. Technology closes the gaps created by information asymmetry, giving everyone the same starting line.' },
        { label: 'Inequality in Geography', desc: 'Where educational infrastructure does not exist, AI builds universities, connects electricity, and teaches. From Seoul to Cameroon, AI becomes the bridge that links opportunity across geographic divides.' },
      ],
    },
    name: {
      heading: 'The Name "Marea"',
      body: '"Marea" means "tide" in Spanish. An unstoppable force — yet one that rewards those who understand its direction. The name embodies our conviction: to redesign the structures of inequality on the rising tide of AI.',
    },
  },
}

export default async function OurStoryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '창업 철학' : 'Our Story'}
        subtitle={locale === 'ko' ? '마레아홀딩스가 탄생한 이유와 우리의 여정' : 'Why Marea Holdings was founded and the journey so far'}
        badge="About"
      />

      {/* Origin story */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-8">{t.origin.heading}</h2>
              <div className="space-y-6">
                {t.origin.paragraphs.map((p, i) => (
                  <p key={i} className={`leading-relaxed text-foreground/80 whitespace-pre-line ${i === 0 ? 'text-xl font-light italic' : ''}`}>
                    {p}
                  </p>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Thesis — 3 pillars */}
      <section className="py-20 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-12 text-center">{t.thesis.heading}</h2>
            </RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.thesis.items.map((item, i) => (
                <RevealSection key={item.label} delay={i * 0.1}>
                  <div className="relative rounded-2xl border border-border p-8 h-full overflow-hidden">
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

      {/* Name etymology */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-6">{t.name.heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.name.body}</p>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  )
}
