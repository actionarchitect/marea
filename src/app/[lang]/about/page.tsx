import { redirect } from 'next/navigation'
import { isValidLocale, type Locale } from '../dictionaries'

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  redirect(`/${locale}/about/our-story`)
}
