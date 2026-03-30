import { isValidLocale, type Locale } from '../dictionaries'
import { getDictionary } from '../dictionaries'
import { PageHero } from '@/components/pages/shared/PageHero'
import { LatestNewsSection } from '@/components/home/LatestNewsSection'

export default async function NewsroomPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const dict = await getDictionary(locale)
  return (
    <>
      <PageHero
        title={locale === 'ko' ? '뉴스룸' : 'Newsroom'}
        subtitle={locale === 'ko' ? '마레아홀딩스의 최신 소식' : 'Latest news from Marea Holdings'}
        badge="Newsroom"
      />
      <LatestNewsSection dict={dict.home.news} locale={locale} />
    </>
  )
}
