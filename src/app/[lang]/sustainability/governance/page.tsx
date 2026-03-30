import { isValidLocale, type Locale } from '../../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  return {
    title: locale === 'ko' ? '거버넌스 | 마레아홀딩스' : 'Governance | Marea Holdings',
    description:
      locale === 'ko'
        ? '투명한 이사회 구조, 윤리경영, 컴플라이언스 — 마레아홀딩스의 기업 지배구조'
        : 'Board structure, ethics, compliance — Marea Holdings\' corporate governance',
  }
}

const content = {
  ko: {
    intro: {
      heading: '신뢰를 설계하는 지배구조',
      body: '마레아홀딩스는 투명하고 책임 있는 기업 지배구조가 장기적 성장의 기반이라고 믿습니다. 이사회 독립성, 윤리경영 원칙, 체계적인 감사 시스템을 통해 이해관계자의 신뢰를 구축하고, 올바른 의사결정이 이루어지는 구조를 만들어갑니다.',
    },
    board: {
      heading: '이사회 구성',
      subtitle: '전문성과 독립성이 보장된 의사결정 체계',
      members: [
        {
          name: '이슬기',
          role: '대표이사',
          desc: '마레아홀딩스의 전략 방향과 경영 전반을 총괄합니다. "AI가 세상을 평평하게 만든다"는 비전 아래, 불평등을 해소하는 사업 생태계의 설계와 확장을 이끌고 있습니다.',
        },
        {
          name: '장대철',
          role: '감사',
          desc: '경영 활동의 적법성과 타당성을 독립적으로 검증합니다. 재무 보고의 정확성, 내부통제 시스템의 적정성, 법규 준수 상황을 상시 모니터링하며, 이사회에 감사 의견을 보고합니다.',
        },
      ],
    },
    ethics: {
      heading: '윤리경영',
      subtitle: '원칙에 기반한 의사결정 문화',
      items: [
        {
          title: '윤리 강령',
          desc: '임직원 전원에게 적용되는 윤리 강령을 제정하고 운영합니다. 뇌물 및 부정 청탁 금지, 이해 상충 방지, 공정 거래 원칙 등을 포함하며, 정기적인 교육을 통해 윤리 의식을 내재화합니다.',
        },
        {
          title: '내부 신고 제도',
          desc: '비윤리적 행위를 목격한 경우 안전하게 신고할 수 있는 채널을 운영합니다. 신고자의 신분은 철저히 보호되며, 모든 신고 사항은 독립적으로 조사됩니다.',
        },
        {
          title: '이해 상충 관리',
          desc: '임직원과 이사의 개인적 이해관계가 회사의 이익과 충돌하지 않도록 체계적인 관리 기준을 운영합니다. 관련 거래 발생 시 사전 공시와 이사회 승인을 의무화합니다.',
        },
      ],
    },
    compliance: {
      heading: '컴플라이언스',
      subtitle: '글로벌 수준의 법규 준수 체계',
      items: [
        {
          title: '반부패 프로그램',
          desc: '국내외 반부패 법규를 준수하기 위한 포괄적인 프로그램을 운영합니다. 거래처 실사, 선물/접대 기준, 정치 자금 관련 규정을 체계적으로 관리합니다.',
        },
        {
          title: '개인정보보호',
          desc: 'AI 기반 사업의 특성상 대량의 학습 데이터와 사용자 데이터를 다룹니다. 개인정보보호법 및 GDPR 수준의 데이터 보호 체계를 적용하여 사용자의 권리를 보장합니다.',
        },
        {
          title: '감사 시스템',
          desc: '감사(장대철)는 경영 활동 전반에 대해 독립적인 감사를 수행합니다. 정기 감사와 수시 감사를 병행하며, 감사 결과는 이사회에 직접 보고됩니다.',
        },
        {
          title: '리스크 관리',
          desc: '사업 환경 변화에 대응하는 체계적인 리스크 관리 프로세스를 운영합니다. 재무, 법무, 운영, 평판 리스크를 상시 모니터링하고, 사전 예방적 대응 체계를 구축합니다.',
        },
      ],
    },
  },
  en: {
    intro: {
      heading: 'Governance Built on Trust',
      body: 'Marea Holdings believes transparent and accountable corporate governance is the foundation of long-term growth. Through board independence, ethical management principles, and a systematic audit framework, we build stakeholder trust and ensure sound decision-making structures.',
    },
    board: {
      heading: 'Board Composition',
      subtitle: 'Decision-making with guaranteed expertise and independence',
      members: [
        {
          name: 'Seul Gi Lee',
          role: 'CEO & Representative Director',
          desc: 'Oversees strategic direction and overall management of Marea Holdings. Under the vision that "AI levels the world," leads the design and expansion of a business ecosystem dedicated to resolving inequality.',
        },
        {
          name: 'Daecheol Jang',
          role: 'Auditor',
          desc: 'Independently verifies the legality and validity of management activities. Continuously monitors the accuracy of financial reporting, adequacy of internal controls, and regulatory compliance, reporting audit opinions to the board.',
        },
      ],
    },
    ethics: {
      heading: 'Ethical Management',
      subtitle: 'A culture of principle-based decision-making',
      items: [
        {
          title: 'Code of Ethics',
          desc: 'We have established and maintain a code of ethics applicable to all officers and employees. It covers prohibition of bribery and improper solicitation, conflict of interest prevention, and fair trade principles, with regular training to internalize ethical awareness.',
        },
        {
          title: 'Whistleblower System',
          desc: 'We operate secure channels for reporting unethical conduct. Whistleblower identities are strictly protected, and all reports are investigated independently.',
        },
        {
          title: 'Conflict of Interest Management',
          desc: 'Systematic management standards ensure that personal interests of officers and directors do not conflict with company interests. Related-party transactions require prior disclosure and board approval.',
        },
      ],
    },
    compliance: {
      heading: 'Compliance',
      subtitle: 'Global-standard regulatory adherence',
      items: [
        {
          title: 'Anti-Corruption Program',
          desc: 'We maintain a comprehensive program to comply with domestic and international anti-corruption regulations. Vendor due diligence, gift and hospitality standards, and political contribution policies are systematically managed.',
        },
        {
          title: 'Data Privacy',
          desc: 'Given the nature of our AI-driven businesses, we handle large volumes of learning and user data. We apply data protection frameworks at the level of the Personal Information Protection Act and GDPR to safeguard user rights.',
        },
        {
          title: 'Audit System',
          desc: 'Auditor Daecheol Jang conducts independent audits across all management activities. Regular and ad-hoc audits are performed, with results reported directly to the board.',
        },
        {
          title: 'Risk Management',
          desc: 'We operate a systematic risk management process to respond to changes in the business environment. Financial, legal, operational, and reputational risks are continuously monitored with proactive response systems in place.',
        },
      ],
    },
  },
}

export default async function GovernancePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const t = content[locale]

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '거버넌스' : 'Governance'}
        subtitle={locale === 'ko'
          ? '투명한 이사회 구조와 윤리경영, 컴플라이언스를 통한 신뢰 경영'
          : 'Trust-based management through board transparency, ethics, and compliance'}
        badge="Sustainability"
        accentColor="var(--color-gold-500)"
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

      {/* Board Composition */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-2">{t.board.heading}</h2>
            <p className="text-muted-foreground mb-12">{t.board.subtitle}</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {t.board.members.map((member, i) => (
              <RevealSection key={member.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-border p-8 h-full relative overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: 'var(--color-gold-500)' }}
                  />
                  <div className="w-14 h-14 rounded-full bg-foreground/[0.06] flex items-center justify-center mb-6">
                    <span className="font-display text-lg font-bold text-foreground/40">
                      {member.name[0]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-2">{t.ethics.heading}</h2>
            <p className="text-muted-foreground mb-12">{t.ethics.subtitle}</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.ethics.items.map((item, i) => (
              <RevealSection key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border p-8 h-full">
                  <div className="text-5xl font-display font-bold text-foreground/[0.06] mb-4 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 md:py-24 bg-foreground/[0.02]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
          <RevealSection>
            <h2 className="text-2xl font-display font-semibold mb-2">{t.compliance.heading}</h2>
            <p className="text-muted-foreground mb-12">{t.compliance.subtitle}</p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.compliance.items.map((item, i) => (
              <RevealSection key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border p-8 h-full relative overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: 'var(--color-gold-500)' }}
                  />
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
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
