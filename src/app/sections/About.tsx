"use client";

import ScrollReveal from "../components/ScrollReveal";
import SectionEyebrow from "../components/SectionEyebrow";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-[#111111] px-6 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto grid w-full max-w-[1280px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <ScrollReveal><SectionEyebrow text={t.about.eyebrow} className="mb-6 block" /></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="text-display-xl max-w-xl">{t.about.headline}</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="text-micro-cap mt-8">{t.about.estDate}</p></ScrollReveal>
        </div>
        <div>
          <div className="space-y-8">
            {[t.about.story1, t.about.story2, t.about.story3].map((story, index) => <ScrollReveal key={story} delay={0.1 * index}><p className="text-body-lg max-w-2xl">{story}</p></ScrollReveal>)}
          </div>
          <ScrollReveal delay={0.35}>
            <div className="mt-16 grid grid-cols-1 border-t border-[#FFFFFF] pt-8 sm:grid-cols-3 sm:gap-8">
              {[t.about.timeline.year2021, t.about.timeline.now, t.about.timeline.next].map((item, index) => <div key={item} className="border-b border-[#FFFFFF] py-5 last:border-b-0 sm:border-b-0 sm:border-l sm:pl-5 first:sm:border-l-0 first:sm:pl-0"><span className="text-display-lg block">{item}</span><span className="text-caption block mt-2">{[t.about.timeline.year2021Desc, t.about.timeline.nowDesc, t.about.timeline.nextDesc][index]}</span></div>)}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
