import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

interface EntertainmentDict {
  number: string
  label: string
  headline: string
  desc: string
  services: Array<{
    bg: string
    title: string
    desc: string
    tags?: string[]
  }>
}

interface SectionEntertainmentProps {
  dict: EntertainmentDict
  locale: Locale
}

export function SectionEntertainment({ dict }: SectionEntertainmentProps) {
  return (
    <section id="entertainment" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <span
              className="font-mono text-sm font-semibold tracking-wider"
              style={{ color: 'var(--color-garnet-500)' }}
            >
              {dict.number}
            </span>
            <span className="h-px flex-1 max-w-16 bg-[var(--color-garnet-500)]/30" />
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

        {/* Service cards with watermark text */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dict.services.map((service, i) => (
            <RevealSection key={service.bg} delay={i * 0.08}>
              <div className="group bg-card border border-border rounded-2xl p-8 relative overflow-hidden h-full hover:border-[var(--color-garnet-400)]/30 hover:shadow-lg transition-all duration-300">
                {/* Background watermark text — very subtle */}
                <span
                  className="absolute -top-2 -right-2 font-display font-bold text-foreground/[0.03] select-none pointer-events-none"
                  style={{ fontSize: i === 0 ? '120px' : '80px', lineHeight: 1 }}
                >
                  {service.bg}
                </span>

                <div className="relative z-10">
                  {/* Accent line */}
                  <div className="w-12 h-1 rounded-full bg-[var(--color-garnet-500)] mb-6" />

                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{service.desc}</p>

                  {/* Tags as small mono pills */}
                  {service.tags && service.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border rounded-full px-3 py-1 text-xs font-mono tracking-wider text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
