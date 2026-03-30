# 마레아홀딩스 콘텐츠 구조 초안

> 작성일: 2026-03-24
> 상태: Draft — 틀만 (실제 카피 미작성)
> 목적: 각 페이지에 필요한 콘텐츠 슬롯 정의

---

## 0. 글로벌 고정 요소

### 0.1 헤더
| 슬롯 | 현재 값 | 확정 필요 |
|---|---|---|
| 로고 텍스트/이미지 | "Marea Holdings" (텍스트) | ⬜ 로고 SVG 파일 |
| 패비콘 | 기본 Next.js | ⬜ 브랜드 패비콘 |

### 0.2 푸터
| 슬롯 | 현재 값 | 확정 필요 |
|---|---|---|
| 태그라인 | Growing Across Every Frontier | ⬜ 최종 확정 |
| 주소 | 서울특별시 (KO) / Seoul, Republic of Korea (EN) | ⬜ 실제 주소 |
| 이메일 | contact@mareahd.com | ⬜ 실제 이메일 |
| 사업자등록번호 | — | ⬜ 등록 후 추가 |
| SNS 링크 | — | ⬜ 계정 생성 후 추가 |

---

## 1. 홈페이지 `/`

### 1.1 Hero 섹션 (풀스크린 슬라이드)
| 슬롯 | KO | EN | 확정 |
|---|---|---|---|
| 고정 태그라인 | 마레아홀딩스 — Growing Across Every Frontier | Marea Holdings — Growing Across Every Frontier | ⬜ |
| 교육 슬라이드 헤드라인 | 미래를 이끌 인재를 키웁니다 | Building Minds, Building Futures | ⬜ |
| 부동산 슬라이드 헤드라인 | 사람이 모이는 공간을 설계합니다 | Spaces That Shape Communities | ⬜ |
| 금융 슬라이드 헤드라인 | 기회를 만드는 자본을 운용합니다 | Capital That Creates Opportunity | ⬜ |
| 엔터 슬라이드 헤드라인 | 세상을 움직이는 이야기를 만듭니다 | Stories That Move the World | ⬜ |
| 무역 슬라이드 헤드라인 | 시장을 연결하고 가치를 창출합니다 | Connecting Markets, Creating Value | ⬜ |
| 게임 슬라이드 헤드라인 | 게임이 가능성을 만나는 곳 | Where Play Meets Possibility | ⬜ |
| AI 슬라이드 헤드라인 | 모든 것의 중심에 있는 지능 | Intelligence at the Heart of Everything | ⬜ |
| CTA 텍스트 | 사업부 살펴보기 ↓ | Explore Our Businesses ↓ | ⬜ |
| Hero 배경 이미지/영상 | (색상 플레이스홀더) | — | ⬜ 각 사업부 이미지 7종 |

### 1.2 Our Businesses 섹션
| 슬롯 | KO | EN | 확정 |
|---|---|---|---|
| 섹션 타이틀 | 사업 포트폴리오 | Our Businesses | ⬜ |
| 섹션 서브타이틀 | AI를 연결 레이어로 삼아 7개 사업이 하나의 생태계를 이룹니다 | Seven businesses unified by AI — one integrated ecosystem | ⬜ |
| 각 카드 한 줄 설명 | `src/lib/data/businesses.ts` 참고 | — | ⬜ 최종 카피 |

### 1.3 Why Marea 섹션
| 슬롯 | KO | EN | 확정 |
|---|---|---|---|
| 섹션 타이틀 | 왜 마레아인가 | Why Marea | ⬜ |
| 섹션 서브타이틀 | 단순한 복합기업이 아닌 AI 기반 사업 통합 그룹 | Not just a conglomerate — an AI-powered business integration group | ⬜ |
| People 설명 | 사람 중심의 가치를 모든 사업의 근간으로 삼습니다 | Human-centered values form the foundation of every business we build | ⬜ |
| Technology 설명 | AI가 7개 사업을 하나로 연결하는 핵심 레이어입니다 | AI is the connective layer that unifies all seven businesses into one | ⬜ |
| Value 설명 | 지속 가능한 성장과 사회적 가치를 동시에 창출합니다 | We create sustainable growth and social value in equal measure | ⬜ |

### 1.4 CEO Message 섹션
| 슬롯 | 내용 | 확정 |
|---|---|---|
| CEO 사진 | (플레이스홀더) | ⬜ 실제 사진 |
| CEO 이름 | — | ⬜ 실명 입력 |
| CEO 직함 (KO) | 대표이사 | ⬜ |
| CEO 직함 (EN) | Chief Executive Officer | ⬜ |
| 메시지 본문 (KO, 200자 내외) | `src/lib/data/team.ts` 참고 | ⬜ 최종 메시지 |
| 메시지 본문 (EN) | `src/lib/data/team.ts` 참고 | ⬜ 최종 메시지 |

### 1.5 Global Footprint 섹션
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 섹션 타이틀 | 글로벌 거점 / Global Footprint | ⬜ |
| 서브타이틀 | Korea to the World | ⬜ |
| HQ 위치 | 서울 | ⬜ |
| 거점 도시 목록 | New York, London, Singapore, Tokyo (플레이스홀더) | ⬜ 실제 거점 |
| 세계지도 에셋 | SVG 플레이스홀더 | ⬜ 실제 SVG 지도 |

### 1.6 Numbers 섹션
| 슬롯 | 현재 값 | 확정 |
|---|---|---|
| 사업부 수 | 7 | ✅ |
| 국가 수 | 12+ | ⬜ 실제 수치 |
| 파트너사 수 | 50+ | ⬜ 실제 수치 |
| 설립 연도 | 2024 | ⬜ 실제 연도 |

### 1.7 Latest News 섹션
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 뉴스 카드 3개 | `src/lib/data/news.ts` 참고 (mock) | ⬜ 실제 뉴스 |

---

## 2. About

### 2.1 Our Story
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 페이지 Hero 타이틀 | 창업 철학 / Our Story | ⬜ |
| Hero 서브타이틀 | — | ⬜ |
| 본문 (3~5 문단) | — | ⬜ |
| 핵심 마일스톤 타임라인 | — | ⬜ |
| 이미지/영상 | — | ⬜ |

### 2.2 Leadership
| 슬롯 | 내용 | 확정 |
|---|---|---|
| CEO 이름 | — | ⬜ |
| CEO 사진 | 플레이스홀더 | ⬜ |
| CEO 전체 메시지 (Our Story 페이지 링크용) | — | ⬜ |
| 임원 목록 | CEO, CTO, CFO (플레이스홀더) | ⬜ 실제 임원진 |
| 각 임원 프로필 사진 | — | ⬜ |
| 각 임원 약력 (200자) | — | ⬜ |

### 2.3 History
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 연혁 항목 (연도 + 내용) | — | ⬜ |

### 2.4 Corporate Identity
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 로고 사용 가이드 | — | ⬜ |
| 컬러 팔레트 공개 범위 | — | ⬜ |
| 로고 다운로드 파일 | — | ⬜ |

---

## 3. Businesses

### 3.0 공통 사업부 페이지 (7개 공통 슬롯)

각 사업부 `/businesses/{slug}` 페이지는 아래 슬롯을 갖는다.

| 슬롯 | 내용 | 확정 |
|---|---|---|
| Hero 타이틀 | 사업부명 | ✅ |
| Hero 서브타이틀 (태그라인) | 영문 태그라인 | ✅ |
| Overview 본문 (2~3문단) | — | ⬜ |
| 서비스/제품 카드 3개 (제목 + 설명) | 플레이스홀더 | ⬜ |
| AI Connect 본문 | `src/components/business/BusinessPageTemplate.tsx` 참고 | ⬜ 최종 카피 |
| Case Study (제목 + 설명 + 이미지) | — | ⬜ |
| 사업부 전용 이미지 | — | ⬜ |

### 3.1 마레아 에듀
| 슬롯 | 내용 | 확정 |
|---|---|---|
| Overview | — | ⬜ |
| 서비스 1 | — | ⬜ |
| 서비스 2 | — | ⬜ |
| 서비스 3 | — | ⬜ |

### 3.2 마레아 리얼에스테이트
*(동일한 슬롯 구조)*

### 3.3 마레아 파이낸스
*(동일한 슬롯 구조)*

### 3.4 마레아 엔터테인먼트
*(동일한 슬롯 구조)*

### 3.5 마레아 트레이드
*(동일한 슬롯 구조)*

### 3.6 마레아 게임즈
*(동일한 슬롯 구조)*

### 3.7 마레아 AI
*(동일한 슬롯 구조 + AI가 다른 사업부에 적용되는 방식 시각화)*

---

## 4. Vision & Strategy

### 4.1 Our Vision 2030
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 비전 선언문 (1문장) | — | ⬜ |
| 2030 목표 3~5개 | — | ⬜ |
| 로드맵 타임라인 | — | ⬜ |
| 비전 이미지 | — | ⬜ |

### 4.2 AI Strategy
| 슬롯 | 내용 | 확정 |
|---|---|---|
| AI 통합 전략 개요 (3~5 문단) | — | ⬜ |
| 사업부별 AI 적용 사례 다이어그램 | — | ⬜ |

### 4.3 Global Expansion
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 글로벌 전략 개요 | — | ⬜ |
| 진출 예정 지역 + 일정 | — | ⬜ |

---

## 5. ESG

### 공통 구조
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 섹션 타이틀 | — | ⬜ |
| 핵심 지표 (숫자 3~4개) | — | ⬜ |
| 본문 | — | ⬜ |

### 5.1 Environment | 5.2 Social | 5.3 Governance
*(위 공통 구조 반복)*

---

## 6. IR

### 6.1 Financial Highlights
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 핵심 재무 지표 | — | ⬜ |
| 차트 데이터 | — | ⬜ |

### 6.2 Reports & Disclosures
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 공시 문서 목록 (제목 + 날짜 + PDF) | — | ⬜ |

### 6.3 Corporate Governance
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 이사회 구성원 | — | ⬜ |
| 정관/규정 문서 | — | ⬜ |

---

## 7. Newsroom

### 7.1 Press Releases
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 보도자료 목록 (제목 + 날짜 + 본문) | 3개 mock | ⬜ 실제 보도자료 |

### 7.2 Media Coverage
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 언론사명 + 기사 제목 + 링크 | — | ⬜ |

### 7.3 Insights & Blog
| 슬롯 | 내용 | 확정 |
|---|---|---|
| 아티클 목록 | — | ⬜ |

---

## 8. 에셋 목록 (이미지/영상)

| 에셋 | 용도 | 규격 | 확정 |
|---|---|---|---|
| 로고 SVG | 헤더, 푸터, OG | — | ⬜ |
| 패비콘 | 브라우저 탭 | 32×32, 180×180 | ⬜ |
| Hero 배경 이미지 × 7 | 사업부별 슬라이드 | 1920×1080 이상 | ⬜ |
| CEO 사진 | CEO 섹션, Leadership | 600×600 (정방형) | ⬜ |
| 임원 사진 × N | Leadership | 400×400 | ⬜ |
| OG 이미지 | SNS 공유 시 썸네일 | 1200×630 | ⬜ |
| 사업부 카드 이미지 × 7 | Businesses 섹션 (선택) | 800×600 | ⬜ |

---

## 9. 작성 우선순위

```
즉시 필요 (홈페이지 런칭 블로커)
─────────────────────────────────
1. CEO 이름 + 사진 + 메시지 (KO/EN)
2. 헤더 로고 SVG
3. Numbers 섹션 실제 수치
4. 브랜드 태그라인 최종 확정

다음 단계 (사업부 페이지)
─────────────────────────────────
5. 7개 사업부 Overview 본문 (KO/EN 각 3문단)
6. 각 사업부 서비스 3개 (제목 + 설명)
7. Hero 배경 이미지 7종

이후 (서브 페이지)
─────────────────────────────────
8. Our Story 본문
9. 연혁 데이터
10. ESG 지표
11. IR 문서
```
