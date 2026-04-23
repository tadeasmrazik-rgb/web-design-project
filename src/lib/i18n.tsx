"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "cs" | "en";

export const translations = {
  nav: {
    links: {
      cs: ["Proč my", "Služby", "Práce", "Proces", "FAQ"],
      en: ["Why us", "Services", "Work", "Process", "FAQ"],
    },
    cta: { cs: "Začít projekt", en: "Start project" },
  },
  hero: {
    eyebrow: { cs: "Prémiový webdesign · Praha", en: "Premium web design · Prague" },
    headline1: { cs: "Weby, které", en: "Websites that" },
    headline2: { cs: "prodávají.", en: "sell." },
    headline3: { cs: "Nikoli jen vypadají.", en: "Not just look good." },
    sub: {
      cs: "Navrhujeme a stavíme digitální prezentace, které budují důvěru, generují poptávky a odlišují vaši firmu od konkurence — od prvního pixelu po konverzi.",
      en: "We design and build digital experiences that build trust, generate leads, and set your business apart from the competition — from the first pixel to conversion.",
    },
    cta1: { cs: "Chci prémiový web", en: "I want a premium site" },
    cta2: { cs: "Zobrazit práce", en: "See our work" },
    stats: {
      cs: [
        { number: "120+", label: "Projektů" },
        { number: "98%", label: "Spokojených klientů" },
        { number: "5×", label: "Průměrný ROI" },
        { number: "48h", label: "Začínáme" },
      ],
      en: [
        { number: "120+", label: "Projects" },
        { number: "98%", label: "Happy clients" },
        { number: "5×", label: "Avg. ROI" },
        { number: "48h", label: "Kickoff" },
      ],
    },
    badge1: { cs: "✦ Hotovo za 14 dní", en: "✦ Done in 14 days" },
    badge2: { cs: "📈 +340% konverzí u klientů", en: "📈 +340% conversions for clients" },
    browserUrl: { cs: "topprofitdesign.cz", en: "topprofitdesign.cz" },
    browserCta: { cs: "Kontaktujte nás", en: "Contact us" },
  },
  whyus: {
    eyebrow: { cs: "Proč my", en: "Why us" },
    heading1: { cs: "Profesionalita není", en: "Professionalism isn't" },
    heading2: { cs: " buzzword.", en: " a buzzword." },
    heading3: { cs: "Je to náš standard.", en: "It's our standard." },
    reasons: {
      cs: [
        { title: "Design s cílem", desc: "Každý element má svůj účel. Nepracujeme na estetice pro estetiku — stavíme nástroje pro prodej a růst." },
        { title: "Rychlost nad vše", desc: "Vaše stránky se načtou za méně než 1 sekundu. Každá sekunda zpoždění stojí 7 % konverzí." },
        { title: "Transparentnost", desc: "Víte přesně, co dostanete a za kolik. Žádné skryté poplatky, žádné překvapení — jen výsledky." },
        { title: "Dodáváme včas", desc: "Průměrná doba dodání 14 dní. 96 % projektů dokončeno v termínu. Vaše deadline je pro nás zákon." },
      ],
      en: [
        { title: "Design with purpose", desc: "Every element has a reason. We don't design for aesthetics alone — we build tools for sales and growth." },
        { title: "Speed above all", desc: "Your pages load in under 1 second. Every second of delay costs 7% of conversions." },
        { title: "Full transparency", desc: "You know exactly what you get and for how much. No hidden fees, no surprises — just results." },
        { title: "On-time delivery", desc: "Average delivery time: 14 days. 96% of projects completed on schedule. Your deadline is our law." },
      ],
    },
    stripTitle: { cs: "Nezávazná konzultace zdarma", en: "Free no-obligation consultation" },
    stripDesc: { cs: "30 minut s naším specialistou. Bez závazků, bez prodejního tlaku.", en: "30 minutes with our specialist. No commitment, no sales pressure." },
    stripCta: { cs: "Rezervovat čas →", en: "Book a slot →" },
  },
  services: {
    eyebrow: { cs: "Služby", en: "Services" },
    heading1: { cs: "Co pro vás", en: "What we'll" },
    heading2: { cs: "vytvoříme", en: "build for you" },
    sub: { cs: "Kompletní digitální řešení od strategie po spuštění — vše pod jednou střechou.", en: "Complete digital solutions from strategy to launch — all under one roof." },
    badge: { cs: "Nejoblíbenější", en: "Most popular" },
    more: { cs: "Máte specifický požadavek? Napište nám →", en: "Have a specific requirement? Write to us →" },
    items: {
      cs: [
        { title: "Tvorba webu", price: "od 25 000 Kč", desc: "Firemní web na míru, který buduje autoritu a generuje poptávky. Moderní technologie, rychlé načítání, mobilní optimalizace.", tags: ["Next.js", "WordPress", "Figma"] },
        { title: "Redesign webu", price: "od 18 000 Kč", desc: "Zastaralý web? Provedeme kompletní vizuální i technický redesign a vrátíme vašemu webu konkurenceschopnost.", tags: ["Audit", "UX", "Conversion"], featured: true },
        { title: "E-shop", price: "od 35 000 Kč", desc: "Online obchod optimalizovaný pro maximální prodeje. Rychlý checkout, mobilní platby, integrace s dopravci.", tags: ["WooCommerce", "Shopify", "Custom"] },
        { title: "SEO základy", price: "od 8 000 Kč", desc: "Technické SEO, on-page optimalizace a struktura obsahu, která umístí váš web na první stránce Google.", tags: ["On-page", "Technické", "Rychlost"] },
        { title: "Branding", price: "od 12 000 Kč", desc: "Logo, vizuální identita a brand manuál. Zbudujeme značku, která se nezapomíná a buduje důvěru.", tags: ["Logo", "Identita", "Manuál"] },
        { title: "Správa & údržba", price: "od 2 500 Kč/měs", desc: "Pravidelné aktualizace, bezpečnost, zálohy a technická podpora. Vy podnikejte — web necháme na nás.", tags: ["Hosting", "Zálohy", "Podpora"] },
      ],
      en: [
        { title: "Website creation", price: "from €1,000", desc: "Custom business website that builds authority and generates leads. Modern tech, fast loading, mobile optimized.", tags: ["Next.js", "WordPress", "Figma"] },
        { title: "Website redesign", price: "from €720", desc: "Outdated site? We'll do a complete visual and technical redesign and restore your site's competitiveness.", tags: ["Audit", "UX", "Conversion"], featured: true },
        { title: "E-commerce", price: "from €1,400", desc: "Online store optimized for maximum sales. Fast checkout, mobile payments, shipping integrations.", tags: ["WooCommerce", "Shopify", "Custom"] },
        { title: "SEO basics", price: "from €320", desc: "Technical SEO, on-page optimization and content structure to rank your site on the first page of Google.", tags: ["On-page", "Technical", "Speed"] },
        { title: "Branding", price: "from €480", desc: "Logo, visual identity and brand manual. We'll build a brand that's unforgettable and builds trust.", tags: ["Logo", "Identity", "Manual"] },
        { title: "Maintenance", price: "from €100/mo", desc: "Regular updates, security, backups and technical support. You run your business — we handle the web.", tags: ["Hosting", "Backups", "Support"] },
      ],
    },
  },
  portfolio: {
    eyebrow: { cs: "Výsledky", en: "Results" },
    heading1: { cs: "Práce, za kterou se", en: "Work we're" },
    heading2: { cs: "nestydíme", en: "proud of" },
    all: { cs: "Zobrazit všechny projekty →", en: "See all projects →" },
    projects: {
      cs: [
        { number: "01", category: "E-shop · Móda", title: "Luxe Boutique", result: "+280 % tržeb za 3 měsíce", desc: "Kompletní redesign e-shopu s módou. Nový checkout snížil abandonaci košíku o 42 %.", color: "#C9A84C", bg: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.03) 100%)" },
        { number: "02", category: "Firemní web · Stavba", title: "ProBuild s.r.o.", result: "+180 % poptávek za 60 dní", desc: "Nový web s jasnou strukturou, videoreferencemi a kalkulačkou pro okamžité zapojení návštěvníků.", color: "#A8C9C9", bg: "linear-gradient(135deg, rgba(168,201,201,0.12) 0%, rgba(168,201,201,0.02) 100%)" },
        { number: "03", category: "Landing page · SaaS", title: "DataFlow App", result: "Konverzní poměr 8,4 %", desc: "Landing page pro B2B SaaS produkt. Jasný hodnotový příběh a sociální důkaz zdvojnásobily registrace.", color: "#C9A8C9", bg: "linear-gradient(135deg, rgba(201,168,201,0.12) 0%, rgba(201,168,201,0.02) 100%)" },
      ],
      en: [
        { number: "01", category: "E-commerce · Fashion", title: "Luxe Boutique", result: "+280% revenue in 3 months", desc: "Full redesign of a fashion e-shop. New checkout reduced cart abandonment by 42%.", color: "#C9A84C", bg: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.03) 100%)" },
        { number: "02", category: "Business site · Construction", title: "ProBuild Ltd.", result: "+180% leads in 60 days", desc: "New site with clear structure, video testimonials and a quote calculator for instant visitor engagement.", color: "#A8C9C9", bg: "linear-gradient(135deg, rgba(168,201,201,0.12) 0%, rgba(168,201,201,0.02) 100%)" },
        { number: "03", category: "Landing page · SaaS", title: "DataFlow App", result: "8.4% conversion rate", desc: "Landing page for a B2B SaaS product. Clear value story and social proof doubled sign-ups.", color: "#C9A8C9", bg: "linear-gradient(135deg, rgba(201,168,201,0.12) 0%, rgba(201,168,201,0.02) 100%)" },
      ],
    },
  },
  process: {
    eyebrow: { cs: "Jak pracujeme", en: "How we work" },
    heading1: { cs: "Web za ", en: "Website in " },
    heading2: { cs: "14 dní.", en: "14 days." },
    heading3: { cs: "Seriózně.", en: "Seriously." },
    cta: { cs: "Začít svůj projekt →", en: "Start your project →" },
    steps: {
      cs: [
        { num: "1", title: "Konzultace", time: "Den 1", desc: "Bezplatný 30minutový hovor. Zjistíme vaše cíle, cílovou skupinu a co od webu očekáváte." },
        { num: "2", title: "Návrh a design", time: "Dny 2–5", desc: "Připravíme vizuální návrh v Figma. Revidujeme, dokud nebudete 100% spokojeni." },
        { num: "3", title: "Vývoj", time: "Dny 6–12", desc: "Stavíme web na moderních technologiích. Průběžně sdílíme pokrok na soukromém odkazu." },
        { num: "4", title: "Testování", time: "Den 13", desc: "Testujeme na všech zařízeních a prohlížečích. Rychlost, SEO, funkčnost — vše zkontrolováno." },
        { num: "5", title: "Spuštění", time: "Den 14", desc: "Váš nový web jde online. Předáme přístupy, proškolíme vás a jsme k dispozici 30 dní zdarma." },
      ],
      en: [
        { num: "1", title: "Consultation", time: "Day 1", desc: "Free 30-minute call. We learn your goals, target audience, and what you need from your website." },
        { num: "2", title: "Design", time: "Days 2–5", desc: "We prepare a visual mockup in Figma. We revise until you're 100% satisfied." },
        { num: "3", title: "Development", time: "Days 6–12", desc: "We build on modern technology. We share progress via a private preview link throughout." },
        { num: "4", title: "Testing", time: "Day 13", desc: "We test on all devices and browsers. Speed, SEO, functionality — everything checked." },
        { num: "5", title: "Launch", time: "Day 14", desc: "Your new site goes live. We hand over credentials, walk you through it, and stay available 30 days free." },
      ],
    },
  },
  testimonials: {
    eyebrow: { cs: "Reference", en: "Testimonials" },
    heading1: { cs: "Co říkají", en: "What our" },
    heading2: { cs: "naši klienti", en: "clients say" },
    badges: {
      cs: [
        { icon: "⭐", label: "4.9/5 průměrné hodnocení" },
        { icon: "🏆", label: "120+ dokončených projektů" },
        { icon: "🔒", label: "100% NDA ochrana" },
      ],
      en: [
        { icon: "⭐", label: "4.9/5 average rating" },
        { icon: "🏆", label: "120+ completed projects" },
        { icon: "🔒", label: "100% NDA protection" },
      ],
    },
    items: {
      cs: [
        { name: "Tomáš Novák", role: "Majitel, Novák Strojírenství", text: "Za 3 měsíce od spuštění nového webu se nám ztrojnásobil počet poptávek. Práce Top Profit Design předčila naše očekávání ve všem — design, rychlost, komunikace.", stars: 5, initials: "TN" },
        { name: "Markéta Horáčková", role: "CEO, Fashion House", text: "Přišli jsme s rozpadajícím se e-shopem a odešli se strojem na peníze. Nový checkout snížil opuštění košíku o 40 % a tržby jsou rekordní. Absolutně doporučuji.", stars: 5, initials: "MH" },
        { name: "Jiří Svoboda", role: "Ředitel, DataSync s.r.o.", text: "Očekával jsem, že to bude trvat měsíce. Web byl hotov za 12 dní. Kvalita zpracování je na světové úrovni — klienti se ptají, kdo to pro nás dělal.", stars: 5, initials: "JS" },
      ],
      en: [
        { name: "Tomáš Novák", role: "Owner, Novák Engineering", text: "Three months after launching our new website, leads tripled. Top Profit Design exceeded our expectations in every way — design, speed, communication.", stars: 5, initials: "TN" },
        { name: "Markéta Horáčková", role: "CEO, Fashion House", text: "We came with a crumbling e-shop and left with a money machine. The new checkout reduced cart abandonment by 40% and revenue is at an all-time high.", stars: 5, initials: "MH" },
        { name: "Jiří Svoboda", role: "Director, DataSync Ltd.", text: "I expected it to take months. The site was ready in 12 days. The quality is world-class — clients keep asking who built it for us.", stars: 5, initials: "JS" },
      ],
    },
  },
  faq: {
    eyebrow: { cs: "FAQ", en: "FAQ" },
    heading1: { cs: "Časté", en: "Common" },
    heading2: { cs: "otázky", en: "questions" },
    sub: { cs: "Nenašli jste odpověď? Napište nám — odpovíme do 2 hodin.", en: "Didn't find an answer? Write to us — we respond within 2 hours." },
    cta: { cs: "Napsat dotaz →", en: "Send a question →" },
    items: {
      cs: [
        { q: "Jak rychle web dodáte?", a: "Standardní projekt dodáváme za 14 pracovních dní od schválení návrhu. U větších projektů nebo e-shopů je lhůta 3–4 týdny. Pokud potřebujete rush dodání, kontaktujte nás — u většiny projektů to zvládneme." },
        { q: "Kolik stojí tvorba webu?", a: "Ceny začínají od 25 000 Kč za firemní web. Konečná cena závisí na rozsahu projektu, počtu podstránek a funkcionalitách. Vždy dostanete pevnou cenu před zahájením práce — bez překvapení." },
        { q: "Budu moci web sám upravovat?", a: "Ano. Každý web předáváme s kompletním administračním rozhraním, ve kterém si sami upravíte texty, obrázky a obsah. Součástí je 30minutové proškolení zdarma." },
        { q: "Pracujete s klienty z celé ČR?", a: "Ano, pracujeme s klienty z celé České republiky. Veškerá komunikace probíhá online — přes video hovory, sdílená Figma, e-mail. Fyzické schůzky nejsou nutné." },
        { q: "Co když budu chtít po spuštění změny?", a: "Prvních 30 dní po spuštění jsou drobné úpravy zdarma. Poté nabízíme balíčky správy a údržby nebo hodinovou sazbu za jednorázové změny." },
        { q: "Pomůžete nám i s texty a fotografiemi?", a: "Rádi pomůžeme s copywritingem, strukturou obsahu i výběrem stock fotografií. Kompletní textový obsah připravíme za příplatek. Nebo použijeme vaše materiály." },
      ],
      en: [
        { q: "How fast do you deliver?", a: "Standard projects are delivered within 14 working days from design approval. Larger projects or e-commerce stores take 3–4 weeks. Need a rush? Contact us — most projects can be fast-tracked." },
        { q: "How much does a website cost?", a: "Prices start from €1,000 for a business website. The final price depends on scope, number of pages, and features. You always get a fixed price before work begins — no surprises." },
        { q: "Can I edit the website myself?", a: "Yes. Every website is delivered with a full admin interface where you can update texts, images, and content yourself. A free 30-minute walkthrough is included." },
        { q: "Do you work with clients outside the Czech Republic?", a: "Yes, we work with clients across Europe. All communication happens online — video calls, shared Figma, email. No in-person meetings needed." },
        { q: "What if I want changes after launch?", a: "Minor tweaks are free for the first 30 days after launch. After that, we offer maintenance packages or an hourly rate for one-off changes." },
        { q: "Can you help with copy and photos?", a: "We're happy to help with copywriting, content structure, and stock photo selection. Full written content is available for an additional fee, or we can use your materials." },
      ],
    },
  },
  cta: {
    badge: { cs: "Volná místa: 3 z 5", en: "Available slots: 3 of 5" },
    heading1: { cs: "Váš web může být", en: "Your website can be" },
    heading2: { cs: "hotov za 14 dní.", en: "ready in 14 days." },
    sub: { cs: "Přestante ztrácet zákazníky na zastaralém webu. Domluvme bezplatnou konzultaci a zjistěte, co je pro vás možné.", en: "Stop losing customers to an outdated website. Let's arrange a free consultation and find out what's possible for you." },
    btn: { cs: "Chci konzultaci zdarma", en: "I want a free consultation" },
    reply: { cs: "Odpovídáme do 2 hodin", en: "We respond within 2 hours" },
  },
  footer: {
    tagline: { cs: "Prémiový webdesign pro české firmy, které chtějí vynikat a vydělávat online.", en: "Premium web design for ambitious businesses that want to stand out and earn online." },
    available: { cs: "Přijímáme nové projekty", en: "Accepting new projects" },
    services: { cs: "Služby", en: "Services" },
    company: { cs: "Společnost", en: "Company" },
    contact: { cs: "Kontakt", en: "Contact" },
    serviceLinks: {
      cs: ["Tvorba webu", "Redesign webu", "E-shop", "SEO", "Branding"],
      en: ["Website creation", "Website redesign", "E-commerce", "SEO", "Branding"],
    },
    companyLinks: {
      cs: ["O nás", "Práce", "Proces", "Reference", "FAQ"],
      en: ["About us", "Work", "Process", "Testimonials", "FAQ"],
    },
    privacy: { cs: "Ochrana osobních údajů", en: "Privacy policy" },
    terms: { cs: "Obchodní podmínky", en: "Terms of service" },
    copyright: { cs: "Všechna práva vyhrazena.", en: "All rights reserved." },
  },
};

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations;
}

const LangContext = createContext<LangContextType>({
  lang: "cs",
  setLang: () => {},
  t: translations,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("cs");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
