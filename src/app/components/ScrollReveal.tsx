"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps { children: ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right"; className?: string; once?: boolean; }

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "", once = true }: ScrollRevealProps) {
  const reducedMotion = useReducedMotion();
  const offset = direction === "up" ? { y: 24 } : direction === "down" ? { y: -24 } : direction === "left" ? { x: 24 } : { x: -24 };
  return <motion.div initial={reducedMotion ? false : { opacity: 0, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once, margin: "-64px" }} transition={reducedMotion ? { duration: 0 } : { duration: 0.55, delay, ease: "easeOut" }} className={className}>{children}</motion.div>;
}
