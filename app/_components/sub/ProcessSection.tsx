"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import type { ProcessStep } from "../../_data/process";

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export default function ProcessSection({
  title,
  subtitle,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-6 bg-canvas">
      {/* 배경 골드 그라데이션 원 — 스크롤 진입 시 드라마틱하게 피어나는 효과 */}
      <motion.div
        aria-hidden
        initial={{ scale: 0.02, opacity: 0, rotate: 8 }}
        whileInView={{ scale: [0.02, 1.25, 1], opacity: [0, 1, 1], rotate: [8, -4, 0] }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 2.6, times: [0, 0.6, 1], ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -right-48 top-1/4 w-[820px] h-[820px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.75) 0%, rgba(201,169,110,0.4) 35%, rgba(201,169,110,0.12) 60%, rgba(201,169,110,0) 75%)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div className="mt-20 flex flex-col gap-20 md:gap-28">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              className={`grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 lg:gap-16 ${
                i > 0 ? "pt-20 md:pt-28 border-t border-rule" : ""
              }`}
            >
              {/* 왼쪽 — 스텝 넘버 + 타이틀 */}
              <div className="lg:text-right order-1">
                <span className="font-serif text-gold text-sm tracking-[0.3em]">
                  {s.step}
                </span>
                <h3 className="mt-2 font-serif-ko text-ink text-2xl md:text-3xl font-light leading-snug">
                  {s.title}
                </h3>
              </div>

              {/* 중앙 — 세로형 이미지 + 뒤에서 엇박자로 움직이는 금색 프레임 2개 */}
              <div className="order-2 mx-auto">
                <div className="relative w-56 md:w-64 aspect-[3/4]">
                  <motion.div
                    aria-hidden
                    className="absolute -top-3 -left-3 w-full h-full border border-gold/70"
                    animate={{
                      x: [0, 6, -3, 0],
                      y: [0, -4, 5, 0],
                      rotate: [0, 2, -1.5, 0],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    aria-hidden
                    className="absolute -bottom-3 -right-3 w-full h-full border border-gold/50"
                    animate={{
                      x: [0, -5, 4, 0],
                      y: [0, 5, -6, 0],
                      rotate: [0, -2, 1.5, 0],
                    }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  />
                  <div className="relative z-10 w-full h-full border-2 border-gold bg-rule" />
                </div>
              </div>

              {/* 오른쪽 — 타이틀 + 설명 */}
              <div className="order-3">
                <h3 className="font-serif-ko text-ink text-2xl md:text-3xl font-light leading-snug mb-4">
                  {s.title}
                </h3>
                <p className="text-dim text-sm md:text-base leading-relaxed max-w-sm">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
