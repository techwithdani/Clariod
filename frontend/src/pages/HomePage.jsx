import AboutUsSection from "./components/AboutUsSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import TechnologySection from "./components/TechnologySection";
import QuoteSection from "./components/QuoteSection";
import KeyBenefitsSection from "./components/KeyBenefitsSection";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutUsSection />
        <TechnologySection />
        <QuoteSection />
        <KeyBenefitsSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
