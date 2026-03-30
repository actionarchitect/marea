---
title: 마레아홀딩스 Design Language Guide
version: 1.0
date: 2026-03-24
status: Draft — Implementation Ready
companion: docs/site-structure.md
stack: Next.js 16 · React 19 · Tailwind CSS v4.2 · Shadcn base-nova · tw-animate-css 1.4
---

# 마레아홀딩스 Design Language Guide

이 문서는 마레아홀딩스 웹사이트의 시각적·인터랙티브 언어의 단일 진실 원천(Single Source of Truth)이다.
구현하는 개발자를 위해, 그리고 확장하는 디자이너를 위해 작성되었다.
여기에 기록된 모든 결정은 코드와 직접 연결된다.

사이트맵, 페이지 템플릿, 히어로 카피는 companion 문서를 참조한다: [docs/site-structure.md](./site-structure.md)

---

## 목차

1. [Brand Foundation](#1-brand-foundation)
2. [Color System](#2-color-system)
3. [Typography System](#3-typography-system)
4. [Spacing, Layout & Grid](#4-spacing-layout--grid)
5. [Motion & Animation](#5-motion--animation)
6. [Component Patterns](#6-component-patterns)
7. [Page-Specific Guidance](#7-page-specific-guidance)
8. [Internationalization](#8-internationalization)
9. [File & Folder Conventions](#9-file--folder-conventions)
10. [Implementation Checklist](#10-implementation-checklist)
11. [Appendix](#11-appendix)

---

## 1. Brand Foundation

### 1.1 브랜드 성격

모든 디자인 결정의 필터가 되는 4가지 성격. 새로운 컴포넌트나 카피를 검토할 때 이 4가지에 비추어 판단한다.

**Authoritative** — 우리는 소음이 아닌 절제를 통해 주목을 끈다. 과잉 설명하지 않는다. 여백이 신뢰를 만든다.

**Progressive** — 기술은 장식이 아니라 구조다. AI는 우리 모든 사업의 인프라이며, 피처 목록이 아닌 작동 방식으로 표현된다.

**Rooted** — 한국의 공예 정신과 정밀함이 출발점이지 각주가 아니다. 글로벌 미니멀리즘은 한국의 감수성 위에서 표현된다.

**Expansive** — 모든 디자인 결정은 "더 많은 것이 앞에 있다"는 암시를 담아야 한다. 완성된 것처럼 보이되, 열려 있어야 한다.

### 1.2 포지셔닝 테제

마레아홀딩스는 7개 사업 부문(교육, 부동산, 금융, 엔터테인먼트, 무역, 게임, AI)을 운영하는 지주회사다. 이것이 단순한 복합기업과 다른 점은, **AI가 하나의 사업 부문이면서 동시에 나머지 6개를 연결하는 인텔리전스 레이어**로 작동한다는 사실이다.

시각 시스템은 이 테제를 구현해야 한다: 7개 사업부는 각자의 고유한 정체성(컬러, 톤)을 갖되, 단 하나의 마스터브랜드 언어 안에 통합된다.

### 1.3 디자인 원칙 (3가지)

1. **여백이 브랜드 시그널이다** — 프리미엄은 비어있는 공간이 결정한다. 콘텐츠를 채우려는 충동에 저항하라.

2. **모션은 의미를 전달할 때만 존재한다** — 정보, 상태 변화, 공간적 관계를 전달하지 않는 애니메이션은 삭제한다.

3. **타이포그래피가 무게를 진다** — 컬러와 모션은 증폭하는 역할이다. 타이포그래피가 먼저 읽혀야 한다.

### 1.4 레퍼런스 감사 요약

| 레퍼런스 | 채택할 핵심 패턴 |
|---|---|
| Samsung C&T | 사업부별 컬러 아이덴티티 + 통일된 마스터브랜드 헤더; `[Division] Adding Value` 반복 공식 |
| SoftBank Group | 풀뷰포트 히어로 + 키네틱 텍스트; AI 생태계 포지셔닝(기능이 아닌 철학) |
| Kakao Corp | 다크모드가 후처리가 아닌 Day 1 설계; 사업부별 컬러 시스템의 Bento Grid |
| LG Corp | 단순하고 강력한 단일 태그라인; 헤드라인-바디 비율과 여백 |

---

## 2. Color System

### 2.1 아키텍처 개요

W3C 디자인 토큰 표준의 3-tier 모델을 채택한다. 컴포넌트 작성자는 절대 Tier 1에 직접 접근하지 않는다.

```
Tier 1 — Global Palette   : 순수한 OKLCH 값. 이름은 역할이 아닌 색조+밝기로 명명
Tier 2 — Semantic Tokens  : Shadcn 변수명에 매핑 (--background, --primary 등). light/dark 양쪽
Tier 3 — Division Tokens  : .division-{name} CSS 클래스 스코핑. 7개 사업부 전용
```

### 2.2 OKLCH를 선택하는 이유

OKLCH는 채도(Chroma)가 지각적으로 균일하다. 같은 밝기(Lightness)에서 서로 다른 색상(Hue)의 Jewel Tone들이 동일하게 선명하게 보인다. HSL에서는 같은 채도값이어도 색상에 따라 실제 선명도가 제각각이다. 현재 `globals.css`의 OKLCH 값들은 `C=0` (무채색) placeholder 상태다 — Tier 1 팔레트로 교체한다.

### 2.3 Tier 1 — Global Palette

`globals.css`의 `:root` 블록 맨 위에 추가한다.

```css
/* ============================================================
   MAREA HOLDINGS — GLOBAL COLOR PALETTE (Tier 1)
   oklch(Lightness Chroma Hue)
   L: 0(검정) → 1(흰색) | C: 0(무채색) → ~0.37(최대채도) | H: 0–360°
   ============================================================ */

:root {
  /* --- Neutrals: 따뜻한 크림 스케일 (H=80 미세 웜톤) --- */
  --color-neutral-0:    oklch(1    0      0);       /* 순백 */
  --color-neutral-50:   oklch(0.98 0.004  80);      /* warm white */
  --color-neutral-100:  oklch(0.96 0.006  80);      /* 라이트모드 기본 배경 ≈ #F8F6F2 */
  --color-neutral-200:  oklch(0.92 0.006  80);
  --color-neutral-300:  oklch(0.86 0.006  80);
  --color-neutral-400:  oklch(0.72 0.005  80);
  --color-neutral-500:  oklch(0.56 0.005  80);
  --color-neutral-600:  oklch(0.44 0.004  80);
  --color-neutral-700:  oklch(0.32 0.003  80);
  --color-neutral-800:  oklch(0.22 0.003  80);
  --color-neutral-900:  oklch(0.15 0.002  80);
  --color-neutral-950:  oklch(0.12 0.002  80);      /* 다크모드 기본 배경 (순검정 아님) */
  --color-neutral-1000: oklch(0    0      0);       /* 순검정 */

  /* --- Brand Indigo: 마스터브랜드 프라이머리 --- */
  --color-indigo-50:   oklch(0.97 0.018 264);
  --color-indigo-100:  oklch(0.94 0.034 264);
  --color-indigo-200:  oklch(0.88 0.060 264);
  --color-indigo-300:  oklch(0.79 0.094 264);
  --color-indigo-400:  oklch(0.68 0.130 264);
  --color-indigo-500:  oklch(0.55 0.160 264);       /* 메인 브랜드 컬러 */
  --color-indigo-600:  oklch(0.44 0.155 264);
  --color-indigo-700:  oklch(0.35 0.140 264);
  --color-indigo-800:  oklch(0.26 0.115 264);
  --color-indigo-900:  oklch(0.18 0.082 264);
  --color-indigo-950:  oklch(0.13 0.058 264);

  /* --- Division Jewel Tones --- */

  /* Education — Sapphire Blue (신뢰, 깊이) */
  --color-sapphire-400: oklch(0.64 0.155 232);
  --color-sapphire-500: oklch(0.52 0.175 232);
  --color-sapphire-600: oklch(0.42 0.165 232);

  /* Real Estate — Smoky Jade (안정, 성장) */
  --color-jade-400:    oklch(0.62 0.120 168);
  --color-jade-500:    oklch(0.50 0.138 168);
  --color-jade-600:    oklch(0.40 0.128 168);

  /* Finance — Plum Noir (권위, 중력) */
  --color-plum-400:    oklch(0.60 0.145 300);
  --color-plum-500:    oklch(0.48 0.165 300);
  --color-plum-600:    oklch(0.38 0.150 300);

  /* Entertainment — Garnet (열정, 에너지) */
  --color-garnet-400:  oklch(0.61 0.175 12);
  --color-garnet-500:  oklch(0.49 0.200 12);
  --color-garnet-600:  oklch(0.38 0.185 12);

  /* Trade — Amber Gold (역동, 가치) */
  --color-gold-400:    oklch(0.78 0.145 70);
  --color-gold-500:    oklch(0.66 0.165 70);
  --color-gold-600:    oklch(0.52 0.155 70);

  /* Gaming — Electric Violet (가능성, 에너지) */
  --color-violet-400:  oklch(0.63 0.195 290);
  --color-violet-500:  oklch(0.51 0.220 290);
  --color-violet-600:  oklch(0.40 0.200 290);

  /* AI — Teal Luminance (연결, 인텔리전스) */
  /* 6개 사업부 컬러 위에 어느 것과도 겹쳐 읽힐 수 있도록 H=195 선택 */
  --color-teal-400:    oklch(0.72 0.130 195);
  --color-teal-500:    oklch(0.60 0.148 195);
  --color-teal-600:    oklch(0.48 0.138 195);
}
```

### 2.4 Tier 2 — Semantic Tokens

기존 `globals.css`의 `:root`와 `.dark` 블록을 아래 내용으로 교체한다.

```css
/* ============================================================
   TIER 2 — SEMANTIC TOKENS
   Shadcn 컴포넌트가 소비하는 유일한 레이어.
   컴포넌트에서 Tier 1 변수를 직접 사용하지 말 것.
   ============================================================ */

:root {
  /* 배경 & 표면 */
  --background:          var(--color-neutral-100);  /* 따뜻한 크림 */
  --foreground:          var(--color-neutral-900);
  --card:                var(--color-neutral-0);
  --card-foreground:     var(--color-neutral-900);
  --popover:             var(--color-neutral-0);
  --popover-foreground:  var(--color-neutral-900);

  /* 브랜드 프라이머리 */
  --primary:             var(--color-indigo-600);
  --primary-foreground:  var(--color-neutral-50);

  /* 보조 */
  --secondary:           var(--color-neutral-200);
  --secondary-foreground: var(--color-neutral-800);

  /* 음소거 */
  --muted:               var(--color-neutral-200);
  --muted-foreground:    var(--color-neutral-500);

  /* 강조 */
  --accent:              var(--color-neutral-200);
  --accent-foreground:   var(--color-neutral-900);

  /* 상태 */
  --destructive:         oklch(0.577 0.245 27.325);
  --destructive-foreground: var(--color-neutral-50);

  /* 경계 & 입력 */
  --border:              var(--color-neutral-300);
  --input:               var(--color-neutral-300);
  --ring:                var(--color-indigo-400);
}

/* 다크모드 — 컬러 반전이 아닌 별도 설계된 병렬 스케일 */
/* 순검정(oklch(0 0 0)) 금지 — var(--color-neutral-950) 사용 */
.dark {
  --background:          var(--color-neutral-950);
  --foreground:          var(--color-neutral-100);
  --card:                var(--color-neutral-900);
  --card-foreground:     var(--color-neutral-100);
  --popover:             var(--color-neutral-900);
  --popover-foreground:  var(--color-neutral-100);

  --primary:             var(--color-indigo-400);   /* 다크모드에서 더 밝게 */
  --primary-foreground:  var(--color-neutral-950);

  --secondary:           var(--color-neutral-800);
  --secondary-foreground: var(--color-neutral-200);

  --muted:               var(--color-neutral-800);
  --muted-foreground:    var(--color-neutral-400);

  --accent:              var(--color-neutral-800);
  --accent-foreground:   var(--color-neutral-100);

  --destructive:         oklch(0.704 0.191 22.216);
  --destructive-foreground: var(--color-neutral-950);

  --border:              oklch(1 0 0 / 10%);
  --input:               oklch(1 0 0 / 15%);
  --ring:                var(--color-indigo-500);
}
```

### 2.5 Tier 3 — Division Tokens

각 사업부 페이지의 루트 엘리먼트에 `.division-{name}` 클래스를 적용한다. 하위의 모든 컴포넌트는 `--division-accent` 변수를 통해 해당 사업부의 컬러를 소비한다.

```css
/* ============================================================
   TIER 3 — DIVISION COLOR TOKENS
   .division-* 클래스를 페이지 래퍼에 적용하면 하위 컴포넌트가
   bg-division-accent, text-division-accent 등으로 자동 적용됨
   ============================================================ */

.division-education {
  --division-accent:         var(--color-sapphire-500);
  --division-accent-light:   var(--color-sapphire-400);
  --division-accent-dark:    var(--color-sapphire-600);
  --division-accent-surface: oklch(0.52 0.175 232 / 10%);
}

.division-realestate {
  --division-accent:         var(--color-jade-500);
  --division-accent-light:   var(--color-jade-400);
  --division-accent-dark:    var(--color-jade-600);
  --division-accent-surface: oklch(0.50 0.138 168 / 10%);
}

.division-finance {
  --division-accent:         var(--color-plum-500);
  --division-accent-light:   var(--color-plum-400);
  --division-accent-dark:    var(--color-plum-600);
  --division-accent-surface: oklch(0.48 0.165 300 / 10%);
}

.division-entertainment {
  --division-accent:         var(--color-garnet-500);
  --division-accent-light:   var(--color-garnet-400);
  --division-accent-dark:    var(--color-garnet-600);
  --division-accent-surface: oklch(0.49 0.200 12 / 10%);
}

.division-trade {
  --division-accent:         var(--color-gold-500);
  --division-accent-light:   var(--color-gold-400);
  --division-accent-dark:    var(--color-gold-600);
  --division-accent-surface: oklch(0.66 0.165 70 / 10%);
}

.division-gaming {
  --division-accent:         var(--color-violet-500);
  --division-accent-light:   var(--color-violet-400);
  --division-accent-dark:    var(--color-violet-600);
  --division-accent-surface: oklch(0.51 0.220 290 / 10%);
}

.division-ai {
  --division-accent:         var(--color-teal-500);
  --division-accent-light:   var(--color-teal-400);
  --division-accent-dark:    var(--color-teal-600);
  --division-accent-surface: oklch(0.60 0.148 195 / 10%);
}
```

`globals.css`의 `@theme inline` 블록에 아래를 추가해 Tailwind 유틸리티로 노출:

```css
@theme inline {
  /* ... 기존 내용 유지 ... */

  /* Division 컬러 유틸리티 */
  --color-division-accent:         var(--division-accent);
  --color-division-accent-light:   var(--division-accent-light);
  --color-division-accent-dark:    var(--division-accent-dark);
  --color-division-accent-surface: var(--division-accent-surface);
}
```

사용 예: `bg-division-accent`, `text-division-accent`, `border-division-accent-light`

### 2.6 Division 컬러 참조 테이블

| 사업부 | 토큰 | OKLCH (500) | Hex 근사 | 성격 |
|---|---|---|---|---|
| Education | `sapphire-500` | `oklch(0.52 0.175 232)` | #1B5FA8 | 신뢰의 깊이 |
| Real Estate | `jade-500` | `oklch(0.50 0.138 168)` | #1A7A58 | 안정된 성장 |
| Finance | `plum-500` | `oklch(0.48 0.165 300)` | #6B2D8B | 권위적 중력 |
| Entertainment | `garnet-500` | `oklch(0.49 0.200 12)` | #B81C2A | 뜨거운 에너지 |
| Trade | `gold-500` | `oklch(0.66 0.165 70)` | #C48D00 | 역동적 가치 |
| Gaming | `violet-500` | `oklch(0.51 0.220 290)` | #6E1FC8 | 전기적 가능성 |
| AI | `teal-500` | `oklch(0.60 0.148 195)` | #0E8A8A | 연결 인텔리전스 |

> AI Teal은 나머지 6개 컬러 위에 레이어드했을 때도 가독성을 유지하도록 H=195로 설계되었다.
> AI가 모든 사업부와 연결됨을 시각적으로 지지한다.

### 2.7 Glassmorphism 토큰

프리미엄 UI의 깊이감을 위한 Glass 패널 변수. CEO 메시지 카드, 히어로 오버레이 등에 사용.

```css
:root {
  --glass-bg-light:  oklch(1 0 0 / 60%);
  --glass-bg-dark:   oklch(0.18 0.003 80 / 55%);
  --glass-border:    oklch(1 0 0 / 18%);
  --glass-blur:      16px;
  --glass-shadow:    0 8px 32px oklch(0 0 0 / 12%);
}
```

재사용 유틸리티 (`globals.css`에 추가):

```css
@utility glass-panel {
  background: var(--glass-bg-light);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

.dark .glass-panel,
.dark\:glass-panel {
  background: var(--glass-bg-dark);
}
```

---

## 3. Typography System

### 3.1 폰트 결정

| 역할 | 폰트 | 로딩 방식 | 선택 이유 |
|---|---|---|---|
| 기본 (한국어 + 영어) | **Pretendard Variable** | `next/font/local` (WOFF2) | 9 weight axes, 한영 모두 최적, 고글리치 없는 KR 렌더링 |
| 디스플레이 헤드라인 | **Playfair Display** | `next/font/google` | 세리프 대비가 프리미엄 계층구조를 만듦; 산세리프 단독보다 고급 |
| 모노스페이스 | **Geist Mono** | `next/font/google` (기설치) | IR 수치, 코드 컨텍스트 전용 |

> **주의**: Pretendard는 Google Fonts에 없다. 반드시 셀프 호스팅으로 로드한다.
> 공식 릴리스에서 `PretendardVariable.woff2`를 다운로드: https://github.com/orioncactus/pretendard/releases

### 3.2 폰트 로딩 코드

`src/fonts/` 디렉토리를 생성하고 `PretendardVariable.woff2`를 배치한다.

`src/app/layout.tsx` 전체 교체:

```tsx
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Playfair_Display, Geist_Mono } from 'next/font/google'
import './globals.css'

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
  display: 'swap',
  preload: true,
  fallback: ['Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', 'sans-serif'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '마레아홀딩스',
  description: 'Growing Across Every Frontier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
```

`globals.css`의 `@theme inline` 폰트 설정 교체:

```css
@theme inline {
  --font-sans:    var(--font-pretendard);
  --font-display: var(--font-playfair);
  --font-mono:    var(--font-geist-mono);
  --font-heading: var(--font-playfair);
}
```

### 3.3 Fluid Type Scale

`clamp()`을 사용한 유동형 스케일. 모바일(320px)→데스크톱(1440px) 자동 보간.

```css
:root {
  /* 본문 */
  --text-xs:   clamp(0.70rem, 0.68rem + 0.10vw, 0.75rem);    /* 11–12px */
  --text-sm:   clamp(0.83rem, 0.80rem + 0.15vw, 0.875rem);   /* 13–14px */
  --text-base: clamp(0.94rem, 0.90rem + 0.20vw, 1rem);       /* 15–16px */
  --text-lg:   clamp(1.06rem, 1.00rem + 0.30vw, 1.125rem);   /* 17–18px */
  --text-xl:   clamp(1.18rem, 1.10rem + 0.40vw, 1.25rem);    /* 19–20px */
  --text-2xl:  clamp(1.30rem, 1.18rem + 0.60vw, 1.5rem);     /* 21–24px */
  --text-3xl:  clamp(1.56rem, 1.38rem + 0.90vw, 1.875rem);   /* 25–30px */
  --text-4xl:  clamp(1.88rem, 1.60rem + 1.40vw, 2.25rem);    /* 30–36px */
  --text-5xl:  clamp(2.25rem, 1.80rem + 2.25vw, 3rem);       /* 36–48px */
  --text-6xl:  clamp(2.81rem, 2.10rem + 3.55vw, 3.75rem);    /* 45–60px */
  --text-7xl:  clamp(3.38rem, 2.40rem + 4.90vw, 4.5rem);     /* 54–72px */

  /* 디스플레이 (히어로, 섹션 오프너) */
  --text-display-sm: clamp(3rem,   2.5rem + 2.5vw,  4rem);   /* 48–64px */
  --text-display-md: clamp(4rem,   3rem   + 5vw,    6rem);   /* 64–96px */
  --text-display-lg: clamp(5rem,   3.5rem + 7.5vw,  9rem);   /* 80–144px */
}
```

> Tailwind v4에서 `--text-*` 변수는 `text-*` 유틸리티로 자동 노출된다.
> `text-display-lg`, `text-5xl` 등으로 사용 가능.

### 3.4 계층구조 사용 가이드

| 용도 | 폰트 | 크기 | 예시 |
|---|---|---|---|
| 히어로 주 헤드라인 | `font-display` | `text-display-lg` | 한 줄 최대 |
| 섹션 오프너 | `font-display` | `text-5xl` | "Our Businesses" |
| 페이지 H1 | `font-sans font-bold` | `text-3xl` | 콘텐츠 페이지 |
| 카드/소섹션 제목 | `font-sans font-semibold` | `text-xl` | Division Card 제목 |
| 본문 | `font-sans font-normal` | `text-base` | 최소 16px 준수 |
| 캡션/레이블 | `font-sans font-normal` | `text-sm` | 메타데이터 |
| 수치/IR 데이터 | `font-mono` | `text-sm` | 재무 수치 |

### 3.5 한영 이중언어 타이포그래피 규칙

> 이 섹션을 건너뛰지 말 것. 한영 혼용 레이아웃에서 가장 많이 틀리는 지점이다.

**규칙 1 — 글리프 크기 차이 보정**

한국어 글리프는 동일 `font-size`에서 영어보다 시각적으로 크게 보인다. `globals.css`에 추가:

```css
@layer base {
  :lang(ko) {
    font-size: 0.95em;        /* 영어 기준 레이아웃에서 한국어 축소 */
    letter-spacing: -0.01em;  /* 한국어 자간 미세 조정 */
    word-break: keep-all;     /* 한국어 어절 단위 줄바꿈 */
  }

  :lang(ko) body,
  :lang(ko) p,
  :lang(ko) li {
    line-height: 1.8;  /* 영어 1.6 vs 한국어 1.8 — 가독성 필수 */
  }

  :lang(en) body,
  :lang(en) p {
    line-height: 1.6;
  }
}
```

**규칙 2 — 적정 행 길이 (measure)**

```css
.prose-ko { max-width: 32ch; }   /* 한국어: 25–30자 */
.prose-en { max-width: 65ch; }   /* 영어: 45–75자 */
```

**규칙 3 — 헤드라인 혼용**

영어 디스플레이 세리프 헤드라인 아래 한국어 바디 텍스트가 올 때, 영어 사이즈를 10% 축소해 시각적 무게 균형을 맞춘다.

```css
.bilingual-hero h1:lang(en) {
  font-size: calc(var(--text-display-md) * 0.9);
}
```

---

## 4. Spacing, Layout & Grid

### 4.1 Spacing 랜드마크

Tailwind v4는 4px 기본 단위(`--spacing: 0.25rem`)를 사용한다. 마레아 브랜드에서 자주 사용하는 값:

| Tailwind 클래스 | 값 | 픽셀 | 용도 |
|---|---|---|---|
| `p-4` | 1rem | 16px | 컴포넌트 내부 tight padding |
| `p-6` | 1.5rem | 24px | 버튼, 인풋 padding 표준 |
| `p-8` | 2rem | 32px | 카드 padding |
| `gap-4` | 1rem | 16px | Bento grid gap |
| `py-12` | 3rem | 48px | 섹션 내부 간격 |
| `py-24` | 6rem | 96px | 섹션 수직 padding (모바일) |
| `py-32` | 8rem | 128px | 섹션 수직 padding (데스크톱) |
| `pb-48` | 12rem | 192px | 히어로 하단 padding |

### 4.2 Container 시스템

```css
@theme inline {
  --container-sm:   640px;
  --container-md:   768px;
  --container-lg:   1024px;
  --container-xl:   1280px;
  --container-2xl:  1440px;   /* 대부분 섹션의 최대 너비 */
  --container-hero: 1920px;   /* 히어로 풀블리드 최대 */
}
```

표준 섹션 패턴: `max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16`

데스크톱에서 64px 사이드 패딩이 "넓은 마진" 프리미엄 감을 만든다.

### 4.3 7-Division Bento Grid

```css
/* Business Division Bento — globals.css에 추가 */
@utility bento-7 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-4);
}

/* AI 카드: 2열 점유 — '연결 레이어' 역할을 시각적으로 표현 */
@utility bento-ai-featured {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .bento-7 {
    grid-template-columns: 1fr;
  }
  .bento-ai-featured {
    grid-column: span 1;
  }
}
```

JSX 사용 예:

```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  {divisions.slice(0, 6).map(div => (
    <DivisionCard key={div.id} division={div} />
  ))}
  {/* AI 카드 — featured (2열) */}
  <DivisionCard division={divisions[6]} variant="featured" className="md:col-span-2" />
</div>
```

### 4.4 Border Radius 스케일

현재 `globals.css`의 `--radius: 0.625rem` 기반 스케일 실사용 가이드:

| CSS 변수 | 값 (계산) | 픽셀 | 용도 |
|---|---|---|---|
| `--radius-sm` | `calc(0.625rem * 0.6)` | ≈6px | 배지, 칩, 태그 |
| `--radius-md` | `calc(0.625rem * 0.8)` | ≈8px | 인풋, 드롭다운 |
| `--radius-lg` | `0.625rem` | 10px | 버튼, 카드 (기본값) |
| `--radius-xl` | `calc(0.625rem * 1.4)` | ≈14px | 피처 카드 |
| `--radius-2xl` | `calc(0.625rem * 1.8)` | ≈18px | 모달, 히어로 카드 |
| `--radius-3xl` | `calc(0.625rem * 2.2)` | ≈22px | 대형 이미지 컨테이너 |
| `--radius-4xl` | `calc(0.625rem * 2.6)` | ≈26px | Bento grid 셀 |

---

## 5. Motion & Animation

### 5.1 모션 철학

모든 애니메이션은 무언가를 전달해야 한다. 상태 변화, 계층 관계, 공간적 맥락. 제거해도 정보 손실이 없는 애니메이션은 삭제한다. `prefers-reduced-motion`은 선택 사항이 아닌 필수 요구사항이다.

### 5.2 Layer 1 — tw-animate-css (기설치)

컴포넌트 상태 변화와 단일 요소 스크롤 리빌에 사용. `tw-animate-css@1.4.0`이 이미 설치되어 있다.

**사용 가능한 프리미티브:**

```tsx
{/* 뷰포트 진입 시 등장 */}
<div className="animate-in fade-in zoom-in-95 duration-300 delay-100">
  콘텐츠
</div>

{/* 아래에서 슬라이드 업 */}
<section className="animate-in slide-in-from-bottom-8 fade-in duration-500">
  섹션 콘텐츠
</section>

{/* 자식 요소 stagger — CSS 커스텀 프로퍼티로 딜레이 */}
{items.map((item, i) => (
  <div
    key={item.id}
    className="animate-in fade-in slide-in-from-bottom-4 duration-400"
    style={{ '--tw-animation-delay': `${i * 100}ms` } as React.CSSProperties}
  >
    {item.content}
  </div>
))}
```

### 5.3 Layer 2 — Framer Motion (설치 필요)

```bash
npm install framer-motion
```

tw-animate-css가 처리하지 못하는 영역을 담당:
- 오케스트레이션된 시퀀스 (stagger, when, delay chain)
- 물리 기반 스프링 애니메이션 (히어로 텍스트 키네틱 효과)
- 레이아웃 애니메이션 (Bento Grid 리오더)
- 페이지 전환
- 스크롤 기반 패럴랙스 (`useScroll`, `useTransform`)
- 제스처 인터랙션 (hover spring response)

**패턴 A — 페이지 전환 래퍼:**

```tsx
// src/components/shared/PageTransition.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 }
  },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
```

**패턴 B — 키네틱 헤드라인 (히어로 텍스트):**

```tsx
// 단어 단위로 순차 등장
function KineticHeadline({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <h1 className="font-display text-display-md overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}
```

**패턴 C — 스크롤 숫자 카운터:**

```tsx
'use client'
import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useInView, motion } from 'framer-motion'

function NumberCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) motionValue.set(target)
  }, [isInView, motionValue, target])

  return (
    <motion.span ref={ref}>
      {springValue.get().toFixed(0)}{suffix}
    </motion.span>
  )
}
```

**패턴 D — Division 카드 hover:**

```tsx
<motion.div
  whileHover={{ y: -4, boxShadow: '0 20px 60px oklch(0 0 0 / 15%)' }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  className="rounded-4xl bg-card border border-border cursor-pointer"
>
  {/* 카드 내용 */}
</motion.div>
```

### 5.4 Easing Vocabulary

| 이름 | Cubic Bezier | 용도 |
|---|---|---|
| `marea-ease-out` | `[0.22, 1, 0.36, 1]` | 요소 등장, entrance |
| `marea-ease-in` | `[0.64, 0, 0.78, 0]` | 요소 퇴장, exit |
| `marea-ease-inout` | `[0.65, 0, 0.35, 1]` | 페이지 전환, smooth |
| `marea-spring` | `spring(stiffness: 300, damping: 30)` | 인터랙티브 요소 hover/tap |

### 5.5 Duration 표준

| 시간 | 용도 |
|---|---|
| 50ms | 아이콘 상태 변화 (색상, 투명도) |
| 150ms | 버튼 hover, 인풋 focus |
| 300ms | 모달/드롭다운 등장·퇴장 |
| 500ms | 섹션 리빌 애니메이션 |
| 600ms | 히어로 텍스트 키네틱, 단어 단위 |
| 800ms | 풀 페이지 전환 |

### 5.6 Reduced Motion 필수 블록

`globals.css`의 `@layer base`에 추가:

```css
@layer base {
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}
```

Framer Motion 사용 시 컴포넌트에서:

```tsx
import { useReducedMotion } from 'framer-motion'

function AnimatedComponent() {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      animate={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
    >
      ...
    </motion.div>
  )
}
```

---

## 6. Component Patterns

### 6.1 아키텍처 주의사항

> 이 프로젝트는 `@base-ui/react@1.3.0`을 프리미티브 레이어로 사용한다 (Radix UI가 아님).
> 컴포넌트 Props API가 대부분의 Shadcn 튜토리얼과 다르다.
> 프로퍼티 레퍼런스는 `node_modules/@base-ui/react/`를 직접 확인할 것.
> 새 컴포넌트 추가 시 `src/components/ui/button.tsx`가 정식 패턴이다.

### 6.2 DivisionCard

```tsx
// src/components/division/DivisionCard.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Division } from '@/lib/divisions'

interface DivisionCardProps {
  division: Division
  variant?: 'default' | 'featured' | 'glass'
  className?: string
}

export function DivisionCard({ division, variant = 'default', className }: DivisionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={cn(
        division.divisionClass,
        'rounded-4xl border border-border bg-card p-8 cursor-pointer group',
        variant === 'featured' && 'md:col-span-2',
        variant === 'glass' && 'glass-panel',
        className
      )}
    >
      <Link href={division.href} className="flex flex-col h-full gap-4">
        {/* Division 액센트 라인 */}
        <div className="w-12 h-1 rounded-full bg-division-accent" />

        <div className="flex-1">
          <p className="text-sm text-muted-foreground font-sans">
            {division.nameEn}
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-1">
            {division.nameKo}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {division.taglineKo}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-division-accent text-sm font-medium
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>자세히 보기</span>
          <span aria-hidden>→</span>
        </div>
      </Link>
    </motion.div>
  )
}
```

### 6.3 RevealSection

스크롤 트리거 등장을 처리하는 재사용 래퍼.

```tsx
// src/components/shared/RevealSection.tsx
'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function RevealSection({ children, className, delay = 0 }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

### 6.4 GlassPanel

```tsx
// src/components/shared/GlassPanel.tsx
import { cn } from '@/lib/utils'

interface GlassPanelProps {
  children: React.ReactNode
  className?: string
}

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div className={cn('glass-panel rounded-2xl', className)}>
      {children}
    </div>
  )
}
```

### 6.5 Header (Sticky Glassmorphism)

```tsx
// src/components/layout/Header.tsx
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass-panel border-b border-border'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="font-display text-xl font-bold">
            MAREA
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {['About', 'Businesses', 'Vision', 'ESG', 'IR', 'Newsroom'].map(item => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* 언어 토글 */}
          <div className="flex items-center gap-3 text-sm">
            <button className="text-foreground font-medium">KO</button>
            <span className="text-border">|</span>
            <button className="text-muted-foreground hover:text-foreground transition-colors">EN</button>
          </div>
        </div>
      </div>
    </header>
  )
}
```

### 6.6 Button Variant 확장

기존 `src/components/ui/button.tsx`를 수정하지 않고, 프로젝트 전용 variant를 별도 파일로 정의:

```tsx
// src/components/shared/DivisionCta.tsx
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface DivisionCtaProps {
  href: string
  children: React.ReactNode
  className?: string
}

// Division 컨텍스트 안에서만 사용. --division-accent 변수를 상속받아 사용.
export function DivisionCta({ href, children, className }: DivisionCtaProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
        'bg-division-accent text-white font-medium text-sm',
        'hover:bg-division-accent-dark transition-colors duration-150',
        className
      )}
    >
      {children}
    </Link>
  )
}
```

---

## 7. Page-Specific Guidance

### 7.1 홈페이지 섹션 매핑

| 섹션 | 컴포넌트 | 애니메이션 레이어 | Division 클래스 |
|---|---|---|---|
| Hero (7-slide) | `HeroSection` | Framer Motion `AnimatePresence` | `.division-{current}` (JS로 전환) |
| Our Businesses | `DivisionCard` 그리드 | tw-animate-css scroll reveal | 카드별 각자 `.division-*` |
| Why Marea | `RevealSection` + pillars | Framer Motion stagger | 없음 |
| CEO Message | `GlassPanel` | tw-animate-css `fade-in` | 없음 |
| Numbers | `NumberCounter` | Framer Motion spring | 없음 |
| Latest News | `NewsCard` ×3 | tw-animate-css | 없음 |

### 7.2 Division 페이지 레이아웃

```tsx
// src/app/[lang]/(marketing)/businesses/[division]/layout.tsx
import { notFound } from 'next/navigation'
import type { Division } from '@/lib/divisions'

const divisionClasses: Record<Division['id'], string> = {
  education:     'division-education',
  realestate:    'division-realestate',
  finance:       'division-finance',
  entertainment: 'division-entertainment',
  trade:         'division-trade',
  gaming:        'division-gaming',
  ai:            'division-ai',
}

export default function DivisionLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { division: string }
}) {
  const cls = divisionClasses[params.division as Division['id']]
  if (!cls) notFound()

  return <div className={cls}>{children}</div>
}
```

이 레이아웃만으로 해당 페이지의 모든 컴포넌트가 올바른 Division 컬러를 자동으로 소비한다.

### 7.3 Dark Mode 구현

`next-themes` 패키지를 사용한다. 클래스 기반 전환 (`.dark`)은 이미 `globals.css`에 설정되어 있다.

```bash
npm install next-themes
```

```tsx
// src/app/[lang]/layout.tsx (locale-aware root)
import { ThemeProvider } from 'next-themes'

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
```

Header의 언어 토글 옆에 다크모드 토글 버튼 배치. `useTheme()` 훅으로 현재 테마를 읽고 전환한다.

---

## 8. Internationalization

### 8.1 URL 구조

App Router의 로케일 프리픽스 전략을 사용한다:

```
/ko/about       → 한국어 About 페이지
/en/about       → 영어 About 페이지
/ko/businesses/education
/en/businesses/education
```

루트 `/`는 사용자의 브라우저 언어를 감지해 리다이렉트한다.

### 8.2 미들웨어 설정

```tsx
// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const locales = ['ko', 'en']
const defaultLocale = 'ko'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = request.headers.get('accept-language')?.startsWith('en') ? 'en' : defaultLocale
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|fonts|images).*)'],
}
```

> **Next.js 16 주의**: 이 버전의 i18n 라우팅 API를 `node_modules/next/dist/docs/`에서 반드시 확인할 것.
> 이전 버전의 `next.config.ts` i18n 설정 키는 App Router에서 작동하지 않는다.

### 8.3 타이포그래피와 lang 어트리뷰트 연결

`src/app/layout.tsx`에서 루트 `<html>` 태그에 `lang={locale}`을 적용하면 Section 3.5의 `:lang(ko)` CSS 규칙이 자동으로 활성화된다. 페이지 내 인라인 언어 전환 시:

```tsx
// 영어 고유명사가 한국어 문장 중간에 나올 때
<p lang="ko">
  마레아홀딩스는 <span lang="en">AI-first</span> 전략을 추구합니다.
</p>
```

---

## 9. File & Folder Conventions

### 9.1 목표 폴더 구조

```
src/
├── app/
│   ├── fonts/                          ← PretendardVariable.woff2
│   ├── [lang]/                         ← 로케일 라우팅
│   │   ├── (marketing)/                ← 마케팅 레이아웃 그룹
│   │   │   ├── layout.tsx              ← ThemeProvider 포함
│   │   │   ├── page.tsx                ← 홈페이지
│   │   │   ├── about/
│   │   │   ├── businesses/
│   │   │   │   ├── page.tsx            ← 모든 사업부 개요
│   │   │   │   └── [division]/
│   │   │   │       ├── layout.tsx      ← division class 적용
│   │   │   │       └── page.tsx
│   │   │   ├── vision/
│   │   │   ├── esg/
│   │   │   ├── ir/
│   │   │   └── newsroom/
│   ├── globals.css                     ← 모든 토큰의 단일 진실 원천
│   ├── layout.tsx                      ← 루트 레이아웃, 폰트 로딩
│   └── favicon.ico
│
├── components/
│   ├── ui/                             ← Shadcn 컴포넌트 (직접 수정 금지)
│   ├── layout/                         ← Header, Footer, Navigation
│   ├── sections/                       ← HeroSection, BusinessGrid, WhyMarea, NumbersSection
│   ├── division/                       ← DivisionCard, DivisionHero, DivisionNav
│   └── shared/                         ← RevealSection, GlassPanel, NumberCounter, PageTransition
│
└── lib/
    ├── utils.ts                        ← 기존 cn() 유틸리티
    ├── divisions.ts                    ← 사업부 메타데이터 (단일 진실 원천)
    └── i18n.ts                         ← 번역 유틸리티
```

### 9.2 divisions.ts 데이터 파일

모든 사업부 메타데이터의 단일 진실 원천. Bento Grid와 Division 라우터 양쪽이 이 파일을 참조한다.

```ts
// src/lib/divisions.ts

export type DivisionId =
  | 'education'
  | 'realestate'
  | 'finance'
  | 'entertainment'
  | 'trade'
  | 'gaming'
  | 'ai'

export interface Division {
  id: DivisionId
  nameKo: string
  nameEn: string
  taglineKo: string
  taglineEn: string
  divisionClass: string   // 예: 'division-education'
  href: string
  featured?: boolean      // AI = true (Bento에서 col-span-2)
}

export const divisions: Division[] = [
  {
    id: 'education',
    nameKo: '마레아 에듀',
    nameEn: 'Marea Education',
    taglineKo: '미래를 만드는 교육',
    taglineEn: 'Building Minds, Building Futures',
    divisionClass: 'division-education',
    href: '/businesses/education',
  },
  {
    id: 'realestate',
    nameKo: '마레아 리얼에스테이트',
    nameEn: 'Marea Real Estate',
    taglineKo: '커뮤니티를 형성하는 공간',
    taglineEn: 'Spaces That Shape Communities',
    divisionClass: 'division-realestate',
    href: '/businesses/realestate',
  },
  {
    id: 'finance',
    nameKo: '마레아 파이낸스',
    nameEn: 'Marea Finance',
    taglineKo: '기회를 만드는 자본',
    taglineEn: 'Capital That Creates Opportunity',
    divisionClass: 'division-finance',
    href: '/businesses/finance',
  },
  {
    id: 'entertainment',
    nameKo: '마레아 엔터',
    nameEn: 'Marea Entertainment',
    taglineKo: '세상을 움직이는 이야기',
    taglineEn: 'Stories That Move the World',
    divisionClass: 'division-entertainment',
    href: '/businesses/entertainment',
  },
  {
    id: 'trade',
    nameKo: '마레아 트레이드',
    nameEn: 'Marea Trade',
    taglineKo: '시장을 연결하는 가치',
    taglineEn: 'Connecting Markets, Creating Value',
    divisionClass: 'division-trade',
    href: '/businesses/trade',
  },
  {
    id: 'gaming',
    nameKo: '마레아 게임즈',
    nameEn: 'Marea Games',
    taglineKo: '가능성이 시작되는 곳',
    taglineEn: 'Where Play Meets Possibility',
    divisionClass: 'division-gaming',
    href: '/businesses/gaming',
  },
  {
    id: 'ai',
    nameKo: '마레아 AI',
    nameEn: 'Marea AI',
    taglineKo: '모든 것의 중심에 있는 인텔리전스',
    taglineEn: 'Intelligence at the Heart of Everything',
    divisionClass: 'division-ai',
    href: '/businesses/ai',
    featured: true,  // Bento에서 2열 점유
  },
]
```

---

## 10. Implementation Checklist

아래 단계 순서대로 진행하면 blank repo에서 완성된 디자인 시스템이 구현된다.

### Phase 1 — 토큰 설정 (~2시간)

- [ ] Section 2.3: `globals.css`에 Tier 1 Global Palette 블록 추가
- [ ] Section 2.4: `:root`와 `.dark` 블록을 Semantic Token으로 교체
- [ ] Section 2.5: `.division-*` Tier 3 클래스 추가
- [ ] Section 2.7: Glassmorphism 토큰 및 `@utility glass-panel` 추가
- [ ] Section 2.4: `@theme inline`에 `--color-division-*` 유틸리티 추가
- [ ] Section 3.3: Fluid type scale `--text-*` 변수 추가
- [ ] Section 5.6: `prefers-reduced-motion` 블록을 `@layer base`에 추가

### Phase 2 — 폰트 & 타이포그래피 (~1시간)

- [ ] `src/fonts/` 디렉토리 생성
- [ ] Pretendard GitHub 릴리스에서 `PretendardVariable.woff2` 다운로드 후 배치
- [ ] Section 3.2: `layout.tsx`를 Pretendard + Playfair 로딩 코드로 교체
- [ ] Section 3.2: `globals.css` `@theme inline` 폰트 설정 업데이트
- [ ] Section 3.5: `@layer base`에 한영 이중언어 CSS 규칙 추가

### Phase 3 — 코어 컴포넌트 (2–3일)

- [ ] `src/lib/divisions.ts` 생성 (Section 9.2)
- [ ] `src/components/shared/RevealSection.tsx` (Section 6.3)
- [ ] `src/components/shared/GlassPanel.tsx` (Section 6.4)
- [ ] `src/components/layout/Header.tsx` (Section 6.5)
- [ ] `src/components/division/DivisionCard.tsx` (Section 6.2)

### Phase 4 — 애니메이션 셋업 (1일)

- [ ] `npm install framer-motion`
- [ ] `src/components/shared/PageTransition.tsx` (Section 5.3 패턴 A)
- [ ] Hero 키네틱 텍스트 컴포넌트 (Section 5.3 패턴 B)
- [ ] `src/components/shared/NumberCounter.tsx` (Section 5.3 패턴 C)

### Phase 5 — 홈페이지 섹션 (4–7일)

- [ ] `src/components/sections/HeroSection.tsx` — 7-slide 순환
- [ ] `src/components/sections/BusinessGrid.tsx` — Bento Grid
- [ ] `src/components/sections/WhyMarea.tsx` — 3-pillar 섹션
- [ ] `src/components/sections/NumbersSection.tsx` — 4개 카운터
- [ ] `src/components/sections/LatestNews.tsx` — 3-card 프리뷰

### Phase 6 — Division 페이지 (2–3일)

- [ ] `src/app/[lang]/(marketing)/businesses/[division]/layout.tsx` (Section 7.2)
- [ ] `src/components/division/DivisionHero.tsx`
- [ ] `src/components/division/DivisionServices.tsx`
- [ ] `src/components/division/AiConnect.tsx` — AI 연결 레이어 섹션
- [ ] i18n 미들웨어 설정 (Section 8.2)

---

## 11. Appendix

### 11.1 OKLCH 치트시트

```
밝게 만들기   → L 값 올리기   (예: 0.48 → 0.65)
어둡게 만들기  → L 값 내리기   (예: 0.48 → 0.30)
채도 낮추기   → C 값 내리기   (예: 0.165 → 0.060)
채도 높이기   → C 값 올리기   (예: 0.165 → 0.220, 최대 ~0.37)
색상 이동     → H 각도 변경   (예: 300° 보라 → 264° 인디고)
투명도 추가   → / XX% 추가   (예: oklch(0.48 0.165 300 / 50%))
```

두 OKLCH 색상 사이의 상대적 투명도 (CSS 상대색):
```css
/* color-mix로 10% 틴트 만들기 */
background: color-mix(in oklch, var(--color-sapphire-500) 10%, transparent);

/* 상대 색상 구문 (Chrome 119+) */
background: oklch(from var(--color-sapphire-500) l c h / 10%);
```

### 11.2 Tailwind v4 vs v3 주요 차이점

이 프로젝트는 Tailwind v4를 사용한다. v3 경험이 있는 개발자를 위한 주요 차이:

1. **`tailwind.config.js` 없음** — 모든 테마 확장은 `globals.css`의 `@theme` 블록에서 처리
2. **CSS 변수 자동 유틸리티 노출** — `--text-brand` 정의 시 `text-brand` 클래스 자동 생성
3. **다크모드 선언 방식** — `@custom-variant dark (&:is(.dark *))` (이미 globals.css에 설정됨)
4. **임의값은 동일** — `text-[oklch(0.52_0.175_232)]` 형식 그대로 사용 가능
5. **`@apply`는 지양** — 재사용 패턴은 `@utility` 블록으로 정의

### 11.3 Shadcn base-nova 스타일 주의사항

1. **프리미티브**: `@base-ui/react` 사용, Radix UI 아님 — Props 이름 다름
2. **아이콘 스페이싱**: `data-[icon=inline-end]` 데이터 어트리뷰트로 처리
3. **컴포넌트 그룹**: `group/button` 형식의 네임드 그룹 사용 — 자식 스타일링 시 활용 가능

### 11.4 패키지 버전 고정

```json
{
  "next": "16.2.1",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "tailwindcss": "^4",
  "tw-animate-css": "^1.4.0",
  "@base-ui/react": "^1.3.0",
  "shadcn": "^4.1.0",
  "framer-motion": "^12.x",
  "next-themes": "^0.4.x"
}
```

> `framer-motion`과 `next-themes`는 이 가이드 작성 시점 기준 최신 버전을 설치한다.
> 메이저 버전 업그레이드 전 Breaking Changes를 반드시 확인할 것.

---

*companion: [docs/site-structure.md](./site-structure.md)*
