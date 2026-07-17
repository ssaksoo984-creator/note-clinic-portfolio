"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

interface TransitItem {
  label: string;
  description: string;
}

interface TransitInfoProps {
  title: string;
  subtitle: string;
  items: TransitItem[];
}

export default function TransitInfo({ title, subtitle, items }: TransitInfoProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 }}
              className="border border-rule px-7 py-8"
            >
              <p className="font-serif text-gold text-xs tracking-[0.3em] mb-3">
                {item.label}
              </p>
              <p className="font-sans-ko text-ink text-sm leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
