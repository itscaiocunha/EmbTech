import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-hardware.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hardware embarcado" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hardware Embarcado
            <span className="block text-[#C8D820]">do Seu Jeito</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Soluções em tecnologia inovadoras e práticas para transformar 
            suas ideias em realidade através de hardware embarcado de alta qualidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <a href="/produtos">Nossos Produtos</a>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-[#C8D820]/10 border-white/30 text-white hover:bg-[#C8D820]/20">
              <Play className="mr-2" size={20} />
              <a href="">Conheça a EmbTech</a>
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-tech-blue/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-20 w-12 h-12 bg-tech-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;