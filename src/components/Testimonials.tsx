"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const { lang, t } = useLang();
  const tr = t.testimonials;

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
            <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>{tr.eyebrow[lang]}</span>
            <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {tr.heading1[lang]}<br /><span className="text-gold-gradient">{tr.heading2[lang]}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tr.items[lang].map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="card-premium rounded-2xl p-7 flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="#C9A84C" style={{ color: "#C9A84C" }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#8A8A8A" }}>
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C22, #C9A84C11)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontFamily: "var(--font-syne), sans-serif" }}>
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>{item.name}</div>
                  <div className="text-xs" style={{ color: "#555" }}>{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {tr.badges[lang].map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-sm" style={{ color: "#555" }}>
              <span>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
