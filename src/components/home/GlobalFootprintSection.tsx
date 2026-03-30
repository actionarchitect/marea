import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

interface FootprintDict {
  title: string
  subtitle: string
}

export function GlobalFootprintSection({ dict }: { dict: FootprintDict; locale: Locale }) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold tracking-tight">{dict.title}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{dict.subtitle}</p>
        </RevealSection>

        <RevealSection delay={0.15}>
          <div className="relative rounded-3xl overflow-hidden bg-muted/30 border border-border aspect-[16/7] flex items-center justify-center">
            {/* Decorative world grid */}
            <svg
              viewBox="0 0 1200 525"
              className="w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 100} y1={0} x2={i * 100} y2={525}
                  stroke="currentColor" strokeWidth="0.5"
                />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1={0} y1={i * 87.5} x2={1200} y2={i * 87.5}
                  stroke="currentColor" strokeWidth="0.5"
                />
              ))}
            </svg>

            {/* HQ dot — Korea */}
            <div className="absolute" style={{ left: '72%', top: '35%' }}>
              <div className="relative">
                <div className="w-4 h-4 rounded-full animate-ping absolute inset-0 bg-primary" />
                <div className="w-4 h-4 rounded-full relative bg-primary" />
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap text-muted-foreground">
                  HQ &middot; Seoul
                </div>
              </div>
            </div>

            {/* Expansion dots */}
            {[
              { left: '15%', top: '30%', label: 'New York' },
              { left: '50%', top: '25%', label: 'London' },
              { left: '65%', top: '45%', label: 'Singapore' },
              { left: '80%', top: '40%', label: 'Tokyo' },
            ].map((dot) => (
              <div key={dot.label} className="absolute" style={{ left: dot.left, top: dot.top }}>
                <div className="w-2 h-2 rounded-full opacity-50 border-2 border-dashed border-primary" />
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
