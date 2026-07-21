import SafeImage from "./SafeImage";

interface PageHeroProps {
  en?: string;
  title: string;
  description?: string;
}

const SUB_BG = "/clients/note-clinic/images/sub_bg/sub_bg.png";

export default function PageHero({ en, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-night flex flex-col items-center justify-center text-center py-32 px-6 min-h-[40vh]">
      <SafeImage
        src={SUB_BG}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-night/40" />

      <div className="relative z-10 flex flex-col items-center [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
        {en && (
          <p className="font-serif text-gold text-xs tracking-[0.35em] mb-5">
            {en}
          </p>
        )}
        <h1 className="font-serif-ko text-canvas text-5xl md:text-6xl font-light tracking-tight leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-canvas/85 text-sm md:text-base leading-relaxed max-w-md">
            {description}
          </p>
        )}
        <div className="mt-8 w-10 h-px bg-gold" />
      </div>
    </section>
  );
}
