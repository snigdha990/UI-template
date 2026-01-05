"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import { useState } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`${darkMode ? "dark" : "light"} relative overflow-x-hidden`}>
      <ParticlesBackground />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <Features />
      <HowItWorks />
      <FAQ />
      <AboutUs />
      <Footer />
    </main>
  );
}
