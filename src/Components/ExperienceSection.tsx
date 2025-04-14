// src/Components/ExperienceSection.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { useEffect, useState } from "react";
import SeoExperienceSection from "./SeoExperienceSection";

export default function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language];

  // 👇 Forzar re-render al cambiar idioma
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [language]);

  return (
    <motion.section
      key={key}
      id="experiencia"
      className="bg-black text-white py-28 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SeoExperienceSection />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Imagen */}
        <div>
          <img
            src="/img/experience.jpg"
            alt="Experiencia visual en diseño"
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            {t.experience.title1}<br />{t.experience.title2}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.experience.description}
          </p>
        </div>
      </div>
    </motion.section>
  );
}