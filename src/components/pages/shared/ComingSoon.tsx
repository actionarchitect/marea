import { RevealSection } from '@/components/shared/RevealSection'

export function ComingSoon({ locale }: { locale: 'ko' | 'en' }) {
  return (
    <section className="py-32">
      <RevealSection className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🌊</span>
          </div>
          <p className="text-muted-foreground text-sm">
            {locale === 'ko' ? '콘텐츠를 준비 중입니다' : 'Content coming soon'}
          </p>
        </div>
      </RevealSection>
    </section>
  )
}
