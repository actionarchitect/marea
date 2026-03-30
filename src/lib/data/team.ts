import type { TeamMember } from './types'

export const ceoMessage = {
  nameKo: '이슬기 · 대표이사',
  nameEn: 'Lee Seul Gi · CEO',
  messageKo:
    '우리는 AI가 세상을 평평하게 만들 수 있다고 믿습니다. 배움의 불평등, 기회의 불평등, 지역의 불평등, 문화의 불평등 — 이 모든 격차의 근원에는 같은 구조가 있습니다. 마레아홀딩스는 AI를 통해 이 구조를 재설계하고, 누구에게나 동등한 출발선이 주어지는 세상을 만들어가겠습니다.',
  messageEn:
    'We believe AI can make the world flat. Inequality in learning, in opportunity, in geography, in culture — the same structure lies at the root of every gap. Marea Holdings will use AI to redesign that structure and build a world where everyone stands on the same starting line.',
}

export const leadership: TeamMember[] = [
  {
    id: 'ceo',
    nameKo: '이슬기',
    nameEn: 'Lee Seul Gi',
    titleKo: '대표이사 (CEO)',
    titleEn: 'Chief Executive Officer',
    bio: 'KAIST 출신. AI 교육 기술의 사업화와 글로벌 확장을 이끌며, "AI가 세상을 평평하게 만든다"는 비전 아래 마레아홀딩스를 설립. Veltis 교육 영상 솔루션을 통해 교육 접근성 혁신을 실현하고 있다.',
  },
  {
    id: 'cto',
    nameKo: '송완',
    nameEn: 'Song Wan',
    titleKo: '최고기술책임자 (CTO)',
    titleEn: 'Chief Technology Officer',
    bio: 'KAIST 출신. AI 영상 자동화, 수어 아바타 생성 등 핵심 기술의 설계와 개발을 총괄. Veltis AI Studio와 Veltis Sign의 기술 아키텍처를 주도하며, AI가 모든 사업을 관통하는 인텔리전스 레이어가 되도록 설계한다.',
  },
  {
    id: 'coo',
    nameKo: '정재욱',
    nameEn: 'Jung Jae Wook',
    titleKo: '최고운영책임자 (COO)',
    titleEn: 'Chief Operating Officer',
    bio: 'KAIST 출신. 전 사업 부문의 운영 전략과 글로벌 프로젝트 실행을 총괄. 아프리카 교육 인프라 구축 프로젝트의 현지 실행과 파트너십을 이끌며, 비전을 현실로 전환하는 실행력을 담당한다.',
  },
  {
    id: 'auditor',
    nameKo: '장대철',
    nameEn: 'Jang Dae Chul',
    titleKo: '감사',
    titleEn: 'Auditor',
    bio: '경영 투명성과 내부 통제 체계를 총괄. 지주회사 거버넌스 기준을 수립하고, 윤리 경영과 컴플라이언스를 통해 지속 가능한 성장의 기반을 다진다.',
  },
]
