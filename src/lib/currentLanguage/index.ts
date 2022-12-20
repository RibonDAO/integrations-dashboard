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
