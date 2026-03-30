import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter, Playfair_Display } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { AnnouncementBar } from '@/components/layout/AnnouncementBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getDictionary, isValidLocale, type Locale } from './dictionaries'
import { cookies } from 'next/headers'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  weight: '100 900',
  preload: true,
  fallback: ['Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', 'sans-serif'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: {
    default: '마레아홀딩스 — AI Levels the World',
    template: '%s | 마레아홀딩스',
  },
  description:
    'AI가 세상을 평평하게 만든다. 배움, 기회, 지역, 문화의 불평등을 AI로 해소하는 글로벌 AI 홀딩스 컴퍼니, 마레아홀딩스.',
}

export function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'ko'
  const dict = await getDictionary(locale)

  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('theme')?.value
  const defaultTheme = themeCookie === 'dark' ? 'dark' : 'light'

  return (
    <html
      lang={locale}
      className={`${pretendard.variable} ${inter.variable} ${playfair.variable} ${GeistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AnnouncementBar
          text={locale === 'ko' ? '교육 영상 솔루션이 필요하신가요?' : 'Looking for education video solutions?'}
          cta="Veltis Studio"
          href="https://veltis.kr"
        />
        <ThemeProvider defaultTheme={defaultTheme}>
          <Header dict={dict} locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer dict={dict} locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  )
}
