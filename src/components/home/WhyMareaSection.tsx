import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

interface WhyDict {
  title: string
  subtitle: string
  people: { label: string; desc: string }
  technology: { label: string; desc: string }
  value: { label: string; desc: string }
}

export function WhyMareaSection({ dict }: { dict: WhyDict; locale: Locale }) {
  const pillars = [
    { ...dict.people,     accent: 'from-[var(--color-sapphire-500)] to-[var(--color-jade-500)]' },
    { ...dict.technology, accent: 'from-[var(--color-teal-500)] to-[var(--color-gold-500)]' },
    { ...dict.value,      accent: 'from-[var(--color-garnet-500)] to-[var(--color-sapphire-500)]' },
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-muted/30">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold tracking-tight">{dict.title}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">{dict.subtitle}</p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <RevealSection key={pillar.label} delay={i * 0.1}>
              <div className="relative rounded-2xl border border-border bg-card p-8 h-full overflow-hidden group hover:border-primary/20 transition-colors">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${pillar.accent}`} />
                <div className="text-5xl font-display font-bold text-foreground/10 mb-4 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.label}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
