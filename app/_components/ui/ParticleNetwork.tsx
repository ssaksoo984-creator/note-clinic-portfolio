"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  phase: number;
}

const DOT_COLOR = "201,169,110";
const LINE_COLOR = "201,169,110";
const RADIUS = 3.5;
const LINK_DISTANCE = 300;
const ALPHA_STEP = 0.015;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createParticle(width: number, height: number): Particle {
  return {
    x: randomBetween(0, width),
    y: randomBetween(0, height),
    vx: randomBetween(-0.4, 0.4),
    vy: randomBetween(-0.4, 0.4),
    alpha: 1,
    phase: randomBetween(0, 10),
  };
}

export default function ParticleNetwork({ count = 18 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? canvas.clientWidth;
      height = rect?.height ?? canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: count }, () => createParticle(width, height));
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        ctx.fillStyle = `rgba(${DOT_COLOR},${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, RADIUS, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const fraction = dist / LINK_DISTANCE;
          if (fraction < 1) {
            ctx.strokeStyle = `rgba(${LINE_COLOR},${(1 - fraction) * 0.45})`;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.phase += ALPHA_STEP;
        p.alpha = Math.abs(Math.cos(p.phase));
      }

      raf = window.requestAnimationFrame(render);
    };

    init();
    render();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}
