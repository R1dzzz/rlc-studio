"use client";

interface SectionEyebrowProps {
  text: string;
  className?: string;
}

export default function SectionEyebrow({
  text,
  className = "",
}: SectionEyebrowProps) {
  return (
    <span
      className={`text-micro-cap text-white/50 tracking-[0.96px] uppercase ${className}`}
    >
      {text}
    </span>
  );
}
