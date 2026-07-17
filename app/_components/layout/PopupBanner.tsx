"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SafeImage from "../ui/SafeImage";
import type { PopupItem } from "../../_data/popup";

const STORAGE_PREFIX = "popup-hide-";

function isHiddenToday(id: string) {
  const hideUntil = window.localStorage.getItem(`${STORAGE_PREFIX}${id}`);
  return hideUntil ? Date.now() < Number(hideUntil) : false;
}

function hideForToday(id: string) {
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  window.localStorage.setItem(`${STORAGE_PREFIX}${id}`, String(midnight.getTime()));
}

interface PopupBannerProps {
  popups: PopupItem[];
}

export default function PopupBanner({ popups }: PopupBannerProps) {
  const [visibleIds, setVisibleIds] = useState<string[]>([]);

  useEffect(() => {
    setVisibleIds(
      popups.filter((p) => p.enabled && !isHiddenToday(p.id)).map((p) => p.id)
    );
  }, [popups]);

  const dismiss = (id: string) =>
    setVisibleIds((prev) => prev.filter((v) => v !== id));

  const visiblePopups = popups.filter((p) => visibleIds.includes(p.id));

  if (visiblePopups.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-night/50 px-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) setVisibleIds([]);
      }}
    >
      <div className="relative">
        <AnimatePresence>
          {visiblePopups.map((popup, i) => (
            <motion.div
              key={popup.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              style={
                i === 0
                  ? { zIndex: visiblePopups.length }
                  : {
                      top: i * 18,
                      left: i * 18,
                      zIndex: visiblePopups.length - i,
                    }
              }
              className={`w-80 bg-canvas border border-rule shadow-sm ${
                i === 0 ? "relative" : "absolute"
              }`}
            >
              <Link href={popup.link} className="block relative w-full aspect-[4/5]">
                <SafeImage
                  src={popup.image}
                  alt={popup.alt}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </Link>
              <div className="flex items-center justify-between px-4 py-3 border-t border-rule">
                <button
                  onClick={() => {
                    hideForToday(popup.id);
                    dismiss(popup.id);
                  }}
                  className="font-sans-ko text-xs text-dim hover:text-ink transition-colors"
                >
                  오늘 하루 보지 않기
                </button>
                <button
                  onClick={() => dismiss(popup.id)}
                  aria-label="팝업 닫기"
                  className="font-sans-ko text-xs text-dim hover:text-ink transition-colors"
                >
                  닫기 ✕
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
