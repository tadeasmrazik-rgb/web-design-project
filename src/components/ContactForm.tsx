"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const T = {
  badge: { cs: "Nezávazná poptávka", en: "No-obligation inquiry" },
  heading1: { cs: "Pojďme", en: "Let's" },
  heading2: { cs: "spolupracovat", en: "work together" },
  service: { cs: "Co potřebujete?", en: "What do you need?" },
  servicePlaceholder: { cs: "— Vyberte službu —", en: "— Select a service —" },
  name: { cs: "Jméno", en: "Name" },
  email: { cs: "E-mail", en: "Email" },
  message: { cs: "Zpráva (nepovinné)", en: "Message (optional)" },
  messagePlaceholder: { cs: "Stručně popište váš projekt...", en: "Briefly describe your project..." },
  submit: { cs: "Odeslat poptávku", en: "Send inquiry" },
  reply: { cs: "Odpovídáme do 2 hodin", en: "We respond within 2 hours" },
  success: { cs: "Ozveme se vám do 2 hodin!", en: "We'll get back to you within 2 hours!" },
  direct: { cs: "Nebo nás kontaktujte přímo", en: "Or reach us directly" },
};

export default function ContactForm() {
  const { lang, t } = useLang();
  const services = t.services.items[lang];

  const [selected, setSelected] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setDone(true);
  }

  const valid = name.trim() !== "" && email.includes("@");

  return (
    <section id="kontakt" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "#C9A84C" }}>
              {T.badge[lang]}
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-syne), sans-serif" }}
          >
            {T.heading1[lang]} <span className="text-gold-gradient">{T.heading2[lang]}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="rounded-3xl p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {done ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <Check size={26} style={{ color: "#C9A84C" }} />
                </div>
                <p className="text-xl font-bold" style={{ fontFamily: "var(--font-syne), sans-serif" }}>
                  {T.success[lang]}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Service dropdown */}
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "#888" }}>
                    {T.service[lang]}
                  </label>
                  <select
                    value={selected ?? ""}
                    onChange={(e) => setSelected(e.target.value === "" ? null : Number(e.target.value))}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: selected !== null ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      color: selected !== null ? "#E8C97E" : "#666",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = selected !== null ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.08)")}
                  >
                    <option value="" style={{ background: "#111", color: "#666" }}>{T.servicePlaceholder[lang]}</option>
                    {services.map((svc, i) => (
                      <option key={i} value={i} style={{ background: "#111", color: "#ddd" }}>{svc.title}</option>
                    ))}
                  </select>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: T.name[lang], value: name, set: setName, type: "text" },
                    { label: T.email[lang], value: email, set: setEmail, type: "email" },
                  ].map(({ label, value, set, type }) => (
                    <div key={label}>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888" }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        value={value}
                        onChange={(e) => set(e.target.value)}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#ddd" }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.4)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "#888" }}>
                    {T.message[lang]}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={T.messagePlaceholder[lang]}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#ddd" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!valid || loading}
                  className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 disabled:opacity-40"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                    color: "#080808",
                    fontFamily: "var(--font-syne), sans-serif",
                    boxShadow: valid ? "0 0 40px rgba(201,168,76,0.3)" : "none",
                  }}
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-[#080808]/40 border-t-[#080808] rounded-full animate-spin" />
                  ) : (
                    <>
                      {T.submit[lang]}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="space-y-4"
          >
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "#555" }}>
                {T.direct[lang]}
              </p>
              <a
                href="tel:+420773266548"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[#C9A84C]"
                style={{ color: "#888" }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(201,168,76,0.08)" }}>
                  <Phone size={14} style={{ color: "#C9A84C" }} />
                </div>
                +420 773 266 548
              </a>
              <a
                href="mailto:info@topprofitdesign.cz"
                className="flex items-center gap-3 text-sm transition-colors hover:text-[#C9A84C]"
                style={{ color: "#888" }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(201,168,76,0.08)" }}>
                  <Mail size={14} style={{ color: "#C9A84C" }} />
                </div>
                info@topprofitdesign.cz
              </a>
              <p className="text-xs pt-2" style={{ color: "#444", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                {T.reply[lang]}
              </p>
            </div>

            <div
              className="rounded-2xl p-5 space-y-2.5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { cs: "Bezplatná konzultace", en: "Free consultation" },
                { cs: "Pevná cena bez překvapení", en: "Fixed price, no surprises" },
                { cs: "Web za 14 dní", en: "Website in 14 days" },
                { cs: "30 dní podpora zdarma", en: "30 days free support" },
              ].map((item) => (
                <div key={item.cs} className="flex items-center gap-2.5 text-sm" style={{ color: "#888" }}>
                  <span style={{ color: "#C9A84C", fontWeight: 700 }}>✓</span>
                  {item[lang]}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
