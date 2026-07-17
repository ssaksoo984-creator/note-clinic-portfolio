"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CategoryFilter from "../ui/CategoryFilter";
import SafeImage from "../ui/SafeImage";

interface BeforeAfterItem {
  category: string;
  categoryLabel: string;
  label: string;
  desc: string;
  before: string;
  after: string;
}

interface BeforeAfterGalleryProps {
  items: BeforeAfterItem[];
}

const categories = [
  { label: "전체", value: "all" },
  { label: "눈성형", value: "eye" },
  { label: "코성형", value: "nose" },
  { label: "안면윤곽", value: "facial" },
  { label: "가슴성형", value: "breast" },
];

export default function BeforeAfterGallery({ items }: BeforeAfterGalleryProps) {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <CategoryFilter categories={categories} active={active} onChange={setActive} />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, i) => (
          <motion.div
            key={`${item.category}-${item.label}-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: (i % 6) * 0.08 }}
          >
            <div className="grid grid-cols-2 gap-1">
              <div className="relative aspect-[3/4] overflow-hidden">
                <SafeImage
                  src={item.before}
                  alt={`${item.label} before`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-ink/70 px-2.5 py-1">
                  <span className="font-serif text-canvas text-[9px] tracking-[0.25em]">
                    BEFORE
                  </span>
                </div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <SafeImage
                  src={item.after}
                  alt={`${item.label} after`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-gold/90 px-2.5 py-1">
                  <span className="font-serif text-canvas text-[9px] tracking-[0.25em]">
                    AFTER
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <p className="font-serif text-gold text-[10px] tracking-[0.25em]">
                {item.categoryLabel} · {item.label}
              </p>
              <p className="font-sans-ko text-dim text-xs mt-0.5">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-14 text-center text-dim text-sm">
          해당 카테고리의 사진이 없습니다.
        </p>
      )}
    </div>
  );
}
