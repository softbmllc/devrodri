// src/Components/HighlightsSection.tsx
import { motion } from "framer-motion";
import { LuZap, LuSmartphone, LuTarget, LuRocket } from "react-icons/lu";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import SeoHighlightsSection from "./SeoHighlightsSection";
import { useRef, useEffect } from "react";

const iconMap = {
  fast: (
    <div className="bg-white rounded-full p-3 shadow-md">
      <LuZap className="text-3xl text-blue-500" />
    </div>
  ),
  responsive: (
    <div className="bg-white rounded-full p-3 shadow-md">
      <LuSmartphone className="text-3xl text-blue-500" />
    </div>
  ),
  results: (
    <div className="bg-white rounded-full p-3 shadow-md">
      <LuTarget className="text-3xl text-blue-500" />
    </div>
  ),
  seo: (
    <div className="bg-white rounded-full p-3 shadow-md">
      <LuRocket className="text-3xl text-blue-500" />
    </div>
  ),
};

export default function HighlightsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  if (videoRef.current) {
    videoRef.current.defaultMuted = true;

    // Intento forzado de reproducir (Safari a veces lo permite con muted + programático)
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Safari puede bloquearlo si aún no hay interacción, pero no rompe nada
        console.warn("Autoplay blocked in Safari:", error);
      });
    }
  }
}, []);

  return (
    <>
      {/* Frase principal con flechita, ya sin duplicados */}
      <section className="bg-white text-center pt-6 pb-2">
        <p className="text-sm sm:text-base font-light text-gray-600 tracking-tight">
          {t.transitionIntro.text}
        </p>
        <div className="flex justify-center mt-1">
          <ChevronDown className="h-3.5 w-3.5 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* Sección con fondo en video y los diferenciales */}
      <motion.section
        id="diferenciales"
        className="relative bg-white py-28 px-4 sm:px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SeoHighlightsSection />

        {/* Video de fondo */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
  ref={videoRef}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  disableRemotePlayback
  aria-hidden="true"
  poster=""
  className="absolute inset-0 w-full h-full object-cover opacity-100"
>
  <source src="/videos/highlights-bg.mp4" type="video/mp4" />
</video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-0 pointer-events-none" />
        </div>

        {/* Contenido sobre el video */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.highlights.title}
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {Object.entries(t.highlights.items).map(([key, item], idx) => (
              <motion.div
                key={key}
                className="p-6 rounded-2xl bg-white/50 border border-white/30 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex justify-center">
                  {iconMap[key as keyof typeof iconMap]}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}