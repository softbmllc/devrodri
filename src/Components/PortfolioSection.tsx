// src/components/PortfolioSection.tsx

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

export default function PortfolioSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      id="portfolio"
      className="relative py-28 px-4 sm:px-6 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Fondo visual con oscurecimiento */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/ojo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Fade de transición hacia abajo */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f9fafb] to-transparent z-20" />

      {/* Contenido */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-widest text-white/80 drop-shadow-md mb-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {language === "es" ? "Portafolio" : "Portfolio"}
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.portfolio.title}
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Proyecto destacado */}
          <motion.div
            className="bg-neutral shadow-md rounded-2xl overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/Fondo.jpg"
              alt="Boating Adventures Miami"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t.portfolio.boating.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t.portfolio.boating.desc}
              </p>
              <motion.a
                href="https://www.boatingadventuresmiami.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary font-medium hover:text-primary-dark transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.portfolio.boating.link}
              </motion.a>
            </div>
          </motion.div>
          {/* Proyecto Bionova */}
          <motion.div
            className="bg-neutral shadow-md rounded-2xl overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/bionova-cover.png"
              alt="Bionova Supplements"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t.portfolio.bionova.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t.portfolio.bionova.desc}
              </p>
              <motion.a
                href="https://www.getbionova.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary font-medium hover:text-primary-dark transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.portfolio.bionova.link}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}