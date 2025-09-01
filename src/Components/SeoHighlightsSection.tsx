// src/Components/SeoHighlightsSection.tsx

import { Helmet } from "react-helmet-async";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

export default function SeoHighlightsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const seo = t.highlights.seo;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
    </Helmet>
  );
}
