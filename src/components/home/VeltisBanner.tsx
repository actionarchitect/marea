'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { RevealSection } from '@/components/shared/RevealSection'

interface VeltisBannerProps {
  badge: string
  title: string
  desc: string
  cta: string
}

export function VeltisBanner({ badge, title, desc, cta }: VeltisBannerProps) {
  return (
    <section className="px-6 md:px-12 lg:px-16 -mt-16 relative z-20">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection>
          <motion.a
            href="https://veltis.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden division-education"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="bg-gradient-to-r from-[var(--color-sapphire-600)] to-[var(--color-teal-600)] p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-medium tracking-wider uppercase mb-4">
                    {badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                    {title}
                  </h3>
                  <p className="text-white/70 max-w-lg">
                    {desc}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 text-sm font-medium hover:bg-white/25 transition-colors">
                    {cta}
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        </RevealSection>
      </div>
    </section>
  )
}
