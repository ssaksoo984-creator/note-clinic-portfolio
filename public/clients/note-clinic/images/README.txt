노트성형외과 홈페이지 이미지 에셋 가이드
=========================================

이 폴더에 실제 병원 이미지를 배치하세요.
권장 포맷: JPG 또는 WebP
권장 용량: 파일당 1MB 이하 (next/image가 자동 최적화하지만 원본도 가볍게 유지)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

hero/  —  메인 슬라이더 배경 이미지
  권장 크기: 1920 × 1080px (16:9 가로)
  사용 컴포넌트: HeroSlider.tsx

  slide-01.jpg  슬라이드 1 "완벽한 아름다움을 위한 선택"
                → 병원 로비·외관 또는 우아한 여성 전신 이미지 (고급스러운 분위기)

  slide-02.jpg  슬라이드 2 "365일 운영되는 방역 클린룸"
                → 수술실·클린룸 내부 (청결하고 전문적인 느낌)

  slide-03.jpg  슬라이드 3 "마취과 전문의 상주 운영"
                → 의료진 수술 준비 장면 또는 전문의 프로필

  slide-04.jpg  슬라이드 4 "가슴성형 차별화된 기술"
                → 우아한 여성 실루엣 또는 상담 장면

  slide-05.jpg  슬라이드 5 "안면윤곽 섬세한 조각"
                → 여성 얼굴 클로즈업 (옆·정면, 깔끔한 배경)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

treatments/  —  시술 카테고리 카드 이미지
  권장 크기: 600 × 800px (3:4 세로)
  사용 컴포넌트: TreatmentCards.tsx
  참고: 각 시술마다 기본(-default)·호버(-hover) 2장 필요

  facial-default.jpg    안면윤곽 기본 이미지 (얼굴 측면·정면 라인)
  facial-hover.jpg      안면윤곽 호버 이미지 (시술 후 갸름한 얼굴)

  breast-default.jpg    가슴성형 기본 이미지 (우아한 여성 상반신)
  breast-hover.jpg      가슴성형 호버 이미지 (자연스러운 볼륨 강조)

  eye-default.jpg       눈성형 기본 이미지 (눈 클로즈업, 단안·쌍안)
  eye-hover.jpg         눈성형 호버 이미지 (또렷한 눈매 강조)

  nose-default.jpg      코성형 기본 이미지 (옆 프로필, 코 라인 강조)
  nose-hover.jpg        코성형 호버 이미지 (교정 후 세련된 코)

  anti-aging-default.jpg  안티에이징 기본 이미지 (성숙한 여성의 피부·안색)
  anti-aging-hover.jpg    안티에이징 호버 이미지 (리프팅·탄력 강조)

  ── 하위 시술 페이지 히어로 이미지 (아래는 같은 treatments/ 폴더, 4:3 가로) ──
  eye-non-incision.jpg          눈성형 > 쌍꺼풀 매몰법
  eye-incision.jpg              눈성형 > 쌍꺼풀 절개법
  eye-ptosis-correction.jpg     눈성형 > 눈매교정
  nose-bridge-augmentation.jpg  코성형 > 융비술(콧대 성형)
  nose-tip-plasty.jpg           코성형 > 코끝 성형
  nose-hump-nose.jpg            코성형 > 매부리코 교정
  facial-cheekbone.jpg          안면윤곽 > 광대축소술
  facial-square-jaw.jpg         안면윤곽 > 사각턱수술
  facial-chin.jpg                안면윤곽 > 턱끝수술
  breast-augmentation.jpg        가슴성형 > 가슴확대술(보형물)
  breast-fat-graft.jpg           가슴성형 > 지방이식 가슴성형
  breast-lifting.jpg             가슴성형 > 가슴 리프팅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

before-after/  —  전후사진
  권장 크기: 420 × 560px (3:4 세로)
  사용 컴포넌트: BeforeAfterSection.tsx(홈), BeforeAfterGallery.tsx(/before-after, 케이스당 3개씩)
  주의: 실제 환자 사진 사용 시 반드시 서면 동의 취득 필요

  눈성형
  eye-before.jpg / eye-after.jpg        쌍꺼풀 매몰법 (자연스러운 앞트임 라인 동시 진행)
  eye-before-2.jpg / eye-after-2.jpg    쌍꺼풀 절개법 (또렷한 눈매를 위한 절개 라인)
  eye-before-3.jpg / eye-after-3.jpg    눈매교정 (짝눈 교정 및 눈매 힘 개선)

  코성형
  nose-before.jpg / nose-after.jpg      융비술 (낮은 콧대를 세운 자연스러운 라인)
  nose-before-2.jpg / nose-after-2.jpg  코끝 성형 (뭉툭한 코끝을 세운 케이스)
  nose-before-3.jpg / nose-after-3.jpg  매부리코 교정 (돌출된 비골을 정리한 케이스)

  안면윤곽
  facial-before.jpg / facial-after.jpg      광대축소술 (돌출 광대를 정리한 옆선 개선)
  facial-before-2.jpg / facial-after-2.jpg  사각턱수술 (매끄러운 하관 라인 완성)
  facial-before-3.jpg / facial-after-3.jpg  턱끝수술 (부드러운 얼굴 균형 개선)

  가슴성형
  breast-before.jpg / breast-after.jpg      가슴확대술 (자연스러운 볼륨 개선 케이스)
  breast-before-2.jpg / breast-after-2.jpg  가슴 리프팅 (처짐 개선 및 탄력 라인 완성)
  breast-before-3.jpg / breast-after-3.jpg  지방이식 가슴성형 (자가지방 활용 자연스러운 볼륨)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

gallery/  —  병원 시설 갤러리
  권장 크기: 800 × 600px (4:3 가로)
  사용 컴포넌트: HospitalGallery.tsx
  참고: 12장 모두 있어야 갤러리가 완성됩니다

  facility-01-lobby.jpg        병원 로비·리셉션 데스크
  facility-02-consultation.jpg 1:1 상담실 내부 (테이블·조명·인테리어)
  facility-03-recovery.jpg     회복실 (침대·조용한 분위기)
  facility-04-waiting.jpg      대기실 (소파·잡지·조명)
  facility-05-surgery.jpg      수술실 전경 (장비·클린한 환경)
  facility-06-staff-1.jpg      의료진 단체사진 또는 대표원장 프로필
  facility-07-staff-2.jpg      수술 중 의료진 모습 또는 개별 스태프
  facility-08-cleanroom.jpg    클린룸·소독실 (방역 장비)
  facility-09-corridor.jpg     병원 복도·원내 전경
  facility-10-exterior.jpg     병원 외관·건물 입구
  facility-11-facilities.jpg   기타 시설 (의료기기·검사실 등)
  facility-12-interior.jpg     인테리어 포인트 (마감재·조명·소품)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

doctor/  —  의료진 프로필 이미지
  권장 크기: 900 × 1200px (3:4 세로)
  사용 컴포넌트: DoctorSection.tsx, DoctorGrid.tsx

  team-kim.jpg     김노트 대표원장 프로필 (about/doctors)
  team-park.jpg    박아이 원장 프로필 (about/doctors)
  team-lee.jpg     이코 원장 프로필 (about/doctors)
  team-choi.jpg    최라인 원장 프로필 (about/doctors)

  eye-doctor.jpg     눈성형 페이지 담당의 프로필
  nose-doctor.jpg    코성형 페이지 담당의 프로필
  facial-doctor.jpg  안면윤곽 페이지 담당의 프로필
  breast-doctor.jpg  가슴성형 페이지 담당의 프로필

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

knowhow/  —  노하우 섹션 아이콘 이미지
  권장 크기: 400 × 400px (1:1 정사각, 원형으로 크롭되어 표시됨)
  사용 컴포넌트: KnowhowSection.tsx (w-20 h-20 원형)
  주의: 원형 크롭이므로 피사체를 중앙에 배치하세요

  눈성형: eye-design.jpg, minimal-incision.jpg, natural-suture.jpg, aftercare.jpg
  코성형: nose-balance.jpg, nose-autograft.jpg, nose-simulation.jpg, nose-revision.jpg
  안면윤곽: facial-balance.jpg, facial-nerve-mapping.jpg, facial-minimal-dissection.jpg, facial-aftercare.jpg
  가슴성형: breast-scarless-incision.jpg, breast-capsular-prevention.jpg, breast-fit-design.jpg, breast-aftercare.jpg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

aftercare/  —  사후관리 섹션 이미지
  권장 크기: 800 × 600px (4:3 가로)
  사용 컴포넌트: AftercareSlider.tsx

  눈성형: swelling-care.jpg, checkup.jpg, coordinator.jpg, hotline.jpg
  코성형: nose-band-care.jpg, nose-cast-removal.jpg, coordinator.jpg, hotline.jpg
  안면윤곽: facial-compression-helmet.jpg, facial-lymph-massage.jpg, coordinator.jpg, hotline.jpg
  가슴성형: breast-compression-bra.jpg, breast-massage-guide.jpg, coordinator.jpg, hotline.jpg

  참고: coordinator.jpg, hotline.jpg는 여러 시술 페이지에서 공용으로 재사용됩니다

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

event/  —  이벤트 목록 썸네일 + 팝업 배너 이미지
  권장 크기: 1000 × 1000px (1:1 정사각)
  사용 컴포넌트: EventAccordionList.tsx(96×96 썸네일), PopupBanner.tsx(4:5 크롭)
  주의: 두 곳에서 다른 비율로 크롭되어 재사용되므로, 정사각으로 준비하고
        핵심 문구·피사체는 중앙에 배치하세요

  spring-eye-promotion.jpg     봄맞이 눈성형 상담 프로모션 (팝업에도 사용)
  nose-care-package.jpg        코성형 리즈널 케어 패키지
  first-visit-event.jpg        신규 회원 전용 첫 상담 이벤트 (팝업에도 사용)
  summer-facial-earlybird.jpg  여름 대비 안면윤곽 얼리버드
  review-thanks-event.jpg      후기 작성 감사 이벤트
