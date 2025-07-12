import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(form.action!, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    }).then(() => {
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 5000);
    });
  };

  return (
    <section
      id="contacto"
      className="relative py-28 px-4 sm:px-6 bg-black overflow-hidden"
    >
      {/* Degradado sutil arriba para transición desde Portfolio */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#f9fafb] to-transparent z-20" />

      {/* Imagen de fondo con degradado tipo Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  <img
    src="/img/contact-bg.jpg"
    alt="Contacto"
    className="absolute inset-0 w-full h-full object-cover opacity-100"
  />
  {/* Gradiente lateral como antes */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
  {/* NUEVO: Gradiente inferior para fundirse con negro */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-20" />
</div>

      <motion.div
        className="relative z-30 bg-white border border-white/70 max-w-xl mx-auto rounded-3xl shadow-xl p-10 sm:p-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          {t.contact.title}
        </h2>

        <p className="text-gray-600 mb-10 text-sm sm:text-base">
          {t.contact.subtitle}
        </p>

        <form
          action="https://formsubmit.co/r.opalo@icloud.com"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder={t.contact.namePlaceholder}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder={t.contact.emailPlaceholder}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder={t.contact.messagePlaceholder}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          ></textarea>

          <motion.button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-dark transition-all duration-300 ease-in-out shadow-md flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEnvelope className="text-white" />
            {t.contact.submit}
          </motion.button>

          {success && (
            <div className="mt-6 text-center">
              <p className="inline-block bg-green-100 text-green-800 text-sm px-4 py-2 rounded-full shadow-sm transition-all duration-300">
                {language === "es"
                  ? "¡Gracias por tu mensaje! Te responderé pronto."
                  : "Thanks for your message! I'll get back to you soon."}
              </p>
            </div>
          )}
        </form>

        <div className="mt-10 flex justify-center gap-8 text-sm text-gray-500">
          <a
            href="mailto:rodrigo@lem-box.com"
            className="hover:text-primary flex items-center gap-2"
          >
            <FaEnvelope /> Email
          </a>
          <span>|</span>
          <a
            href="https://wa.me/17544653318"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary flex items-center gap-2"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}