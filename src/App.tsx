// src/App.tsx
import { useLanguage } from "./LanguageContext";
import translations from "./translations";
import { HelmetProvider } from "react-helmet-async";
import SeoHead from "./Components/SeoHead";
import { useState } from "react";
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

function App() {
  const { language } = useLanguage();
  const t = translations[language];
  const [success, setSuccess] = useState(false);

  return (
    <HelmetProvider>
      <div className="font-sans bg-neutral text-gray-900 min-h-screen">
        <SeoHead />

        {/* ✅ Navbar */}
        <Navbar key={language} />

        {/* Hero Slider */}
        <HeroSlider />

        {/* Impact Section */}
        <ImpactSection />

        {/* SOBRE MÍ con curva incluida internamente */}
        <SobreMiSection />

        {/* Experience */}
        <ExperienceSection />

        {/* 💬 Transición inspiradora antes del bloque de highlights */}
        
        {/* Highlights */}
        <HighlightsSection />

        {/* 💡 Intro antes del bloque de servicios */}
        <TransitionServicesIntro />

        {/* Portfolio */}
        <PortfolioSection />

        {/* Contacto */}
        <ContactSection /> {/* ✅ Sigue acá, pero ya no tiene el id="contacto" */}

        {/* Preguntas Frecuentes */}
        <FaqSection />

        {/* CTASection */}
        <CTASection />

        {/* Footer SEO + visual */}
        <SeoFooterSection />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;