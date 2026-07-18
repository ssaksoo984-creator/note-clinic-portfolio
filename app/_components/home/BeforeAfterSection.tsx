"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const items = [
  {
    label: "눈성형",
    desc: "자연스러운 쌍꺼풀 수술로\n또렷하고 편안한 눈매를 완성합니다.",
    beforeColor: "#d9d3c5",
    afterColor: "#c9a96e",
  },
  {
    label: "코성형",
    desc: "높고 자연스러운 코 라인으로\n얼굴 전체의 균형을 살립니다.",
    beforeColor: "#d1cabc",
    afterColor: "#b08d57",
  },
  {
    label: "안면윤곽",
    desc: "갸름한 얼굴형 교정으로\n부드러운 인상을 완성합니다.",
    beforeColor: "#d3cabb",
    afterColor: "#8a6d4a",
  },
  {
    label: "가슴성형",
    desc: "자연스러운 볼륨업으로\n균형 잡힌 바디라인을 완성합니다.",
    beforeColor: "#ded6c6",
    afterColor: "#e0c896",
  },
];

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);
  const item = items[active];

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + items.length) % items.length);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 bg-rule/20 overflow-hidden">
      {/* 배경 워터마크 — ARTE 로고, 옅은 베이지, 천천히 좌우로 흐르는 애니메이션 */}
      <motion.p
        aria-hidden
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serif tracking-[0.3em]"
        style={{ fontSize: "clamp(6rem, 18vw, 14rem)", color: "#e7dabf" }}
      >
        ARTE
      </motion.p>

      <div className="relative max-w-[1440px] mx-auto">
        <SectionTitle en="BEFORE & AFTER" ko="전후사진" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* 좌측 — 어긋나게 겹친 Before/After 이미지 */}
          <div className="relative h-[420px] sm:h-[480px] md:h-[560px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* BEFORE */}
                <div
                  className="absolute left-0 bottom-0 w-[42%] h-[68%] flex items-end p-4"
                  style={{ backgroundColor: item.beforeColor }}
                >
                  <span className="bg-canvas/80 px-3 py-1">
                    <span className="font-serif text-ink text-[10px] tracking-[0.3em]">BEFORE</span>
                  </span>
                </div>
                {/* AFTER */}
                <div
                  className="absolute left-[36%] top-0 w-[56%] h-full flex items-end justify-end p-4"
                  style={{ backgroundColor: item.afterColor }}
                >
                  <span className="bg-ink/70 px-3 py-1">
                    <span className="font-serif text-canvas text-[10px] tracking-[0.3em]">AFTER</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 우측 — 카운터 / 타이틀 / 설명 / 버튼 / 화살표 */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-ink text-4xl leading-none">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-dim text-sm leading-none">
                / {String(items.length).padStart(2, "0")}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="mt-6"
              >
                <h3 className="font-serif-ko text-ink text-3xl md:text-4xl font-bold leading-snug">
                  {item.label}
                </h3>
                <p className="mt-4 font-sans-ko text-dim text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {item.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8">
              <Button href="/before-after" variant="filled" size="md">
                더보기
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="이전"
                className="w-11 h-11 border border-ink/20 flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1">
                  <polyline points="7,1 1,6 7,11" />
                  <line x1="1" y1="6" x2="15" y2="6" />
                </svg>
              </button>
              <button
                onClick={() => go(1)}
                aria-label="다음"
                className="w-11 h-11 border border-ink/20 flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1">
                  <polyline points="9,1 15,6 9,11" />
                  <line x1="1" y1="6" x2="15" y2="6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
