// src/Components/SeoImpactSection.tsx
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../LanguageContext";

export default function SeoImpactSection() {
  const { language } = useLanguage();

  const seo = {
    es: {
      title: "Diseño con intención | Funcional, visual y memorable",
      description:
        "Creamos diseños digitales que funcionan, conectan y se ven bien. Cada proyecto refleja la identidad y objetivos de tu marca.",
      keywords:
        "diseño web, experiencia de usuario, impacto visual, branding, identidad digital",
    },
    en: {
      title: "Design with Purpose | Functional, Visual and Memorable",
      description:
        "We create digital designs that work, connect and look great. Every project reflects your brand's identity and goals.",
      keywords:
        "web design, user experience, visual impact, branding, digital identity",
    },
  };

  const { title, description, keywords } = seo[language];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}
