import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import UmowaAdrSection from "@/components/sections/UmowaAdrSection";
import DoradcaDgsaSection from "@/components/sections/DoradcaDgsaSection";
import OfertaSection from "@/components/sections/OfertaSection";
import OMnieSection from "@/components/sections/OMnieSection";
import KontaktSection from "@/components/sections/KontaktSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <UmowaAdrSection />
        <DoradcaDgsaSection />
        <OfertaSection />
        <OMnieSection />
        <KontaktSection />
      </main>
      <Footer />
    </>
  );
}
