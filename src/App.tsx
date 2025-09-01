// src/App.tsx
import { useLanguage } from "./LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import SeoHead from "./Components/SeoHead";
import { useState, useEffect } from "react";
import HeroSlider from "./Components/HeroSlider";
import SobreMiSection from "./Components/SobreMiSection";
import HighlightsSection from "./Components/HighlightsSection";
import PortfolioSection from "./Components/PortfolioSection";
import ContactSection from "./Components/ContactSection"; // 👈 Sigue importado igual
import FaqSection from "./Components/FaqSection";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ImpactSection from "./Components/ImpactSection";
import ExperienceSection from "./Components/ExperienceSection";
import TransitionServicesIntro from "./Components/TransitionServicesIntro";
import "./index.css";
import SeoFooterSection from "./Components/SeoFooterSection";
import CTASection from "./Components/CTASection";
import { Routes, Route, useLocation } from "react-router-dom";

import PortfolioPage from "./pages/PortfolioPage";

const HomePage = () => (
  <>
    {/* Hero Slider */}
    <HeroSlider />
    {/* Impact Section */}
    <ImpactSection />
    {/* SOBRE MÍ con curva incluida internamente */}
    <SobreMiSection />
    {/* Experience */}
    <ExperienceSection />
    {/* Highlights */}
    <HighlightsSection />
    {/* Intro antes del bloque de servicios */}
    <TransitionServicesIntro />
    {/* Portfolio */}
    <PortfolioSection />
    {/* Bridge blanco entre Portfolio y Contacto */}
    <TransitionServicesIntro variant="afterPortfolio" />
    {/* Contacto */}
    <ContactSection />
    {/* Preguntas Frecuentes */}
    <FaqSection />
    {/* CTASection */}
    <CTASection />
  </>
);


function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);
  return null;
}

function App() {
  const { language } = useLanguage();

  return (
    <HelmetProvider>
      <div className="font-sans bg-neutral text-gray-900 min-h-screen">
        <SeoHead />

        {/* ✅ Navbar */}
        <Navbar key={language} />
        <ScrollToHash />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        {/* Footer SEO + visual */}
        <SeoFooterSection />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;