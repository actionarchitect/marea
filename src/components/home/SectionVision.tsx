import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

const PILLAR_COLORS: Record<string, string> = {
  sapphire: 'var(--color-sapphire-500)',
  gold: 'var(--color-gold-500)',
  garnet: 'var(--color-garnet-500)',
  jade: 'var(--color-jade-500)',
}

interface VisionDict {
  label?: string
  headline: string
  desc?: string
  pillars: Array<{
    title: string
    desc: string
    color: string
  }>
}

interface SectionVisionProps {
  dict: VisionDict
  locale: Locale
}

export function SectionVision({ dict }: SectionVisionProps) {
  const lines = dict.headline.split('\n')

  return (
    <section id="vision" className="py-16 md:py-24 bg-muted/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Label */}
        {dict.label && (
          <RevealSection className="text-center mb-8">
            <p className="text-xs font-mono tracking-[0.3em] text-muted-foreground uppercase">
              {dict.label}
            </p>
          </RevealSection>
        )}

        {/* Headline — "평평하게" / "Playing" in primary */}
        <RevealSection className="text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {lines.map((line, i) => {
              const isHighlighted =
                line.includes('평평하게') || line.includes('Playing')
              return (
                <span key={i}>
                  {i > 0 && <br />}
                  {isHighlighted ? (
                    <span className="text-primary">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              )
            })}
          </h2>
        </RevealSection>

        {/* Description — the unifying philosophy */}
        {dict.desc && (
          <RevealSection className="text-center mt-6" delay={0.1}>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {dict.desc}
            </p>
          </RevealSection>
        )}

        {/* Pillar summary cards with accent color lines */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.pillars.map((pillar, i) => {
            const accentColor = PILLAR_COLORS[pillar.color] ?? 'var(--color-primary)'
            return (
              <RevealSection key={pillar.title} delay={i * 0.08 + 0.15}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300">
                  {/* Accent line with division color */}
                  <div
                    className="w-10 h-1 rounded-full mb-6"
                    style={{ backgroundColor: accentColor }}
                  />
                  {/* Number label */}
                  <span
                    className="font-mono text-2xl font-bold"
                    style={{ color: accentColor }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </div>
              </RevealSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
