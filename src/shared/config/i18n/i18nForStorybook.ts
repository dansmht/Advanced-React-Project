import {initReactI18next} from "react-i18next";
import i18n, { Resource } from "i18next";
import Backend from "i18next-http-backend";

const namespaces = ["translation", "about", "main"];
const supportedLanguages = ["en", "ru"];

const resources = namespaces.reduce((acc, namespace) => {
  supportedLanguages.forEach((language) => {
    if (!acc[language]) acc[language] = {};

    acc[language] = {
      ...acc[language],
      [namespace]: require(`../../../../public/locales/${language}/${namespace}.json`),
    };
  });

  return acc;
}, {} as Resource);

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    defaultNS: "translation",
    ns: namespaces,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs: supportedLanguages,
    resources,
  });

export default i18n;
