/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext(null);

const getNestedValue = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");

  const setAppLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
  };

  const value = useMemo(() => {
    const dictionary = translations[language] || translations.en;

    return {
      language,
      setLanguage: setAppLanguage,
      t: (key) => {
        const localizedValue = getNestedValue(dictionary, key);
        if (localizedValue !== undefined) return localizedValue;

        const fallbackValue = getNestedValue(translations.en, key);
        return fallbackValue !== undefined ? fallbackValue : key;
      },
      dictionary,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
