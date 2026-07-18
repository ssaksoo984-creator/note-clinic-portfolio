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
    sub: "FACIAL CONTOURING",
    title: "갸름하고 입체적인\n얼굴 라인의 완성",
    pc: "/clients/note-clinic/images/hero/eventbanner_01_face.png",
    mo: "/clients/note-clinic/images/hero/eventbanner_01_face_mo.png",
  },
  {
    sub: "BREAST SURGERY",
    title: "자연스러운 볼륨,\n당당한 여성미의 완성",
    pc: "/clients/note-clinic/images/hero/eventbanner_02_bra.png",
    mo: "/clients/note-clinic/images/hero/eventbanner_02_bra_mo.png",
  },
  {
    sub: "RHINOPLASTY",
    title: "코끝의 디테일이\n인상을 바꿉니다",
    pc: "/clients/note-clinic/images/hero/eventbanner_03_nose.png",
    mo: "/clients/note-clinic/images/hero/eventbanner_03_nose_mo.png",
  },
];

export default function HeroSlider() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  return (
    <section className="relative h-[700px] md:h-[920px] overflow-hidden bg-night">
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
              {/* PC 이미지 */}
              <SafeImage
                src={slide.pc}
                alt={slide.title}
                fill
                className="hidden md:block object-cover"
                priority={i === 0}
                sizes="100vw"
              />
              {/* 모바일 이미지 */}
              <SafeImage
                src={slide.mo}
                alt={slide.title}
                fill
                className="block md:hidden object-cover"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 텍스트 오버레이 — Framer Motion */}
      <div className="absolute inset-0 z-10 flex items-start md:items-center justify-center md:justify-start pointer-events-none">
        <div className="w-full max-w-[1440px] mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pt-28 md:pt-0 mx-auto md:mx-0 max-w-xl md:max-w-2xl text-center md:text-left [text-shadow:0_2px_14px_rgba(0,0,0,0.4)]"
            >
              <p className="font-serif shimmer-text text-sm tracking-[0.4em] mb-5">
                {slides[activeIndex].sub}
              </p>
              <h1 className="font-serif-ko text-canvas font-light leading-tight tracking-[-0.01em] whitespace-pre-line"
                style={{ fontSize: "clamp(1.6rem, 5.2vw, 4.25rem)" }}
              >
                {slides[activeIndex].title}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
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
