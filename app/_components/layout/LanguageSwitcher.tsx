"use client";

import { useState } from "react";
import type { LanguageOption } from "../../_data/languages";

interface LanguageSwitcherProps {
  languages: LanguageOption[];
}

export default function LanguageSwitcher({ languages }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="언어 선택"
        className="flex items-center justify-center text-ink hover:text-gold transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9s1.3-6.5 3.8-9z" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-3 bg-canvas border border-rule py-2 w-28 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrent(lang);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-xs tracking-widest transition-colors ${
                lang.code === current.code
                  ? "text-gold"
                  : "text-ink hover:text-gold hover:bg-rule/30"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
