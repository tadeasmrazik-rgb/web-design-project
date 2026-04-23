"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PROJECTS = [
  {
    number: "01",
    title: "Stínotek",
    url: "https://stinotek.cz",
    domain: "stinotek.cz",
    screenshot: "/screen-stinotek.png",
    category: { cs: "Firemní web · Žaluzie & stínění", en: "Business site · Blinds & shading" },
    headline: { cs: "Elegance, která prodává", en: "Elegance that sells" },
    desc: {
      cs: "Prémiový web pro dodavatele žaluzií, markýz a pergol. Tmavý luxusní design s důrazem na produkt a jednoduchou poptávku. Výsledek: web, který odráží kvalitu značky a generuje poptávky.",
      en: "Premium website for a supplier of blinds, awnings and pergolas. Dark luxury design focused on products and easy inquiry. Result: a site that reflects brand quality and generates leads.",
    },
    stats: [
      { value: "14", label: { cs: "dní od kickoffu", en: "days from kickoff" } },
      { value: "100%", label: { cs: "mobilní optimalizace", en: "mobile optimized" } },
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
    color: "#C9A84C",
    accent: "rgba(201,168,76,0.15)",
    border: "rgba(201,168,76,0.2)",
  },
  {
    number: "02",
    title: "Stop Zátěži",
    url: "https://stop-zateze.cz",
    domain: "stop-zateze.cz",
    screenshot: "/screen-stopzateze.png",
    category: { cs: "Landing page · Autovraky", en: "Landing page · Car removal" },
    headline: { cs: "Konverze na prvním místě", en: "Conversions first" },
    desc: {
      cs: "Konverzní landing page pro službu odvozu autovraků. Silné CTA, sociální důkazy a přehledná struktura vedou návštěvníka přímou cestou k odeslání poptávky. Design navržen pro maximální důvěryhodnost.",
      en: "Conversion-focused landing page for a car removal service. Strong CTAs, social proof and clear structure guide the visitor straight to inquiry submission. Design built for maximum trust.",
    },
    stats: [
      { value: "1 200+", label: { cs: "odbavených autovraků", en: "cars removed" } },
      { value: "48h", label: { cs: "průměrná odezva", en: "avg. response" } },
    ],
    tags: ["Next.js", "Tailwind CSS", "SEO", "Figma"],
    color: "#6BCB77",
    accent: "rgba(107,203,119,0.1)",
    border: "rgba(107,203,119,0.2)",
  },
];

const T = {
  eyebrow: { cs: "Naše práce", en: "Our work" },
  heading1: { cs: "Weby, za které", en: "Websites we're" },
  heading2: { cs: "mluví výsledky", en: "proud of" },
  sub: {
    cs: "Každý projekt je řešení na míru — od prvního pixelu po spuštění.",
    en: "Every project is a custom solution — from the first pixel to launch.",
  },
  back: { cs: "Zpět na hlavní stránku", en: "Back to homepage" },
  visit: { cs: "Otevřít web", en: "Open website" },
  cta: {
    heading: { cs: "Chcete podobný výsledek?", en: "Want a similar result?" },
    sub: { cs: "Bezplatná konzultace, pevná cena, dodání za 14 dní.", en: "Free consultation, fixed price, delivery in 14 days." },
    btn: { cs: "Začít projekt", en: "Start a project" },
  },
};

function BrowserMockup({ src, domain, color }: { src: string; domain: string; color: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3"
        style={{ background: "rgba(20,20,20,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
        </div>
        {/* URL bar */}
        <div className="flex-1 mx-2 px-3 py-1 rounded-md flex items-center gap-2"
          style={{ background: "rgba(255,255,255,0.06)" }}>
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
          <span className="text-xs truncate" style={{ color: "#666", fontFamily: "var(--font-inter), sans-serif" }}>
            {domain}
          </span>
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
        <Image
          src={src}
          alt={domain}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
    </div>
  );
}

export default function ProjectsGrid() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 text-sm mb-14 transition-colors hover:text-[#C9A84C]"
          style={{ color: "#555" }}
        >
          <ArrowLeft size={14} />
          {T.back[lang]}
        </motion.a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
            <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>
              {T.eyebrow[lang]}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {T.heading1[lang]}<br />
            <span className="text-gold-gradient">{T.heading2[lang]}</span>
          </h1>
          <p className="text-base sm:text-lg max-w-xl" style={{ color: "#666" }}>
            {T.sub[lang]}
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-28 mb-24">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* Info side */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-5xl font-bold select-none leading-none"
                      style={{ color: "rgba(255,255,255,0.05)", fontFamily: "var(--font-syne), sans-serif" }}>
                      {proj.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ color: proj.color, background: proj.accent, border: `1px solid ${proj.border}` }}>
                      {proj.category[lang]}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                    {proj.title}
                  </h2>
                  <p className="text-lg font-semibold mb-4" style={{ color: proj.color }}>
                    {proj.headline[lang]}
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#666" }}>
                    {proj.desc[lang]}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    {proj.stats.map((s, si) => (
                      <div key={si}>
                        <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-syne), sans-serif", color: proj.color }}>
                          {s.value}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: "#555" }}>{s.label[lang]}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.04)", color: "#666", border: "1px solid rgba(255,255,255,0.07)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={proj.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:gap-3"
                    style={{ background: proj.accent, border: `1px solid ${proj.border}`, color: proj.color }}>
                    {T.visit[lang]} — {proj.domain}
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* Mockup side */}
                <motion.div
                  whileHover={{ y: -6, rotateY: i % 2 === 0 ? -2 : 2 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative">
                    {/* Glow behind */}
                    <div className="absolute -inset-4 rounded-3xl blur-3xl opacity-20"
                      style={{ background: proj.color }} />
                    <BrowserMockup src={proj.screenshot} domain={proj.domain} color={proj.color} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="text-center rounded-3xl p-12"
          style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {T.cta.heading[lang]}
          </h2>
          <p className="text-sm mb-8" style={{ color: "#666" }}>{T.cta.sub[lang]}</p>
          <a href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
              color: "#080808",
              fontFamily: "var(--font-syne), sans-serif",
              boxShadow: "0 0 40px rgba(201,168,76,0.3)",
            }}>
            {T.cta.btn[lang]}
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
