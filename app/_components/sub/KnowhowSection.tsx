"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";

interface KnowhowItem {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

interface KnowhowSectionProps {
  title: string;
  subtitle: string;
  items: KnowhowItem[];
}

export default function KnowhowSection({
  title,
  subtitle,
  items,
}: KnowhowSectionProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <SectionTitle en={subtitle} ko={title} center />

        <div
          className={`mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 ${
            items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
              className="bg-canvas border border-rule px-7 py-10 flex flex-col items-start"
            >
              {item.image && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 bg-rule">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              )}
              <span className="font-serif text-gold text-3xl leading-none mb-5">
                {item.icon}
              </span>
              <h3 className="font-serif-ko text-ink text-lg font-light mb-3">
                {item.title}
              </h3>
              <p className="font-sans-ko text-dim text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
