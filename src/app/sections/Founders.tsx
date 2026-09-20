"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";
import { useLanguage } from "../i18n/LanguageContext";

const founderKeys = ["farid", "halim", "fauzan"] as const;

export default function Founders() {
  const { t } = useLanguage();
  return (
    <section id="founders" className="bg-[#111111] px-6 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto w-full max-w-[1280px]">
        <ScrollReveal><SectionEyebrow text={t.founders.eyebrow} className="mb-6 block" /></ScrollReveal>
        <ScrollReveal delay={0.1}><h2 className="text-display-xl max-w-3xl">{t.founders.headline}</h2></ScrollReveal>
        <div className="mt-16 grid gap-0 border-t border-[#FFFFFF] md:grid-cols-3">
          {founderKeys.map((key, index) => <ScrollReveal key={key} delay={0.1 * index}><motion.article whileHover={{ y: -4 }} className="border-b border-[#FFFFFF] py-8 md:min-h-96 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="text-micro-cap">0{index + 1}</span><h3 className="text-display-lg mt-16">{t.founders[key].name}</h3><p className="text-micro-cap mt-4">{t.founders[key].role}</p><p className="text-body-md mt-8 max-w-sm">{t.founders[key].description}</p></motion.article></ScrollReveal>)}
        </div>
      </div>
    </section>
  );
}
