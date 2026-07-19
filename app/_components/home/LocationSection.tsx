"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const hours = [
  { day: "평일", time: "09:00 — 18:00" },
  { day: "토요일", time: "09:00 — 15:00" },
  { day: "일/공휴일", time: "휴진" },
  { day: "점심시간", time: "13:00 — 14:00" },
];

export default function LocationSection() {
  return (
    <section className="py-24 px-6 bg-rule/10">
      <div className="max-w-[1440px] mx-auto">
        <SectionTitle en="LOCATION & CONTACT" ko="오시는 길" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 좌측: 텍스트 정보 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-8"
          >
            {/* 병원 정보 */}
            <div>
              <p className="font-serif text-gold text-xs tracking-[0.3em] mb-3">HOSPITAL INFO</p>
              <h3 className="font-serif-ko text-ink text-2xl font-light mb-4">ARTE 성형외과</h3>
              <address className="not-italic flex flex-col gap-2 text-sm text-ink leading-relaxed">
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className="mt-0.5 shrink-0 text-gold">
                    <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" />
                    <circle cx="8" cy="6" r="1.5" />
                  </svg>
                  <span>서울특별시 강남구 압구정로 000<br />ARTE빌딩 4·5F</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" className="shrink-0 text-gold">
                    <path d="M3 3h2l1 3L4.5 7.5a11 11 0 0 0 4 4L10 10l3 1v2a1 1 0 0 1-1 1C6.04 14 2 9.96 2 5a1 1 0 0 1 1-1z" />
                  </svg>
                  <a href="tel:02-0000-0000" className="hover:text-gold transition-colors tracking-wider">
                    02-0000-0000
                  </a>
                </div>
              </address>
            </div>

            {/* 진료시간 테이블 */}
            <div>
              <p className="font-serif text-gold text-xs tracking-[0.3em] mb-4">HOURS</p>
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.day} className="border-b border-rule last:border-0">
                      <td className="py-3 pr-6 font-sans-ko text-dim">{h.day}</td>
                      <td className={`py-3 font-sans-ko tracking-wide ${h.time === "휴진" ? "text-gold/70" : "text-ink"}`}>
                        {h.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 카카오채널 상담 버튼 */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://pf.kakao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FEE500] text-[#3A1D1D] text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M9 1.5C4.86 1.5 1.5 4.13 1.5 7.38c0 2.1 1.35 3.94 3.38 5.01L4 15l3.28-2.17c.55.08 1.12.13 1.72.13 4.14 0 7.5-2.63 7.5-5.88C16.5 4.13 13.14 1.5 9 1.5z" />
                </svg>
                카카오톡 상담
              </a>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-ink text-ink text-sm tracking-wide hover:bg-ink hover:text-canvas transition-colors"
              >
                온라인 상담 신청
              </a>
            </div>
          </motion.div>

          {/* 우측: 지도 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="relative h-80 lg:h-auto min-h-80 bg-rule overflow-hidden"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=127.031%2C37.509%2C127.063%2C37.526&layer=mapnik&marker=37.5172%2C127.0473"
              width="100%"
              height="100%"
              title="ARTE 성형외과 위치"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
