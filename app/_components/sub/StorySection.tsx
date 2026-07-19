"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "framer-motion";
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
const MARQUEE_TEXT = "ARTE · PERFECT SATISFACTION · ";

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
  const cardSvgRefs = useRef<(SVGSVGElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // px 단위로 통일해서 보간 — px와 vw/vh를 섞으면 Framer Motion이 중간값을 잘못 계산해 커졌다 작아지는 현상이 생김
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });
  useEffect(() => {
    const updateViewport = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // 큐브는 스크롤 전엔 스스로 계속 회전, 스크롤이 시작되는 순간 가장 가까운 정면(360의 배수)으로 멈춤
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (settled) return;
    let raf: number;
    const tick = () => {
      rotateY.set(rotateY.get() + 0.15);
      rotateX.set(rotateX.get() + 0.06);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [settled, rotateX, rotateY]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!settled && v > 0.01) {
      setSettled(true);
      animate(rotateY, Math.round(rotateY.get() / 360) * 360, { duration: 0.6, ease: "easeOut" });
      animate(rotateX, Math.round(rotateX.get() / 360) * 360, { duration: 0.6, ease: "easeOut" });
    }
  });

  const cubeOpacity = useTransform(scrollYProgress, [0.08, 0.16], [1, 0]);
  const flatOpacity = useTransform(scrollYProgress, [0.1, 0.18], [0, 1]);
  const flatSize = useTransform(scrollYProgress, [0.16, 0.6], [`${CUBE_SIZE}px`, `${viewport.width}px`]);
  const flatHeight = useTransform(scrollYProgress, [0.16, 0.6], [`${CUBE_SIZE}px`, `${viewport.height}px`]);
  const scrimOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0.63, 0.73], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.63, 0.73], [20, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.73, 0.79], [0, 1]);
  const card2Opacity = useTransform(scrollYProgress, [0.79, 0.85], [0, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0.85, 0.91], [0, 1]);
  const cardOpacities = [card1Opacity, card2Opacity, card3Opacity];
  const card1Y = useTransform(scrollYProgress, [0.73, 0.79], [-32, 0]);
  const card2Y = useTransform(scrollYProgress, [0.79, 0.85], [-32, 0]);
  const card3Y = useTransform(scrollYProgress, [0.85, 0.91], [-32, 0]);
  const cardYs = [card1Y, card2Y, card3Y];

  return (
    <section className="bg-canvas">
      {/* 전체가 한 화면(sticky) 안에서: 타이틀 -> 3D 큐브 -> 풀스크린 이미지 -> 타이틀+3카드 */}
      <div ref={wrapRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-canvas">
          {/* 큐브 뒤 배경 마퀴 텍스트 */}
          <motion.div
            style={{ opacity: cubeOpacity }}
            className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden"
          >
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            >
              {[0, 1].map((i) => (
                <span
                  key={i}
                  className="font-serif tracking-[0.3em] px-8"
                  style={{ fontSize: "clamp(4rem, 12vw, 9rem)", color: "rgba(201,169,110,0.18)" }}
                >
                  {MARQUEE_TEXT}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D 회전 큐브 */}
          <motion.div
            style={{ opacity: cubeOpacity }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div style={{ perspective: "1200px" }} className="w-[220px] h-[220px]">
              <motion.div
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY,
                }}
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

          {/* 최종 콘텐츠 — 타이틀 등장 후, 카드가 1·2·3 순서대로 페이드인 */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
            <motion.div style={{ opacity: titleOpacity, y: titleY }}>
              <SectionTitle en={subtitle} ko={title} center light />
            </motion.div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1200px]">
              {points.map((p, i) => (
                <motion.div
                  key={p.number}
                  style={{ opacity: cardOpacities[i], y: cardYs[i] }}
                  className="group relative p-6 overflow-hidden"
                  onMouseEnter={() => cardSvgRefs.current[i]?.pauseAnimations()}
                  onMouseLeave={() => cardSvgRefs.current[i]?.unpauseAnimations()}
                >
                  {/* 반투명 블랙 배경 + 블러, 호버 시 더 진해짐 */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-black/40" />

                  <svg
                    ref={(el) => {
                      cardSvgRefs.current[i] = el;
                    }}
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

                  <div className="relative z-10">
                    <span className="font-serif text-gold text-2xl leading-none">{p.number}</span>
                    <h3 className="mt-3 font-serif-ko text-canvas text-lg md:text-xl font-bold">
                      {p.title}
                    </h3>
                    <p className="mt-2 font-sans-ko text-canvas/70 text-xs md:text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
