@AGENTS.md

---

# 노트성형외과 홈페이지 — 프로젝트 문서

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 목적 | 성형외과 병원 홈페이지 포트폴리오 |
| 벤치마크 | 노트성형외과 |
| 디자인 톤 | 블랙/화이트 미니멀 럭셔리 |
| 기술 스택 | Next.js 16.2.6 · React 19 · TypeScript 5 · Tailwind CSS 4 |
| 라우터 | App Router (`app/` at project root, no `src/`) |
| 언어 | 한국어 (`<html lang="ko">`) |

**주의:** 이 프로젝트는 Next.js 16.x를 사용합니다. 기존 Next.js 14 지식과 다를 수 있으므로 코드 작성 전 반드시 `node_modules/next/dist/docs/` 문서를 확인하세요.

---

## 2. 페이지 구조 (라우팅)

```
app/
├── layout.tsx              ← 루트 레이아웃 (Header, Footer 포함)
├── page.tsx                ← / 홈
├── about/
│   └── page.tsx            ← /about 병원소개
├── eye/
│   └── page.tsx            ← /eye 눈성형
├── nose/
│   └── page.tsx            ← /nose 코성형
├── facial/
│   └── page.tsx            ← /facial 안면윤곽
├── breast/
│   └── page.tsx            ← /breast 가슴성형
├── before-after/
│   └── page.tsx            ← /before-after 전후사진
├── review/
│   └── page.tsx            ← /review 후기
└── contact/
    └── page.tsx            ← /contact 상담
```

---

## 3. 각 페이지별 섹션 구성

### `/` 홈
1. **HeroSection** — 풀스크린 영상/이미지 배경, 시그니처 카피라이팅, 상담 CTA 버튼
2. **PhilosophySection** — 병원 핵심 가치 3가지 (텍스트 중심, 여백 강조)
3. **TreatmentNav** — 4개 시술 카테고리 카드 (눈·코·안면윤곽·가슴), 각 페이지 링크
4. **BeforeAfterPreview** — 전후사진 슬라이더 3~4개 + "더보기" 링크
5. **ReviewPreview** — 최신 후기 카드 3개 + "더보기" 링크
6. **ConsultCTA** — 상담 신청 풀너비 배너 (어두운 배경, 전화번호 + 버튼)

### `/about` 병원소개
1. **PageHero** — 타이틀 + 서브카피 (반투명 오버레이)
2. **PhilosophyDetail** — 병원 철학/비전 텍스트 (타이포그래피 중심)
3. **DoctorSection** — 의료진 프로필 카드 (사진·이름·전문분야·경력)
4. **FacilityGallery** — 시설 사진 그리드 (마우스오버 줌 효과)
5. **AwardsSection** — 수상·인증 로고 배열

### `/eye` `/nose` `/facial` `/breast` — 시술 페이지 (공통 구조)
1. **PageHero** — 시술명 + 짧은 소개 문구
2. **TreatmentIntro** — 시술 개요 (아이콘 + 텍스트 2단 레이아웃)
3. **TreatmentList** — 세부 시술 항목 (탭 또는 아코디언)
4. **ProcessSection** — 시술 과정 스텝 (번호 + 아이콘 + 설명)
5. **BeforeAfterSection** — 해당 부위 전후사진 3~6개
6. **CautionSection** — 주의사항 (아이콘 리스트)
7. **ConsultCTA** — 상담 신청 배너

### `/before-after` 전후사진
1. **PageHero** — 타이틀
2. **CategoryFilter** — 시술 부위 필터 탭 (전체·눈·코·안면윤곽·가슴)
3. **BeforeAfterGrid** — 전후사진 카드 그리드 (hover 시 after 이미지 표시 또는 슬라이더)
4. **ConsultCTA**

### `/review` 후기
1. **PageHero** — 타이틀 + 총 후기 수
2. **CategoryFilter** — 시술 부위 필터 탭
3. **ReviewGrid** — 후기 카드 그리드 (닉네임·시술명·날짜·본문·별점)
4. **ConsultCTA**

### `/contact` 상담
1. **PageHero** — 타이틀
2. **ConsultForm** — 상담 신청 폼 (이름·연락처·시술관심분야·문의내용·개인정보동의)
3. **HospitalInfo** — 위치·진료시간·전화번호
4. **MapSection** — 카카오맵 또는 네이버지도 임베드

---

## 4. 디자인 원칙

### 컬러 팔레트
```
--color-bg:       #FFFFFF   (기본 배경)
--color-bg-dark:  #0A0A0A   (다크 섹션 배경)
--color-text:     #111111   (기본 텍스트)
--color-muted:    #6B6B6B   (보조 텍스트)
--color-border:   #E5E5E5   (구분선)
--color-accent:   #C9A96E   (골드 포인트 — 절제 사용)
```

### 타이포그래피
- 한글: `Noto Serif KR` (헤딩) / `Noto Sans KR` (본문)
- 영문/숫자: `Cormorant Garamond` (헤딩 강조) / `Inter` (UI)
- 헤딩 자간: `tracking-tight` 또는 `-0.02em`
- 본문 행간: `leading-relaxed` (1.75)

### 레이아웃 원칙
- 최대 너비: `max-w-6xl` (1152px), 중앙 정렬
- 섹션 수직 패딩: `py-20` (모바일) / `py-32` (데스크탑)
- 여백을 콘텐츠만큼 중요하게 취급 — 빈 공간이 럭셔리를 표현
- 이미지 비율: 전후사진 `4:3`, 히어로 `16:9`, 프로필 `3:4`

### 인터랙션 원칙
- 애니메이션: `transition-all duration-500 ease-out`
- 호버 효과: 확대보다 페이드/슬라이드 선호
- 스크롤 진입 애니메이션: `opacity-0 → opacity-100` + `translateY(20px) → 0`
- 버튼: 테두리 스타일 기본, 채우기 스타일은 주요 CTA에만

### 금지 사항
- 원색 사용 금지 (빨강·파랑·초록 등)
- 둥근 모서리 최소화 (`rounded-sm` 이하 또는 `rounded-none`)
- 그림자 최소화 (사용 시 `shadow-sm`까지만)
- 과도한 애니메이션 금지

---

## 5. 컴포넌트 구조

```
app/
├── _components/            ← 공통 컴포넌트 (라우팅 불가 폴더)
│   ├── layout/
│   │   ├── Header.tsx      ← 네비게이션 바 (로고 + 메뉴 + 상담버튼)
│   │   ├── Footer.tsx      ← 주소·연락처·카피라이트
│   │   └── MobileMenu.tsx  ← 모바일 햄버거 메뉴
│   ├── ui/
│   │   ├── Button.tsx      ← variant: 'outline' | 'filled' | 'ghost'
│   │   ├── SectionTitle.tsx ← 섹션 제목 (영문 서브타이틀 + 한글 타이틀)
│   │   ├── PageHero.tsx    ← 페이지 상단 히어로 배너
│   │   ├── CategoryFilter.tsx ← 탭형 카테고리 필터
│   │   └── ConsultCTA.tsx  ← 공통 상담 신청 배너
│   └── sections/
│       ├── BeforeAfterCard.tsx   ← 전후사진 단일 카드
│       ├── BeforeAfterSlider.tsx ← 전후사진 슬라이더
│       ├── ReviewCard.tsx        ← 후기 카드
│       ├── DoctorCard.tsx        ← 의료진 카드
│       └── TreatmentCard.tsx     ← 시술 카테고리 카드
```

### Server Component vs Client Component 기준
- **Server Component (기본):** 정적 UI, 텍스트, 이미지 레이아웃
- **Client Component (`'use client'`):** 슬라이더, 탭 필터, 폼, 모바일 메뉴, 스크롤 애니메이션

---

## 6. 개발 순서

### Phase 1 — 기반 구조
1. `app/layout.tsx` — 루트 레이아웃, 폰트 설정, 메타데이터
2. `app/globals.css` — CSS 변수(컬러·타이포), Tailwind v4 설정
3. `_components/layout/Header.tsx` — 네비게이션
4. `_components/layout/Footer.tsx`
5. `_components/ui/` — Button, SectionTitle, PageHero, ConsultCTA

### Phase 2 — 홈 페이지
6. `app/page.tsx` — HeroSection 구현
7. PhilosophySection, TreatmentNav
8. BeforeAfterPreview, ReviewPreview, ConsultCTA 조립

### Phase 3 — 시술 페이지 (공통 템플릿)
9. `_components/sections/` — TreatmentCard, BeforeAfterCard, BeforeAfterSlider
10. `/eye` 페이지 완성 (템플릿 확립)
11. `/nose`, `/facial`, `/breast` 순서로 복제·수정

### Phase 4 — 갤러리 / 후기
12. `_components/sections/` — ReviewCard, CategoryFilter
13. `/before-after` 페이지
14. `/review` 페이지

### Phase 5 — 나머지 페이지
15. `/about` — DoctorCard, FacilityGallery
16. `/contact` — ConsultForm, MapSection

### Phase 6 — 마무리
17. 반응형 검증 (모바일 375px · 태블릿 768px · 데스크탑 1280px)
18. 메타데이터 및 OG 이미지 설정
19. 성능 최적화 (next/image, 폰트 서브셋)

---

## 기타 개발 규칙

- **이미지:** 모두 `next/image` 사용, `public/images/` 하위에 카테고리별 폴더 구성
- **폰트:** `next/font/google`로 로드, layout.tsx에서 CSS 변수로 주입
- **타입:** 시술 데이터 등 반복 구조는 `app/_types/` 에 인터페이스 정의
- **데이터:** 초기 개발 시 `app/_data/` 에 목업 데이터(`.ts` 파일)로 관리
- **Tailwind v4:** `tailwind.config.js` 없음 — `globals.css` 에서 `@theme` 블록으로 커스텀 토큰 정의
