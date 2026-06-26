"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import {
  translations,
  type Language,
  type Translations,
  defaultLanguage,
  supportedLanguages,
} from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "rlc-language";

function isValidLanguage(lang: string): lang is Language {
  return supportedLanguages.includes(lang as Language);
}

function getStoredLanguage(): Language | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isValidLanguage(stored)) {
      return stored;
    }
  } catch {
    // localStorage not available (e.g., private mode)
  }
  return null;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isReady, setIsReady] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const stored = getStoredLanguage();
    if (stored) {
      setLanguageState(stored);
    }
    setIsReady(true);
  }, []);

  // Update document lang attribute when language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // localStorage not available
      }
    }
  }, []);

  const t = useMemo(() => translations[language], [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      isReady,
    }),
    [language, setLanguage, t, isReady]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export { supportedLanguages };
