"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

interface Method {
  name: string;
  description: string;
  points?: string[];
}

interface TreatmentMethodsProps {
  title: string;
  subtitle: string;
  methods: Method[];
}

export default function TreatmentMethods({
  title,
  subtitle,
  methods,
}: TreatmentMethodsProps) {
  const [active, setActive] = useState(0);
  const current = methods[active];

  return (
    <section className="py-20 md:py-32 px-6 bg-rule/20">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16"
        >
          {/* 방법 탭 목록 */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-rule">
            {methods.map((m, i) => (
              <button
                key={m.name}
                onClick={() => setActive(i)}
                className={`shrink-0 text-left px-4 py-3 text-sm tracking-wide whitespace-nowrap md:whitespace-normal transition-colors border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                  active === i
                    ? "text-ink border-gold"
                    : "text-dim border-transparent hover:text-ink"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* 선택된 방법 상세 */}
          <div className="min-h-[220px] bg-canvas p-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h3 className="font-serif-ko text-ink text-xl md:text-2xl font-light mb-4">
                  {current.name}
                </h3>
                <p className="font-sans-ko text-dim text-sm md:text-base leading-relaxed">
                  {current.description}
                </p>
                {current.points && (
                  <ul className="mt-6 flex flex-col gap-3">
                    {current.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1 h-1 mt-2 shrink-0 bg-gold" />
                        <span className="font-sans-ko text-ink text-sm leading-relaxed">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
