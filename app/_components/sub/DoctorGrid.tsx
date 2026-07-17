"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";

interface Doctor {
  name: string;
  title: string;
  specialty: string;
  image: string;
  intro?: string;
  career?: string[];
  societies?: string[];
  research?: string;
}

interface DoctorGridProps {
  title: string;
  subtitle: string;
  doctors: Doctor[];
}

export default function DoctorGrid({ title, subtitle, doctors }: DoctorGridProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-8 md:gap-16"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-rule">
                <SafeImage
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-serif text-gold text-xs tracking-[0.3em]">
                  {doctor.specialty}
                </p>
                <h3 className="mt-2 font-serif-ko text-ink text-2xl font-light">
                  {doctor.name}
                </h3>
                <p className="mt-1 font-sans-ko text-dim text-sm">{doctor.title}</p>

                {doctor.intro && (
                  <p className="mt-6 font-sans-ko text-ink text-base leading-relaxed whitespace-pre-line">
                    {doctor.intro}
                  </p>
                )}

                {doctor.career && doctor.career.length > 0 && (
                  <div className="mt-8 border-t border-rule pt-6 space-y-1.5">
                    {doctor.career.map((line) => (
                      <p key={line} className="font-sans-ko text-ink text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                )}

                {doctor.societies && doctor.societies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5">
                    {doctor.societies.map((s) => (
                      <span key={s} className="font-sans-ko text-dim text-xs tracking-wide">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {doctor.research && (
                  <div className="mt-6 border-t border-rule pt-6">
                    <p className="font-serif text-gold text-[10px] tracking-[0.3em] mb-2">
                      RESEARCH
                    </p>
                    <p className="font-sans-ko text-dim text-xs leading-relaxed">
                      {doctor.research}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
