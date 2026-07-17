"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";

interface DoctorSectionProps {
  name: string;
  title: string;
  specialty: string;
  career: string[];
  image: string;
}

export default function DoctorSection({
  name,
  title,
  specialty,
  career,
  image,
}: DoctorSectionProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-rule/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle en="MEDICAL TEAM" ko="의료진 소개" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[minmax(0,320px)_1fr] gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[3/4] overflow-hidden bg-rule"
          >
            <SafeImage
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="font-serif text-gold text-xs tracking-[0.3em] mb-3">
              {specialty}
            </p>
            <h3 className="font-serif-ko text-ink text-2xl md:text-3xl font-light mb-2">
              {name}
            </h3>
            <p className="font-sans-ko text-dim text-sm mb-8">{title}</p>

            <ul className="flex flex-col gap-3">
              {career.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-rule pb-3 last:border-0"
                >
                  <span className="w-1 h-1 mt-2 shrink-0 bg-gold" />
                  <span className="font-sans-ko text-ink text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
