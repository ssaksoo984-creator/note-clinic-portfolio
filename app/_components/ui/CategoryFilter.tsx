"use client";

interface Category {
  label: string;
  value: string;
}

interface CategoryFilterProps {
  categories: Category[];
  active: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`shrink-0 px-5 py-2.5 text-xs tracking-widest border transition-colors duration-300 ${
            active === cat.value
              ? "bg-ink text-canvas border-ink"
              : "bg-canvas text-dim border-rule hover:text-ink hover:border-ink"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
