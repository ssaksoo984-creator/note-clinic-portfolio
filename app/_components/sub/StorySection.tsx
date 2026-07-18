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

const CUBE_SIZE = 220;
const HALF = CUBE_SIZE / 2;
const FRONT_IMG = "/clients/note-clinic/images/hero/eventbanner_01_face.png";

const cubeFaces = [
  { key: "front", src: FRONT_IMG, transform: `translateZ(${HALF}px)` },
  { key: "back", src: "/clients/note-clinic/images/treatments/eye-default.jpg", transform: `rotateY(180deg) translateZ(${HALF}px)` },
  { key: "right", src: "/clients/note-clinic/images/treatments/nose-default.jpg", transform: `rotateY(90deg) translateZ(${HALF}px)` },
  { key: "left", src: "/clients/note-clinic/images/treatments/facial-default.jpg", transform: `rotateY(-90deg) translateZ(${HALF}px)` },
  { key: "top", src: "/clients/note-clinic/images/treatments/breast-default.jpg", transform: `rotateX(90deg) translateZ(${HALF}px)` },
  { key: "bottom", src: "/clients/note-clinic/images/treatments/anti-aging-default.jpg", transform: `rotateX(-90deg) translateZ(${HALF}px)` },
];

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

  const introOpacity = useTransform(scrollYProgress, [0, 0.18, 0.3], [1, 1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const cubeOpacity = useTransform(scrollYProgress, [0.2, 0.32], [1, 0]);
  const flatOpacity = useTransform(scrollYProgress, [0.24, 0.36], [0, 1]);
  const flatSize = useTransform(scrollYProgress, [0.3, 0.72], [`${CUBE_SIZE}px`, "100vw"]);
  const flatHeight = useTransform(scrollYProgress, [0.3, 0.72], [`${CUBE_SIZE}px`, "100vh"]);
  const scrimOpacity = useTransform(scrollYProgress, [0.68, 0.8], [0, 1]);
  const finalOpacity = useTransform(scrollYProgress, [0.72, 0.86], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.72, 0.86], [30, 0]);

  return (
    <section className="bg-canvas">
      {/* 전체가 한 화면(sticky) 안에서: 타이틀 -> 3D 큐브 -> 풀스크린 이미지 -> 타이틀+3카드 */}
      <div ref={wrapRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-canvas">
          {/* 인트로 타이틀 */}
          <motion.div
            style={{ opacity: introOpacity, y: introY }}
            className="absolute inset-0 z-20 flex items-center justify-center px-6"
          >
            <SectionTitle en={subtitle} ko={title} center />
          </motion.div>

          {/* 3D 회전 큐브 */}
          <motion.div
            style={{ opacity: cubeOpacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div style={{ perspective: "1200px" }} className="w-[220px] h-[220px]">
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: 360, rotateY: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              >
                {cubeFaces.map((face) => (
                  <div
                    key={face.key}
                    className="absolute inset-0 overflow-hidden border border-gold/40"
                    style={{ transform: face.transform }}
                  >
                    <SafeImage
                      src={face.src}
                      alt=""
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* 큐브 정면 이미지가 풀스크린으로 확장 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative overflow-hidden"
              style={{ opacity: flatOpacity, width: flatSize, height: flatHeight }}
            >
              <SafeImage
                src={FRONT_IMG}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* 어두운 스크림 */}
          <motion.div
            style={{ opacity: scrimOpacity }}
            className="absolute inset-0 bg-night/55 pointer-events-none"
          />

          {/* 최종 콘텐츠 — 타이틀 + 3개 카드, 같은 화면 위에 오버레이 */}
          <motion.div
            style={{ opacity: finalOpacity, y: finalY }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
          >
            <SectionTitle en={subtitle} ko={title} center light />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1200px]">
              {points.map((p, i) => (
                <div key={p.number} className="relative p-6">
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

                  <span className="font-serif text-gold text-2xl leading-none">{p.number}</span>
                  <h3 className="mt-3 font-serif-ko text-canvas text-lg md:text-xl font-bold">
                    {p.title}
                  </h3>
                  <p className="mt-2 font-sans-ko text-canvas/70 text-xs md:text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
