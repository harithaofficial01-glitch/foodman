import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import BannerCarousel from "@/components/BannerCarousel";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import HowItWorks from "@/components/HowItWorks";
import DownloadSection from "@/components/DownloadSection";
import CareerSection from "@/components/CareerSection";
import AboutContact from "@/components/AboutContact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <SplashScreen onComplete={() => setLoaded(true)} />}
      <div className={`min-h-screen ${!loaded ? "overflow-hidden h-screen" : ""}`}>
        <Navbar />
        {/* Home */}
        <div id="home">
          <BannerCarousel />
          <HeroSection />
        </div>
        {/* Menu */}
        <div id="menu">
          <MenuSection />
        </div>
        {/* How It Works */}
        <div id="how-it-works">
          <HowItWorks />
        </div>
        {/* Download */}
        <div id="download">
          <DownloadSection />
        </div>
        {/* Careers */}
        <div id="careers">
          <CareerSection />
        </div>
        {/* About & Contact */}
        <div id="about">
          <AboutContact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
