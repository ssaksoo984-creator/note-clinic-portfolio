"use client";

import { motion } from "framer-motion";
import Button from "./Button";

interface ConsultCTAProps {
  title?: string;
  subtitle?: string;
}

export default function ConsultCTA({
  title = "자연스러운 변화의 시작",
  subtitle = "전문 의료진과의 1:1 무료 상담을 통해\n당신만의 아름다움을 설계해 드립니다.",
}: ConsultCTAProps) {
  return (
    <section className="bg-night py-24 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-serif text-gold text-xs tracking-[0.35em] mb-5">
          CONSULTATION
        </p>
        <h2 className="font-serif-ko text-canvas text-4xl md:text-5xl font-light tracking-tight leading-snug mb-6">
          {title}
        </h2>
        <p className="text-dim text-sm leading-relaxed mb-10 whitespace-pre-line">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="tel:02-0000-0000"
            className="font-serif text-canvas text-2xl tracking-[0.15em] hover:text-gold transition-colors"
          >
            02-0000-0000
          </a>
        </div>

        <Button variant="outline-light" size="lg" href="/contact">
          온라인 상담 신청
        </Button>
      </motion.div>
    </section>
  );
}
