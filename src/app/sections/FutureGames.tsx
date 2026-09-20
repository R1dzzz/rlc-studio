"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";
import GhostButton from "../components/GhostButton";
import { useLanguage } from "../i18n/LanguageContext";

export default function FutureGames() {
  const { t } = useLanguage();
  return (
    <section id="future" className="flex min-h-[80vh] items-center bg-[#FFFFFF] px-6 py-28 text-[#111111] sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto w-full max-w-[1280px]">
        <ScrollReveal><SectionEyebrow text={t.futureGames.eyebrow} className="mb-6 block" /></ScrollReveal>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-display-xxl max-w-5xl">{t.futureGames.headline}</motion.h2>
        <ScrollReveal delay={0.15}><p className="text-body-lg mt-10 max-w-xl">{t.futureGames.description}</p></ScrollReveal>
        <ScrollReveal delay={0.25}><div className="mt-10 flex items-center gap-4"><span className="h-px w-12 bg-[#111111]" /><span className="text-micro-cap">{t.futureGames.comingSoon}</span></div></ScrollReveal>
        <ScrollReveal delay={0.35}><div className="mt-10"><GhostButton variant="light">{t.futureGames.cta}</GhostButton></div></ScrollReveal>
        <ScrollReveal delay={0.45}><p className="text-caption mt-16">{t.futureGames.hint}</p></ScrollReveal>
      </div>
    </section>
  );
}
