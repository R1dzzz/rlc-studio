"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GhostButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function GhostButton({ children, href, onClick, className = "", external = false }: GhostButtonProps) {
  const styles = `text-button-cap inline-flex min-h-12 items-center justify-center border border-[#FFFFFF] bg-[#111111] px-6 py-4 text-[#FFFFFF] transition-colors duration-300 hover:bg-[#FFFFFF] hover:text-[#111111] ${className}`;
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  if (href) return <motion.a href={href} onClick={onClick} className={styles} whileTap={{ scale: 0.98 }} {...props}>{children}</motion.a>;
  return <motion.button type="button" onClick={onClick} className={styles} whileTap={{ scale: 0.98 }}>{children}</motion.button>;
}
