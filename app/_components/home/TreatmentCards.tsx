"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";

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
  return (
    <section className="py-24 px-6 bg-canvas">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle en="TREATMENTS" ko="진료분야" center />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-px bg-rule">
          {treatments.map((item, i) => {
            const x = -60 + (i / (treatments.length - 1)) * 120;
            return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 40, x }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.15 }}
            >
              <Link href={item.href} className="group block bg-canvas relative overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <SafeImage
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <SafeImage
                    src={item.hoverSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{ transitionProperty: "opacity", transitionDuration: "400ms", transitionTimingFunction: "ease" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-serif text-gold text-[10px] tracking-[0.3em] mb-1">{item.en}</p>
                  <h3 className="font-serif-ko text-canvas text-xl font-light">{item.label}</h3>
                  <p className="font-sans-ko text-canvas/60 text-xs mt-1 tracking-wide">{item.desc}</p>
                  <div className="mt-3 flex items-center gap-2 text-canvas/50 group-hover:text-gold transition-colors duration-300">
                    <span className="text-[10px] tracking-widest">자세히 보기</span>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1"
                      className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <line x1="0" y1="5" x2="12" y2="5" />
                      <polyline points="8,1 12,5 8,9" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            );
          })}
          {treatments.length % 2 === 1 && (
            <div className="bg-canvas md:hidden" aria-hidden />
          )}
        </div>
      </div>
    </section>
  );
}
