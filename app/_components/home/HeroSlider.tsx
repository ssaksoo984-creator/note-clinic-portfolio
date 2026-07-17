"use client";

import { useRef, useState } from "react";
import SafeImage from "../ui/SafeImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    sub: "PREMIUM PLASTIC SURGERY",
    title: "완벽한 아름다움을\n위한 선택",
    desc: "아르떼성형외과와 함께하는 자연스러운 변화",
    bg: "/clients/note-clinic/images/hero/slide-01.png",
  },
  {
    sub: "365 CLEAN ROOM",
    title: "365일 운영되는\n방역 클린룸",
    desc: "철저한 감염 관리 시스템으로 안전한 수술 환경을 보장합니다",
    bg: "/clients/note-clinic/images/hero/slide-02.png",
  },
  {
    sub: "SPECIALIST ON-SITE",
    title: "마취과 전문의\n상주 운영",
    desc: "수술 전 과정에서 전문 마취과 의사가 함께합니다",
    bg: "/clients/note-clinic/images/hero/slide-03.png",
  },
  {
    sub: "BREAST SURGERY",
    title: "가슴성형\n차별화된 기술",
    desc: "자연스러운 볼륨과 완벽한 라인을 위한 맞춤형 솔루션",
    bg: "/clients/note-clinic/images/hero/slide-04.png",
  },
  {
    sub: "FACIAL CONTOURING",
    title: "안면윤곽\n섬세한 조각",
    desc: "얼굴 고유의 아름다움을 살리는 정교한 안면윤곽 수술",
    bg: "/clients/note-clinic/images/hero/slide-05.png",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  return (
    <section className="relative h-[calc(100vh-6.5rem)] min-h-[520px] overflow-hidden bg-night">
      {/* Swiper — 배경 이미지 */}
      <Swiper
        onSwiper={(s) => { swiperRef.current = s; }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        speed={1000}
        onSlideChange={(s) => {
          setActiveIndex(s.realIndex);
          setProgressWidth(0);
        }}
        onAutoplayTimeLeft={(_s, _t, pct) => {
          // pct: 1→0 (time remaining ratio). We want 0→1 for fill.
          setProgressWidth((1 - pct) * 100);
        }}
        className="absolute inset-0 w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <SafeImage
                src={slide.bg}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="100vw"
              />
              {/* 다크 오버레이 */}
              <div className="absolute inset-0 bg-night/35" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 텍스트 오버레이 — Framer Motion */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center px-6 max-w-3xl"
          >
            <p className="font-serif text-gold text-xs tracking-[0.4em] mb-5">
              {slides[activeIndex].sub}
            </p>
            <h1 className="font-serif-ko text-canvas font-light leading-tight tracking-tight whitespace-pre-line"
              style={{ fontSize: "clamp(1.75rem, 6vw, 5rem)" }}
            >
              {slides[activeIndex].title}
            </h1>
            <div className="w-10 h-px bg-gold mx-auto my-6" />
            <p className="font-sans-ko text-canvas/70 text-sm md:text-base leading-relaxed">
              {slides[activeIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 좌우 화살표 */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="이전 슬라이드"
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-canvas/30 items-center justify-center text-canvas hover:border-gold hover:text-gold transition-colors duration-300"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
          <polyline points="12,2 5,9 12,16" />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="다음 슬라이드"
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-canvas/30 items-center justify-center text-canvas hover:border-gold hover:text-gold transition-colors duration-300"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
          <polyline points="6,2 13,9 6,16" />
        </svg>
      </button>

      {/* 슬라이드 번호 */}
      <div className="hidden sm:flex absolute right-8 bottom-16 z-20 flex-col items-end gap-1">
        <span className="font-serif text-canvas text-xl leading-none">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="w-5 h-px bg-canvas/40" />
        <span className="font-serif text-canvas/40 text-sm leading-none">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* 하단 프로그레스바 */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-canvas/10 z-20">
        <div
          className="h-full bg-gold"
          style={{ width: `${progressWidth}%`, transition: "width 100ms linear" }}
        />
      </div>
    </section>
  );
}
