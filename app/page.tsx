import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Specialties from "./components/Specialties";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import MenuModal from "./components/MenuModal";
import { MenuModalProvider } from "./context/MenuModalContext";

export default function Home() {
  return (
    <MenuModalProvider>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Specialties />
        <Gallery />
      </main>
      <Footer />
      {/* Global modal — rendered at root level so z-index works correctly */}
      <MenuModal />
    </MenuModalProvider>
  );
}
