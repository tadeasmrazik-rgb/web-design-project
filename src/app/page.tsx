import { LangProvider } from "@/lib/i18n";
import EnergyAnimation from "@/components/EnergyAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import MacBookReveal from "@/components/MacBookReveal";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <main>
        <EnergyAnimation />
        <Navbar />
        <Hero />
        <MarqueeBand />
        <MacBookReveal />
        {/* margin-top: -100vh pulls WhyUs behind the sticky MacBook layer.
            At animation end (progress=1.0) WhyUs is exactly at viewport top — portal effect. */}
        <div className="whyus-wrapper">
          <WhyUs />
        </div>
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </LangProvider>
  );
}
