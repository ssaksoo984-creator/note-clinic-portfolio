"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SafeImage from "../ui/SafeImage";

interface TreatmentIntroProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export default function TreatmentIntro({
  title,
  description,
  image,
  imageAlt,
  points,
}: TreatmentIntroProps) {
  const isGif = image.toLowerCase().endsWith(".gif");
  const [gifFailed, setGifFailed] = useState(false);

  return (
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h1 className="font-serif-ko text-ink text-3xl md:text-4xl font-light tracking-tight leading-snug">
            {title}
          </h1>
          <p className="mt-5 text-dim text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[4/3] overflow-hidden bg-rule"
          >
            {isGif ? (
              gifFailed ? (
                <div className="absolute inset-0 bg-rule" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  alt={imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => setGifFailed(true)}
                />
              )
            ) : (
              <SafeImage
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <ul className="flex flex-col gap-5">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-serif text-gold text-xs tracking-[0.2em] mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans-ko text-ink text-sm md:text-base leading-relaxed">
                    {point}
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
