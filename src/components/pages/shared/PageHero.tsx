import { RevealSection } from '@/components/shared/RevealSection'

interface PageHeroProps {
  title: string
  subtitle?: string
  accentColor?: string
  badge?: string
}

export function PageHero({ title, subtitle, accentColor, badge }: PageHeroProps) {
  return (
    <section
      className="pt-32 pb-20 px-6 md:px-12 lg:px-16"
      style={accentColor ? { borderBottom: `3px solid ${accentColor}` } : undefined}
    >
      <div className="max-w-[1440px] mx-auto">
        <RevealSection>
          {badge && (
            <p
              className="text-xs uppercase tracking-[0.3em] mb-4 font-medium"
              style={{ color: accentColor ?? undefined }}
            >
              {badge}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </RevealSection>
      </div>
    </section>
  )
}
