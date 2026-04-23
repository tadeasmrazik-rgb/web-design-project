"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Hero() {
  const { lang, t } = useLang();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="orb absolute"
          style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)", top: "-10%", right: "-5%" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="orb absolute"
          style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)", bottom: "10%", left: "-5%" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#C9A84C" }} />
          <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "#8A8A8A" }}>
            {h.eyebrow[lang]}
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}>
          {h.headline1[lang]}{" "}
          <span className="text-gold-gradient">{h.headline2[lang]}</span>
          <br />
          <span style={{ color: "#333" }}>{h.headline3[lang]}</span>
        </motion.h1>

        <motion.p {...fadeUp(0.35)}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: "#8A8A8A" }}>
          {h.sub[lang]}
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#kontakt"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", color: "#080808", fontFamily: "var(--font-syne), sans-serif", boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}>
            {h.cta1[lang]}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:border-[rgba(201,168,76,0.4)]"
            style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#FFFFFF" }}>
            <Play size={14} fill="currentColor" />
            {h.cta2[lang]}
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.6)} className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {h.stats[lang].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-gradient" style={{ fontFamily: "var(--font-syne), sans-serif" }}>{stat.number}</div>
              <div className="text-xs mt-0.5" style={{ color: "#555" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          className="mt-20 relative mx-auto max-w-4xl">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(20,20,20,0.8)", backdropFilter: "blur(20px)", boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(12,12,12,0.9)" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <div className="flex-1 mx-4">
                <div className="mx-auto max-w-xs h-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.04)", color: "#444", fontSize: "10px" }}>
                  {h.browserUrl[lang]}
                </div>
              </div>
            </div>
            <div className="p-8 min-h-[260px] relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 60%)" }} />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg" style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)" }} />
                  <div className="h-2 rounded-full w-32" style={{ background: "rgba(255,255,255,0.12)" }} />
                </div>
                <div className="h-8 rounded-lg w-3/4" style={{ background: "rgba(255,255,255,0.08)" }} />
                <div className="h-5 rounded-lg w-2/3" style={{ background: "rgba(255,255,255,0.05)" }} />
                <div className="h-4 rounded-lg w-1/2" style={{ background: "rgba(255,255,255,0.04)" }} />
                <div className="flex gap-3 mt-6">
                  <div className="h-9 rounded-full px-5 flex items-center text-xs font-bold"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", color: "#080808", minWidth: 120 }}>
                    {h.browserCta[lang]}
                  </div>
                  <div className="h-9 rounded-full w-24" style={{ border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -top-4 -right-4 sm:right-8 px-4 py-2 rounded-xl text-xs font-semibold"
            style={{ background: "rgba(14,14,14,0.9)", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(10px)", color: "#C9A84C", fontFamily: "var(--font-syne), sans-serif" }}
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            {h.badge1[lang]}
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -left-4 sm:left-8 px-4 py-2 rounded-xl text-xs font-semibold"
            style={{ background: "rgba(14,14,14,0.9)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", color: "#8A8A8A" }}
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            {h.badge2[lang]}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
