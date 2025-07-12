// src/Components/CTASection.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import SeoCallSection from "./SeoCallSection";

export default function CTASection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      className="relative bg-black text-white py-24 px-4 sm:px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SeoCallSection />

      {/* Curva blanca arriba */}
      <div className="absolute inset-x-0 top-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 60" className="w-full h-[60px]" preserveAspectRatio="none">
          <path 
            fill="#f9fafb"
            d="M0,0 C480,40 960,0 1440,40 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-snug">{t.call.title}</h2>
      <p className="text-lg text-gray-300 mb-8">{t.call.subtitle}</p>

      <motion.a
        href="mailto:r.opalo@icloud.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {t.call.button}
      </motion.a>
    </motion.section>
  );
}