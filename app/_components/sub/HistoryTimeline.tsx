"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

interface Milestone {
  year: string;
  description: string;
}

interface HistoryTimelineProps {
  title: string;
  subtitle: string;
  milestones: Milestone[];
}

export default function HistoryTimeline({
  title,
  subtitle,
  milestones,
}: HistoryTimelineProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-rule/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div className="mt-16 max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              className="flex gap-6 border-b border-rule py-6 last:border-0"
            >
              <span className="font-serif text-gold text-lg shrink-0 w-20">
                {m.year}
              </span>
              <p className="font-sans-ko text-ink text-sm md:text-base leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
