// src/Components/Footer.tsx
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.footer
      className="border-t border-gray-200 bg-white py-2 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center text-[11px] text-gray-600 flex items-center justify-center gap-2 flex-wrap sm:gap-3">
        <p className="font-medium leading-none flex items-center gap-3 whitespace-nowrap">
          <a
            href="mailto:r.opalo@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            title="Email"
            className="hover:text-primary-dark transition-all duration-300 text-base"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/17544653318"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="hover:text-primary-dark transition-all duration-300 text-base"
          >
            <FaWhatsapp />
          </a>
          © {new Date().getFullYear()} Rodrigo Opalo. Made with 💻 by Rodrigo Opalo.
        </p>
      </div>
    </motion.footer>
  );
}