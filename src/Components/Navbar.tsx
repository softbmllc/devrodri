// src/Components/Navbar.tsx
import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (!savedLang) {
      const browserLang = navigator.language.startsWith("en") ? "en" : "es";
      setLanguage(browserLang);
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-1 flex justify-between items-center">
        {/* Nombre */}
        <span className="text-lg font-medium text-white tracking-normal leading-snug">
          Rodrigo Opalo
        </span>

        {/* Ícono hamburguesa mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links en desktop */}
        <div className="hidden sm:flex items-center space-x-6 text-sm font-medium text-white">
          <a href="#about" className="hover:text-primary transition">{t.nav.about}</a>
          <a href="#why" className="hover:text-primary transition">{t.nav.why}</a>
          <a href="#portfolio" className="hover:text-primary transition">{t.nav.portfolio}</a>
          <a href="#contacto" className="hover:text-primary transition">{t.nav.contact}</a>
          <a href="#faq" className="hover:text-primary transition">{t.nav.faq}</a>

          {/* Selector de idioma */}
          <div className="flex items-center gap-2 ml-4">
            <FiGlobe className="text-white text-lg" />
            <button
              onClick={() => setLanguage("es")}
              className={`text-sm ${language === "es" ? "text-primary" : "text-white"} hover:text-primary transition`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-sm ${language === "en" ? "text-primary" : "text-white"} hover:text-primary transition`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable mobile */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 flex flex-col items-center space-y-4 text-sm font-medium bg-black/80 backdrop-blur-sm text-white">
          <a href="#about" onClick={closeMenu} className="hover:text-primary transition">{t.nav.about}</a>
          <a href="#why" onClick={closeMenu} className="hover:text-primary transition">{t.nav.why}</a>
          <a href="#portfolio" onClick={closeMenu} className="hover:text-primary transition">{t.nav.portfolio}</a>
          <a href="#contacto" onClick={closeMenu} className="hover:text-primary transition">{t.nav.contact}</a>
          <a href="#faq" onClick={closeMenu} className="hover:text-primary transition">{t.nav.faq}</a>
          <div className="flex items-center gap-2 mt-2">
            <FiGlobe className="text-white text-lg" />
            <button
              onClick={() => setLanguage("es")}
              className={`text-sm ${language === "es" ? "text-primary" : "text-white"} hover:text-primary transition`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-sm ${language === "en" ? "text-primary" : "text-white"} hover:text-primary transition`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
