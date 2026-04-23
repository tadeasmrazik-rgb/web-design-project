"use client";

import { useRef, useEffect } from "react";
import { Target, Zap, Shield, Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";

const ICONS = [Target, Zap, Shield, Clock];

/*
  ScreenContent renders at 300% and is scaled down 0.333×.
  At the final 3× zoom the content hits native resolution → sharp, no blur.
*/
function ScreenContent({ lang, t }: { lang: "cs" | "en"; t: any }) {
  const w = t.whyus;
  return (
    <div style={{
      width: "300%", height: "300%",
      transform: "scale(0.333)", transformOrigin: "top left",
      background: "#080808", padding: "48px 44px", overflow: "hidden",
    }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 28, height: 1, background: "#C9A84C" }} />
          <span style={{ color: "#C9A84C", fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "var(--font-syne), sans-serif" }}>
            {w.eyebrow[lang]}
          </span>
          <div style={{ width: 28, height: 1, background: "#C9A84C" }} />
        </div>
        <h2 style={{ margin: 0, color: "#fff", fontSize: 44, fontWeight: 700, lineHeight: 1.15, fontFamily: "var(--font-syne), sans-serif" }}>
          {w.heading1[lang]}
          <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {w.heading2[lang]}
          </span>
          <br />
          <span style={{ color: "#fff" }}>{w.heading3[lang]}</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
        {w.reasons[lang].map((r: any, i: number) => {
          const Icon = ICONS[i];
          return (
            <div key={i} style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <Icon size={20} style={{ color: "#C9A84C" }} />
              </div>
              <h3 style={{ margin: "0 0 8px", color: "#fff", fontSize: 18, fontWeight: 700, fontFamily: "var(--font-syne), sans-serif" }}>{r.title}</h3>
              <p style={{ margin: 0, color: "#555", fontSize: 15, lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          );
        })}
      </div>

      <div style={{ padding: "22px 26px", borderRadius: 16, background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.14)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        <div>
          <p style={{ margin: "0 0 4px", color: "#fff", fontSize: 17, fontWeight: 600, fontFamily: "var(--font-syne), sans-serif" }}>{w.stripTitle[lang]}</p>
          <p style={{ margin: 0, color: "#555", fontSize: 14 }}>{w.stripDesc[lang]}</p>
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, padding: "10px 22px", borderRadius: 24, whiteSpace: "nowrap", background: "linear-gradient(135deg, #C9A84C, #E8C97E)", color: "#080808", fontFamily: "var(--font-syne), sans-serif" }}>
          {w.stripCta[lang]}
        </div>
      </div>
    </div>
  );
}

export default function MacBookReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);
  const macWrapRef = useRef<HTMLDivElement>(null);
  const deviceRef  = useRef<HTMLDivElement>(null);
  const lidRef     = useRef<HTMLDivElement>(null);
  const screenRef  = useRef<HTMLDivElement>(null);
  const labelRef   = useRef<HTMLDivElement>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    let ctx: any = null;
    let mounted = true;

    (async () => {
      const { gsap }          = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;
      if (!sectionRef.current || !stickyRef.current || !macWrapRef.current || !deviceRef.current || !lidRef.current || !screenRef.current || !labelRef.current) return;

      ctx = gsap.context(() => {
        /* ─── Same cinematic sequence on all screen sizes ─── */
        /* deviceRef owns rotateX (tilt) + rotateY (initial angle) — no static transform needed */
        /* deviceRef: clean overhead tilt only, no rotateY */
        gsap.set(deviceRef.current,  { rotateX: 6, transformOrigin: "50% 50%" });
        gsap.set(lidRef.current,     { transformOrigin: "50% 100%", rotateX: -78 });
        gsap.set(macWrapRef.current, { transformOrigin: "50% 44%", opacity: 0, y: -50 });
        gsap.set(screenRef.current,  { opacity: 0 });
        gsap.set(labelRef.current,   { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end:   "bottom bottom",
            scrub: 2,
          },
        });

        /* Phase 1 (0 → 0.12) — MacBook drops in, closed */
        tl.to(macWrapRef.current, { y: 0, opacity: 1, ease: "power2.out", duration: 0.12 }, 0);

        /* Phase 2 (0.12 → 0.56) — lid opens */
        tl.to(lidRef.current, { rotateX: -20, ease: "power1.inOut", duration: 0.44 }, 0.12);

        /* Screen content fades in while opening (0.28 → 0.52) */
        tl.to(screenRef.current, { opacity: 1, ease: "power2.in", duration: 0.24 }, 0.28);

        /* Phase 3 (0.56 → 0.86) — Zoom into screen */
        tl.to(macWrapRef.current, { scale: 3, ease: "power2.in", duration: 0.30 }, 0.56);

        /* Phase 4a (0.62 → 0.84) — MacBook wrap + label fade together */
        tl.to(macWrapRef.current, { opacity: 0, ease: "power1.in", duration: 0.22 }, 0.62);
        tl.to(labelRef.current,   { opacity: 0, ease: "power1.in", duration: 0.22 }, 0.62);

        /* Phase 4b (0.76 → 1.0) — Sticky container fades, WhyUs reveals */
        tl.to(stickyRef.current, { opacity: 0, ease: "power1.in", duration: 0.24 }, 0.76);
      }, sectionRef);
    })();

    return () => { mounted = false; ctx?.revert(); };
  }, []);

  return (
    /*
      380vh total → 280vh of scroll drives the animation.
      page.tsx wraps WhyUs in margin-top: -100vh so that at progress=1.0
      (scroll = MacBook section end - viewport height) WhyUs is at viewport top.
    */
    <div
      ref={sectionRef}
      className="macbook-section"
      style={{ height: "380vh", background: "#080808" }}
    >
      {/* ── Sticky layer — covers WhyUs beneath until portal completes ── */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky", top: 0, height: "100vh",
          overflow: "hidden", background: "#080808",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 5, pointerEvents: "none",
        }}
      >
        {/* Ambient glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 65% 50% at 50% 60%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }} />

        {/* Section label */}
        <div ref={labelRef} style={{
          position: "absolute",
          top: "clamp(72px, 9vh, 112px)",
          left: "50%", transform: "translateX(-50%)",
          textAlign: "center", zIndex: 10, pointerEvents: "none", whiteSpace: "nowrap",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 14 }}>
            <div style={{ width: 28, height: 1, background: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "var(--font-syne), sans-serif", fontWeight: 500 }}>
              {t.whyus.eyebrow[lang]}
            </span>
            <div style={{ width: 28, height: 1, background: "#C9A84C" }} />
          </div>
          <h2 style={{ margin: 0, color: "#fff", fontSize: "clamp(20px, 2.6vw, 40px)", fontWeight: 700, lineHeight: 1.15, fontFamily: "var(--font-syne), sans-serif" }}>
            {t.whyus.heading1[lang]}
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t.whyus.heading2[lang]}
            </span>
          </h2>
        </div>

        {/* ── MacBook Air M2 3D scene ── */}
        <div style={{ perspective: "1600px", perspectiveOrigin: "50% 46%" }}>
          <div ref={macWrapRef} style={{ opacity: 0, willChange: "transform, opacity", transformOrigin: "50% 46%" }}>

            {/* Device: GSAP controls rotateX + rotateY via deviceRef */}
            <div ref={deviceRef} style={{ transformStyle: "preserve-3d", display: "flex", flexDirection: "column", alignItems: "center" }}>

              {/* LID — MacBook Air M2: thin bezels, notch, Space Grey */}
              <div ref={lidRef} style={{
                width: "clamp(300px, 50vw, 600px)",
                height: "clamp(192px, 32vw, 382px)",
                background: "linear-gradient(168deg, #3d3d3f 0%, #2e2e30 45%, #1e1e20 100%)",
                borderRadius: "clamp(10px, 1.4vw, 16px) clamp(10px, 1.4vw, 16px) 0 0",
                padding: "clamp(4px, 0.55vw, 7px) clamp(4px, 0.55vw, 7px) clamp(7px, 0.9vw, 11px)",
                position: "relative",
                boxShadow: "0 -1px 0 rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.06), 0 -10px 40px rgba(0,0,0,0.5)",
                transformStyle: "preserve-3d",
              }}>
                {/* Notch (MacBook Pro / Air M2 style) */}
                <div style={{
                  position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                  width: "clamp(52px, 8.5vw, 100px)", height: "clamp(5px, 0.75vw, 9px)",
                  background: "linear-gradient(168deg, #3d3d3f 0%, #2e2e30 100%)",
                  borderRadius: "0 0 clamp(4px, 0.6vw, 7px) clamp(4px, 0.6vw, 7px)",
                  zIndex: 3,
                }} />
                {/* Camera in notch */}
                <div style={{
                  position: "absolute", top: "clamp(1px, 0.2vw, 2px)", left: "50%", transform: "translateX(-50%)",
                  width: "clamp(4px, 0.5vw, 6px)", height: "clamp(4px, 0.5vw, 6px)",
                  borderRadius: "50%", background: "#1a1a1c",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06)", zIndex: 4,
                }} />

                {/* Screen — ultra-thin bezel */}
                <div style={{
                  height: "100%", background: "#010103",
                  borderRadius: "clamp(4px, 0.6vw, 7px)",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.025)",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.95)",
                  position: "relative",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(255,255,255,0.018) 0%, transparent 40%)", pointerEvents: "none", zIndex: 2 }} />
                  <div ref={screenRef} style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                    <ScreenContent lang={lang} t={t} />
                  </div>
                </div>
              </div>

              {/* HINGE — razor-thin, M2 Air style */}
              <div style={{
                width: "clamp(284px, 47.5vw, 570px)", height: 2,
                background: "linear-gradient(180deg, #484848 0%, #323234 100%)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.8)",
              }} />

              {/* BASE */}
              <div style={{
                width: "clamp(312px, 52vw, 624px)",
                height: "clamp(10px, 1.5vw, 20px)",
                background: "linear-gradient(180deg, #333335 0%, #28282a 40%, #1a1a1c 100%)",
                borderRadius: "0 0 clamp(6px, 0.9vw, 10px) clamp(6px, 0.9vw, 10px)",
                position: "relative",
                boxShadow: "0 10px 50px rgba(0,0,0,0.9), 0 2px 0 rgba(255,255,255,0.03)",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", bottom: "clamp(2px, 0.3vw, 4px)", left: "50%", transform: "translateX(-50%)",
                  width: "22%", height: "45%",
                  background: "rgba(255,255,255,0.018)", border: "1px solid rgba(255,255,255,0.035)",
                  borderRadius: 2,
                }} />
              </div>

              {/* Ground glow */}
              <div style={{
                marginTop: 8,
                width: "clamp(220px, 37vw, 450px)", height: 16,
                background: "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
                borderRadius: "50%", filter: "blur(10px)",
              }} />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.3, pointerEvents: "none" }}>
          <span style={{ fontSize: 9, letterSpacing: "0.22em", color: "#555", textTransform: "uppercase", fontFamily: "var(--font-syne), sans-serif" }}>Scroll</span>
          <div style={{ width: 1, height: 26, background: "linear-gradient(180deg, #555, transparent)" }} />
        </div>
      </div>
    </div>
  );
}
