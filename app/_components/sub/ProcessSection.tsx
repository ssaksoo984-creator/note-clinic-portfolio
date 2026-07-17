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
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-rule" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.12,
              }}
              className="relative flex flex-col items-start"
            >
              <span className="relative z-10 flex items-center justify-center w-14 h-14 bg-gold border border-gold font-serif text-canvas text-xl mb-6">
                {s.step}
              </span>
              <h3 className="font-serif-ko text-ink text-lg font-light mb-3">
                {s.title}
              </h3>
              <p className="font-sans-ko text-dim text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
