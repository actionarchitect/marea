# 마레아홀딩스 웹사이트 구조 초안

> 마레아홀딩스(Marea Holdings) 공식 웹사이트 설계 문서
> 작성일: 2026-03-24

---

## 브랜드 포지셔닝

### 핵심 태그라인 (안)
```
마레아홀딩스 — Growing Across Every Frontier
```

### 브랜드 thesis
AI를 연결 레이어로 삼아 교육·부동산·금융·엔터테인먼트·무역·게임 7개 사업이 하나의 생태계를 이룬다.
단순한 복합기업이 아닌 **AI 기반 사업 통합 그룹**으로 포지셔닝.

---

## 네비게이션 구조

최상위 6개 항목 (Samsung C&T, Hanwha 등 글로벌 지주회사 검증 구조)

```
About  /  Businesses  /  Vision  /  ESG  /  IR  /  Newsroom
```

- 헤더 우측: 언어 전환(KO / EN) + 검색 아이콘
- 헤더 고정(sticky), 스크롤 시 배경 반투명 처리

---

## 전체 사이트맵

```
마레아홀딩스
│
├── About
│   ├── Our Story          — 창업 철학 & 비전 서사
│   ├── Leadership         — CEO 메시지 + 임원진 프로필
│   ├── History            — 연혁 & 주요 마일스톤
│   └── Corporate Identity — CI 가이드 & 로고 다운로드
│
├── Businesses
│   ├── 마레아 에듀          — Education
│   ├── 마레아 리얼에스테이트  — Real Estate
│   ├── 마레아 파이낸스       — Finance
│   ├── 마레아 엔터          — Entertainment
│   ├── 마레아 트레이드       — Trade
│   ├── 마레아 게임즈         — Gaming
│   └── 마레아 AI           — Artificial Intelligence
│
├── Vision & Strategy
│   ├── Our Vision 2030    — 장기 비전 및 로드맵
│   ├── AI Strategy        — 전 사업 AI 통합 전략
│   └── Global Expansion   — 글로벌 진출 계획
│
├── ESG
│   ├── Environment        — 환경 경영
│   ├── Social             — 사회적 책임
│   └── Governance         — 지배구조
│
├── IR (Investor Relations)
│   ├── Financial Highlights  — 재무 현황
│   ├── Reports & Disclosures — 공시 자료
│   └── Corporate Governance  — 이사회 구성
│
└── Newsroom
    ├── Press Releases     — 공식 보도자료
    ├── Media Coverage     — 언론 보도
    └── Insights & Blog    — 사업부별 인사이트 콘텐츠
```

---

## 홈페이지 섹션 구성

### 1. Hero — 풀스크린 슬라이드

7개 사업부를 순환하는 슬라이드. Samsung C&T의 `"[Division] Adding Value"` 포맷 응용.

| 사업부 | 슬라이드 카피 |
|---|---|
| Education | **Marea — "Building Minds, Building Futures"** |
| Real Estate | **Marea — "Spaces That Shape Communities"** |
| Finance | **Marea — "Capital That Creates Opportunity"** |
| Entertainment | **Marea — "Stories That Move the World"** |
| Trade | **Marea — "Connecting Markets, Creating Value"** |
| Gaming | **Marea — "Where Play Meets Possibility"** |
| AI | **Marea — "Intelligence at the Heart of Everything"** |

- 슬라이드 위에 고정 부모 태그라인 노출
- 풀스크린 영상 또는 고해상도 이미지 배경
- 하단 CTA: `Explore Our Businesses ↓`

---

### 2. Our Businesses — 7개 사업부 카드 그리드

- 3+4 또는 4+3 그리드 레이아웃 (모바일: 1열 스크롤)
- 각 카드: 사업부 고유 컬러 + 아이콘 + 한 줄 설명
- 호버 시: 짧은 설명 확장 + "Learn More" CTA
- **AI 카드**는 별도 강조 처리 — "모든 사업을 연결하는 레이어"로 표현

---

### 3. Why Marea — 브랜드 thesis 섹션

신생 지주회사의 신뢰 구축을 위한 핵심 섹션. "왜 이 7개 사업이 하나인가"를 서사로 설명.

**3개 필러 구조 (안)**

```
People  ×  Technology  ×  Value
사람        기술            가치
```

- 각 필러별 2~3줄 설명 + 관련 사업 연결
- AI가 세 필러 전체에 어떻게 작동하는지 시각화

---

### 4. CEO Message

- 대표 사진 + 200자 내외 메시지
- 신뢰도 및 비전 전달의 핵심 요소
- "Read More" 링크 → About > Leadership 페이지 연결

---

### 5. Global Footprint — 인터랙티브 지도

- 한국 HQ → 글로벌 거점 시각화
- 현재 규모와 무관하게 **"Korea to the World"** 메시지 전달
- 향후 진출 예정 지역도 점선 등으로 표현 가능

---

### 6. Numbers — 신뢰 지표

보유한 숫자로 신뢰도 확보. 스크롤 시 카운터 애니메이션 적용.

예시:
```
7 Businesses  |  N Countries  |  N Partners  |  Founded 20XX
```

---

### 7. Latest News — Newsroom 프리뷰

- 최신 뉴스 3개 카드
- 사업부별 필터 탭 포함
- "View All News →" 링크

---

## 사업부 개별 페이지 구성

각 사업부(`/businesses/education` 등)는 아래 구조를 공통으로 사용:

```
1. Hero        — 사업부 비전 + 고유 컬러 배경
2. Overview    — 사업 소개 (2~3문단)
3. Services    — 주요 서비스/제품 카드
4. AI Connect  — 해당 사업에서 AI가 작동하는 방식
5. Case Study  — 주요 프로젝트 또는 고객 사례
6. Contact     — 사업부 담당 문의
```

---

## 디자인 가이드라인

### 컬러 시스템

| 용도 | 값 (안) |
|---|---|
| 배경 (라이트) | `#F8F6F2` (따뜻한 크림, 순백보다 고급스러움) |
| 브랜드 메인 | 딥 인디고 또는 다크 틸 — 일반 기업 파란색(`#0070c0`) 지양 |
| 텍스트 | `#1A1A1A` (순검정보다 부드러움) |
| 사업부 컬러 | 7개 고유 컬러, 브랜드 팔레트 내 통일 |

다크모드 Day 1부터 지원 (카카오, 네이버 표준)

### 타이포그래피

| 용도 | 폰트 |
|---|---|
| 한국어 전체 | **Pretendard** (무료, 한영 모두 최적) |
| 영어 본문 | Inter 또는 Neue Haas Grotesk |
| 영어 헤드라인 | 디스플레이 세리프 계열 (프리미엄 대비 효과) |
| 본문 크기 | 최소 16px, line-height 1.6 |

### 인터랙션 & 애니메이션

- 스크롤 트리거 섹션 등장 (Framer Motion 또는 GSAP ScrollTrigger)
- 숫자 카운터 애니메이션
- 헤더 parallax 효과
- 페이지 전환 스무스 트랜지션
- `prefers-reduced-motion` 지원 필수

### 언어 전략

- 한국어 + 영어 **동등하게** 설계 (번역체 아닌 네이티브 카피)
- 추후 일본어 추가 고려

---

## 기술 스택 권고

| 항목 | 기술 |
|---|---|
| 프레임워크 | Next.js (현재 프로젝트) |
| 애니메이션 | Framer Motion |
| CMS | Contentful 또는 Sanity (다국어 뉴스룸 관리) |
| i18n | Next.js 내장 국제화 (ko / en) |
| 이미지 최적화 | `next/image` |
| 분석 | GA4 + 서버사이드 태깅 |

---

## 레퍼런스 사이트

| 회사 | URL | 참고 포인트 |
|---|---|---|
| Samsung C&T | samsungcnt.com/eng | 사업부 슬라이드 포맷, 카드 그리드 |
| SoftBank Group | group.softbank/en | AI 생태계 포지셔닝, 철학 서사 |
| LG Corp | lgcorp.com | 단순하고 강력한 태그라인 구조 |
| Hanwha Group | hanwha.com/en | 산업 테마별 구조, ESG 강조 |
| Kakao Corp | kakaocorp.com | 사업부 컬러 시스템, 다크모드 |
| Naver Corp | navercorp.com | 다중 오디언스(투자자·파트너·개발자) 레이어 |

---

## 다음 단계

- [ ] 브랜드 태그라인 확정
- [ ] 7개 사업부 컬러 팔레트 확정
- [ ] 각 사업부 한 줄 미션 문구 작성
- [ ] CEO 메시지 작성
- [ ] 홈페이지 와이어프레임 제작
- [ ] 영어 카피라이팅 (네이티브 수준)
- [ ] 원본 사진 촬영 계획 수립
