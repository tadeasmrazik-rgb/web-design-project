"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FinalCTA() {
  const { lang, t } = useLang();
  const c = t.cta;

  return (
    <section id="kontakt" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative rounded-3xl overflow-hidden p-12 sm:p-16 text-center"
          style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(20,20,20,0.9) 50%, rgba(201,168,76,0.08) 100%)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "#C9A84C" }}>
                {c.badge[lang]}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              {c.heading1[lang]}<br /><span className="text-gold-gradient">{c.heading2[lang]}</span>
            </h2>
            <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "#8A8A8A" }}>
              {c.sub[lang]}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="mailto:info@topprofitdesign.cz"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", color: "#080808", fontFamily: "var(--font-syne), sans-serif", boxShadow: "0 0 50px rgba(201,168,76,0.4)" }}>
                {c.btn[lang]}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <a href="tel:+420773266548" className="flex items-center gap-2 text-sm transition-colors hover:text-[#C9A84C]" style={{ color: "#555" }}>
                <Phone size={14} />+420 773 266 548
              </a>
              <div className="hidden sm:block w-px h-4" style={{ background: "rgba(255,255,255,0.06)" }} />
              <a href="mailto:info@topprofitdesign.cz" className="flex items-center gap-2 text-sm transition-colors hover:text-[#C9A84C]" style={{ color: "#555" }}>
                <Mail size={14} />info@topprofitdesign.cz
              </a>
              <div className="hidden sm:block w-px h-4" style={{ background: "rgba(255,255,255,0.06)" }} />
              <span className="text-sm" style={{ color: "#555" }}>{c.reply[lang]}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
