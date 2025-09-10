// src/components/PortfolioSection.tsx

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { Link } from "react-router-dom";

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
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 left-0 w-full h-40 sm:h-48 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      </div>

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
          className="text-3xl sm:text-4xl font-bold text-center text-white leading-tight mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.portfolio.title}
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Proyecto Esteban Firpo */}
          <motion.a
            href="https://estebanfirpo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-neutral shadow-md rounded-2xl overflow-hidden border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileFocus={{ y: -2 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/esteban.jpg"
              alt="Esteban Firpo · Miami Real Estate"
              className="w-full h-56 object-cover rounded-t-2xl"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-tight">
                {t.portfolio.esteban.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 line-clamp-4 min-h-[84px] mb-1">
                {t.portfolio.esteban.desc}
              </p>
              <span className="mt-3 inline-block text-primary font-medium group-hover:opacity-80">
                {t.portfolio.esteban.link}
              </span>
            </div>
          </motion.a>

          {/* Proyecto LEM-BOX */}
          <motion.a
            href="https://lem-box.com.uy"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-neutral shadow-md rounded-2xl overflow-hidden border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileFocus={{ y: -2 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/lem-box-cover.jpg"
              alt="LEM-BOX"
              className="w-full h-56 object-cover rounded-t-2xl"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-tight">
                {t.portfolio.lem.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 line-clamp-4 min-h-[84px] mb-1">
                {t.portfolio.lem.desc}
              </p>
              <span className="mt-3 inline-block text-primary font-medium group-hover:opacity-80">
                {t.portfolio.lem.link}
              </span>
            </div>
          </motion.a>

          {/* Proyecto Mutter Games */}
          <motion.a
            href="https://www.muttergames.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-neutral shadow-md rounded-2xl overflow-hidden border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileFocus={{ y: -2 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/mutter-cover.jpg"
              alt="Mutter Games banner"
              className="w-full h-56 object-cover rounded-t-2xl"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-tight">
                {t.portfolio.mutter.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 line-clamp-4 min-h-[84px] mb-1">
                {t.portfolio.mutter.desc}
              </p>
              <span className="mt-3 inline-block text-primary font-medium group-hover:opacity-80">
                {t.portfolio.mutter.link}
              </span>
            </div>
          </motion.a>

          {/* Proyecto Federico Roma */}
          <motion.a
            href="https://www.federicoroma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-neutral shadow-md rounded-2xl overflow-hidden border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileFocus={{ y: -2 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/federico-cover.jpg"
              alt="Federico Roma banner"
              className="w-full h-56 object-cover rounded-t-2xl"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-tight">
                {t.portfolio.federico.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 line-clamp-4 min-h-[84px] mb-1">
                {t.portfolio.federico.desc}
              </p>
              <span className="mt-3 inline-block text-primary font-medium group-hover:opacity-80">
                {t.portfolio.federico.link}
              </span>
            </div>
          </motion.a>

          {/* Proyecto Bionova */}
          <motion.a
            href="https://www.getbionova.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-neutral shadow-md rounded-2xl overflow-hidden border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileFocus={{ y: -2 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/bionova-cover.jpg"
              alt="Logo Bionova"
              className="w-full h-56 object-cover rounded-t-2xl"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-tight">
                {t.portfolio.bionova.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 line-clamp-4 min-h-[84px] mb-1">
                {t.portfolio.bionova.desc}
              </p>
              <span className="mt-3 inline-block text-primary font-medium group-hover:opacity-80">
                {t.portfolio.bionova.link}
              </span>
            </div>
          </motion.a>

          {/* Proyecto Boating Adventures Miami */}
          <motion.a
            href="https://www.boatingadventuresmiami.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-neutral shadow-md rounded-2xl overflow-hidden border border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileFocus={{ y: -2 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/img/Fondo.jpg"
              alt="Logo Boating Adventures Miami"
              className="w-full h-56 object-cover rounded-t-2xl"
              loading="lazy"
              decoding="async"
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 tracking-tight">
                {t.portfolio.boating.title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 line-clamp-4 min-h-[84px] mb-1">
                {t.portfolio.boating.desc}
              </p>
              <span className="mt-3 inline-block text-primary font-medium group-hover:opacity-80">
                {t.portfolio.boating.link}
              </span>
            </div>
          </motion.a>
        </div>
        <div className="mt-12">
          <div className="mx-auto max-w-4xl bg-white text-gray-900 rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 justify-between">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold tracking-tight">
                {language === "es" ? "¿Listo para tu próximo sitio?" : "Ready for your next site?"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {language === "es" ? "Webs a medida, e‑commerce, SEO e IA. Diseño limpio y alto rendimiento." : "Custom sites, e‑commerce, SEO & AI. Clean design and high performance."}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/#contacto"
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold bg-[#3B82F6] text-white hover:opacity-90 transition"
              >
                {language === "es" ? "Hablemos" : "Let’s talk"}
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition"
              >
                {language === "es" ? "Ver portfolio completo" : "View full portfolio"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}