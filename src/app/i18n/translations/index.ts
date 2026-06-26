import { en } from "./en";
import { id } from "./id";
import { de } from "./de";
import { ja } from "./ja";
import { ru } from "./ru";

export type { Translations } from "./en";

export const translations = {
  en,
  id,
  de,
  ja,
  ru,
} as const;

export type Language = keyof typeof translations;

export const defaultLanguage: Language = "en";

export const supportedLanguages: Language[] = ["en", "id", "de", "ja", "ru"];

export const languageNames: Record<Language, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  de: "Deutsch",
  ja: "日本語",
  ru: "Русский",
};

export const languageLocales: Record<Language, string> = {
  en: "en-US",
  id: "id-ID",
  de: "de-DE",
  ja: "ja-JP",
  ru: "ru-RU",
};
