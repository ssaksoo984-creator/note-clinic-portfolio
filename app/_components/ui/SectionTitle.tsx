interface SectionTitleProps {
  en: string;
  ko: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  en,
  ko,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p
        className={`font-serif text-xs tracking-[0.3em] mb-3 ${
          light ? "text-gold" : "text-gold"
        }`}
      >
        {en}
      </p>
      <h2
        className={`font-serif-ko text-3xl md:text-4xl font-light tracking-tight leading-snug ${
          light ? "text-canvas" : "text-ink"
        }`}
      >
        {ko}
      </h2>
      <div
        className={`mt-4 w-10 h-px ${
          center ? "mx-auto" : ""
        } ${light ? "bg-gold" : "bg-ink"}`}
      />
    </div>
  );
}
