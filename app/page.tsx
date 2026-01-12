"use client";

import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import { AnimatedBadge } from "./components/AnimatedBadge";
import ParticlesBackground from "./components/ParticlesBackground";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="relative bg-gray-900 overflow-x-hidden">
      <ParticlesBackground />
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <AnimatedBadge />
      </div>
      <HeroSection />
      <Features />
      <HowItWorks />
      <AboutUs />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}
