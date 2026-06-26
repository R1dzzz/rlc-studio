"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";
import { useLanguage } from "../i18n/LanguageContext";

const founderKeys = ["farid", "halim", "fauzan"] as const;
const founderInitials = ["F", "H", "F"] as const;

export default function Founders() {
  const { t } = useLanguage();

  return (
    <section
      id="founders"
      className="relative bg-canvas-night py-24 sm:py-32 lg:py-40"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas-night via-canvas-night-soft/20 to-canvas-night" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <ScrollReveal>
            <SectionEyebrow text={t.founders.eyebrow} className="mb-4 block" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-display-xl text-white">
              {t.founders.headline}
            </h2>
          </ScrollReveal>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {founderKeys.map((key, index) => (
            <ScrollReveal key={key} delay={0.15 * (index + 1)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative border border-hairline-dark/40 bg-white/[0.02] hover:bg-white/[0.04] hover:border-hairline-dark/60 transition-all duration-500 p-8 sm:p-10 text-center"
              >
                {/* Avatar placeholder with initial */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-full border border-hairline-dark/60 bg-white/[0.03] flex items-center justify-center group-hover:border-white/30 transition-colors duration-500">
                  <span className="text-display-lg text-white/20 group-hover:text-white/30 transition-colors duration-500">
                    {founderInitials[index]}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-button-cap text-white mb-2 tracking-[1.17px]">
                  {t.founders[key].name}
                </h3>

                {/* Role */}
                <span className="text-micro-cap text-white/50 mb-5 block">
                  {t.founders[key].role}
                </span>

                {/* Divider */}
                <div className="w-8 h-px bg-white/20 mx-auto mb-5" />

                {/* Description */}
                <p className="text-body-md text-white/50 leading-relaxed">
                  {t.founders[key].description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
