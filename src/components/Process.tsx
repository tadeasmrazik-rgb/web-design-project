"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Process() {
  const { lang, t } = useLang();
  const p = t.process;
  const steps = p.steps[lang];

  return (
    <section id="proces" className="py-28 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }} className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
            <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "#C9A84C" }}>{p.eyebrow[lang]}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            {p.heading1[lang]}<span className="text-gold-gradient">{p.heading2[lang]}</span>
            <br /><span style={{ color: "#444" }}>{p.heading3[lang]}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), rgba(201,168,76,0.4), rgba(201,168,76,0.2), transparent)" }} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }} className="relative">
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-5 top-16 bottom-0 w-px" style={{ background: "rgba(201,168,76,0.15)" }} />
                )}
                <div className="flex lg:flex-col items-start gap-4 lg:gap-0">
                  <div className="relative z-10 shrink-0 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center lg:mb-6"
                    style={{ background: "linear-gradient(135deg, #C9A84C22, #C9A84C11)", border: "1px solid rgba(201,168,76,0.4)" }}>
                    <span className="text-sm lg:text-base font-bold" style={{ color: "#C9A84C", fontFamily: "var(--font-syne), sans-serif" }}>{step.num}</span>
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <span className="text-xs font-medium mb-1 block" style={{ color: "#C9A84C", opacity: 0.7 }}>{step.time}</span>
                    <h3 className="text-base font-bold mb-2 text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>{step.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#555" }}>{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }} className="mt-16 text-center">
          <a href="#kontakt" className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", color: "#080808", fontFamily: "var(--font-syne), sans-serif", boxShadow: "0 0 30px rgba(201,168,76,0.2)" }}>
            {p.cta[lang]}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
