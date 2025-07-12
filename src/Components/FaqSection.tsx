// src/Components/FaqSection.tsx
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { motion } from "framer-motion";

export default function FaqSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.section
      id="faq"
      className="relative bg-black py-28 px-4 sm:px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Imagen de fondo centrada y ampliada con degradado sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/img/faq-bg.jpg"
          alt="FAQ"
          className="absolute inset-0 w-full h-full object-cover scale-125" // aumentamos el tamaño
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      {/* Degradado superior (desde negro a imagen) */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Degradado inferior (imagen a negro) */}
<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.h2
  className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 tracking-tight leading-tight drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.faq.title}
        </motion.h2>

        <div className="space-y-8">
          {t.faq.questions.map((q: any, index: number) => (
            <motion.div
              key={index}
              className="bg-white p-6 sm:p-7 px-5 sm:px-6 rounded-2xl shadow-md border border-gray-100 cursor-default transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-lg hover:scale-[1.01]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg sm:text-xl text-primary mb-2">
                {q.question}
              </h3>
              <p className="text-neutral-800 text-base leading-relaxed">
                {q.answer}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA final para contacto */}
        <div className="text-center mt-12 text-sm text-gray-500">
          {language === "es"
            ? "¿Tenés otra duda? "
            : "Still have a question? "}
          <a
            href="https://wa.me/17544653318"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {language === "es"
              ? "Escribime por WhatsApp"
              : "Message me on WhatsApp"}
          </a>
        </div>
      </div>
    </motion.section>
  );
}