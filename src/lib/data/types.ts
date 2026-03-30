export type BusinessSlug =
  | 'education'
  | 'economy'
  | 'global'
  | 'entertainment'

export interface BusinessService {
  nameKo: string
  nameEn: string
  descKo: string
  descEn: string
}

export interface Business {
  slug: BusinessSlug
  nameKo: string
  nameEn: string
  taglineKo: string
  taglineEn: string
  descKo: string
  descEn: string
  icon: string
  services: BusinessService[]
  externalUrl?: string  // 외부 사이트 링크 (각 기둥별 자체 사이트)
  featured?: boolean    // 홈 그리드에서 크게 표시
}

export interface NavChild {
  labelKo: string
  labelEn: string
  href: string
}

export interface NavItem {
  key: string
  labelKo: string
  labelEn: string
  href: string
  children?: NavChild[]
}

export interface HeroSlide {
  slug: BusinessSlug
  headlineEn: string
  headlineKo: string
  bgColor: string
}

export interface StatNumber {
  value: number
  suffix: string
  labelKo: string
  labelEn: string
}

export interface NewsArticle {
  id: string
  titleKo: string
  titleEn: string
  date: string
  category: BusinessSlug | 'company'
  href: string
}

export interface TeamMember {
  id: string
  nameKo: string
  nameEn: string
  titleKo: string
  titleEn: string
  bio?: string
  imagePlaceholder?: string
}
