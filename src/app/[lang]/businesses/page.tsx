import Link from 'next/link'
import { businesses } from '@/lib/data/businesses'
import { getDictionary, isValidLocale, type Locale } from '../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { RevealSection } from '@/components/shared/RevealSection'

const pillarColors: Record<string, string> = {
  education: 'var(--color-sapphire-500)',
  economy: 'var(--color-gold-500)',
  global: 'var(--color-jade-500)',
  entertainment: 'var(--color-garnet-500)',
}

export default async function BusinessesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const dict = await getDictionary(locale)

  return (
    <>
      <PageHero
        title={locale === 'ko' ? '사업 영역' : 'Our Businesses'}
        subtitle={locale === 'ko' ? 'AI가 관통하는 사업 생태계' : 'A business ecosystem powered by AI'}
      />
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {businesses.map((biz, i) => (
            <RevealSection key={biz.slug} delay={i * 0.06}>
              <Link
                href={`/${locale}/businesses/${biz.slug}`}
                className="group block rounded-2xl border border-border bg-card p-8 hover:border-primary/20 hover:shadow-md transition-all h-full"
              >
                <div
                  className="w-10 h-10 rounded-xl mb-4"
                  style={{ backgroundColor: pillarColors[biz.slug] }}
                />
                <h2 className="font-semibold text-lg mb-2">
                  {locale === 'ko' ? biz.nameKo : biz.nameEn}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {locale === 'ko' ? biz.descKo : biz.descEn}
                </p>
                <p
                  className="mt-4 text-xs font-medium"
                  style={{ color: pillarColors[biz.slug] }}
                >
                  {biz.taglineEn}
                </p>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>
    </>
  )
}
