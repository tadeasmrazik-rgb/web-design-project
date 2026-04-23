import { LangProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekty — Top Profit Design",
  description: "Ukázky našich webových projektů. Weby, které přinášejí výsledky.",
};

export default function ProjektyPage() {
  return (
    <LangProvider>
      <main>
        <Navbar />
        <ProjectsGrid />
        <Footer />
      </main>
    </LangProvider>
  );
}
