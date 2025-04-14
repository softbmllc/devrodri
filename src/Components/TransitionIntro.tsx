// Components/TransitionIntro.tsx
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import { LuChevronDown } from "react-icons/lu";

export default function TransitionIntro() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.div
      className="bg-gray-50 text-center py-4 px-4 sm:px-6 text-gray-600 text-base font-light tracking-wide"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p>{t.transitionIntro.text}</p>

      <div className="flex justify-center mt-2 animate-bounce">
        <LuChevronDown className="w-5 h-5 text-gray-400" />
      </div>
    </motion.div>
  );
}