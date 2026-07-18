"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SafeImage from "../ui/SafeImage";
import type { StoryPoint } from "../../_data/story";

interface StorySectionProps {
  title: string;
  subtitle: string;
  points: StoryPoint[];
}

const ORBIT_TEXT = "ARTE PERFECT SATISFACTION • ".repeat(3);
const PLACEHOLDER_IMG = "/clients/note-clinic/images/hero/eventbanner_01_face.png";

export default function StorySection({
  title,
  subtitle,
  points,
}: StorySectionProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);
  const orbitOpacity = useTransform(scrollYProgress, [0.28, 0.42], [1, 0]);
  const size = useTransform(scrollYProgress, [0.3, 0.85], ["280px", "100vw"]);
  const heightSize = useTransform(scrollYProgress, [0.3, 0.85], ["280px", "100vh"]);
  const radius = useTransform(scrollYProgress, [0.3, 0.85], ["50%", "0%"]);

  return (
    <section className="bg-canvas">
      {/* 스크롤 연동 — 타이틀 → 회전하는 구체 → 풀스크린 이미지 */}
      <div ref={wrapRef} className="relative h-[280vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-canvas">
          {/* 타이틀 레이어 */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute inset-0 z-20 flex items-center justify-center px-6"
          >
            <SectionTitle en={subtitle} ko={title} center />
          </motion.div>

          {/* 회전하는 구체 이미지 레이어 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative overflow-hidden"
              style={{ width: size, height: heightSize, borderRadius: radius }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              >
                <SafeImage
                  src={PLACEHOLDER_IMG}
                  alt="ARTE"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
              {/* 구체처럼 보이게 하는 음영 오버레이 */}
              <motion.div
                style={{
                  opacity: orbitOpacity,
                  background:
                    "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.4), rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.55) 100%)",
                  mixBlendMode: "overlay",
                }}
                className="absolute inset-0 pointer-events-none"
              />
            </motion.div>
          </div>

          {/* 구체 겉을 도는 텍스트 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.svg
              viewBox="0 0 200 200"
              className="w-[380px] h-[380px]"
              style={{ opacity: orbitOpacity }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <path
                  id="storyOrbitPath"
                  d="M 100,100 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"
                  fill="none"
                />
              </defs>
              <text fill="#c9a96e" fontSize="8" letterSpacing="2">
                <textPath href="#storyOrbitPath">{ORBIT_TEXT}</textPath>
              </text>
            </motion.svg>
          </div>
        </div>
      </div>

      {/* WHY ARTE 재등장 + 3개 카드 */}
      <div className="py-20 md:py-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle en={subtitle} ko={title} center />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {points.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
                className="relative p-8"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <defs>
                    <linearGradient id={`storyFrameGold-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c9a96e" stopOpacity="0.2" />
                      <stop offset="35%" stopColor="#c9a96e" />
                      <stop offset="50%" stopColor="#ffffff" />
                      <stop offset="65%" stopColor="#c9a96e" />
                      <stop offset="100%" stopColor="#c9a96e" stopOpacity="0.2" />
                      <animateTransform
                        attributeName="gradientTransform"
                        type="translate"
                        values="-1 0; 1 0; -1 0"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </linearGradient>
                  </defs>
                  <rect
                    x="1"
                    y="1"
                    width="98"
                    height="98"
                    fill="none"
                    stroke={`url(#storyFrameGold-${i})`}
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <span className="font-serif text-gold text-3xl leading-none">{p.number}</span>
                <h3 className="mt-4 font-serif-ko text-ink text-xl md:text-2xl font-bold">
                  {p.title}
                </h3>
                <p className="mt-3 font-sans-ko text-dim text-sm md:text-base leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
