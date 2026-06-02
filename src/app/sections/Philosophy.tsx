"use client";

import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";

const pillars = [
  {
    letter: "R",
    word: "RESONATE",
    description:
      "We create experiences that connect with players on a deeper level. Every pixel, every sound, every moment should feel meaningful and memorable.",
  },
  {
    letter: "L",
    word: "LIGHT",
    description:
      "We bring ideas to life. From the spark of imagination to the glow of a finished game, we illuminate the path from concept to reality.",
  },
  {
    letter: "C",
    word: "CREATE",
    description:
      "Creation is our core. We build worlds, craft stories, and forge experiences that leave a lasting impression on everyone who plays.",
  },
];

export default function Philosophy() {
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
            <SectionEyebrow text="OUR PHILOSOPHY" className="mb-4 block" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-display-xl text-white mb-5">
              RESONATE. LIGHT. CREATE.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-white/60 max-w-2xl mx-auto">
              Three principles that guide everything we do at RLC Studio. These
              are not just words — they are the foundation of every decision we
              make.
            </p>
          </ScrollReveal>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.letter} delay={0.15 * (index + 1)}>
              <div className="group relative border border-hairline-dark/50 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 p-8 sm:p-10">
                {/* Letter */}
                <span className="text-display-xxl text-white/10 group-hover:text-white/15 transition-colors duration-500 absolute top-4 right-6 select-none">
                  {pillar.letter}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-micro-cap text-white/40 border border-hairline-dark/50 px-3 py-1">
                      {pillar.letter}
                    </span>
                    <span className="text-button-cap text-white">
                      {pillar.word}
                    </span>
                  </div>

                  <p className="text-body-md text-white/60 leading-relaxed">
                    {pillar.description}
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
              &ldquo;We believe the best games are born from passion, shaped by
              community, and crafted with purpose.&rdquo;
            </blockquote>
            <span className="text-micro-cap text-white/30 mt-4 block">
              — RLC STUDIO
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
