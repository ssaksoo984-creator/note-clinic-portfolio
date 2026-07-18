"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../ui/SectionTitle";
import type { ProcessStep } from "../../_data/process";

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

function NavItem({
  step,
  index,
  active,
  onActivate,
}: {
  step: ProcessStep;
  index: number;
  active: boolean;
  onActivate: (i: number) => void;
}) {
  const { ref } = useInView({
    rootMargin: "-45% 0% -45% 0%",
    onChange: (inView) => {
      if (inView) onActivate(index);
    },
  });

  return (
    <div
      ref={ref}
      onMouseEnter={() => onActivate(index)}
      onClick={() => onActivate(index)}
      className="flex min-h-[46vh] flex-col justify-center items-end text-right cursor-pointer"
    >
      <span
        className={`font-serif text-sm tracking-[0.3em] transition-colors duration-500 ${
          active ? "text-gold" : "text-rule"
        }`}
      >
        {step.step}
      </span>
      <h3
        className={`mt-2 font-serif-ko text-2xl md:text-3xl font-light leading-snug transition-colors duration-500 ${
          active ? "text-ink" : "text-dim/40"
        }`}
      >
        {step.title}
      </h3>
    </div>
  );
}

export default function ProcessSection({
  title,
  subtitle,
  steps,
}: ProcessSectionProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-6 bg-canvas">
      {/* 배경 골드 그라데이션 원 — 스크롤 진입 시 드라마틱하게 피어나는 효과 */}
      <motion.div
        aria-hidden
        initial={{ scale: 0.02, opacity: 0, rotate: 8 }}
        whileInView={{ scale: [0.02, 1.2, 1], opacity: [0, 1, 1], rotate: [8, -4, 0] }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 2.6, times: [0, 0.6, 1], ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -right-16 -top-16 w-[760px] h-[760px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.85) 0%, rgba(201,169,110,0.55) 25%, rgba(201,169,110,0.22) 50%, rgba(201,169,110,0) 72%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        {/* 데스크탑 — 스크롤/호버/클릭 연동 3단 레이아웃 */}
        <div className="mt-20 hidden lg:grid grid-cols-[1fr_auto_1fr] gap-16">
          <div className="flex flex-col">
            {steps.map((s, i) => (
              <NavItem
                key={s.step}
                step={s}
                index={i}
                active={active === i}
                onActivate={setActive}
              />
            ))}
          </div>

          <div className="sticky top-1/2 -translate-y-1/2 self-start h-fit">
            <div className="relative w-[480px] h-[520px]">
              <motion.div
                aria-hidden
                className="absolute -top-3 -left-3 w-full h-full border border-gold/70"
                animate={{ x: [0, 6, -3, 0], y: [0, -4, 5, 0], rotate: [0, 2, -1.5, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="absolute -bottom-3 -right-3 w-full h-full border border-gold/50"
                animate={{ x: [0, -5, 4, 0], y: [0, 5, -6, 0], rotate: [0, -2, 1.5, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
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

          <div className="sticky top-1/2 -translate-y-1/2 self-start h-fit flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-serif-ko text-ink text-2xl md:text-3xl font-light leading-snug mb-4">
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
