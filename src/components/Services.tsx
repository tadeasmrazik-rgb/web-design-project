"use client";

import { motion } from "framer-motion";
import { Monitor, RefreshCw, ShoppingBag, Search, Palette, Wrench, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const ICONS = [Monitor, RefreshCw, ShoppingBag, Search, Palette, Wrench];

export default function Services() {
  const { lang, t } = useLang();
  const s = t.services;
  const items = s.items[lang];

  return (
    <section id="sluzby" className="py-28 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>{s.eyebrow[lang]}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {s.heading1[lang]}<br /><span className="text-gold-gradient">{s.heading2[lang]}</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs leading-relaxed" style={{ color: "#666" }}>{s.sub[lang]}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            const featured = !!item.featured;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group relative rounded-2xl p-7 cursor-default transition-all duration-300"
                style={{
                  background: featured ? "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.04))" : "rgba(20,20,20,0.8)",
                  border: featured ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.06)",
                }}>
                {featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", color: "#080808", fontFamily: "var(--font-syne), sans-serif" }}>
                    {s.badge[lang]}
                  </div>
                )}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: featured ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.04)", border: featured ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.06)" }}>
                    <Icon size={20} style={{ color: featured ? "#C9A84C" : "#666" }} />
                  </div>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="text-lg font-bold mb-1 text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>{item.title}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: "#C9A84C" }}>{item.price}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#666" }}>{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.04)", color: "#555", border: "1px solid rgba(255,255,255,0.06)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 text-center">
          <a href="#kontakt" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#C9A84C]" style={{ color: "#666" }}>
            {s.more[lang]}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
