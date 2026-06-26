"use client";

import { motion } from "framer-motion";
import { Globe, MessageCircle, Video, Code2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import { useLanguage } from "../i18n/LanguageContext";

const socialLinks = [
  { icon: MessageCircle, label: "Twitter", href: "#" },
  { icon: Globe, label: "Instagram", href: "#" },
  { icon: Video, label: "YouTube", href: "#" },
  { icon: Code2, label: "GitHub", href: "#" },
];

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.philosophy, href: "#philosophy" },
    { label: t.nav.team, href: "#founders" },
    { label: t.nav.games, href: "#future" },
  ];

  return (
    <footer className="relative bg-canvas-night border-t border-hairline-dark/30">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Logo and tagline */}
          <ScrollReveal>
            <div>
              <img
                src="/images/rlc-light3.png"
                alt="RLC Games"
                className="h-6 w-auto object-contain mb-4"
              />
              <p className="text-caption text-white/40 max-w-xs">
                {t.footer.tagline}
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <span className="text-micro-cap text-white/50 mb-4 block">
                {t.footer.navigation}
              </span>
              <div className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-caption text-white/40 hover:text-white/70 transition-colors duration-300 w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal delay={0.2}>
            <div>
              <span className="text-micro-cap text-white/50 mb-4 block">
                {t.footer.connect}
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-hairline-dark/50 flex items-center justify-center text-white/40 hover:text-white/70 hover:border-white/30 transition-colors duration-300"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 pt-6 border-t border-hairline-dark/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-caption text-white/30">
              &copy; {currentYear} {t.footer.copyright}
            </p>
            <p className="text-caption text-white/20">{t.footer.crafted}</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Hidden language alternate links for SEO */}
      {language === "en" && (
        <div className="hidden" aria-hidden="true">
          <link rel="alternate" hrefLang="en" href="https://rlc.studio/" />
          <link rel="alternate" hrefLang="id" href="https://rlc.studio/" />
          <link rel="alternate" hrefLang="de" href="https://rlc.studio/" />
          <link rel="alternate" hrefLang="ja" href="https://rlc.studio/" />
          <link rel="alternate" hrefLang="ru" href="https://rlc.studio/" />
          <link rel="alternate" hrefLang="x-default" href="https://rlc.studio/" />
        </div>
      )}
    </footer>
  );
}
