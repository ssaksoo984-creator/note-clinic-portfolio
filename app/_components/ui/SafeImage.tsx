"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export default function SafeImage({
  alt,
  className = "",
  fill,
  onError,
  ...props
}: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-rule ${fill ? "absolute inset-0" : ""} ${className}`}
      />
    );
  }

  return (
    <Image
      alt={alt}
      fill={fill}
      className={className}
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
      {...props}
    />
  );
}
