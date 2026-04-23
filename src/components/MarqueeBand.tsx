"use client";

const items = [
  "Webdesign", "E-shop", "Redesign", "Branding", "SEO", "Landing page",
  "UI/UX", "Konverze", "Rychlost", "Mobilní web", "Firemní web", "WordPress",
  "Webdesign", "E-shop", "Redesign", "Branding", "SEO", "Landing page",
  "UI/UX", "Konverze", "Rychlost", "Mobilní web", "Firemní web", "WordPress",
];

export default function MarqueeBand() {
  return (
    <div className="relative py-6 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.02)" }}>
      <div className="marquee-track flex gap-8 whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm font-medium" style={{ color: "#333", fontFamily: "Syne, sans-serif" }}>
            <span className="text-xs" style={{ color: "#C9A84C" }}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
