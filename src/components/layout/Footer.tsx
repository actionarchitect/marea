import Link from 'next/link'
import type { Locale } from '@/app/[lang]/dictionaries'

interface FooterDict {
  tagline: string
  rights: string
  address: string
  products?: string
  veltis?: string
  africa?: string
  dataset?: string
  contact?: string
  email?: string
}

interface FooterProps {
  dict: { footer: FooterDict }
  locale: Locale
}

export function Footer({ dict, locale }: FooterProps) {
  const f = dict.footer
  const localizedHref = (href: string) => `/${locale}${href}`

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Column 1: Brand + Address + Tagline */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="font-display text-lg font-bold tracking-tight">
              MAREA <span className="font-sans font-normal text-muted-foreground text-sm">HOLDINGS</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {f.tagline}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">{f.address}</p>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">
              {f.products ?? 'Key Businesses'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={localizedHref('/#education')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {f.veltis ?? 'Veltis AI Studio'}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedHref('/#social-finance')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {f.africa ?? 'Africa Initiative'}
                </Link>
              </li>
              <li>
                <Link
                  href={localizedHref('/#education')}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {f.dataset ?? 'KSL-EDU 3D Dataset'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">
              {f.contact ?? 'Contact'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {f.email ?? 'contact@marea.co.kr'}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-muted-foreground">{f.rights}</p>
          <p className="text-xs text-muted-foreground font-mono tracking-wider">SEOUL, KOREA</p>
        </div>
      </div>
    </footer>
  )
}
