import Link from "next/link";
import { mainNav, aboutNav, treatmentNav } from "./nav";

export default function Footer() {
  return (
    <footer className="bg-night text-canvas">
      {/* 메인 푸터 */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 브랜드 */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.25em] text-canvas hover:text-gold transition-colors"
            >
              ARTE
            </Link>
            <p className="mt-4 text-dim text-sm leading-relaxed">
              자연스러운 아름다움을 위한<br />
              섬세하고 정교한 성형외과
            </p>
          </div>

          {/* 사이트맵 */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8">
            <div>
              <p className="text-xs tracking-[0.2em] text-dim mb-4">MENU</p>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/" className="text-xs tracking-widest text-canvas/70 hover:text-gold transition-colors">
                    홈
                  </Link>
                </li>
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-xs tracking-widest text-canvas/70 hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-dim mb-4">병원소개</p>
              <ul className="flex flex-col gap-2">
                {aboutNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-xs tracking-widest text-canvas/70 hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-dim mb-4">시술안내</p>
              <ul className="flex flex-col gap-2">
                {treatmentNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-xs tracking-widest text-canvas/70 hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 연락처 */}
          <div>
            <p className="text-xs tracking-[0.2em] text-dim mb-4">CONTACT</p>
            <address className="not-italic flex flex-col gap-2 text-xs text-canvas/70 leading-relaxed">
              <a href="tel:02-0000-0000" className="tracking-widest hover:text-gold transition-colors">
                02-0000-0000
              </a>
              <p className="tracking-wide">서울특별시 강남구 압구정로 000</p>
              <div className="mt-2">
                <p className="tracking-wide">평일 09:00 – 18:00</p>
                <p className="tracking-wide">토요일 09:00 – 15:00</p>
                <p className="tracking-wide text-dim">일요일·공휴일 휴진</p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* 하단 바 */}
      <div className="border-t border-canvas/10">
        <div className="max-w-[1440px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-dim tracking-wide">
            © 2025 Note Plastic Surgery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-dim hover:text-canvas transition-colors tracking-wide">
              이용약관
            </Link>
            <Link href="#" className="text-xs text-dim hover:text-canvas transition-colors tracking-wide">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
