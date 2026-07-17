"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "outline" | "outline-light" | "filled" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-canvas",
  "outline-light":
    "border border-canvas text-canvas hover:bg-canvas hover:text-ink",
  filled:
    "bg-ink text-canvas border border-ink hover:bg-night",
  ghost:
    "text-ink hover:text-gold underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-widest",
  md: "px-6 py-3 text-xs tracking-widest",
  lg: "px-8 py-4 text-sm tracking-widest",
};

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: Size;
  href?: string;
}

export default function Button({
  variant = "outline",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center transition-colors duration-200 font-sans select-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
