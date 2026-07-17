import { subTreatments } from "../../_data/subTreatments";

export const mainNav = [
  { label: "전후사진", href: "/before-after" },
  { label: "이벤트", href: "/event" },
] as const;

export const aboutNav = [
  { label: "병원소개", href: "/about" },
  { label: "의료진 소개", href: "/about/doctors" },
  { label: "시설 안내", href: "/about/facility" },
  { label: "오시는 길", href: "/about/location" },
] as const;

interface TreatmentNavGroup {
  label: string;
  href: string;
  sub: { label: string; href: string }[];
}

const CATEGORY_LABELS: Record<string, string> = {
  eye: "눈성형",
  nose: "코성형",
  facial: "안면윤곽",
  breast: "가슴성형",
};

const CATEGORY_ORDER = ["eye", "nose", "facial", "breast"] as const;

export const treatmentNav: TreatmentNavGroup[] = CATEGORY_ORDER.map(
  (category) => {
    const items = subTreatments.filter((t) => t.category === category);
    const label = CATEGORY_LABELS[category];
    const href = items[0].categoryHref;
    return {
      label,
      href,
      sub: [
        { label, href },
        ...items.map((t) => ({
          label: t.title,
          href: `${t.categoryHref}/${t.slug}`,
        })),
      ],
    };
  }
);
