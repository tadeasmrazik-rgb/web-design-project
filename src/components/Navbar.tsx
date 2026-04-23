"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const NAV_ANCHORS = ["#proc-my", "#sluzby", "#portfolio", "#proces", "#faq"];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const prefix = pathname === "/" ? "" : "/";
  const NAV_HREFS = NAV_ANCHORS.map(a => `${prefix}${a}`);
  const ctaHref = `${prefix}#kontakt`;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabels = t.nav.links[lang];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between transition-all duration-500"
          style={{
            background: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            border: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
            borderRadius: "16px",
            padding: scrolled ? "12px 24px" : "0px 0px",
          }}
        >
          {/* Logo */}
          <a href={prefix || "/"} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)" }}>
              <span className="text-black font-bold text-sm" style={{ fontFamily: "var(--font-syne), sans-serif" }}>T</span>
            </div>
            <span className="font-bold text-white text-base tracking-tight hidden sm:block"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              Top Profit<span className="text-gold-gradient"> Design</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLabels.map((label, i) => (
              <a
                key={NAV_HREFS[i]}
                href={NAV_HREFS[i]}
                className="text-sm text-[#8A8A8A] hover:text-white transition-colors duration-200 underline-draw"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 text-xs rounded-full px-2 py-1"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {(["cs", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2 py-0.5 rounded-full transition-all duration-200 cursor-pointer"
                  style={{
                    background: lang === l ? "rgba(201,168,76,0.2)" : "transparent",
                    color: lang === l ? "#C9A84C" : "#666",
                    fontSize: "11px",
                    fontWeight: 500,
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href={ctaHref}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                color: "#080808",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 600,
              }}
            >
              {t.nav.cta[lang]}
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-1 cursor-pointer"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-24 px-6 pb-8"
            style={{ background: "rgba(8,8,8,0.98)", backdropFilter: "blur(20px)" }}
          >
            {/* Mobile lang switcher */}
            <div className="flex gap-2 mb-8">
              {(["cs", "en"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)}
                  className="px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all"
                  style={{
                    background: lang === l ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.04)",
                    border: lang === l ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(255,255,255,0.06)",
                    color: lang === l ? "#C9A84C" : "#666",
                  }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <nav className="flex flex-col gap-6">
              {navLabels.map((label, i) => (
                <motion.a
                  key={NAV_HREFS[i]}
                  href={NAV_HREFS[i]}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto">
              <a
                href={ctaHref}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-4 rounded-full text-base font-bold block"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C97E)",
                  color: "#080808",
                  fontFamily: "var(--font-syne), sans-serif",
                }}
              >
                {t.nav.cta[lang]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
