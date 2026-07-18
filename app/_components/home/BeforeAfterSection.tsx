"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const items = [
  {
    label: "눈성형",
    desc: "자연스러운 쌍꺼풀 수술",
    beforeColor: "#d9d3c5",
    afterColor: "#c9a96e",
  },
  {
    label: "코성형",
    desc: "높고 자연스러운 코 라인",
    beforeColor: "#d1cabc",
    afterColor: "#b08d57",
  },
  {
    label: "안면윤곽",
    desc: "갸름한 얼굴형 교정",
    beforeColor: "#d3cabb",
    afterColor: "#8a6d4a",
  },
  {
    label: "가슴성형",
    desc: "자연스러운 볼륨업",
    beforeColor: "#ded6c6",
    afterColor: "#e0c896",
  },
];

function CompareSlider({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    updatePos(e.clientX);
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updatePos(e.clientX);
  };
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.12 }}
    >
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="group relative aspect-[3/4] overflow-hidden touch-none select-none cursor-ew-resize"
      >
        {/* AFTER — 바닥 레이어 */}
        <div
          className="absolute inset-0 flex items-end justify-end p-4"
          style={{ backgroundColor: item.afterColor }}
        >
          <span className="bg-ink/70 px-3 py-1">
            <span className="font-serif text-canvas text-[10px] tracking-[0.3em]">AFTER</span>
          </span>
        </div>

        {/* BEFORE — 드래그 위치까지만 노출되는 레이어 */}
        <div
          className="absolute inset-0 flex items-end justify-start p-4"
          style={{
            backgroundColor: item.beforeColor,
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
          }}
        >
          <span className="bg-canvas/80 px-3 py-1">
            <span className="font-serif text-ink text-[10px] tracking-[0.3em]">BEFORE</span>
          </span>
        </div>

        {/* 드래그 핸들 */}
        <div
          className="absolute top-0 bottom-0 z-10 pointer-events-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute inset-y-0 -translate-x-1/2 w-[2px] bg-canvas" />
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-canvas border border-gold flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#111111" strokeWidth="1.2">
              <polyline points="5,1 1,6 5,11" />
              <polyline points="11,1 15,6 11,11" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <p className="font-serif-ko text-ink text-lg font-bold">{item.label}</p>
        <p className="font-sans-ko text-dim text-xs">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-24 px-6 bg-rule/20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionTitle en="BEFORE & AFTER" ko="전후사진" />
          <p className="font-sans-ko text-dim text-xs tracking-widest">
            ← 이미지를 드래그해서 비교해보세요 →
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, i) => (
            <CompareSlider key={item.label} item={item} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/before-after"
            className="inline-flex items-center gap-3 text-xs tracking-widest text-ink hover:text-gold transition-colors duration-300 border-b border-ink/20 hover:border-gold pb-1"
          >
            전체 전후사진 보기
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="0" y1="5" x2="12" y2="5" />
              <polyline points="8,1 12,5 8,9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
