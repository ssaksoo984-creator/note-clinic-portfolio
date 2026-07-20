"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../ui/SectionTitle";
import ParticleNetwork from "../ui/ParticleNetwork";
import type { ProcessStep } from "../../_data/process";

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
      {/* 배경 파티클 네트워크 — 점들이 떠다니며 가까워지면 선으로 연결되는 효과 (PC 전용) */}
      <div className="hidden md:block">
        <ParticleNetwork />
      </div>

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

        {/* 모바일 — 세로 스크롤형, 해당 단계에 도달하면 사진+내용이 나타남 */}
        <div className="mt-16 flex flex-col gap-16 lg:hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={i > 0 ? "pt-16 border-t border-rule" : ""}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
