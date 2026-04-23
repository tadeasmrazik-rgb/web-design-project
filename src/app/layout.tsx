import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Top Profit Design — Prémiový webdesign, který prodává",
  description: "Tvoříme weby, které přinášejí výsledky. Prémiový webdesign, redesign, e-shopy a branding pro české firmy, které chtějí vynikat.",
  keywords: "webdesign, tvorba webu, redesign webu, e-shop, branding, SEO, Praha, Česká republika",
  openGraph: {
    title: "Top Profit Design — Prémiový webdesign",
    description: "Weby, které prodávají. Profesionální webdesign pro firmy s ambicemi.",
    url: "https://topprofitdesign.cz",
    siteName: "Top Profit Design",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
