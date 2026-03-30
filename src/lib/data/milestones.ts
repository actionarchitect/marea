export interface Milestone {
  year: string
  month: string
  titleKo: string
  titleEn: string
  tag: 'founding' | 'product' | 'expansion' | 'partnership'
}

export const milestones: Milestone[] = [
  {
    year: '2022',
    month: '12',
    titleKo: '마레아홀딩스 설립',
    titleEn: 'Marea Holdings Founded',
    tag: 'founding',
  },
  {
    year: '2023',
    month: '02',
    titleKo: 'Veltis Studio 정식 출시 — AI 교육 영상 자동화 사업 개시',
    titleEn: 'Veltis Studio launched — AI education video automation business initiated',
    tag: 'product',
  },
  {
    year: '2023',
    month: '06',
    titleKo: '사회·금융 사업부 출범 — AI 기반 창업·마케팅·금융 서비스 설계',
    titleEn: 'Social & Finance division launched — AI startup, marketing, and finance services designed',
    tag: 'expansion',
  },
  {
    year: '2024',
    month: '01',
    titleKo: 'Veltis AI Studio 고도화 — AI 교안·음성·편집 파이프라인 통합',
    titleEn: 'Veltis AI Studio upgraded — integrated AI lesson, voice, and editing pipeline',
    tag: 'product',
  },
  {
    year: '2024',
    month: '10',
    titleKo: '엔터테인먼트 사업부 출범 — AI 콘텐츠·게임·음악 프로덕션 개시',
    titleEn: 'Entertainment division launched — AI content, gaming, and music production initiated',
    tag: 'expansion',
  },
  {
    year: '2025',
    month: '05',
    titleKo: '카메룬 현지 파트너십 체결 — 아프리카 사업 전략 수립',
    titleEn: 'Cameroon local partnership signed — Africa business strategy established',
    tag: 'partnership',
  },
  {
    year: '2026',
    month: '01',
    titleKo: 'Veltis Sign 수어 아바타 R&D 착수',
    titleEn: 'Veltis Sign language avatar R&D initiated',
    tag: 'product',
  },
]
