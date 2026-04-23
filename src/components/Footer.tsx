"use client";

import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang, t } = useLang();
  const f = t.footer;

  const sections = [
    {
      title: f.services[lang],
      links: f.serviceLinks[lang].map((label, i) => ({
        label,
        href: ["#sluzby", "#sluzby", "#sluzby", "#sluzby", "#sluzby"][i],
      })),
    },
    {
      title: f.company[lang],
      links: f.companyLinks[lang].map((label, i) => ({
        label,
        href: ["#proc-my", "#portfolio", "#proces", "#reference", "#faq"][i],
      })),
    },
    {
      title: f.contact[lang],
      links: [
        { label: "info@topprofitdesign.cz", href: "mailto:info@topprofitdesign.cz" },
        { label: "+420 773 266 548", href: "tel:+420773266548" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
      ],
    },
  ];

  return (
    <footer className="px-6 pt-16 pb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97E)" }}>
                <span className="text-black font-bold text-sm" style={{ fontFamily: "var(--font-syne), sans-serif" }}>T</span>
              </div>
              <span className="font-bold text-white" style={{ fontFamily: "var(--font-syne), sans-serif" }}>Top Profit Design</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#444" }}>{f.tagline[lang]}</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22C55E" }} />
              <span className="text-xs" style={{ color: "#555" }}>{f.available[lang]}</span>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] mb-4 font-semibold"
                style={{ color: "#555", fontFamily: "var(--font-syne), sans-serif" }}>
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-white" style={{ color: "#444" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-xs" style={{ color: "#333" }}>
            © {new Date().getFullYear()} Top Profit Design. {f.copyright[lang]}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: "#333" }}>{f.privacy[lang]}</a>
            <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: "#333" }}>{f.terms[lang]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
