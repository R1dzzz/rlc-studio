"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GhostButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
  className?: string;
  external?: boolean;
}

export default function GhostButton({
  children,
  href,
  onClick,
  variant = "dark",
  className = "",
  external = false,
}: GhostButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center text-button-cap rounded-[32px] px-6 py-[18px] border transition-colors duration-300 cursor-pointer";

  const variantStyles = {
    dark: "border-white/80 text-white bg-transparent hover:bg-white/10",
    light: "border-black/80 text-black bg-transparent hover:bg-black/5",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={combinedStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
