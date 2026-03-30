'use client'

import { GraduationCap, TrendingUp, Globe, Clapperboard } from 'lucide-react'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

interface AiConnectionDict {
  title: string
  subtitle: string
  education: string
  economy: string
  global: string
  entertainment: string
}

const pillars = [
  { key: 'education', icon: GraduationCap, color: 'var(--color-sapphire-500)' },
  { key: 'economy', icon: TrendingUp, color: 'var(--color-gold-500)' },
  { key: 'global', icon: Globe, color: 'var(--color-jade-500)' },
  { key: 'entertainment', icon: Clapperboard, color: 'var(--color-garnet-500)' },
] as const

export function AiConnectionSection({ dict }: { dict: AiConnectionDict; locale: Locale }) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[var(--color-neutral-950)] text-white">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-teal-400)] mb-4">AI</p>
          <h2 className="font-display text-5xl font-bold tracking-tight">{dict.title}</h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto leading-relaxed">{dict.subtitle}</p>
        </RevealSection>

        {/* AI hub diagram */}
        <RevealSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              const desc = dict[pillar.key as keyof AiConnectionDict] as string
              return (
                <RevealSection key={pillar.key} delay={i * 0.1}>
                  <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 h-full group hover:border-white/20 transition-colors">
                    {/* Top accent */}
                    <div
                      className="absolute inset-x-0 top-0 h-1 rounded-t-2xl"
                      style={{ backgroundColor: pillar.color }}
                    />
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `color-mix(in oklch, ${pillar.color} 20%, transparent)` }}
                    >
                      <Icon className="size-5" style={{ color: pillar.color }} />
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed">{desc}</p>

                    {/* Teal AI connector line */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-teal-500)]" />
                      <span className="text-xs text-[var(--color-teal-400)]">Powered by AI</span>
                    </div>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
