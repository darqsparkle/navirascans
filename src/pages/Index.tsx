import HeroSection from "@/components/HeroSection";
import ScanAnimation from "@/components/ScanAnimation";
import TechnologySection from "@/components/TechnologySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ScanAnimation />
      <TechnologySection />
      <FooterSection />
    </main>
  );
};

export default Index;
