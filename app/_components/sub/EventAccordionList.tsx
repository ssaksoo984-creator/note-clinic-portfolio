"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "../ui/SafeImage";

interface EventItem {
  title: string;
  period: string;
  summary: string;
  detail: string;
  image: string;
}

interface EventAccordionListProps {
  events: EventItem[];
}

export default function EventAccordionList({ events }: EventAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div className="flex flex-col gap-6">
      {events.map((event, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
            className="border border-rule bg-canvas"
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-5 p-5 text-left"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-rule">
                <SafeImage
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block bg-gold/90 text-canvas text-[10px] tracking-widest px-2 py-1 mb-2">
                  {event.period}
                </span>
                <h3 className="font-serif-ko text-ink text-base sm:text-lg font-light">
                  {event.title}
                </h3>
                <p className="font-sans-ko text-dim text-xs sm:text-sm mt-1 line-clamp-2">
                  {event.summary}
                </p>
              </div>
              <span className="relative w-4 h-4 shrink-0 text-gold">
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-3 h-px bg-current" />
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="w-px h-3 bg-current" />
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-rule mx-5 pt-5 pb-6">
                    <p className="font-sans-ko text-dim text-sm leading-relaxed">
                      {event.detail}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
