"use client";

import { motion } from "framer-motion";
import GhostButton from "../components/GhostButton";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#111111] px-6 py-32 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1280px] items-end gap-16 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <p className="text-micro-cap mb-6">{t.hero.eyebrow}</p>
          <h1 className="text-display-xxl max-w-4xl">{t.hero.headline}</h1>
          <p className="text-body-lg mt-8 max-w-xl">{t.hero.subtext}</p>
          <div className="mt-10">
            <GhostButton href="#about">{t.hero.cta}</GhostButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="order-1 flex justify-start lg:order-2 lg:justify-end"
        >
          <img
            src="/images/dystancee.png"
            alt="Dystancee Studio monogram"
            className="h-auto w-48 max-w-full object-contain sm:w-64 lg:w-[min(38vw,480px)]"
          />
        </motion.div>
      </div>

      <a href="#about" className="text-micro-cap absolute bottom-8 left-6 flex items-center gap-4 sm:left-8 lg:left-12" aria-label={t.hero.scroll}>
        <span className="h-px w-8 bg-[#FFFFFF]" />
        {t.hero.scroll}
      </a>
    </section>
  );
}
