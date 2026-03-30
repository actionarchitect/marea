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
    titleKo: '마레아홀딩스 설립 — "AI가 세상을 평평하게 만든다" 비전 선언',
    titleEn: 'Marea Holdings founded — "AI Levels the World" vision declared',
    tag: 'founding',
  },
  {
    year: '2022',
    month: '04',
    titleKo: 'Veltis 법인 설립, AI 교육 영상 솔루션 연구 개시',
    titleEn: 'Veltis incorporated, AI education video solution R&D initiated',
    tag: 'product',
  },
  {
    year: '2022',
    month: '09',
    titleKo: 'Veltis Studio 베타 출시 — 국내 첫 AI 아나운서 교육 영상 자동화',
    titleEn: 'Veltis Studio beta launch — Korea\'s first AI announcer education video automation',
    tag: 'product',
  },
  {
    year: '2023',
    month: '02',
    titleKo: 'Veltis Studio 정식 출시, 공공기관 및 기업 고객 확보 시작',
    titleEn: 'Veltis Studio official launch, public institution and corporate client acquisition begins',
    tag: 'product',
  },
  {
    year: '2023',
    month: '06',
    titleKo: '사회·금융 사업부 출범 — AI 창업 지원·마케팅 자동화 사업 개시',
    titleEn: 'Social & Finance division launched — AI startup support and marketing automation initiated',
    tag: 'expansion',
  },
  {
    year: '2023',
    month: '10',
    titleKo: 'KSL-EDU 3D 수어 데이터셋 구축 프로젝트 착수 (950 클립 목표)',
    titleEn: 'KSL-EDU 3D sign language dataset project initiated (950 clips target)',
    tag: 'product',
  },
  {
    year: '2024',
    month: '01',
    titleKo: 'Veltis AI Studio 고도화 — AI 교안 설계·음성 합성·자동 편집 파이프라인 통합',
    titleEn: 'Veltis AI Studio upgrade — integrated AI lesson planning, voice synthesis, and auto-editing pipeline',
    tag: 'product',
  },
  {
    year: '2024',
    month: '04',
    titleKo: '아프리카 사업 전략 수립 — 카메룬 현지 파트너십 체결',
    titleEn: 'Africa business strategy established — Cameroon local partnership signed',
    tag: 'partnership',
  },
  {
    year: '2024',
    month: '07',
    titleKo: 'Veltis Sign 수어 아바타 프로토타입 개발 완료',
    titleEn: 'Veltis Sign language avatar prototype development completed',
    tag: 'product',
  },
  {
    year: '2024',
    month: '10',
    titleKo: '엔터테인먼트 사업부 출범 — AI 콘텐츠·게임·음악 프로덕션 사업 개시',
    titleEn: 'Entertainment division launched — AI content, gaming, and music production initiated',
    tag: 'expansion',
  },
  {
    year: '2025',
    month: '02',
    titleKo: '부동산 AI 시세 분석 솔루션 파일럿 런칭',
    titleEn: 'Real estate AI price analysis solution pilot launched',
    tag: 'product',
  },
  {
    year: '2025',
    month: '05',
    titleKo: '카메룬 자원 무역 중계 사업 본격 운영 시작',
    titleEn: 'Cameroon resource trade brokerage operations fully commenced',
    tag: 'expansion',
  },
  {
    year: '2025',
    month: '08',
    titleKo: '금융 AI 포트폴리오 분석 플랫폼 베타 출시',
    titleEn: 'Finance AI portfolio analysis platform beta launched',
    tag: 'product',
  },
  {
    year: '2025',
    month: '11',
    titleKo: 'KOICA ODA 연계 아프리카 교육 인프라 프로젝트 협의 착수',
    titleEn: 'KOICA ODA-linked Africa education infrastructure project discussions initiated',
    tag: 'partnership',
  },
  {
    year: '2026',
    month: '01',
    titleKo: 'AI 콘텐츠 스튜디오 첫 번째 오리지널 시리즈 프로덕션 시작',
    titleEn: 'AI Content Studio begins production of first original series',
    tag: 'product',
  },
]
