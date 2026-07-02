import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import BannerCarousel from "@/components/BannerCarousel";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import HowItWorks from "@/components/HowItWorks";
import DownloadSection from "@/components/DownloadSection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import CareerSection from "@/components/CareerSection";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";

let hasLoadedSplash = false;

const Index = () => {
  const [loaded, setLoaded] = useState(hasLoadedSplash);

  const handleComplete = () => {
    hasLoadedSplash = true;
    setLoaded(true);
  };

  return (
    <>
      {!loaded && <SplashScreen onComplete={handleComplete} />}
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
        {/* career */}
        <div id="careers">
          <CareerSection />
        </div>
        {/* About Us */}
        <div id="about">
          <AboutUs />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
