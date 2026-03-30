import { notFound } from 'next/navigation'
import { businesses } from '@/lib/data/businesses'
import { BusinessPageTemplate } from '@/components/business/BusinessPageTemplate'
import { getDictionary, isValidLocale, type Locale } from '../../dictionaries'
import type { Metadata } from 'next'

type Props = { params: Promise<{ lang: string; slug: string }> }

export async function generateStaticParams() {
  const langs = ['ko', 'en']
  const slugs = businesses.map((b) => b.slug)
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const business = businesses.find((b) => b.slug === slug)
  if (!business) return {}
  return {
    title: locale === 'ko' ? business.nameKo : business.nameEn,
    description: locale === 'ko' ? business.descKo : business.descEn,
  }
}

export default async function BusinessPage({ params }: Props) {
  const { lang, slug } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const business = businesses.find((b) => b.slug === slug)
  if (!business) notFound()

  await getDictionary(locale) // prefetch

  return <BusinessPageTemplate business={business} locale={locale} />
}
