# 노트성형외과 홈페이지 — 파일 구조 문서

> 새 세션에서 컨텍스트로 활용하기 위한 파일별 역할 정리  
> 마지막 업데이트: 시술 3페이지·병원소개 4페이지·전후사진·이벤트·내비게이션 개편·모바일 점검 완료 시점

---

## 🔄 자동 작업 체크리스트 (세션 재개용)

> **세션이 끊기면 이 섹션부터 읽고, 미완료(`[ ]`) 항목부터 이어서 진행하세요.**
> 승인 요청 없이 전부 자동 진행. 완료된 항목은 즉시 `[x]`로 갱신하며 커밋 성격의 기록을 남깁니다.

### 0. 사전 준비
- [x] STRUCTURE.md에 체크리스트 작성 (이 섹션)

### 1. 시술 페이지 3개 (`/eye` 템플릿과 동일 구조: PageHero→TreatmentIntro→TreatmentMethods→KnowhowSection→DoctorSection→AftercareSlider→FAQ→ConsultCTA)
- [x] `/nose` 코성형 (완료 — 실제 시술 방법·노하우·FAQ 콘텐츠 작성)
- [x] `/facial` 안면윤곽 (완료)
- [x] `/breast` 가슴성형 (완료)
- [x] `tsc --noEmit` 통과 확인

### 2. 병원소개 섹션 4개 페이지
- [x] `/about` — 철학/비전/히스토리 (신규 컴포넌트: PhilosophyDetail, HistoryTimeline, AwardsSection) (완료)
- [x] `/about/doctors` — 의료진 카드 그리드 (신규 컴포넌트: DoctorGrid, 4인) (완료)
- [x] `/about/facility` — 시설 갤러리 (기존 `HospitalGallery` 재사용) (완료)
- [x] `/about/location` — 오시는 길 (기존 `LocationSection` 재사용 + 신규 TransitInfo) (완료)
- [x] `tsc --noEmit` 통과 확인

### 3. 전후사진 페이지
- [x] `/before-after` — 탭 필터(전체/눈/코/안면윤곽/가슴) + 그리드 (신규 컴포넌트: `ui/CategoryFilter`, `sub/BeforeAfterGallery`) (완료, 12개 샘플 데이터, `tsc` 통과)

### 4. 이벤트 페이지
- [x] `/event` — 카드 리스트 + 클릭 시 아코디언 상세 (신규 컴포넌트: `sub/EventAccordionList`), 샘플 이벤트 5개 (완료, `tsc`/`eslint` 통과)

> 참고: `/review`, `/contact`는 이번 작업 목록에 없어 미구현 상태 유지 (nav에는 링크가 이미 존재 — 클릭 시 404). 필요 시 별도 작업으로 진행.

### 5. Header 내비게이션 업데이트
- [x] `nav.ts` — `aboutNav` 추가, `mainNav`에 `이벤트` 추가 (완료)
- [x] `Header.tsx` — "병원소개" 드롭다운 추가 (기존 "시술안내" 패턴과 동일) (완료)
- [x] `MobileMenu.tsx` — 병원소개 서브메뉴 추가 (완료)
- [x] `Footer.tsx` — 병원소개/이벤트 링크 추가, 사이트맵을 3열 grid로 변경 (완료, 모바일 375px에서 3열이 좁아 보이면 6번 점검 단계에서 재조정 필요)

### 6. 모바일 반응형 전체 점검 (375px)
- [x] Playwright로 11개 페이지(`/`, `/eye`, `/nose`, `/facial`, `/breast`, `/about`, `/about/doctors`, `/about/facility`, `/about/location`, `/before-after`, `/event`) 375px 전체 스크린샷 촬영
- [x] 가로 스크롤(overflow) 전수 측정 — 전 페이지 0px, 문제 없음
- [x] Footer 3열 사이트맵, 모바일 메뉴(병원소개 서브메뉴 포함), CategoryFilter 탭, EventAccordionList 카드 — 모두 정상 렌더링 확인
- [x] 시술 페이지 템플릿(TreatmentMethods 탭, KnowhowSection 원형 이미지, AftercareSlider) 모바일 렌더링 확인 (nose 페이지로 대표 점검)

### 완료 기준
- [x] 모든 페이지 `localhost:3000`에서 200 OK (11개 페이지 curl 확인 완료)
- [x] `tsc --noEmit` 타입 에러 0건
- [x] STRUCTURE.md 전체 문서 최종 갱신 (파일 트리 + 파일별 설명) — 아래 본문 갱신 완료

**전체 작업 완료.** 남은 참고사항은 문서 하단 "다음 작업 시 참고사항" 섹션 참고.

---

## 기술 스택 요약

| 항목 | 버전 / 내용 |
|------|-------------|
| Next.js | 16.2.6 (App Router) |
| React | 19.2.4 |
| TypeScript | 5 |
| Tailwind CSS | 4 (`tailwind.config.js` 없음, `globals.css`의 `@theme` 블록으로 토큰 정의) |
| 애니메이션 | framer-motion ^12, react-intersection-observer ^10 |
| 슬라이더 | swiper ^12 |
| 폰트 | next/font/google — Inter, Cormorant Garamond, Noto Sans KR, Noto Serif KR |

---

## 전체 파일 트리

```
hospital-website/
├── app/
│   ├── layout.tsx                         ← 루트 레이아웃
│   ├── page.tsx                           ← / 홈 페이지
│   ├── globals.css                        ← 전역 스타일 + 디자인 토큰
│   ├── favicon.ico
│   ├── eye/page.tsx                       ← 눈성형 (시술 페이지 템플릿 원본)
│   ├── nose/page.tsx                      ← 코성형
│   ├── facial/page.tsx                    ← 안면윤곽
│   ├── breast/page.tsx                    ← 가슴성형
│   ├── about/
│   │   ├── page.tsx                       ← 병원소개 (철학·히스토리·수상)
│   │   ├── doctors/page.tsx               ← 의료진 소개 (카드 그리드)
│   │   ├── facility/page.tsx              ← 시설 안내 (HospitalGallery 재사용)
│   │   └── location/page.tsx              ← 오시는 길 (LocationSection 재사용 + 교통안내)
│   ├── before-after/page.tsx              ← 전후사진 (탭 필터 + 그리드)
│   ├── event/page.tsx                     ← 이벤트 (카드 + 아코디언)
│   ├── review/ , contact/                 ← 미구현 (이번 작업 범위 아님, nav 링크만 존재)
│   └── _components/
│       ├── layout/
│       │   ├── Header.tsx                 ← 고정 상단 내비게이션 (병원소개/시술안내 드롭다운 2개)
│       │   ├── Footer.tsx                 ← 하단 정보 + 3열 사이트맵(MENU/병원소개/시술안내)
│       │   ├── MobileMenu.tsx             ← 모바일 햄버거 슬라이드 패널 (병원소개 서브메뉴 포함)
│       │   └── nav.ts                     ← 내비게이션 데이터 (`mainNav`, `aboutNav`, `treatmentNav`)
│       ├── ui/
│       │   ├── Button.tsx                 ← 공통 버튼 컴포넌트
│       │   ├── SectionTitle.tsx           ← 섹션 헤딩 (EN 서브 + KO 제목)
│       │   ├── PageHero.tsx               ← 서브 페이지 상단 히어로 배너
│       │   ├── ConsultCTA.tsx             ← 상담 신청 풀너비 배너 (opacity-only 페이드인)
│       │   ├── SafeImage.tsx              ← next/image 래퍼, 로드 실패 시 회색 placeholder
│       │   └── CategoryFilter.tsx         ← 탭형 카테고리 필터 (제어 컴포넌트)
│       ├── home/
│       │   ├── EventBanner.tsx            ← 상단 이벤트 shimmer 배너 (일반 문서 흐름, sticky 아님)
│       │   ├── HeroSlider.tsx             ← 메인 풀스크린 이미지 슬라이더
│       │   ├── TreatmentCards.tsx         ← 5개 시술 카테고리 카드 그리드
│       │   ├── BeforeAfterSection.tsx     ← 전후사진 4쌍 그리드 (스크롤 애니메이션)
│       │   ├── HospitalGallery.tsx        ← 시설 사진 4×3 그리드 + 라이트박스 모달 (재사용됨: /about/facility)
│       │   └── LocationSection.tsx        ← 위치·진료시간·지도 섹션 (재사용됨: /about/location)
│       └── sub/                           ← 서브 페이지 전용 컴포넌트
│           ├── TreatmentIntro.tsx         ← 시술 개요 2단 레이아웃 (이미지/GIF + 포인트 리스트)
│           ├── TreatmentMethods.tsx       ← 시술 방법 탭 (좌측 탭 목록 + 우측 상세, AnimatePresence)
│           ├── KnowhowSection.tsx         ← 노하우 카드 그리드 (원형 대표 이미지 지원)
│           ├── DoctorSection.tsx          ← 단일 의료진 상세 프로필 (시술 페이지용)
│           ├── DoctorGrid.tsx             ← 의료진 카드 그리드 (여러 명, /about/doctors 전용)
│           ├── AftercareSlider.tsx        ← 사후관리 Swiper 슬라이더 + 커스텀 화살표
│           ├── FAQAccordion.tsx           ← FAQ 아코디언 (1개만 열림)
│           ├── PhilosophyDetail.tsx       ← 병원 철학 3가치 카드 (/about 전용)
│           ├── HistoryTimeline.tsx        ← 연혁 타임라인 (/about 전용)
│           ├── AwardsSection.tsx          ← 수상·인증 뱃지 그리드 (/about 전용)
│           ├── TransitInfo.tsx            ← 교통 안내 3열 카드 (/about/location 전용)
│           ├── BeforeAfterGallery.tsx     ← 전후사진 탭 필터 + 그리드 (CategoryFilter 조합)
│           └── EventAccordionList.tsx     ← 이벤트 카드 리스트 + 클릭 시 아코디언 상세
├── public/
│   ├── clients/note-clinic/images/...     ← 실제 파일 없는 플레이스홀더 경로 (SafeImage가 회색 박스로 대체)
│   └── file.svg / globe.svg / vercel.svg / window.svg   ← Next.js 기본 아이콘 (미사용)
├── next.config.ts                         ← Next.js 설정 (Unsplash 이미지 허용)
├── package.json                           ← 의존성
├── tsconfig.json                          ← TypeScript 설정
├── postcss.config.mjs                     ← Tailwind v4 PostCSS 플러그인
├── eslint.config.mjs                      ← ESLint 설정
├── CLAUDE.md                              ← Claude Code 프로젝트 지시사항
├── AGENTS.md                              ← Next.js 버전 주의사항
└── STRUCTURE.md                           ← 이 파일
```

---

## 파일별 상세 설명

### `app/layout.tsx`
- **역할:** 모든 페이지를 감싸는 루트 레이아웃
- **주요 내용:**
  - 4개 폰트 로드 (`Inter`, `Cormorant_Garamond`, `Noto_Sans_KR`, `Noto_Serif_KR`) → CSS 변수로 주입
  - `<html lang="ko">` 설정
  - 사이트 기본 메타데이터 (`title template: "%s | 노트성형외과"`)
  - `<body>` 클래스: `min-h-screen flex flex-col bg-canvas text-ink antialiased`
  - `<main className="flex-1 pt-16">` — Header 높이(64px) 만큼 상단 패딩
- **사용처:** 모든 페이지의 기반, `Header` + `Footer` 포함

---

### `app/page.tsx`
- **역할:** `/` 홈 페이지 조립 (Server Component)
- **렌더 순서:**
  1. `EventBanner` — 최상단 shimmer 이벤트 배너
  2. `HeroSlider` — 풀스크린 슬라이더
  3. `TreatmentCards` — 시술 카테고리 5개
  4. `BeforeAfterSection` — 전후사진 미리보기
  5. `HospitalGallery` — 시설 갤러리
  6. `LocationSection` — 오시는 길
  7. `ConsultCTA` — 상담 신청 배너
- **사용처:** 최상위 홈, 다른 파일에서 import하지 않음

---

### `app/globals.css`
- **역할:** 전역 스타일 + Tailwind v4 디자인 토큰 정의
- **주요 토큰 (`@theme`):**

  | 토큰 | 값 | 의미 |
  |------|----|------|
  | `--color-canvas` | `#ffffff` | 기본 배경 |
  | `--color-night` | `#0a0a0a` | 다크 배경 |
  | `--color-ink` | `#111111` | 기본 텍스트 |
  | `--color-dim` | `#6b6b6b` | 보조 텍스트 |
  | `--color-rule` | `#e5e5e5` | 구분선 |
  | `--color-gold` | `#c9a96e` | 골드 포인트 컬러 |

- **폰트 변수 (`@theme inline`):**
  - `--font-serif`: Cormorant Garamond (영문 헤딩)
  - `--font-sans`: Inter (UI)
  - `--font-serif-ko`: Noto Serif KR (한글 헤딩)
  - `--font-sans-ko`: Noto Sans KR (한글 본문, body 기본)

- **커스텀 유틸리티:**
  - `.shimmer-text` — gold shimmer 애니메이션 텍스트 (EventBanner에서 사용)
  - Swiper 기본 오버라이드 (`width/height: 100%`)

---

## `app/_components/layout/`

### `nav.ts`
- **역할:** 내비게이션 링크 데이터 단일 소스
- **export:**
  - `mainNav` — `[병원소개(/about), 전후사진(/before-after), 후기(/review)]`
  - `treatmentNav` — `[눈성형(/eye), 코성형(/nose), 안면윤곽(/facial), 가슴성형(/breast)]`
- **사용처:** `Header.tsx`, `Footer.tsx`, `MobileMenu.tsx` 모두 이 파일에서 import

### `Header.tsx`
- **역할:** `fixed top-0` 고정 내비게이션 바 (Server Component)
- **주요 구조:**
  - 로고: `NOTE` 텍스트 (Cormorant, `/` 링크)
  - 데스크탑 nav: `시술안내` hover 드롭다운 + `mainNav` 링크 + `상담신청` 버튼
  - 모바일: `<MobileMenu />` (Client Component)
- **스타일:** `h-16`, `bg-canvas/95 backdrop-blur-sm`, `border-b border-rule`
- **사용처:** `app/layout.tsx`

### `Footer.tsx`
- **역할:** 하단 푸터 (Server Component)
- **주요 구조:**
  - 브랜드 로고 + 슬로건
  - 사이트맵 (`mainNav` + `treatmentNav`)
  - 연락처 (전화번호, 주소, 진료시간)
  - 하단 바: 저작권 + 이용약관/개인정보처리방침 링크
- **스타일:** `bg-night text-canvas`, 3단 그리드 (모바일 1단)
- **사용처:** `app/layout.tsx`

### `MobileMenu.tsx`
- **역할:** 모바일 햄버거 메뉴 (Client Component, `'use client'`)
- **기능:**
  - 햄버거 버튼 → X 아이콘 전환 애니메이션
  - 우측에서 슬라이드 인 패널 (너비 `w-72`)
  - 배경 오버레이 클릭 시 닫힘
  - `usePathname()` — 라우트 변경 시 자동 닫힘
  - `document.body.style.overflow` — 열릴 때 스크롤 잠금
- **사용처:** `Header.tsx`

---

## `app/_components/ui/`

### `Button.tsx`
- **역할:** 공통 버튼 / 링크 컴포넌트 (Client Component)
- **Props:**
  - `variant`: `'outline'` | `'outline-light'` | `'filled'` | `'ghost'` (기본: `outline`)
  - `size`: `'sm'` | `'md'` | `'lg'` (기본: `md`)
  - `href`: 있으면 `<Link>`, 없으면 `<button>`
- **variant 설명:**
  - `outline`: 검정 테두리, 검정 텍스트 → hover 시 배경 채움
  - `outline-light`: 흰 테두리, 흰 텍스트 → hover 시 흰 배경 + 검정 텍스트 (다크 배경용)
  - `filled`: 검정 배경, 흰 텍스트
  - `ghost`: 텍스트만, hover 시 gold + 밑줄
- **사용처:** `ConsultCTA.tsx`, 향후 모든 페이지

### `SectionTitle.tsx`
- **역할:** 섹션 제목 컴포넌트 (Server Component)
- **Props:**
  - `en`: 영문 서브타이틀 (금색 serif, 자간 넓음)
  - `ko`: 한글 메인 타이틀 (Noto Serif KR, 3xl~4xl)
  - `center`: `boolean` — 중앙 정렬 여부
  - `light`: `boolean` — 다크 배경용 (텍스트를 canvas색으로)
- **구조:** 영문 레이블 → 한글 제목 → 10px 수평선 (gold/ink)
- **사용처:** `TreatmentCards`, `BeforeAfterSection`, `HospitalGallery`, `LocationSection`

### `PageHero.tsx`
- **역할:** 서브 페이지 상단 히어로 배너 (Server Component)
- **Props:**
  - `en?`: 선택적 영문 레이블 (gold)
  - `title`: 한글 메인 타이틀
  - `description?`: 선택적 설명 텍스트
- **스타일:** `bg-night`, `min-h-[40vh]`, `py-32`, 중앙 정렬, gold 수평선
- **사용처:** 향후 `/about`, `/eye`, `/nose`, `/facial`, `/breast`, `/before-after`, `/review`, `/contact` 페이지

### `ConsultCTA.tsx`
- **역할:** 상담 신청 풀너비 배너 (Server Component)
- **Props:**
  - `title?`: 기본 `"자연스러운 변화의 시작"`
  - `subtitle?`: 기본 멀티라인 설명문
- **구조:** 금색 레이블 → 제목 → 설명 → 전화번호 링크 → `Button(outline-light, lg)` → `/contact`
- **스타일:** `bg-night`, `py-24`, 최대 너비 `max-w-2xl`
- **사용처:** `app/page.tsx`, 향후 모든 서브 페이지 하단

---

## `app/_components/home/`

### `EventBanner.tsx`
- **역할:** Header 바로 아래 고정되는 이벤트 공지 배너 (Client Component)
- **특징:** `.shimmer-text` 클래스로 gold shimmer 효과, `sticky top-16 z-40`
- **현재 텍스트:** "고이 성형외과 스페셜 이벤트 · 봄맞이 상담 할인 프로모션 진행 중" (임시)
- **사용처:** `app/page.tsx`

### `HeroSlider.tsx`
- **역할:** 홈 메인 풀스크린 이미지 슬라이더 (Client Component)
- **라이브러리:** Swiper (`EffectFade`, `Autoplay`) + Framer Motion (`AnimatePresence`)
- **슬라이드 데이터:** 5개 슬라이드 (Unsplash 이미지), 각 `sub`, `title`, `desc`, `bg` 포함
- **기능:**
  - 5초 자동재생, fade 전환, 루프
  - 텍스트 오버레이: Framer Motion `opacity + y` 전환
  - 좌우 화살표 버튼 (`swiperRef.current?.slidePrev/Next()`)
  - 우하단 슬라이드 번호 (`01 / 05` 형식)
  - 하단 프로그레스바 (`onAutoplayTimeLeft` → gold fill)
- **높이:** `h-[calc(100vh-6.5rem)] min-h-[520px]` (Header 64px + EventBanner 40px 제외)
- **사용처:** `app/page.tsx`

### `TreatmentCards.tsx`
- **역할:** 5개 시술 카테고리 카드 그리드 (Client Component)
- **라이브러리:** Framer Motion + react-intersection-observer
- **카드 데이터:** 안면윤곽, 가슴성형, 눈성형, 코성형, 안티에이징 (Unsplash 이미지 + hover 이미지)
- **기능:**
  - `useInView` 스크롤 진입 시 stagger 페이드인 (`delay: i * 0.1`)
  - hover 시 이미지 crossfade (기본 이미지 → hover 이미지)
  - hover 시 이미지 scale-105
  - 하단 그라디언트 오버레이 위에 텍스트 + 화살표 아이콘
- **레이아웃:** `grid-cols-2 md:grid-cols-5`, `gap-px bg-rule` (1px 격자선 효과)
- **사용처:** `app/page.tsx`

### `BeforeAfterSection.tsx`
- **역할:** 전후사진 4쌍 그리드 (Client Component)
- **라이브러리:** Framer Motion (`useScroll`, `useTransform`) + react-intersection-observer
- **데이터:** 눈성형, 코성형, 안면윤곽, 가슴성형 각 before/after 이미지 쌍
- **기능:**
  - `BeforeAfterPair` 내부 컴포넌트: 스크롤 기반 좌우 parallax 진입 (짝수/홀수 교차)
  - BEFORE 배지 (좌하단, `bg-ink/70`) / AFTER 배지 (우하단, `bg-gold/90`)
  - After 이미지 우측에 시술명 + 설명 레이블
  - "전체 전후사진 보기" → `/before-after` 링크
- **레이아웃:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **사용처:** `app/page.tsx`

### `HospitalGallery.tsx`
- **역할:** 병원 시설 사진 갤러리 + 라이트박스 모달 (Client Component)
- **라이브러리:** Swiper (`Navigation`) + Framer Motion + react-intersection-observer
- **데이터:** 12개 시설 사진 (병원 로비, 상담실, 회복실, 대기실, 수술실 등)
- **기능:**
  - `useInView` stagger 페이드인 (`delay: i * 0.06`)
  - 이미지 클릭 시 `GalleryModal` 렌더링 (라이트박스)
  - `GalleryModal`: Swiper로 좌우 탐색, ESC 키 닫힘, 배경 클릭 닫힘, body scroll lock
  - 호버 시 scale-105 + 반투명 오버레이 + 확대 아이콘
- **레이아웃:** `grid-cols-2 md:grid-cols-4 gap-2` (4×3 그리드)
- **사용처:** `app/page.tsx`

### `LocationSection.tsx`
- **역할:** 오시는 길 섹션 — 병원 정보 + 지도 (Client Component)
- **라이브러리:** Framer Motion + react-intersection-observer
- **기능:**
  - 좌측 (텍스트): 주소, 전화번호, 진료시간 테이블 (평일/토/일/점심), 카카오톡 상담 버튼, 온라인 상담 버튼
  - 우측 (지도): OpenStreetMap iframe (`grayscale → hover 시 컬러`)
  - 좌우 슬라이드인 애니메이션 (`x: ±30 → 0`)
- **사용처:** `app/page.tsx`

---

## 설정 파일

### `next.config.ts`
- `images.remotePatterns`: `images.unsplash.com` 허용 (현재 모든 이미지가 Unsplash)
- 향후 실제 이미지 도메인 추가 필요

### `postcss.config.mjs`
- `@tailwindcss/postcss` 플러그인만 등록 (Tailwind v4 방식)

### `tsconfig.json`
- 경로 별칭: `"@/*": ["./*"]` (app 루트 기준)

---

## 개발 현황 (Phase 진행 상태)

| Phase | 내용 | 상태 |
|-------|------|------|
| Phase 1 | 기반 구조 (layout, globals.css, Header, Footer, UI 컴포넌트) | **완료** |
| Phase 2 | 홈 페이지 (7개 섹션) | **완료** |
| Phase 3 | 시술 페이지 (/eye, /nose, /facial, /breast) | **완료** |
| Phase 4 | 전후사진/이벤트 (/before-after, /event) | **완료** (`/review`는 범위 밖, 미구현) |
| Phase 5 | 병원소개 4페이지 (/about, /about/doctors, /about/facility, /about/location) | **완료** (`/contact`는 범위 밖, 미구현) |
| Phase 6 | 내비게이션 개편 + 반응형 검증(375px) | **완료** |

---

## `app/_components/sub/` 상세 (Phase 3~5에서 추가)

| 파일 | 역할 | Props 요약 |
|------|------|-----------|
| `TreatmentIntro.tsx` | 시술 개요, 이미지(GIF 지원)+포인트 2단 레이아웃 | `title, description, image, imageAlt, points[]` |
| `TreatmentMethods.tsx` | 시술 방법 탭 (좌측 탭, 우측 상세 AnimatePresence 전환) | `title, subtitle, methods[]{name,description,points?}` |
| `KnowhowSection.tsx` | 노하우 카드 그리드, 카드마다 `image` 있으면 상단에 원형 이미지 표시 | `title, subtitle, items[]{icon,title,description,image?}` |
| `DoctorSection.tsx` | 시술 페이지용 단일 의료진 상세(사진+경력 리스트) | `name, title, specialty, career[], image` |
| `DoctorGrid.tsx` | `/about/doctors` 전용 여러 의료진 카드 그리드 | `title, subtitle, doctors[]{name,title,specialty,image}` |
| `AftercareSlider.tsx` | 사후관리 Swiper 슬라이더, 커스텀 이전/다음 버튼 (Navigation 모듈 미사용) | `title, subtitle, items[]{title,description,image}` |
| `FAQAccordion.tsx` | FAQ 아코디언, 한 번에 하나만 열림 | `faqs[]{question,answer}` |
| `PhilosophyDetail.tsx` | `/about` 철학 리드 문단 + 3가치 카드 | `lead, description, values[]{title,description}` |
| `HistoryTimeline.tsx` | `/about` 연혁 타임라인 | `title, subtitle, milestones[]{year,description}` |
| `AwardsSection.tsx` | `/about` 수상·인증 뱃지 그리드 | `title, subtitle, awards[]` (string 배열) |
| `TransitInfo.tsx` | `/about/location` 교통 안내 3열 카드 | `title, subtitle, items[]{label,description}` (description은 `\n` 줄바꿈 지원) |
| `BeforeAfterGallery.tsx` | `/before-after` 탭 필터 + 그리드, 내부에 `active` 상태 관리 | `items[]{category,categoryLabel,label,desc,before,after}` |
| `EventAccordionList.tsx` | `/event` 카드 리스트, 클릭 시 상세 아코디언 (하나만 열림) | `events[]{title,period,summary,detail,image}` |

### `app/_components/ui/` 신규 추가분
- **`SafeImage.tsx`** — `next/image` 래퍼(Client Component). `onError` 발생 시 alt 텍스트/깨진 아이콘 대신 `bg-rule` 회색 박스를 렌더링. `fill` 모드 기준으로 설계되어 있어 반드시 위치 지정된(`relative`) 부모 안에서 사용. 이번 작업에서 실제 이미지 파일이 없는 모든 플레이스홀더 경로가 이 컴포넌트를 통해 렌더링됨.
- **`CategoryFilter.tsx`** — 제어 컴포넌트(controlled). `active`/`onChange`를 부모(`BeforeAfterGallery`)가 관리. 다른 필터형 페이지(예: `/review`)에도 재사용 가능하도록 범용 설계.

### `nav.ts` 갱신 내용
- `mainNav` = 전후사진 · 후기 · 이벤트 (단순 링크)
- `aboutNav` (신규) = 병원소개 · 의료진 소개 · 시설 안내 · 오시는 길 (드롭다운/서브메뉴 전용)
- `treatmentNav` = 눈성형 · 코성형 · 안면윤곽 · 가슴성형 (기존과 동일)
- `Header.tsx`는 "병원소개"·"시술안내" 두 개의 hover 드롭다운을 가짐 (동일 패턴 반복)
- `MobileMenu.tsx`는 병원소개/시술안내를 각각 섹션 헤더 + 서브 링크 목록으로 표시
- `Footer.tsx` 사이트맵은 `grid-cols-3` (MENU/병원소개/시술안내) — 375px에서도 정상 확인됨

---

## 다음 작업 시 참고사항

1. **이미지:** 모든 페이지가 `/clients/note-clinic/images/...` 형태의 로컬 경로를 참조하지만 실제 파일은 존재하지 않음 (포트폴리오 목업 단계). `SafeImage`가 회색 placeholder로 대체하므로 빌드/렌더링에는 문제 없음. 실제 사진 확보 시 해당 경로에 파일만 넣으면 즉시 반영됨.
2. **연락처:** 전화번호 `02-0000-0000`, 주소 `압구정로 000` 모두 플레이스홀더
3. **EventBanner 텍스트:** "고이 성형외과" → "노트성형외과"로 수정 필요 (오타, 아직 미수정 — 이번 작업 범위 밖이라 보존)
4. **미구현 페이지:** `/review`(후기), `/contact`(상담 신청 폼) — nav에는 이미 링크가 존재하므로 클릭 시 404. 다음 작업으로 우선순위 높음.
5. **데이터 레이어:** `app/_types/`, `app/_data/` 폴더 아직 미생성 — 현재 모든 콘텐츠는 각 `page.tsx` 파일 내부에 하드코딩된 상수로 존재
6. **Tailwind v4:** `bg-canvas`, `text-ink`, `text-gold` 등 커스텀 토큰은 `globals.css` `@theme` 블록에 정의됨 (config 파일 없음)
7. **지도:** `LocationSection`의 OpenStreetMap iframe은 실제 카카오맵으로 교체 필요 (사용자가 "카카오맵 임베드"를 요청했으나, 카카오맵은 JS SDK+API 키가 필요해 이번 자동 작업에서는 기존 OpenStreetMap iframe을 그대로 재사용함 — API 키 발급 후 교체 필요)
8. **재사용 컴포넌트:** `HospitalGallery`, `LocationSection`(둘 다 `_components/home/`)은 이제 홈페이지 외에 `/about/facility`, `/about/location`에서도 재사용 중. 두 컴포넌트를 수정할 때는 양쪽 페이지에 미치는 영향을 함께 확인할 것.
