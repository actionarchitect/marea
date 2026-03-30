import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? '공시정보 | 마레아홀딩스' : 'Disclosures | Marea Holdings',
    description:
      locale === 'ko'
        ? '마레아홀딩스의 기업 공시 자료 및 주요 경영 공개 정보'
        : 'Marea Holdings\' corporate disclosures and key management information',
  }
}

const content = {
  ko: {
    intro: {
      heading: '투명한 정보 공개',
      body: '마레아홀딩스는 투자자와 이해관계자에게 정확하고 시의적절한 기업 정보를 제공하기 위해 최선을 다합니다. 법적 요건을 넘어, 자발적이고 선제적인 정보 공개를 통해 신뢰를 구축합니다.',
    },
    corporate: {
      heading: '기업 기본 정보',
      items: [
        { label: '법인명', value: '주식회사 마레아홀딩스' },
        { label: '대표이사', value: '이슬기' },
        { label: '감사', value: '장대철' },
        { label: '설립일', value: '2022년' },
        { label: '본사 소재지', value: '서울특별시, 대한민국' },
        { label: '사업 목적', value: 'AI를 통한 불평등 해소 사업 및 관련 투자' },
      ],
    },
    policies: {
      heading: '공시 정책',
      items: [
        {
          title: '적시 공시',
          desc: '주요 경영 사항 발생 시 관련 법규에 따라 신속하게 공시합니다. 투자 판단에 영향을 미칠 수 있는 중요 사항은 지체 없이 공개합니다.',
        },
        {
          title: '공정 공시',
          desc: '모든 이해관계자에게 동등한 정보 접근 기회를 보장합니다. 특정 투자자에게 미공개 중요 정보를 선별적으로 제공하지 않습니다.',
        },
        {
          title: '자발적 공시',
          desc: '법적 의무를 넘어, 기업 운영의 투명성을 높이기 위해 자발적으로 경영 정보를 공개합니다. ESG 관련 정보, 사업 진행 현황 등을 정기적으로 보고합니다.',
        },
      ],
    },
    notice: {
      heading: '공시 현황',
      body: '마레아홀딩스는 2022년 설립된 기업으로, 향후 사업 확장과 기업 성장에 따라 공시 자료가 순차적으로 업데이트될 예정입니다. 정기 공시 및 수시 공시 자료는 이 페이지를 통해 확인하실 수 있습니다.',
    },
    contact: {
      heading: 'IR 문의',
      body: '투자 관련 문의 사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.',
      email: 'ir@mareahd.com',
    },
  },
  en: {
    intro: {
      heading: 'Transparent Information Disclosure',
      body: 'Marea Holdings is committed to providing accurate and timely corporate information to investors and stakeholders. Beyond legal requirements, we build trust through voluntary and proactive disclosure.',
    },
    corporate: {
      heading: 'Corporate Basic Information',
      items: [
        { label: 'Legal Name', value: 'Marea Holdings Co., Ltd.' },
        { label: 'CEO', value: 'Seul Gi Lee' },
        { label: 'Auditor', value: 'Daecheol Jang' },
        { label: 'Founded', value: '2022' },
        { label: 'Headquarters', value: 'Seoul, South Korea' },
        { label: 'Business Purpose', value: 'Resolving inequality through AI and related investments' },
      ],
    },
    policies: {
      heading: 'Disclosure Policy',
      items: [
        {
          title: 'Timely Disclosure',
          desc: 'Material management matters are disclosed promptly in accordance with relevant regulations. Significant matters that may affect investment decisions are published without delay.',
        },
        {
          title: 'Fair Disclosure',
          desc: 'Equal information access is guaranteed for all stakeholders. Material non-public information is never selectively provided to specific investors.',
        },
        {
          title: 'Voluntary Disclosure',
          desc: 'Beyond legal obligations, we voluntarily disclose management information to enhance corporate transparency. ESG-related information and business progress are reported periodically.',
        },
      ],
    },
    notice: {
      heading: 'Disclosure Status',
      body: 'Marea Holdings was founded in 2022. As the company expands and grows, disclosure materials will be updated progressively. Regular and ad-hoc disclosures will be available through this page.',
    },
    contact: {
      heading: 'IR Contact',
      body: 'For investment-related inquiries, please contact us at the address below.',
      email: 'ir@mareahd.com',
    },
  },
}

export default async function DisclosuresPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '공시정보' : 'Disclosures'}
        subtitle={locale === 'ko'
          ? '마레아홀딩스의 기업 공시 및 투명 경영 정보'
          : 'Corporate disclosures and transparent management information'}
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

      {/* Corporate information */}
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

      {/* Disclosure policies */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-12">{t.policies.heading}</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {t.policies.items.map((item, i) => (
              <RevealSection key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border p-8 h-full relative overflow-hidden">
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

      {/* Disclosure status notice */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <h2 className="text-2xl font-display font-semibold mb-6">{t.notice.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.notice.body}</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <RevealSection>
              <div className="rounded-2xl border border-border p-10 text-center">
                <h2 className="text-xl font-display font-semibold mb-4">{t.contact.heading}</h2>
                <p className="text-muted-foreground mb-6">{t.contact.body}</p>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline transition-all"
                >
                  {t.contact.email}
                </a>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  )
}
