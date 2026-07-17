"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import type { StoryPoint } from "../../_data/story";

interface StorySectionProps {
  title: string;
  subtitle: string;
  points: StoryPoint[];
}

export default function StorySection({
  title,
  subtitle,
  points,
}: StorySectionProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-3xl mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div className="mt-16 flex flex-col gap-16">
          {points.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.1,
              }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-l border-rule pl-6 sm:pl-10"
            >
              <span className="font-serif text-gold text-4xl leading-none shrink-0">
                {p.number}
              </span>
              <div>
                <h3 className="font-serif-ko text-ink text-xl md:text-2xl font-light mb-3">
                  {p.title}
                </h3>
                <p className="font-sans-ko text-dim text-sm md:text-base leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
