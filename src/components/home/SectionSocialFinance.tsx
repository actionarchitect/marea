import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

interface SocialFinanceDict {
  number: string
  label: string
  headline: string
  desc: string
  services: Array<{
    title: string
    desc: string
  }>
  africa: {
    label: string
    headline: string
    desc: string
    items: Array<{
      title: string
      tags: string
    }>
  }
}

interface SectionSocialFinanceProps {
  dict: SocialFinanceDict
  locale: Locale
}

export function SectionSocialFinance({ dict }: SectionSocialFinanceProps) {
  return (
    <section id="social-finance" className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <span
              className="font-mono text-sm font-semibold tracking-wider"
              style={{ color: 'var(--color-gold-500)' }}
            >
              {dict.number}
            </span>
            <span className="h-px flex-1 max-w-16 bg-[var(--color-gold-500)]/30" />
            <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase">
              {dict.label}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight whitespace-pre-line text-foreground">
            {dict.headline}
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg">
            {dict.desc}
          </p>
        </RevealSection>

        {/* Service cards — numbered, no icons */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {dict.services.map((service, i) => (
            <RevealSection key={service.title} delay={i * 0.06}>
              <div className="group bg-card border border-border rounded-2xl p-6 h-full flex flex-col hover:border-[var(--color-gold-400)]/30 hover:shadow-lg transition-all duration-300">
                {/* Accent line at top */}
                <div className="w-10 h-1 rounded-full bg-[var(--color-gold-500)] mb-5" />
                <span
                  className="font-mono text-xs font-semibold tracking-wider mb-3"
                  style={{ color: 'var(--color-gold-500)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-foreground text-sm">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Africa Initiative */}
        <RevealSection className="mt-20" delay={0.1}>
          <div className="bg-muted/20 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left */}
              <div>
                <p className="flex items-center gap-3 text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--color-jade-500)' }}
                  />
                  {dict.africa.label}
                </p>
                <h3 className="mt-6 font-display text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line text-foreground">
                  {dict.africa.headline}
                </h3>
                <p className="mt-6 text-muted-foreground leading-relaxed text-base">
                  {dict.africa.desc}
                </p>
              </div>

              {/* Right — clean list with accent left-borders */}
              <div className="space-y-4">
                {dict.africa.items.map((item, i) => (
                  <div
                    key={item.title}
                    className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 border-l-2 hover:shadow-md transition-all duration-300"
                    style={{ borderLeftColor: 'var(--color-jade-500)' }}
                  >
                    <span
                      className="font-mono text-xs font-semibold shrink-0 mt-0.5"
                      style={{ color: 'var(--color-jade-500)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 font-mono tracking-wider">{item.tags}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
