// src/LanguageContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Idiomas disponibles
export type LanguageKeys = "es" | "en";

// Tipo del contexto
type LanguageContextType = {
  language: LanguageKeys;
  setLanguage: (lang: LanguageKeys) => void;
};

// Contexto con valores por defecto
const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
});

// Proveedor del contexto
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageKeys>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as LanguageKeys;

    if (savedLang === "es" || savedLang === "en") {
      // Si hay uno guardado, usarlo
      setLanguageState(savedLang);
    } else {
      // Detectar del navegador
      const browserLang = navigator.language.toLowerCase();
      const detectedLang: LanguageKeys = browserLang.startsWith("en")
        ? "en"
        : "es";

      setLanguageState(detectedLang);
      localStorage.setItem("language", detectedLang);
    }
  }, []);

  const setLanguage = (lang: LanguageKeys) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook para consumir el contexto
export function useLanguage() {
  return useContext(LanguageContext);
}