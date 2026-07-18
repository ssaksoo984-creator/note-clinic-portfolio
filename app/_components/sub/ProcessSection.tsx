"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../ui/SectionTitle";
import type { ProcessStep } from "../../_data/process";

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

const AUTOPLAY_MS = 4200;

export default function ProcessSection({
  title,
  subtitle,
  steps,
}: ProcessSectionProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
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
      {/* 배경 기하학적 패턴 — 얇은 선의 사각형들이 커지고 작아지며 떠다니는 효과 */}
      <svg
        aria-hidden
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 w-full h-full"
      >
        <motion.rect
          x="60" y="60" width="180" height="180"
          fill="none" stroke="#c9a96e" strokeOpacity="0.35" strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          animate={{ scale: [0.8, 1.15, 0.9, 1], rotate: [4, 14, -4, 4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        <motion.rect
          x="1160" y="30" width="220" height="220"
          fill="none" stroke="#c9a96e" strokeOpacity="0.3" strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          animate={{ scale: [1, 0.75, 1.1, 1], rotate: [12, -6, 18, 12] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        <motion.rect
          x="20" y="420" width="140" height="140"
          fill="none" stroke="#c9a96e" strokeOpacity="0.28" strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          animate={{ scale: [1, 1.2, 0.85, 1], rotate: [-8, 2, -14, -8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        <motion.rect
          x="1220" y="640" width="200" height="200"
          fill="none" stroke="#c9a96e" strokeOpacity="0.3" strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          animate={{ scale: [0.9, 1.1, 0.7, 0.9], rotate: [6, -12, 10, 6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
        <motion.rect
          x="620" y="520" width="260" height="260"
          fill="none" stroke="#c9a96e" strokeOpacity="0.18" strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          animate={{ scale: [1, 0.8, 1.15, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
        />
      </svg>

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
            <div className="relative w-[480px] h-[520px]">
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -inset-16 w-[calc(100%+8rem)] h-[calc(100%+8rem)]"
              >
                <defs>
                  <linearGradient id="processFrameGold" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.15" />
                    <stop offset="35%" stopColor="#c9a96e" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="65%" stopColor="#c9a96e" />
                    <stop offset="100%" stopColor="#c9a96e" stopOpacity="0.15" />
                    <animateTransform
                      attributeName="gradientTransform"
                      type="translate"
                      values="-1 0; 1 0; -1 0"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </linearGradient>
                </defs>
                <motion.rect
                  x="24" y="14" width="58" height="76"
                  fill="none"
                  stroke="url(#processFrameGold)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  animate={{ rotate: [0, 7, -5, 0], x: [24, 29, 19, 24], y: [14, 9, 18, 14] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
                />
                <motion.rect
                  x="18" y="20" width="60" height="72"
                  fill="none"
                  stroke="url(#processFrameGold)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  animate={{ rotate: [0, -8, 6, 0], x: [18, 12, 24, 18], y: [20, 27, 12, 20] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
                />
              </svg>
              <div className="relative z-10 w-full h-full border-2 border-gold overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-rule"
                  />
                </AnimatePresence>
              </div>
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
                <h3 className="-mt-10 font-serif-ko text-ink text-2xl md:text-3xl font-bold leading-snug mb-4">
                  {steps[active].title}
                </h3>
                <p className="text-dim text-sm md:text-base leading-relaxed max-w-sm">
                  {steps[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 모바일 — 순차 스택형 */}
        <div className="mt-16 flex flex-col gap-16 lg:hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              className={i > 0 ? "pt-16 border-t border-rule" : ""}
            >
              <span className="font-serif text-gold text-sm tracking-[0.3em]">
                {s.step}
              </span>
              <div className="relative w-full max-w-xs mx-auto mt-4 aspect-[480/520] border-2 border-gold bg-rule" />
              <h3 className="mt-5 font-serif-ko text-ink text-2xl font-light leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-dim text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
