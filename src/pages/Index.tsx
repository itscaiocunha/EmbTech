import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TechnologySection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Segmento from "@/components/Segmento";
import CasesSection from "@/components/CaseSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutUs />
        <ProductsSection />
        <TechnologySection />
        <CasesSection />
        <Segmento />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
