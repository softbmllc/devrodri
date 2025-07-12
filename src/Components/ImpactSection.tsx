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
          {/* Imagen con gradiente en todos los bordes */}
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src="/img/impact.jpg"
              alt="Diseño visual impactante"
              className="object-cover w-full h-full"
            />
            {/* Degradado arriba */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none" />
            {/* Degradado abajo */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
            {/* Degradado izquierda */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none" />
            {/* Degradado derecha */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none" />
          </div>

          {/* Texto */}
          <div className="md:pl-10">
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
        </div>
      </motion.section>
    </>
  );
}