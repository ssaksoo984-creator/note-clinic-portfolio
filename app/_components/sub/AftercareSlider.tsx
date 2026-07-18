"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";
import "swiper/css";

interface AftercareItem {
  title: string;
  description: string;
  image: string;
}

interface AftercareSliderProps {
  title: string;
  subtitle: string;
  items: AftercareItem[];
}

export default function AftercareSlider({
  title,
  subtitle,
  items,
}: AftercareSliderProps) {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="py-20 md:py-32 px-6 bg-canvas overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionTitle en={subtitle} ko={title} />
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="이전 슬라이드"
              className="w-10 h-10 border border-ink/20 flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
                <polyline points="12,2 5,9 12,16" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="다음 슬라이드"
              className="w-10 h-10 border border-ink/20 flex items-center justify-center text-ink hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
                <polyline points="6,2 13,9 6,16" />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10"
        >
          <Swiper
            onSwiper={(s) => { swiperRef.current = s; }}
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-canvas border border-rule h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-rule">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif-ko text-ink text-lg font-light mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans-ko text-dim text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
