"use client";

import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";
import { useLanguage } from "../i18n/LanguageContext";

const pillarKeys = ["resonate", "light", "create"] as const;
const pillarLetters = ["R", "L", "C"] as const;

export default function Philosophy() {
  const { t } = useLanguage();

  return (
    <section
      id="philosophy"
      className="relative min-h-screen flex items-center bg-canvas-night py-24 sm:py-32"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas-night via-canvas-night-soft/30 to-canvas-night" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <ScrollReveal>
            <SectionEyebrow
              text={t.philosophy.eyebrow}
              className="mb-4 block"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-display-xl text-white mb-5">
              {t.philosophy.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
              {t.philosophy.intro}
            </p>
          </ScrollReveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillarKeys.map((key, index) => (
            <ScrollReveal key={key} delay={0.15 * (index + 1)}>
              <div className="group relative border border-hairline-dark/50 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 p-8 sm:p-10">
                {/* Letter */}
                <span className="text-display-xxl text-white/10 group-hover:text-white/15 transition-colors duration-500 absolute top-4 right-6 select-none">
                  {pillarLetters[index]}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-micro-cap text-white/40 border border-hairline-dark/50 px-3 py-1">
                      {pillarLetters[index]}
                    </span>
                    <span className="text-button-cap text-white">
                      {t.philosophy.pillars[key].word}
                    </span>
                  </div>

                  <p className="text-body-md text-white/60 leading-relaxed">
                    {t.philosophy.pillars[key].description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom quote */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 sm:mt-20 text-center">
            <blockquote className="text-body-lg text-white/50 italic max-w-3xl mx-auto">
              &ldquo;{t.philosophy.quote}&rdquo;
            </blockquote>
            <span className="text-micro-cap text-white/30 mt-4 block">
              {t.philosophy.quoteAuthor}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
