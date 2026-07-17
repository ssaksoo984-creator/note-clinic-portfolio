"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, aboutNav, treatmentNav } from "./nav";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 라우트 변경 시 메뉴 닫기
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* 햄버거 버튼 */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-ink"
      >
        <span
          className={`block w-6 h-px bg-current transition-all duration-300 ${
            open ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-current transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-current transition-all duration-300 ${
            open ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* 오버레이 */}
      {open && (
        <div
          className="fixed inset-0 bg-night/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 슬라이드 패널 */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-canvas z-50 flex flex-col transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 패널 헤더 */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-rule">
          <Link href="/" className="font-serif text-xl tracking-widest text-ink">
            ARTE
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="메뉴 닫기"
            className="w-8 h-8 flex items-center justify-center text-ink"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="15" y1="5" x2="5" y2="15" />
              <line x1="5" y1="5" x2="15" y2="15" />
            </svg>
          </button>
        </div>

        {/* 네비게이션 */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
          <Link
            href="/"
            className="py-3 text-sm tracking-widest text-ink border-b border-rule hover:text-gold transition-colors"
          >
            홈
          </Link>

          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-sm tracking-widest text-ink border-b border-rule hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <p className="pt-6 pb-2 text-xs tracking-[0.2em] text-dim">
            병원소개
          </p>
          {aboutNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 pl-3 text-sm tracking-widest text-ink border-b border-rule hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <p className="pt-6 pb-2 text-xs tracking-[0.2em] text-dim">
            시술안내
          </p>
          {treatmentNav.map((group) => (
            <div key={group.href}>
              <p className="pt-3 pb-1 pl-3 text-xs tracking-widest text-ink">
                {group.label}
              </p>
              {group.sub.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 pl-6 text-sm tracking-widest text-dim border-b border-rule hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        {/* 상담 버튼 */}
        <div className="p-6 border-t border-rule">
          <Link
            href="/contact"
            className="block w-full py-3 text-center text-sm tracking-widest text-canvas bg-ink hover:bg-night transition-colors"
          >
            상담 신청
          </Link>
        </div>
      </div>
    </>
  );
}
