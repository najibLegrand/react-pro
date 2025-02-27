import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frTranslation from "../src/locales/fr/translation.json";
import enTranslation from "../src/locales/en/translation.json";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "fr",
    lng: "fr",
    resources: {
      fr: {
        translation: frTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
