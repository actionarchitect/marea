import type { MetadataRoute } from 'next'
import { businesses } from '@/lib/data/businesses'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://mareahd.com'
const locales = ['ko', 'en']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about/our-story',
    '/about/vision',
    '/about/leadership',
    '/about/history',
    '/businesses',
    '/ai-vision',
    '/sustainability',
    '/sustainability/esg',
    '/sustainability/social-impact',
    '/sustainability/governance',
    '/newsroom',
    '/newsroom/press-releases',
    '/newsroom/media-coverage',
    '/newsroom/insights',
    '/ir',
    '/ir/overview',
    '/ir/disclosures',
  ]

  const businessRoutes = businesses.map((b) => `/businesses/${b.slug}`)

  const allRoutes = [...staticRoutes, ...businessRoutes]

  return locales.flatMap((locale) =>
    allRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )
}
