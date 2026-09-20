"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const footerLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.philosophy, href: "#philosophy" },
    { label: t.nav.team, href: "#founders" },
    { label: t.nav.games, href: "#future" },
  ];

  return (
    <footer className="border-t border-[#FFFFFF] bg-[#111111] px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><img src="/images/dystancee.png" alt="Dystancee Studio" className="h-12 w-12 object-contain" /><p className="text-body-md mt-6 max-w-xs">{t.footer.tagline}</p></div>
        <nav aria-label={t.footer.navigation}><p className="text-micro-cap mb-5">{t.footer.navigation}</p><div className="flex flex-col items-start gap-3">{footerLinks.map((link) => <a key={link.href} href={link.href} className="text-caption hover:underline">{link.label}</a>)}</div></nav>
        <div><p className="text-micro-cap mb-5">{t.footer.connect}</p><p className="text-caption">Independent game studio<br />Indonesia</p></div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1280px] flex-col gap-3 border-t border-[#FFFFFF] pt-6 text-caption sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} {t.footer.copyright}</span><span>{t.footer.crafted}</span></div>
    </footer>
  );
}
