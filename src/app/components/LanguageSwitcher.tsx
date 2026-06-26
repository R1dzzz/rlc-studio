"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import {
  useLanguage,
  supportedLanguages,
} from "../i18n/LanguageContext";
import { languageNames } from "../i18n/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (lang: typeof language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-micro-cap text-white/70 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/5"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t.language.title}
        title={t.language.title}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden lg:inline uppercase tracking-[0.96px]">
          {languageNames[language]}
        </span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute right-0 mt-2 w-52 bg-black/95 backdrop-blur-md border border-hairline-dark/50 rounded-lg shadow-2xl shadow-black/50 z-50 overflow-hidden"
              role="listbox"
              aria-label={t.language.title}
            >
              <div className="py-1.5">
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleSelect(lang)}
                    role="option"
                    aria-selected={language === lang}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors duration-200 ${
                      language === lang
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {languageNames[lang]}
                    </span>
                    {language === lang && (
                      <Check className="w-4 h-4 text-white/80" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
