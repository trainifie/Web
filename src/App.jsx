import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-gold font-sans overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TeamSection />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}
