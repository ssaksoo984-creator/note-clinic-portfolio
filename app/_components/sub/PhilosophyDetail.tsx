"use client";

import { motion } from "framer-motion";

interface PhilosophyValue {
  title: string;
  description: string;
}

interface PhilosophyDetailProps {
  lead: string;
  description: string;
  values: PhilosophyValue[];
}

export default function PhilosophyDetail({
  lead,
  description,
  values,
}: PhilosophyDetailProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-serif text-gold text-xs tracking-[0.35em] mb-5">
            PHILOSOPHY
          </p>
          <h2 className="font-serif-ko text-ink text-2xl md:text-3xl font-light leading-relaxed">
            {lead}
          </h2>
          <p className="mt-6 text-dim text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border border-rule divide-y divide-rule md:divide-y-0 md:divide-x">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
              className="px-8 py-12 text-center"
            >
              <span className="font-serif text-gold text-4xl md:text-5xl tracking-wide">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif-ko text-ink text-lg font-light">
                {value.title}
              </h3>
              <p className="mt-3 font-sans-ko text-dim text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
