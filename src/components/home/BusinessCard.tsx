'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  GraduationCap, Building2, TrendingUp, Clapperboard,
  Globe, Gamepad2, Cpu, ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Business } from '@/lib/data/types'
import type { Locale } from '@/app/[lang]/dictionaries'

const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Building2, TrendingUp, Clapperboard, Globe, Gamepad2, Cpu,
}

const divisionClassMap: Record<string, string> = {
  education: 'division-education',
  economy: 'division-economy',
  global: 'division-global',
  entertainment: 'division-entertainment',
}

interface BusinessCardProps {
  business: Business
  locale: Locale
  isAI?: boolean
}

export function BusinessCard({ business, locale, isAI = false }: BusinessCardProps) {
  const Icon = iconMap[business.icon] ?? Globe
  const divisionClass = divisionClassMap[business.slug] ?? ''

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={cn(
        divisionClass,
        'group cursor-pointer',
        isAI && 'md:col-span-2 lg:col-span-3'
      )}
    >
      <Link
        href={`/${locale}/businesses/${business.slug}`}
        className={cn(
          'block rounded-2xl border border-border bg-card p-8 h-full',
          'hover:border-division-accent/30 hover:shadow-lg transition-all duration-300'
        )}
      >
        {/* Division accent line */}
        <div className="w-12 h-1 rounded-full bg-division-accent mb-6" />

        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="w-10 h-10 rounded-xl bg-division-accent-surface flex items-center justify-center mb-4">
              <Icon className="size-5 text-division-accent" />
            </div>
            <p className="text-sm text-muted-foreground">
              {locale === 'ko' ? business.taglineEn : business.taglineEn}
            </p>
            <h3 className="text-xl font-semibold mt-1">
              {locale === 'ko' ? business.nameKo : business.nameEn}
            </h3>
            <p className="text-sm text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
              {locale === 'ko' ? business.descKo : business.descEn}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-division-accent text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>{locale === 'ko' ? '자세히 보기' : 'Learn More'}</span>
          <ArrowRight className="size-4" />
        </div>
      </Link>
    </motion.div>
  )
}
