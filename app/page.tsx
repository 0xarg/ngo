import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import ImpactSection from "@/components/home/ImpactSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import StoriesSection from "@/components/home/StoriesSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ImpactSection />
      <HowWeWorkSection />
      {/* <StoriesSection /> */}
      <Footer />
    </main>
  );
};

export default Index;
