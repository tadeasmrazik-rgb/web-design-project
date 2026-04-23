"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const REAL_PROJECTS = [
  {
    number: "01",
    title: "Stínotek",
    url: "https://stinotek.cz",
    domain: "stinotek.cz",
    screenshot: "/screen-stinotek.png",
    category: { cs: "Firemní web · Žaluzie & stínění", en: "Business site · Blinds & shading" },
    desc: { cs: "Prémiový web s tmavým luxusním designem. Produkt v centru, poptávka na dosah.", en: "Premium website with dark luxury design. Product-first, easy inquiry." },
    result: { cs: "Hotovo za 14 dní", en: "Done in 14 days" },
    color: "#C9A84C",
    bg: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(201,168,76,0.02) 100%)",
  },
  {
    number: "02",
    title: "Stop Zátěži",
    url: "https://stop-zateze.cz",
    domain: "stop-zateze.cz",
    screenshot: "/screen-stopzateze.png",
    category: { cs: "Landing page · Autovraky", en: "Landing page · Car removal" },
    desc: { cs: "Konverzní landing page s jasným CTA a sociálními důkazy. Zákazník si nemá kam utéct.", en: "Conversion-focused landing page with clear CTAs and social proof." },
    result: { cs: "1 200+ odbavených aut", en: "1,200+ cars removed" },
    color: "#6BCB77",
    bg: "linear-gradient(135deg, rgba(107,203,119,0.08) 0%, rgba(107,203,119,0.01) 100%)",
  },
];

export default function Portfolio() {
  const { lang, t } = useLang();
  const p = t.portfolio;

  return (
    <section id="portfolio" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>{p.eyebrow[lang]}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {p.heading1[lang]}<br /><span className="text-gold-gradient">{p.heading2[lang]}</span>
            </h2>
          </div>
          <a href="/projekty" className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[#C9A84C] shrink-0 group" style={{ color: "#666" }}>
            {p.all[lang]}
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <div className="space-y-4">
          {REAL_PROJECTS.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="group rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch transition-all duration-300 hover:-translate-y-1 block"
              style={{ background: proj.bg, border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Screenshot thumbnail */}
              <div className="relative shrink-0 w-full sm:w-56 overflow-hidden"
                style={{ minHeight: "120px" }}>
                <Image
                  src={proj.screenshot}
                  alt={proj.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="224px"
                />
                {/* Overlay fade */}
                <div className="absolute inset-0 sm:hidden"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.8))" }} />
                <div className="absolute inset-0 hidden sm:block"
                  style={{ background: "linear-gradient(to right, transparent 70%, rgba(8,8,8,0.6))" }} />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center gap-4 p-6 sm:p-8">
                <span className="text-4xl font-bold shrink-0 leading-none hidden sm:block"
                  style={{ color: "rgba(255,255,255,0.05)", fontFamily: "var(--font-syne), sans-serif" }}>
                  {proj.number}
                </span>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider" style={{ color: proj.color, opacity: 0.8 }}>
                    {proj.category[lang]}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-1.5"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                    {proj.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#666" }}>{proj.desc[lang]}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="px-4 py-2 rounded-xl text-sm font-semibold"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: proj.color, fontFamily: "var(--font-syne), sans-serif", whiteSpace: "nowrap" }}>
                    {proj.result[lang]}
                  </span>
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: proj.color }} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="flex justify-center mt-10">
          <a href="/projekty"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
            style={{ border: "1px solid rgba(201,168,76,0.4)", color: "#C9A84C", fontFamily: "var(--font-syne), sans-serif" }}>
            {p.all[lang]}
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
