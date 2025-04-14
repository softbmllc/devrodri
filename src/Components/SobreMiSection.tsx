// src/Components/SobreMiSection.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import SeoSobreMiSection from "./SeoSobreMiSection";

export default function SobreMiSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      id="sobremi"
      className="bg-neutral py-24 px-4 sm:px-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <SeoSobreMiSection />
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.about.title}
        </motion.h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {t.about.description}
        </p>
      </div>

      {/* Curva inferior tipo Apple */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 100" className="w-full h-[80px]" preserveAspectRatio="none">
          <path
            fill="#000000"
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
}