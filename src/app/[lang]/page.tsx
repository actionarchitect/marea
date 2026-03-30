import { getDictionary, isValidLocale, type Locale } from './dictionaries'
import { HeroSection } from '@/components/home/HeroSlide'
import { SectionEducation } from '@/components/home/SectionEducation'
import { SectionSocialFinance } from '@/components/home/SectionSocialFinance'
import { SectionEntertainment } from '@/components/home/SectionEntertainment'
import { SectionVision } from '@/components/home/SectionVision'
import { LatestNewsSection } from '@/components/home/LatestNewsSection'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const dict = await getDictionary(locale)

  return (
    <>
      <HeroSection locale={locale} dict={dict.home.hero} />
      <SectionEducation dict={dict.home.education} locale={locale} />
      <SectionSocialFinance dict={dict.home.socialFinance} locale={locale} />
      <SectionEntertainment dict={dict.home.entertainment} locale={locale} />
      <SectionVision dict={dict.home.vision} locale={locale} />
      <LatestNewsSection dict={dict.home.news} locale={locale} />
    </>
  )
}
