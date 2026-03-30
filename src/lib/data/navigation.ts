import type { NavItem } from './types'

export const navigation: NavItem[] = [
  {
    key: 'company',
    labelKo: '회사소개',
    labelEn: 'Company',
    href: '/about',
    children: [
      { labelKo: '기업개요', labelEn: 'Overview', href: '/about/our-story' },
      { labelKo: '비전', labelEn: 'Vision', href: '/about/vision' },
      { labelKo: '리더십', labelEn: 'Leadership', href: '/about/leadership' },
      { labelKo: '연혁', labelEn: 'History', href: '/about/history' },
    ],
  },
  {
    key: 'businesses',
    labelKo: '사업영역',
    labelEn: 'Businesses',
    href: '/businesses',
    children: [
      { labelKo: '교육', labelEn: 'Education', href: '/businesses/education' },
      { labelKo: '사회·금융', labelEn: 'Social & Finance', href: '/businesses/economy' },
      { labelKo: '엔터테인먼트', labelEn: 'Entertainment', href: '/businesses/entertainment' },
      { labelKo: '글로벌 임팩트', labelEn: 'Global Impact', href: '/businesses/global' },
    ],
  },
  {
    key: 'sustainability',
    labelKo: '지속가능경영',
    labelEn: 'Sustainability',
    href: '/sustainability',
    children: [
      { labelKo: 'ESG 경영', labelEn: 'ESG', href: '/sustainability/esg' },
      { labelKo: '사회공헌', labelEn: 'Social Impact', href: '/sustainability/social-impact' },
      { labelKo: '거버넌스', labelEn: 'Governance', href: '/sustainability/governance' },
    ],
  },
  {
    key: 'media',
    labelKo: '미디어',
    labelEn: 'Media',
    href: '/newsroom',
    children: [
      { labelKo: '보도자료', labelEn: 'Press Releases', href: '/newsroom/press-releases' },
      { labelKo: '미디어 보도', labelEn: 'Media Coverage', href: '/newsroom/media-coverage' },
      { labelKo: '인사이트', labelEn: 'Insights', href: '/newsroom/insights' },
    ],
  },
  {
    key: 'ir',
    labelKo: 'IR',
    labelEn: 'IR',
    href: '/ir',
    children: [
      { labelKo: '경영현황', labelEn: 'Business Overview', href: '/ir/overview' },
      { labelKo: '공시정보', labelEn: 'Disclosures', href: '/ir/disclosures' },
    ],
  },
]
