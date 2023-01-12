import { getLocalStorageItem } from "lib/localStorage";
import { LANGUAGE_KEY } from "hooks/useLanguage";

export function formattedLanguage(language: string) {
  switch (language) {
    case "en":
      return "en-US";
    case "en-US":
      return "en";
    case "pt":
      return "pt-BR";
    case "pt-BR":
      return "pt-BR";
    default:
      return "pt-BR";
  }
}

export function normalizedLanguage(): string {
  const language =
    getLocalStorageItem(LANGUAGE_KEY) || formattedLanguage(navigator.language);
  console.log("language", language);
  return formattedLanguage(language);
}
