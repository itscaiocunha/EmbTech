import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

// Dados para os slides do banner rotativo
const slides = [
  {
    image: "images/banner/banner1.png",
    title: "No mercado há",
    subtitle: "mais de 20 anos",
    description: "Embarcamos inteligência no seu produto",
    primaryCta: { text: "Nossos Produtos", href: "/produtos" },
  },
  {
    image: "images/banner/banner2.png",
    title: "Equipe Altamente",
    subtitle: "Qualificada",
    description: "Prontos para tornar o seu projeto em realidade",
    primaryCta: { text: "Nossos Serviços", href: "/servicos" },
  },
  {
    image: "images/banner/banner3.png",
    title: "Qualidade e Precisão",
    subtitle: "em Cada Componente",
    description: "Com certificação ISO 9001, garantimos os mais altos padrões de qualidade em cada placa e produto que desenvolvemos.",
    primaryCta: { text: "Política de Qualidade", href: "/sobre-nos" },
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Link para o WhatsApp
  const whatsAppLink = "https://wa.me/5535999998888?text=Olá!%20Gostaria%20de%20mais%20informações.";

  useEffect(() => {
    // Define um intervalo para trocar de slide a cada 5 segundos
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);
    // Limpa o intervalo quando o componente é desmontado para evitar memory leaks
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center md:justify-end overflow-hidden">
        {/* Container dos Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        {/* Conteúdo */}
        <div className="relative z-10 container mx-auto px-4 lg:px-6 text-white">
          <div className="max-w-4xl ml-auto text-center md:text-right">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {slides[activeIndex].title}
              <span className="block text-[#C8D820]">{slides[activeIndex].subtitle}</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl ml-auto">
              {slides[activeIndex].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end items-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <a href={slides[activeIndex].primaryCta.href}>{slides[activeIndex].primaryCta.text}</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Pontos de Navegação */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <img src="/images/WhatsApp.png" alt="WhatsApp" className="w-full h-full" />
      </a>
    </>
  );
};

export default HeroSection;
