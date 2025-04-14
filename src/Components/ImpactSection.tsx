// src/Components/ImpactSection.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { useEffect, useState } from "react";
import SeoImpactSection from "./SeoImpactSection";

export default function ImpactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  // 👇 Forzar re-render al cambiar idioma
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [language]);

  return (
    <>
      <SeoImpactSection />
      <motion.section
        key={key}
        id="impacto"
        className="bg-black text-white py-28 px-4 sm:px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              {t.transitionVisual.title}
              <br />
              {t.transitionVisual.subtitleLine1}
              <br />
              {t.transitionVisual.subtitleLine2}
            </h2>
            <p className="text-gray-400 text-lg">
              {t.transitionVisual.paragraph}
            </p>
          </div>

          {/* Imagen con gradiente */}
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src="/img/impact.jpg"
              alt="Diseño visual impactante"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
          </div>
        </div>
      </motion.section>
    </>
  );
}