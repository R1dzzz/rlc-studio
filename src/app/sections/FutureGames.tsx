"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";
import GhostButton from "../components/GhostButton";

export default function FutureGames() {
  return (
    <section
      id="future"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canvas-night"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/future-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      </div>

      {/* Animated particles effect (CSS only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <ScrollReveal>
          <SectionEyebrow text="WHAT'S NEXT" className="mb-4 block" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="text-display-xl text-white mb-6 sm:mb-8">
            SOMETHING IS
            <br />
            COMING
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-body-lg text-white/60 max-w-xl mx-auto mb-8 sm:mb-10">
            We&apos;re building worlds we can&apos;t wait to share. The first
            title is in development — and it&apos;s just the beginning.
          </p>
        </ScrollReveal>

        {/* Coming Soon indicator */}
        <ScrollReveal delay={0.45}>
          <div className="flex items-center justify-center gap-4 mb-10 sm:mb-12">
            <div className="w-12 h-px bg-white/20" />
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-micro-cap text-white/70 tracking-[2px]"
            >
              COMING SOON
            </motion.span>
            <div className="w-12 h-px bg-white/20" />
          </div>
        </ScrollReveal>

        {/* Teaser elements */}
        <ScrollReveal delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GhostButton href="#" onClick={() => {}}>
              GET NOTIFIED
            </GhostButton>
          </div>
        </ScrollReveal>

        {/* Bottom hint */}
        <ScrollReveal delay={0.75}>
          <p className="text-caption text-white/30 mt-10 sm:mt-12">
            Follow our journey. The future of RLC starts here.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
