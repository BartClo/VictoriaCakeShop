"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WaveDivider from "./components/WaveDivider";
import AboutUs from "./components/AboutUs";
import Specialties from "./components/Specialties";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import MenuModal from "./components/MenuModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { MenuModalProvider } from "./context/MenuModalContext";
import { useScrollReveal } from "./hooks/useScrollReveal";

function PageContent() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider fillColor="#fdfbf7" bgColor="#f5efe6" />
        <AboutUs />
        <WaveDivider fillColor="#faf7f3" bgColor="#fdfbf7" />
        <Specialties />
        <WaveDivider fillColor="#ffffff" bgColor="#faf7f3" />
        <Gallery />
        <WaveDivider fillColor="#fdfbf7" bgColor="#ffffff" />
        <Testimonials />
      </main>
      <Footer />
      <MenuModal />
      <FloatingWhatsApp />
    </>
  );
}

export default function Home() {
  return (
    <MenuModalProvider>
      <PageContent />
    </MenuModalProvider>
  );
}
