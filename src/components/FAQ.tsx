"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="faq-item py-5 cursor-pointer group" onClick={onToggle}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold transition-colors duration-200 group-hover:text-[#C9A84C]"
          style={{ color: isOpen ? "#C9A84C" : "#FFFFFF", fontFamily: "var(--font-syne), sans-serif" }}>
          {q}
        </h3>
        <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-0.5 transition-all duration-200"
          style={{ background: isOpen ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)", border: isOpen ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.06)" }}>
          {isOpen ? <Minus size={12} style={{ color: "#C9A84C" }} /> : <Plus size={12} style={{ color: "#666" }} />}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }} className="overflow-hidden">
            <p className="text-sm leading-relaxed pt-3 pr-8" style={{ color: "#666" }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { lang, t } = useLang();
  const f = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>{f.eyebrow[lang]}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {f.heading1[lang]}<br /><span className="text-gold-gradient">{f.heading2[lang]}</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#666" }}>{f.sub[lang]}</p>
            <a href="mailto:info@topprofitdesign.cz"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:scale-105"
              style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}>
              {f.cta[lang]}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}>
            {f.items[lang].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
