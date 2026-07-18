"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";

const items = [
  {
    label: "눈성형",
    desc: "자연스러운 쌍꺼풀 수술",
    before: "/clients/note-clinic/images/before-after/eye-before.jpg",
    after: "/clients/note-clinic/images/before-after/eye-after.jpg",
  },
  {
    label: "코성형",
    desc: "높고 자연스러운 코 라인",
    before: "/clients/note-clinic/images/before-after/nose-before.jpg",
    after: "/clients/note-clinic/images/before-after/nose-after.jpg",
  },
  {
    label: "안면윤곽",
    desc: "갸름한 얼굴형 교정",
    before: "/clients/note-clinic/images/before-after/facial-before.jpg",
    after: "/clients/note-clinic/images/before-after/facial-after.jpg",
  },
  {
    label: "가슴성형",
    desc: "자연스러운 볼륨업",
    before: "/clients/note-clinic/images/before-after/breast-before.jpg",
    after: "/clients/note-clinic/images/before-after/breast-after.jpg",
  },
];

function BeforeAfterPair({
  item,
  index,
}: {
  item: (typeof items)[0];
  index: number;
}) {
  const pairRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pairRef,
    offset: ["start end", "center center"],
  });

  const xBefore = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const xAfter = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <motion.div
      ref={pairRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
      className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3"
    >
      {/* Before */}
      <motion.div style={{ x: xBefore }} className="flex-1 relative">
        <div className="relative aspect-[3/4] overflow-hidden">
          <SafeImage
            src={item.before}
            alt={`${item.label} before`}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover"
          />
          <div className="absolute bottom-3 left-3 bg-ink/70 px-3 py-1">
            <span className="font-serif text-canvas text-[10px] tracking-[0.3em]">BEFORE</span>
          </div>
        </div>
      </motion.div>

      {/* After */}
      <motion.div style={{ x: xAfter }} className="flex-1 relative">
        <div className="relative aspect-[3/4] overflow-hidden">
          <SafeImage
            src={item.after}
            alt={`${item.label} after`}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-gold/90 px-3 py-1">
            <span className="font-serif text-canvas text-[10px] tracking-[0.3em]">AFTER</span>
          </div>
        </div>
        <div className="mt-3 text-right">
          <p className="font-serif text-gold text-[10px] tracking-[0.25em]">{item.label}</p>
          <p className="font-sans-ko text-dim text-xs mt-0.5">{item.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-24 px-6 bg-rule/20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle en="BEFORE & AFTER" ko="전후사진" />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, i) => (
            <BeforeAfterPair key={item.label} item={item} index={i} />
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
