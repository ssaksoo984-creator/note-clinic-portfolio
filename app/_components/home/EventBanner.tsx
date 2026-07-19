"use client";

export default function EventBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full h-10 bg-night border-b border-canvas/10 flex items-center justify-center overflow-hidden">
      {/* 배경 광택 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent pointer-events-none" />

      <p className="shimmer-text font-sans-ko font-medium text-[10px] sm:text-sm tracking-[0.05em] sm:tracking-[0.2em] select-none whitespace-nowrap px-4 truncate max-w-full">
        ARTE 성형외과 스페셜 이벤트&nbsp;&nbsp;·&nbsp;&nbsp;봄맞이 상담 할인 프로모션 진행 중
      </p>
    </div>
  );
}
