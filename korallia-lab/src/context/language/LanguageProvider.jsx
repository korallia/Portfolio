import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "../language/LanguageContext";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("portfolio_lang") || "fr";
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () =>
        setLang((currentLang) => (currentLang === "fr" ? "en" : "fr")),
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}