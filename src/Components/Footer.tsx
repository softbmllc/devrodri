// src/Components/Footer.tsx
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.footer
      className="border-t border-gray-200 bg-white py-3 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center text-[11px] text-gray-600 flex items-center justify-center gap-2 flex-wrap sm:gap-3">
        <p className="font-medium leading-none flex items-center gap-4 whitespace-nowrap">
          <a
            href="https://github.com/softbmllc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="hover:text-primary-dark transition-all duration-300 text-[18px]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-opalo-b56685390/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:text-primary-dark transition-all duration-300 text-[18px]"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:r.opalo@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            title="Email"
            className="hover:text-primary-dark transition-all duration-300 text-[18px]"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/17544653318"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="hover:text-primary-dark transition-all duration-300 text-[18px]"
          >
            <FaWhatsapp />
          </a>
          <span className="text-gray-400">•</span>
          <span>© {new Date().getFullYear()} Rodrigo Opalo. Made with code by Rodrigo Opalo.</span>
        </p>
      </div>
    </motion.footer>
  );
}