"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

interface AwardsSectionProps {
  title: string;
  subtitle: string;
  awards: string[];
}

export default function AwardsSection({
  title,
  subtitle,
  awards,
}: AwardsSectionProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.06 }}
              className="flex items-center gap-4 border border-rule px-6 py-5"
            >
              <span className="w-1.5 h-1.5 shrink-0 bg-gold" />
              <p className="font-sans-ko text-ink text-sm tracking-wide">
                {award}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
