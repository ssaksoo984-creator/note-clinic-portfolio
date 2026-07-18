import type { Metadata } from "next";
import {
  Inter,
  Cormorant_Garamond,
  Nanum_Gothic,
} from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import PopupBanner from "./_components/layout/PopupBanner";
import SideIconBar from "./_components/layout/SideIconBar";
import EventBanner from "./_components/home/EventBanner";
import { popups } from "./_data/popup";
import { sideIcons } from "./_data/sideIcons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const nanumGothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nanum-gothic",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    template: "%s | 아르떼성형외과",
    default: "아르떼성형외과 | 자연스러운 아름다움",
  },
  description:
    "아르떼성형외과에서 자연스럽고 아름다운 변화를 경험하세요. 눈성형, 코성형, 안면윤곽, 가슴성형 전문 클리닉.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${cormorant.variable} ${nanumGothic.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-canvas text-ink antialiased">
        <EventBanner />
        <Header />
        <main className="flex-1 pt-10">{children}</main>
        <Footer />
        <SideIconBar items={sideIcons} />
        <PopupBanner popups={popups} />
      </body>
    </html>
  );
}
