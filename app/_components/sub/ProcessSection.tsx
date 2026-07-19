"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import SectionTitle from "../ui/SectionTitle";
import ParticleNetwork from "../ui/ParticleNetwork";
import type { ProcessStep } from "../../_data/process";
import "swiper/css";

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

const AUTOPLAY_MS = 4200;
const PLACEHOLDER_COLORS = ["#e5e5e5", "#e8dcc8", "#d8c9ae", "#cbb896"];

export default function ProcessSection({
  title,
  subtitle,
  steps,
}: ProcessSectionProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mobileActive, setMobileActive] = useState(0);
  const mobileSwiperRef = useRef<SwiperClass | null>(null);
  const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!sectionInView || paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [sectionInView, paused, steps.length]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-32 px-6 bg-canvas"
    >
      {/* 배경 파티클 네트워크 — 점들이 떠다니며 가까워지면 선으로 연결되는 효과 */}
      <ParticleNetwork />

      <div className="relative max-w-[1440px] mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        {/* 데스크탑 — 리스트 / 이미지 / 텍스트 3단, 자동재생+클릭+호버 연동 */}
        <div className="mt-20 hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-16">
          <div
            className="flex flex-col justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {steps.map((s, i) => {
              const isActive = active === i;
              return (
                <div
                  key={s.step}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="flex items-baseline justify-end gap-3 py-3 cursor-pointer"
                >
                  <span
                    className={`font-serif tracking-[0.2em] transition-all duration-300 ${
                      isActive ? "text-gold text-sm" : "text-rule text-xs"
                    }`}
                  >
                    {s.step}
                  </span>
                  <h3
                    className={`font-serif-ko transition-all duration-300 ${
                      isActive
                        ? "text-ink font-semibold text-2xl md:text-3xl"
                        : "text-dim/50 font-light text-base md:text-lg"
                    }`}
                  >
                    {s.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div>
            <div className="relative w-[480px] h-[520px] border-2 border-gold overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ backgroundColor: PLACEHOLDER_COLORS[active % PLACEHOLDER_COLORS.length] }}
              />
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block font-serif text-gold/25 text-[160px] leading-none select-none">
                  {steps[active].step}
                </span>
                <h3 className="mt-3 font-serif-ko text-ink text-2xl md:text-3xl font-bold leading-snug mb-4">
                  {steps[active].title}
                </h3>
                <p className="text-dim text-sm md:text-base leading-relaxed max-w-sm">
                  {steps[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 모바일 — 좌우 스와이프 슬라이드 */}
        <div className="mt-16 lg:hidden">
          {/* 진행 표시 — 점 위에 숫자, 클릭하면 해당 단계로 이동 */}
          <div className="relative flex items-start justify-between mb-8 px-4">
            <div className="absolute left-4 right-4 top-[22px] h-px bg-rule" />
            <div
              className="absolute left-4 top-[22px] h-px bg-gold transition-all duration-500 ease-out"
              style={{
                width:
                  steps.length > 1
                    ? `calc(${(mobileActive / (steps.length - 1)) * 100}% - ${
                        (mobileActive / (steps.length - 1)) * 32
                      }px)`
                    : "0px",
              }}
            />
            {steps.map((s, i) => (
              <button
                key={s.step}
                onClick={() => mobileSwiperRef.current?.slideToLoop(i)}
                className="relative z-10 flex flex-col items-center gap-2"
              >
                <span
                  className={`font-serif text-[11px] tracking-widest transition-colors duration-300 ${
                    mobileActive === i ? "text-gold" : "text-dim"
                  }`}
                >
                  {s.step}
                </span>
                <span
                  className={`block w-2.5 h-2.5 rounded-full border transition-colors duration-300 ${
                    mobileActive === i ? "bg-gold border-gold" : "bg-canvas border-rule"
                  }`}
                />
              </button>
            ))}
          </div>

          <Swiper
            modules={[Autoplay]}
            onSwiper={(s) => {
              mobileSwiperRef.current = s;
            }}
            onSlideChange={(s) => setMobileActive(s.realIndex)}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{ delay: AUTOPLAY_MS, disableOnInteraction: false }}
            loop
          >
            {steps.map((s, i) => (
              <SwiperSlide key={s.step}>
                <div className="px-1">
                  <span className="font-serif text-gold text-sm tracking-[0.3em]">
                    {s.step}
                  </span>
                  <div
                    className="relative w-full max-w-xs mx-auto mt-4 aspect-[480/520] border-2 border-gold"
                    style={{ backgroundColor: PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length] }}
                  />
                  <h3 className="mt-5 font-serif-ko text-ink text-2xl font-bold leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-dim text-sm leading-relaxed">{s.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
