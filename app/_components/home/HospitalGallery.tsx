"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";
import "swiper/css";
import "swiper/css/navigation";

const galleryImages = [
  { src: "/clients/note-clinic/images/gallery/1.jpg", alt: "병원 로비" },
  { src: "/clients/note-clinic/images/gallery/2.jpg", alt: "상담실" },
  { src: "/clients/note-clinic/images/gallery/3.jpg", alt: "회복실" },
  { src: "/clients/note-clinic/images/gallery/4.jpg", alt: "대기실" },
  { src: "/clients/note-clinic/images/gallery/5.jpg", alt: "수술실" },
  { src: "/clients/note-clinic/images/gallery/6.jpg", alt: "의료진" },
  { src: "/clients/note-clinic/images/gallery/7.jpg", alt: "의료진 2" },
  { src: "/clients/note-clinic/images/gallery/8.jpg", alt: "클린룸" },
  { src: "/clients/note-clinic/images/gallery/9.jpg", alt: "복도" },
  { src: "/clients/note-clinic/images/gallery/10.jpg", alt: "외관" },
  { src: "/clients/note-clinic/images/gallery/11.jpg", alt: "시설" },
  { src: "/clients/note-clinic/images/gallery/12.jpg", alt: "인테리어" },
];

/* ── 모달 컴포넌트 ─────────────────────────────────── */
function GalleryModal({
  initialIndex,
  onClose,
}: {
  initialIndex: number;
  onClose: () => void;
}) {
  const modalSwiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-night/95 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute -top-12 right-4 text-canvas/70 hover:text-canvas transition-colors z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <Swiper
          onSwiper={(s) => { modalSwiperRef.current = s; }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".modal-prev",
            nextEl: ".modal-next",
          }}
          initialSlide={initialIndex}
          className="w-full"
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full aspect-[4/3]">
                <SafeImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
              <p className="text-center font-serif text-canvas/60 text-xs tracking-[0.2em] mt-3">
                {img.alt} — {i + 1} / {galleryImages.length}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="modal-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 border border-canvas/30 flex items-center justify-center text-canvas hover:border-gold hover:text-gold transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="10,2 4,8 10,14" />
          </svg>
        </button>
        <button
          className="modal-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 border border-canvas/30 flex items-center justify-center text-canvas hover:border-gold hover:text-gold transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="6,2 12,8 6,14" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

/* ── 메인 갤러리 컴포넌트 ─────────────────────────── */
export default function HospitalGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  return (
    <section className="py-24 px-6 bg-canvas">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle en="HOSPITAL GALLERY" ko="병원 갤러리" center />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
              onClick={() => handleOpen(i)}
              className="group relative aspect-[4/3] overflow-hidden focus:outline-none"
              aria-label={`갤러리 이미지 ${i + 1}: ${img.alt}`}
            >
              <SafeImage
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <circle cx="14" cy="14" r="12" />
                  <line x1="14" y1="9" x2="14" y2="19" />
                  <line x1="9" y1="14" x2="19" y2="14" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <GalleryModal initialIndex={selectedIndex} onClose={handleClose} />
      )}
    </section>
  );
}
