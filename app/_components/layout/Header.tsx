import Link from "next/link";
import { mainNav, aboutNav, treatmentNav } from "./nav";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { languages } from "../../_data/languages";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      <div className="absolute inset-0 bg-canvas/95 backdrop-blur-sm border-b border-rule" />
      <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.25em] text-ink hover:text-gold transition-colors"
        >
          ARTE
        </Link>

        {/* 데스크탑 내비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {/* 병원소개 드롭다운 */}
          <div className="relative group">
            <span className="cursor-default text-sm tracking-widest text-ink group-hover:text-gold transition-colors select-none">
              병원소개
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
              <div className="bg-canvas border border-rule shadow-sm py-2 w-40">
                {aboutNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-xs tracking-widest text-ink hover:text-gold hover:bg-rule/30 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 시술 카테고리 드롭다운 (눈성형/코성형/안면윤곽/가슴성형) */}
          {treatmentNav.map((group) => (
            <div key={group.href} className="relative group">
              <span className="cursor-default text-sm tracking-widest text-ink group-hover:text-gold transition-colors select-none">
                {group.label}
              </span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="bg-canvas border border-rule shadow-sm py-2 w-40">
                  {group.sub.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-2.5 text-xs tracking-widest text-ink hover:text-gold hover:bg-rule/30 transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-widest text-ink hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <LanguageSwitcher languages={languages} />
        </nav>

        {/* 모바일 메뉴 */}
        <MobileMenu />
      </div>
    </header>
  );
}
