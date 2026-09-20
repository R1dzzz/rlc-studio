"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navigation() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.philosophy, href: "#philosophy" },
    { label: t.nav.team, href: "#founders" },
    { label: t.nav.games, href: "#future" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav initial={{ y: -24 }} animate={{ y: 0 }} className={`fixed inset-x-0 top-0 z-50 border-b border-[#FFFFFF] transition-colors duration-300 ${scrolled ? "bg-[#111111]" : "bg-[#111111]"}`} aria-label="Primary navigation">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
          <a href="#hero" className="relative z-50 flex items-center gap-3" aria-label="Dystancee Studio home">
            <img src="/images/dystancee.png" alt="Dystancee Studio" className="h-8 w-8 object-contain" />
            <span className="text-button-cap">Dystancee Studio</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => <a key={link.href} href={link.href} className="text-micro-cap hover:underline">{link.label}</a>)}
            <span className="h-5 w-px bg-[#FFFFFF]" />
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button type="button" onClick={() => setMenuOpen((open) => !open)} className="relative z-50 flex h-10 w-10 items-center justify-center" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex items-center justify-center bg-[#111111] md:hidden">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-display-lg">{link.label}</a>)}
          </div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
