// src/Components/SeoHeroSlide.tsx
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../LanguageContext";

type SlideSeoProps = {
  index: number;
};

const seoData = [
  {
    es: {
      title: "Diseño Web Profesional | Rodrigo Opalo",
      description: "Sitios modernos, rápidos y optimizados. Diseño visual y funcional para marcas que quieren destacar.",
      keywords: "diseño web, desarrollo web, sitios modernos, SEO, diseño visual",
    },
    en: {
      title: "Professional Web Design | Rodrigo Opalo",
      description: "Modern, fast, and optimized websites. Visual and functional design for standout brands.",
      keywords: "web design, development, modern sites, SEO, visual design",
    },
  },
  {
    es: {
      title: "Software Escalable a Medida | Rodrigo Opalo",
      description: "Creamos soluciones SaaS y Web Apps eficientes, con APIs, UX y performance de alto nivel.",
      keywords: "software a medida, SaaS, web apps, APIs, experiencia de usuario",
    },
    en: {
      title: "Custom Scalable Software | Rodrigo Opalo",
      description: "We build efficient SaaS and Web Apps with APIs, UX, and top-tier performance.",
      keywords: "custom software, SaaS, web apps, APIs, user experience",
    },
  },
  {
    es: {
      title: "Branding con Propósito | Rodrigo Opalo",
      description: "Diseño coherente y memorable que refleja tu visión y proyecta tu marca al siguiente nivel.",
      keywords: "branding, identidad visual, marca, diseño estratégico",
    },
    en: {
      title: "Purposeful Branding | Rodrigo Opalo",
      description: "Consistent, memorable branding that reflects your vision and elevates your business.",
      keywords: "branding, visual identity, brand design, strategy",
    },
  },
];

export default function SeoHeroSlide({ index }: SlideSeoProps) {
  const { language } = useLanguage();
  const seo = seoData[index][language];

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
    </Helmet>
  );
}