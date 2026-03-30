import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

interface EducationDict {
  number: string
  label: string
  headline: string
  desc: string
  flagship: string
  pipeline: {
    label: string
    before: string
    after: string
    beforeSteps: string[]
    afterSteps: string[]
    beforeCost: string
    afterCost: string
  }
  veltisStudio: {
    title: string
    subtitle: string
    desc: string
    tags: string[]
  }
  veltisSign: {
    title: string
    subtitle: string
    desc: string
    tags: string[]
  }
  dataset: {
    label: string
    title: string
    subtitle: string
    desc: string
    tags: string[]
    stats: Array<{ value: string; label: string }>
  }
}

interface SectionEducationProps {
  dict: EducationDict
  locale: Locale
}

export function SectionEducation({ dict }: SectionEducationProps) {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <span
              className="font-mono text-sm font-semibold tracking-wider"
              style={{ color: 'var(--color-sapphire-500)' }}
            >
              {dict.number}
            </span>
            <span className="h-px flex-1 max-w-16 bg-[var(--color-sapphire-500)]/30" />
            <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase">
              {dict.label}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight whitespace-pre-line text-foreground">
            {dict.headline}
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg whitespace-pre-line">
            {dict.desc}
          </p>
        </RevealSection>

        {/* Pipeline Visualization: Before vs After */}
        <RevealSection className="mt-16" delay={0.1}>
          <p className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase mb-8">
            {dict.pipeline.label}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Before — Traditional */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                <span className="text-sm font-medium text-muted-foreground">
                  {dict.pipeline.before}
                </span>
              </div>
              <div className="space-y-3">
                {dict.pipeline.beforeSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground/50 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs font-mono tracking-wider text-muted-foreground/60">
                  {dict.pipeline.beforeCost}
                </p>
              </div>
            </div>

            {/* After — Veltis Pipeline */}
            <div
              className="bg-card border rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{ borderColor: 'var(--color-sapphire-500)', borderWidth: '1px' }}
            >
              {/* Subtle accent bg */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ background: 'linear-gradient(135deg, var(--color-sapphire-400), transparent)' }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--color-sapphire-500)' }}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {dict.pipeline.after}
                  </span>
                </div>
                <div className="space-y-3">
                  {dict.pipeline.afterSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs w-5 shrink-0"
                        style={{ color: 'var(--color-sapphire-500)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div
                        className="h-px flex-1"
                        style={{ backgroundColor: 'var(--color-sapphire-400)', opacity: 0.3 }}
                      />
                      <span className="text-sm font-medium text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--color-sapphire-500)', opacity: 0.3 }}>
                  <p
                    className="text-xs font-mono tracking-wider font-semibold"
                    style={{ color: 'var(--color-sapphire-500)' }}
                  >
                    {dict.pipeline.afterCost}
                  </p>
                  <a
                    href="https://veltis.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-sapphire-500)', opacity: 1 }}
                  >
                    Veltis Studio
                    <span aria-hidden>&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Flagship badge */}
        <RevealSection className="mt-20" delay={0.1}>
          <span className="inline-block border border-border rounded-full px-4 py-1.5 text-xs font-mono tracking-[0.15em] text-muted-foreground uppercase">
            {dict.flagship}
          </span>
        </RevealSection>

        {/* Product cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Veltis AI Studio — main product */}
          <RevealSection delay={0.15}>
            <div className="group bg-card border border-border rounded-2xl p-8 h-full hover:border-[var(--color-sapphire-400)]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-1 rounded-full bg-[var(--color-sapphire-500)] mb-6" />
              <h3 className="text-xl font-bold text-foreground">{dict.veltisStudio.title}</h3>
              <p className="mt-1 text-sm font-mono tracking-wider text-muted-foreground/70">
                {dict.veltisStudio.subtitle}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{dict.veltisStudio.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {dict.veltisStudio.tags.map((tag) => (
                  <span key={tag} className="border border-border rounded-full px-3 py-1 text-xs font-mono tracking-wider text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://veltis.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: 'var(--color-sapphire-500)' }}
              >
                Veltis Studio 바로가기
                <span aria-hidden>&#8594;</span>
              </a>
            </div>
          </RevealSection>

          {/* Veltis Sign — accessibility module */}
          <RevealSection delay={0.2}>
            <div className="group bg-card border border-border rounded-2xl p-8 h-full hover:border-[var(--color-sapphire-400)]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-1 rounded-full bg-[var(--color-sapphire-400)] mb-6" />
              <h3 className="text-xl font-bold text-foreground">{dict.veltisSign.title}</h3>
              <p className="mt-1 text-sm font-mono tracking-wider text-muted-foreground/70">
                {dict.veltisSign.subtitle}
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{dict.veltisSign.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {dict.veltisSign.tags.map((tag) => (
                  <span key={tag} className="border border-border rounded-full px-3 py-1 text-xs font-mono tracking-wider text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>

        {/* Dataset section */}
        <RevealSection className="mt-20" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: dataset info */}
            <div>
              <p className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase">{dict.dataset.label}</p>
              <h3 className="mt-4 font-display text-3xl font-bold text-foreground">{dict.dataset.title}</h3>
              <p className="mt-2 text-lg text-muted-foreground">{dict.dataset.subtitle}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{dict.dataset.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {dict.dataset.tags.map((tag) => (
                  <span key={tag} className="border border-border rounded-full px-3 py-1 text-xs font-mono tracking-wider text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {dict.dataset.stats.map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-xl p-6 text-center hover:border-[var(--color-sapphire-400)]/20 transition-colors duration-300">
                  <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-xs font-mono tracking-[0.15em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
