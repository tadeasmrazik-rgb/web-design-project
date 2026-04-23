"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Target, Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const ICONS = [Target, Zap, Shield, Clock];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function WhyUs() {
  const { lang, t } = useLang();
  const w = t.whyus;

  return (
    <section id="proc-my" className="py-28 px-6" style={{ background: "#080808", position: "relative", zIndex: 2 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }} className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
            <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>{w.eyebrow[lang]}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {w.heading1[lang]}
            <span className="text-gold-gradient">{w.heading2[lang]}</span>
            <br />{w.heading3[lang]}
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {w.reasons[lang].map((r, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div key={i} variants={item} className="card-premium p-7 rounded-2xl group cursor-default">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <Icon size={20} style={{ color: "#C9A84C" }} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{r.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
          <div>
            <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>{w.stripTitle[lang]}</p>
            <p className="text-xs mt-0.5" style={{ color: "#666" }}>{w.stripDesc[lang]}</p>
          </div>
          <a href="#kontakt" className="shrink-0 text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", color: "#080808", fontFamily: "var(--font-syne), sans-serif" }}>
            {w.stripCta[lang]}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
