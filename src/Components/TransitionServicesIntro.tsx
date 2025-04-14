// src/Components/TransitionServicesIntro.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

export default function TransitionServicesIntro() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      className="bg-white py-16 px-4 sm:px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-2">
          {t.transitionServicesIntro.smallTitle}
        </p>
        <h2 className="text-xl sm:text-2xl font-light text-gray-800 mb-10">
          {t.transitionServicesIntro.text}
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-xl transition hover:shadow-2xl w-full max-w-[1600px] mx-auto">
          <img
            src="/img/servicios.jpg"
            alt="Servicios"
            className="w-full h-24 object-cover object-center sm:h-28 md:h-32"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
