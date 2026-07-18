"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";
import "swiper/css";
import "swiper/css/free-mode";

const treatments = [
  {
    label: "안면윤곽",
    en: "FACIAL CONTOURING",
    href: "/facial",
    desc: "광대·사각턱·턱끝 교정",
    src: "/clients/note-clinic/images/treatments/facial-default.jpg",
    hoverSrc: "/clients/note-clinic/images/treatments/facial-hover.jpg",
  },
  {
    label: "가슴성형",
    en: "BREAST",
    href: "/breast",
    desc: "확대·축소·리프팅",
    src: "/clients/note-clinic/images/treatments/breast-default.jpg",
    hoverSrc: "/clients/note-clinic/images/treatments/breast-hover.jpg",
  },
  {
    label: "눈성형",
    en: "EYE",
    href: "/eye",
    desc: "쌍꺼풀·앞트임·눈매교정",
    src: "/clients/note-clinic/images/treatments/eye-default.jpg",
    hoverSrc: "/clients/note-clinic/images/treatments/eye-hover.jpg",
  },
  {
    label: "코성형",
    en: "NOSE",
    href: "/nose",
    desc: "융비술·코끝·콧볼 교정",
    src: "/clients/note-clinic/images/treatments/nose-default.jpg",
    hoverSrc: "/clients/note-clinic/images/treatments/nose-hover.jpg",
  },
  {
    label: "안티에이징",
    en: "ANTI-AGING",
    href: "/contact",
    desc: "리프팅·필러·보톡스",
    src: "/clients/note-clinic/images/treatments/anti-aging-default.jpg",
    hoverSrc: "/clients/note-clinic/images/treatments/anti-aging-hover.jpg",
  },
];

export default function TreatmentCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [badgePos, setBadgePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setBadgePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="relative w-full overflow-hidden bg-canvas py-24 md:py-32">
      {/* 배경 골드 그라데이션 원 — 스크롤 진입 시 피어나는 효과 */}
      <motion.div
        aria-hidden
        initial={{ scale: 0.02, opacity: 0, rotate: -8 }}
        whileInView={{ scale: [0.02, 1.25, 1], opacity: [0, 1, 1], rotate: [-8, 4, 0] }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 2.6, times: [0, 0.6, 1], ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -left-12 top-4 w-[380px] h-[380px] md:-left-24 md:w-[820px] md:h-[820px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.75) 0%, rgba(201,169,110,0.4) 35%, rgba(201,169,110,0.12) 60%, rgba(201,169,110,0) 75%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="relative max-w-[1440px] mx-auto px-6 mb-14">
          <SectionTitle en="TREATMENTS" ko="진료분야" center />
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseMove={handleMouseMove}
          className="relative pl-6 md:pl-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] md:cursor-none"
        >
        <Swiper
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true, sticky: false }}
          grabCursor={false}
          slidesPerView="auto"
          spaceBetween={24}
          className="!pr-6"
        >
          {treatments.map((item, i) => (
            <SwiperSlide key={item.href} style={{ width: "min(85vw, 420px)" }} className="!h-auto">
              <Link href={item.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-rule">
                  <SafeImage
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 85vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <SafeImage
                    src={item.hoverSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 85vw, 420px"
                    className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="font-serif-ko text-ink text-xl md:text-2xl font-light">
                    {item.label}
                  </h3>
                  <span className="shrink-0 flex items-center gap-2 text-[#4a2f1c] text-[11px] tracking-widest pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                    <span className="w-4 h-px bg-[#4a2f1c]/40" />
                    {item.en}
                  </span>
                </div>
                <p className="mt-2 text-dim text-sm leading-relaxed">{item.desc}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 커스텀 드래그 배지 (데스크탑 전용, 마우스 추적) */}
        <div
          aria-hidden
          className="hidden md:flex pointer-events-none absolute z-20 w-24 h-24 items-center justify-center transition-opacity duration-300"
          style={{
            left: badgePos.x,
            top: badgePos.y,
            transform: "translate(-50%, -50%)",
            opacity: hovering ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 p-[1.5px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,169,110,0.9), #c9a96e 40%, #f5e6c8 60%, rgba(201,169,110,0.9))",
            }}
          >
            <div
              className="w-full h-full"
              style={{ background: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 100%)" }}
            />
          </div>
          <div className="relative flex items-center gap-2 text-canvas text-[10px] tracking-[0.25em]">
            <svg width="10" height="10" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
              <polyline points="12,2 5,9 12,16" />
            </svg>
            DRAG
            <svg width="10" height="10" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
              <polyline points="6,2 13,9 6,16" />
            </svg>
          </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
