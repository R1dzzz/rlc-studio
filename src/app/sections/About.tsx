"use client";

import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-canvas-night py-24 sm:py-32"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas-night via-canvas-night-soft to-canvas-night opacity-50" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column — Label and headline */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <SectionEyebrow text="OUR ORIGIN" className="mb-4 block" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-display-xl text-white mb-6">
                FROM A SMALL
                <br />
                GROUP TO A
                <br />
                STUDIO
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-px bg-white/30" />
                <span className="text-micro-cap text-white/40">
                  EST. OCTOBER 19, 2021
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — Story */}
          <div className="space-y-6">
            <ScrollReveal delay={0.15}>
              <p className="text-body-lg text-white/70">
                Every studio has an origin. Ours began on October 19, 2021 — not
                in a boardroom, but in a simple chat group of friends who loved
                to play Minecraft together. We called ourselves BigBearTeam.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-body-lg text-white/70">
                What started as casual gaming sessions evolved into something
                deeper. Conversations shifted from playing games to creating
                them. Ideas turned into plans. A shared passion became a shared
                vision.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-body-lg text-white/70">
                Today, RLC Studio carries that same spirit forward — transforming
                a community of gamers into a team of creators with a singular
                focus: building games that matter.
              </p>
            </ScrollReveal>

            {/* Timeline milestone */}
            <ScrollReveal delay={0.45}>
              <div className="mt-10 pt-8 border-t border-hairline-dark">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <span className="text-display-lg text-white block mb-1">
                      2021
                    </span>
                    <span className="text-caption text-white/40">
                      The beginning — BigBearTeam
                    </span>
                  </div>
                  <div>
                    <span className="text-display-lg text-white block mb-1">
                      NOW
                    </span>
                    <span className="text-caption text-white/40">
                      RLC Studio — Building the future
                    </span>
                  </div>
                  <div>
                    <span className="text-display-lg text-white block mb-1">
                      NEXT
                    </span>
                    <span className="text-caption text-white/40">
                      Our first title
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
