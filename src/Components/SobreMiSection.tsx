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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <SeoSobreMiSection />
      <div className="flex justify-center mb-5">
        <img
          src="/img/sobremi.jpg"
          alt="Rodrigo Opalo"
          loading="lazy"
          decoding="async"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-1 ring-gray-300/80 shadow"
        />
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {t.about.title}
        </motion.h2>
        <p className="text-gray-700 md:text-gray-600 text-base md:text-lg leading-relaxed md:leading-[1.8] max-w-[60ch] mx-auto mb-6">
          {t.about.description}
        </p>
        <p className="text-gray-700 md:text-gray-600 text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto mb-6">
          {language === "es"
            ? "También implementamos automatizaciones para empresas con n8n y MCP — integrando CRMs, pagos, webhooks y dashboards para ahorrar tiempo y escalar procesos."
            : "We also build business automations with n8n and MCP—integrating CRMs, payments, webhooks and dashboards to save time and scale operations."}
        </p>
        <div className="flex items-center justify-center gap-4 mt-2 md:mt-3">
          <a
            href="/portfolio"
            className="px-5 py-2 rounded-lg bg-[#3B82F6] text-white font-medium hover:opacity-90 transition"
            aria-label={language === "es" ? "Ver casos del portafolio" : "View portfolio work"}
            data-analytics="about-cta-primary"
          >
            {language === "es" ? "Ver casos" : "View work"}
          </a>
          <a
            href="/#contacto"
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition focus-visible:ring-2 ring-offset-2 ring-gray-300"
            aria-label={language === "es" ? "Hablemos" : "Let’s talk"}
            data-analytics="about-cta-secondary"
          >
            {language === "es" ? "Hablemos" : "Let’s talk"}
          </a>
        </div>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-500/90">
          <li>{language === "es" ? "Stack: Next.js · React · Firebase" : "Stack: Next.js · React · Firebase"}</li>
          <li>{language === "es" ? "Pagos online embebidos" : "Embedded online payments"}</li>
          <li>{language === "es" ? "Automatizaciones con n8n y MCP" : "Automations with n8n & MCP"}</li>
        </ul>
      </div>

      {/* Curva inferior tipo Apple */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 100" className="w-full h-[96px]" preserveAspectRatio="none">
          <path
            fill="#000000"
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
    </motion.section>
  );
}