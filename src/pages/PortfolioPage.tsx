// src/pages/PortfolioPage.tsx
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";

type ProjectKey = "lem" | "mutter" | "federico" | "bionova" | "boating";
type Project = { key: ProjectKey; href: string; cover: string };

const projects: Project[] = [
  { key: "lem",   href: "https://lem-box.com.uy",            cover: "/img/lem-box-cover.jpg" },
  { key: "mutter",   href: "https://www.muttergames.com",            cover: "/img/mutter-cover.jpg" },
  { key: "federico", href: "https://www.federicoroma.com",            cover: "/img/federico-cover.jpg" },
  { key: "bionova",  href: "https://www.getbionova.com",              cover: "/img/bionova-cover.jpg" },
  { key: "boating",  href: "https://www.boatingadventuresmiami.com", cover: "/img/Fondo.jpg" },
];

type Category = "all" | "ecom" | "personal" | "services";
const projectMeta: Record<ProjectKey, { category: Category; tags: string[]; tagsEn: string[] }> = {
  lem:      { category: "services", tags: ["Logística", "Next.js"],         tagsEn: ["Logistics", "Next.js"] },
  mutter:   { category: "ecom",     tags: ["E‑commerce", "Mercado Pago"],            tagsEn: ["E‑commerce", "Mercado Pago"] },
  federico: { category: "personal", tags: ["Marca personal", "Cursos"],             tagsEn: ["Personal brand", "Courses"] },
  bionova:  { category: "ecom",     tags: ["E‑commerce", "Stripe/PayPal"],          tagsEn: ["E‑commerce", "Stripe/PayPal"] },
  boating:  { category: "services", tags: ["Servicios", "Reservas"],                tagsEn: ["Services", "Bookings"] },
};

const filters: { key: Category; es: string; en: string }[] = [
  { key: "all",      es: "Todos",       en: "All" },
  { key: "ecom",     es: "E‑commerce", en: "E‑commerce" },
  { key: "personal", es: "Personal",    en: "Personal" },
  { key: "services", es: "Servicios",   en: "Services" },
];

const caseDetails: Record<ProjectKey, {
  summaryEs: string; summaryEn: string;
  stack: string[]; integrations: string[];
  challengesEs: string[]; challengesEn: string[];
  solutionEs: string[]; solutionEn: string[];
  resultsEs: string[]; resultsEn: string[];
}> = {
  lem: {
    summaryEs: "Logística en Miami y envíos internacionales (Uruguay + Argentina). Landing mobile-first, multipaís y contacto con Resend.",
    summaryEn: "Logistics in Miami and international shipping (Uruguay + Argentina). Mobile-first, multi-country landing with Resend contact.",
    stack: [
      "Frontend: Next.js 15 + TypeScript + Tailwind",
      "Hosting: Vercel",
      "Integraciones: WhatsApp · Instagram · Email (Resend)",
      "Roadmap multipaís: lem-box.com (selector), lem-box.com.uy, lem-box.com.ar"
    ],
    integrations: ["Resend (email)", "WhatsApp", "Instagram"],
    challengesEs: [
      "Crear un sitio de logística con estética premium (Apple-like) en un rubro tradicional",
      "Alinear branding digital con la operativa real de un warehouse en Miami",
      "Optimizar tiempos de carga y experiencia mobile"
    ],
    challengesEn: [
      "Build a premium (Apple-like) logistics site in a traditional industry",
      "Align digital branding with the real Miami warehouse operations",
      "Optimize load times and mobile UX"
    ],
    solutionEs: [
      "Diseño consistente y minimalista con colores corporativos (#02120F y #EB6619)",
      "Flujo de navegación claro: landing → contacto → WhatsApp/email",
      "Implementación de arquitectura multipaís (selector + sitios locales)",
      "SEO optimizado para Uruguay y Argentina"
    ],
    solutionEn: [
      "Consistent, minimal design with brand colors (#02120F and #EB6619)",
      "Clear navigation flow: landing → contact → WhatsApp/email",
      "Multi-country architecture (selector + local sites)",
      "SEO optimized for Uruguay and Argentina"
    ],
    resultsEs: [
      "Primera versión productiva en Uruguay lista para producción",
      "Roadmap claro para expansión regional",
      "Sitio rápido, responsive y con identidad propia, diferenciado de la competencia"
    ],
    resultsEn: [
      "First productive version for Uruguay, ready for production",
      "Clear roadmap for regional expansion",
      "Fast, responsive site with its own identity"
    ],
  },
  mutter: {
    summaryEs: "Tienda online con catálogo dinámico, carrito y checkout integrado con Mercado Pago, diseño responsive y SEO optimizado.",
    summaryEn: "Online store with dynamic catalog, cart and Mercado Pago checkout, responsive design and SEO‑optimized.",
    stack: [
      "Frontend: React + Vite + TypeScript",
      "Firebase: Firestore · Authentication · Hosting · Storage",
      "Admin panel: React (users & roles)"
    ],
    integrations: ["Mercado Pago", "Cloudinary/ImageKit", "Integración de envíos"],
    challengesEs: [
      "Implementar un checkout LATAM robusto con múltiples métodos de pago",
      "Sincronizar carritos anónimos y usuarios registrados sin duplicar información",
      "Crear un panel admin completo con control de permisos y seguridad en Firebase"
    ],
    challengesEn: [
      "Implement a robust LATAM checkout with multiple payment methods",
      "Sync guest carts and logged‑in users without duplication",
      "Build a full admin panel with roles & Firebase security"
    ],
    solutionEs: [
      "SDK de pagos de Mercado Pago con notificaciones en tiempo real",
      "Catálogo tipado y filtros dinámicos",
      "Base de datos de clientes y pedidos sincronizada con el panel admin"
    ],
    solutionEn: [
      "Mercado Pago SDK with real‑time webhooks",
      "Typed catalog and dynamic filters",
      "Customers & orders database synced with the admin panel"
    ],
    resultsEs: [
      "Rendimiento optimizado con Vite (LCP ~2.1s)",
      "Conversión mejorada gracias a un flujo de checkout claro y flexible",
      "Panel de administración que facilita la gestión integral sin conocimientos técnicos"
    ],
    resultsEn: [
      "Optimized performance with Vite (LCP ~2.1s)",
      "Higher conversion thanks to a clear, flexible checkout flow",
      "Admin panel that streamlines operations without technical expertise"
    ],
  },
  federico: {
    summaryEs: "Sitio web personal y profesional del campeón mundial de kickboxing y muay thai. Incluye biografía, cursos en video, galería multimedia y testimonios reales de alumnos.",
    summaryEn: "Personal and professional website for a Muay Thai & kickboxing world champion. Includes bio, video courses, media gallery and real student testimonials.",
    stack: [
      "Frontend: React + Vite + TypeScript",
      "Animaciones: Framer Motion",
      "Firebase: Firestore · Auth · Hosting · Storage",
      "i18n: i18next (ES/EN)"
    ],
    integrations: [
      "Vimeo (video courses)",
      "Cloudinary/ImageKit (optimized gallery)",
      "WhatsApp CTA",
      "SEO dinámico por sección"
    ],
    challengesEs: [
      "Sitio moderno pero liviano, accesible y administrable sin CMS",
      "Adaptar contenido extenso (biografía, clases, testimonios) sin saturar al usuario",
      "Experiencia mobile‑first fluida y visualmente clara",
      "Sistema de testimonios dinámicos, ordenados y con traducciones"
    ],
    challengesEn: [
      "Modern yet lightweight site, accessible and CMS‑less",
      "Adapt long‑form content (bio, classes, testimonials) without overwhelming users",
      "Smooth mobile‑first UX with clear visual hierarchy",
      "Dynamic, translated testimonials system"
    ],
    solutionEs: [
      "Secciones por bloques reutilizables (Hero, Sobre mí, Galería, Clases, Testimonios, Contacto)",
      "Contenido multilenguaje centralizado (es.json / en.json)",
      "Testimonios escalables con tipado central y carga desde testimonialsData.ts",
      "Galería multimedia con hovers, fullscreen y CTA",
      "Enlaces limpios, SEO on‑page y metadatos por página"
    ],
    solutionEn: [
      "Reusable blocks (Hero, About, Gallery, Classes, Testimonials, Contact)",
      "Centralized i18n content (es.json / en.json)",
      "Scalable testimonials with typed schema and data loader",
      "Media gallery with hovers, fullscreen and CTA",
      "Clean URLs, on‑page SEO and per‑page metadata"
    ],
    resultsEs: [
      "Mayor profesionalismo y claridad para sponsors y academias",
      "Plataforma lista para vender cursos (estructura de video + catálogo)",
      "Menor rebote gracias al orden por secciones y CTA activos",
      "Más consultas vía WhatsApp en mobile"
    ],
    resultsEn: [
      "More professional and clear positioning for sponsors and academies",
      "Course‑ready platform (video structure + catalog)",
      "Lower bounce thanks to clear sections and active CTAs",
      "More WhatsApp inquiries on mobile"
    ],
  },
  bionova: {
    summaryEs: "Tienda online profesional en EE.UU. para venta de suplementos (ES/EN). Variantes por producto (60/120 caps), precios diferenciados, stock real, checkout con Stripe/PayPal y panel de administración.",
    summaryEn: "Professional US‑based supplements store (ES/EN). Product variants (60/120 caps), tiered pricing, real stock, Stripe/PayPal checkout and an admin dashboard.",
    stack: [
      "Frontend: React + Vite + TypeScript",
      "Firebase: Firestore · Auth · Hosting · Storage",
      "i18n: i18next",
      "Rich content: TipTap (descripciones)"
    ],
    integrations: [
      "Stripe (Elements/Checkout)",
      "PayPal Buttons",
      "ImageKit/Cloudinary (medios optimizados)"
    ],
    challengesEs: [
      "Gestionar variantes con stock y precios por variante",
      "Checkout real para EE.UU. (Stripe/PayPal)",
      "Migración y optimización de imágenes (ImageKit)",
      "SEO on‑page y datos abiertos en multilenguaje"
    ],
    challengesEn: [
      "Variant management with per‑variant stock & pricing",
      "Real US checkout (Stripe/PayPal)",
      "Image migration & optimization (ImageKit)",
      "Multilingual on‑page SEO & Open Graph"
    ],
    solutionEs: [
      "Modelo de producto tipado con variantes y stock",
      "Stripe Elements + PayPal integrados en el flujo de compra",
      "Pipeline de medios con transformaciones en CDN (ImageKit)",
      "Editor enriquecido TipTap y metadatos por página"
    ],
    solutionEn: [
      "Typed product model with variants & stock",
      "Stripe Elements + PayPal integrated in the checkout flow",
      "Media pipeline with CDN transforms (ImageKit)",
      "TipTap rich editor and per‑page metadata"
    ],
    resultsEs: [
      "UX más rápida y clara",
      "Menos fricción en el pago (Stripe/PayPal)",
      "Administración centralizada de catálogo y pedidos"
    ],
    resultsEn: [
      "Faster, clearer UX",
      "Lower payment friction (Stripe/PayPal)",
      "Centralized catalog & orders management"
    ],
  },
  boating: {
    summaryEs: "Sitio de servicios con reservas y WhatsApp directo.",
    summaryEn: "Service site with bookings and direct WhatsApp.",
    stack: ["React"],
    integrations: ["WhatsApp", "Maps"],
    challengesEs: ["SEO local", "Reservas"],
    challengesEn: ["Local SEO", "Bookings"],
    solutionEs: ["Páginas optimizadas", "CTA claros"],
    solutionEn: ["Optimized pages", "Clear CTAs"],
    resultsEs: ["Más leads", "Mejor visibilidad"],
    resultsEn: ["More leads", "Better visibility"],
  },
};

export default function PortfolioPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [filter, setFilter] = useState<Category>("all");
  const [expanded, setExpanded] = useState<Record<ProjectKey, boolean>>({
    lem: false,
    mutter: false,
    federico: false,
    bionova: false,
    boating: false,
  });
  const list = useMemo(() =>
    projects.filter(p => filter === "all" || projectMeta[p.key].category === filter)
  , [filter]);

  // Helper tipado para evitar problemas con acceso dinámico
  const P: Record<ProjectKey, { title: string; desc: string; link: string }> = {
    lem: t.portfolio.lem,
    mutter: t.portfolio.mutter,
    federico: t.portfolio.federico,
    bionova: t.portfolio.bionova,
    boating: t.portfolio.boating,
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{t.portfolio.title}</h1>
          <p className="text-gray-600 mt-2 max-w-[44rem] mx-auto">
            {language === "es"
              ? "Casos seleccionados de e‑commerce, marca personal y servicios."
              : "Selected work across e‑commerce, personal brands and services."}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-3 py-2 text-sm transition border-b-2 ${filter === f.key ? "border-black text-black" : "border-transparent text-gray-600 hover:text-black"}`}
                aria-pressed={filter === f.key}
              >
                {language === "es" ? f.es : f.en}
              </button>
            ))}
          </div>
          <div className="mt-5">
            <a
              href={`mailto:r.opalo@icloud.com?subject=${encodeURIComponent(language === "es" ? "Solicitud de caso detallado" : "Request detailed case")}`}
              className="inline-flex items-center justify-center rounded-lg bg-[#3B82F6] text-white text-sm font-medium px-5 py-2 shadow-md hover:shadow-lg hover:opacity-90 transition"
              aria-label={language === "es" ? "Solicitar caso detallado" : "Request detailed case"}
              data-analytics="portfolio-request-case"
            >
              {language === "es" ? "Solicitar caso detallado" : "Request detailed case"}
            </a>
          </div>
        </div>

        <div className="space-y-10">
          {list.map((p) => (
            <motion.div
              key={p.key}
              className="border border-gray-200 rounded-2xl shadow-sm bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-5/12 p-4 md:p-6">
                  <img src={p.cover} alt={P[p.key].title} className="w-full h-64 md:h-full object-cover rounded-xl" />
                </div>
                <div className="md:w-7/12 p-6">
                  <h3 className="text-xl font-semibold tracking-tight">{P[p.key].title}</h3>
                  <p className="text-gray-700 mt-2 max-w-[62ch]">{P[p.key].desc}</p>
                  <p className="mt-3 text-sm text-gray-600">• {(language === "es" ? projectMeta[p.key].tags : projectMeta[p.key].tagsEn).join(" · ")}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-primary-dark underline focus-visible:ring-2 ring-offset-2 ring-[#3B82F6] rounded-sm">{P[p.key].link}</a>
                    <button
                      onClick={() => setExpanded(e => ({ ...e, [p.key]: !e[p.key] }))}
                      className="text-sm text-gray-700 hover:text-black underline focus-visible:ring-2 ring-offset-2 ring-gray-300 rounded-sm"
                    >
                      {expanded[p.key] ? (language === "es" ? "Ver menos" : "View less") : (language === "es" ? "Ver más" : "View details")}
                    </button>
                  </div>

                  {expanded[p.key] && (
                    <div className="mt-5 border-t border-gray-100 pt-6">
                      <p className="text-gray-800 font-medium">{language === "es" ? caseDetails[p.key].summaryEs : caseDetails[p.key].summaryEn}</p>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{language === "es" ? "Stack" : "Stack"}</h4>
                          <ul className="text-sm text-gray-700 list-disc ml-5">
                            {caseDetails[p.key].stack.map((s,i)=>(<li key={i}>{s}</li>))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{language === "es" ? "Integraciones" : "Integrations"}</h4>
                          <ul className="text-sm text-gray-700 list-disc ml-5">
                            {caseDetails[p.key].integrations.map((s,i)=>(<li key={i}>{s}</li>))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{language === "es" ? "Retos" : "Challenges"}</h4>
                          <ul className="text-sm text-gray-700 list-disc ml-5">
                            {(language === "es" ? caseDetails[p.key].challengesEs : caseDetails[p.key].challengesEn).map((s,i)=>(<li key={i}>{s}</li>))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{language === "es" ? "Solución" : "Solution"}</h4>
                          <ul className="text-sm text-gray-700 list-disc ml-5">
                            {(language === "es" ? caseDetails[p.key].solutionEs : caseDetails[p.key].solutionEn).map((s,i)=>(<li key={i}>{s}</li>))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">{language === "es" ? "Impacto" : "Impact"}</h4>
                        <ul className="text-sm text-gray-700 list-disc ml-5">
                          {(language === "es" ? caseDetails[p.key].resultsEs : caseDetails[p.key].resultsEn).map((s,i)=>(<li key={i}>{s}</li>))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
