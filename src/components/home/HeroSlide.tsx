'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { KineticHeadline } from '@/components/shared/KineticHeadline'
import { RevealSection } from '@/components/shared/RevealSection'
import type { Locale } from '@/app/[lang]/dictionaries'

const SLIDE_COLORS: Record<string, string> = {
  sapphire: 'oklch(0.42 0.165 232)',
  gold: 'oklch(0.52 0.155 70)',
  jade: 'oklch(0.40 0.128 168)',
  garnet: 'oklch(0.38 0.185 12)',
}

const SLIDE_INTERVAL = 4500

interface HeroSlide {
  label: string
  color: string
}

interface HeroDict {
  badge: string
  headline: string
  subtitle: string
  cta1: string
  cta2: string
  slides: HeroSlide[]
}

interface HeroSectionProps {
  locale: Locale
  dict: HeroDict
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const shouldReduce = useReducedMotion()
  const [current, setCurrent] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  const lines = dict.headline.split('\n')
  const slides = dict.slides ?? []

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (slides.length <= 1) return
    const interval = setInterval(advance, SLIDE_INTERVAL)
    return () => clearInterval(interval)
  }, [advance, slides.length])

  const currentColor = slides[current]
    ? SLIDE_COLORS[slides[current].color] ?? SLIDE_COLORS.sapphire
    : SLIDE_COLORS.sapphire

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Cycling background colors */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 -z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ backgroundColor: currentColor }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Parallax content wrapper */}
      <motion.div
        className="w-full"
        style={shouldReduce ? {} : { y, opacity }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full">
          {/* Badge */}
          <RevealSection>
            <p className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.25em] uppercase text-white/60">
              <span className="inline-block w-8 h-px bg-white/30" />
              {dict.badge}
            </p>
          </RevealSection>

          {/* Headline */}
          <div className="mt-8 overflow-hidden">
            <h1 className="font-display text-[length:var(--text-display-sm)] md:text-[length:var(--text-display-md)] font-bold leading-[1.05] tracking-tight">
              {lines.map((line, i) => {
                const isHighlighted =
                  line.includes('평평하게') || line.includes('Playing')
                return (
                  <span key={i} className="block">
                    {isHighlighted ? (
                      <KineticHeadline
                        text={line}
                        className="text-white"
                      />
                    ) : (
                      <KineticHeadline text={line} className="text-white/90" />
                    )}
                  </span>
                )
              })}
            </h1>
          </div>

          {/* Subtitle */}
          <RevealSection delay={0.4}>
            <p className="mt-8 text-lg md:text-xl text-white/70 whitespace-pre-line max-w-xl leading-relaxed">
              {dict.subtitle}
            </p>
          </RevealSection>

          {/* CTAs — glass style */}
          <RevealSection delay={0.6}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/#education`}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-7 py-3.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                {dict.cta1}
                <span aria-hidden="true" className="ml-1">&rarr;</span>
              </Link>
              <Link
                href={`/${locale}/#vision`}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-7 py-3.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                {dict.cta2}
              </Link>
            </div>
          </RevealSection>

          {/* Slide indicators — thin bars */}
          {slides.length > 1 && (
            <RevealSection delay={0.8}>
              <div className="mt-16 flex items-center gap-3">
                {slides.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="group flex items-center gap-2"
                    aria-label={slide.label}
                  >
                    <div className="relative h-[2px] w-10 bg-white/20 rounded-full overflow-hidden">
                      {i === current && (
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-white rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
                          key={`progress-${current}-${i}`}
                        />
                      )}
                    </div>
                    <span className={`text-xs font-mono tracking-wider transition-colors ${
                      i === current ? 'text-white/80' : 'text-white/30'
                    }`}>
                      {slide.label}
                    </span>
                  </button>
                ))}
              </div>
            </RevealSection>
          )}
        </div>
      </motion.div>
    </section>
  )
}
