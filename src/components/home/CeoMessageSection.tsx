import Link from 'next/link'
import { RevealSection } from '@/components/shared/RevealSection'
import { GlassPanel } from '@/components/shared/GlassPanel'
import { ceoMessage } from '@/lib/data/team'
import type { Locale } from '@/app/[lang]/dictionaries'

interface CeoDict {
  title: string
  readMore: string
}

export function CeoMessageSection({ dict, locale }: { dict: CeoDict; locale: Locale }) {
  const message = locale === 'ko' ? ceoMessage.messageKo : ceoMessage.messageEn
  const title = locale === 'ko' ? ceoMessage.nameKo : ceoMessage.nameEn

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <RevealSection>
          <GlassPanel className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              {/* Photo placeholder */}
              <div className="md:col-span-2 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[var(--color-teal-500)] to-[var(--color-indigo-600)] flex items-center justify-center">
                  <span className="text-white text-4xl font-display font-bold opacity-40">M</span>
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{dict.title}</p>
                <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/80 font-light italic mb-6">
                  &ldquo;{message}&rdquo;
                </blockquote>
                <p className="text-sm text-muted-foreground mb-4">{title}</p>
                <Link
                  href={`/${locale}/about/leadership`}
                  className="text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                >
                  {dict.readMore} &#8594;
                </Link>
              </div>
            </div>
          </GlassPanel>
        </RevealSection>
      </div>
    </section>
  )
}
