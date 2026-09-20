"use client";

import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";
import { useLanguage } from "../i18n/LanguageContext";

const pillarKeys = ["resonate", "light", "create"] as const;

export default function Philosophy() {
  const { t } = useLanguage();
  return (
    <section id="philosophy" className="bg-[#FFFFFF] px-6 py-28 text-[#111111] sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="max-w-3xl">
          <ScrollReveal><SectionEyebrow text={t.philosophy.eyebrow} className="mb-6 block" /></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="text-display-xl mb-6">{t.philosophy.headline}</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="text-body-lg max-w-2xl">{t.philosophy.intro}</p></ScrollReveal>
        </div>
        <div className="mt-20 grid gap-0 border-t border-[#111111] md:grid-cols-3">
          {pillarKeys.map((key, index) => <ScrollReveal key={key} delay={0.1 * index}><article className="border-b border-[#111111] py-8 md:min-h-72 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><span className="text-micro-cap block mb-12">0{index + 1}</span><h3 className="text-display-lg mb-5">{t.philosophy.pillars[key].word}</h3><p className="text-body-md max-w-sm">{t.philosophy.pillars[key].description}</p></article></ScrollReveal>)}
        </div>
        <ScrollReveal delay={0.35}><blockquote className="text-display-lg mt-20 max-w-3xl">“{t.philosophy.quote}”<footer className="text-micro-cap mt-6">{t.philosophy.quoteAuthor}</footer></blockquote></ScrollReveal>
      </div>
    </section>
  );
}
