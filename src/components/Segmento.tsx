import { 
  Factory, 
  UtensilsCrossed, 
  Leaf, 
  HeartPulse, 
  Car, 
  Wind, 
  ShieldCheck, 
  Refrigerator, 
  Wrench, 
  Truck, 
  Wifi, 
  Building,
  Router
} from "lucide-react";
import { useState, useRef } from "react";

const Segmento = () => {
  // Array de segmentos com ícones, títulos e descrições
  const segments = [
    { icon: <Factory className="h-10 w-10 text-primary" />, title: "Industrial", description: "Soluções robustas para automação e controle de processos." },
    { icon: <UtensilsCrossed className="h-10 w-10 text-primary" />, title: "Alimentação", description: "Tecnologia para otimizar a produção e segurança na indústria." },
    { icon: <Leaf className="h-10 w-10 text-primary" />, title: "Agroindústria", description: "Eletrônica para a modernização e eficiência do agronegócio." },
    { icon: <HeartPulse className="h-10 w-10 text-primary" />, title: "Médico Hospitalar", description: "Equipamentos precisos e confiáveis para a área da saúde." },
    { icon: <Car className="h-10 w-10 text-primary" />, title: "Transporte e Mobilidade", description: "Sistemas inteligentes para gestão de frotas e mobilidade urbana." },
    { icon: <Wind className="h-10 w-10 text-primary" />, title: "Energia e Climatização", description: "Controle e eficiência para sistemas de climatização e energia." },
    { icon: <ShieldCheck className="h-10 w-10 text-primary" />, title: "Segurança e Acesso", description: "Soluções seguras para monitoramento e controle de acesso." },
    { icon: <Refrigerator className="h-10 w-10 text-primary" />, title: "Eletrodomésticos", description: "Inovação e conectividade para a linha branca e eletrodomésticos." },
    { icon: <Wrench className="h-10 w-10 text-primary" />, title: "Equipamentos Profissionais", description: "Eletrônica de ponta para equipamentos de alta performance." },
    { icon: <Truck className="h-10 w-10 text-primary" />, title: "Logística e Rastreabilidade", description: "Otimização de cadeias de suprimentos com rastreamento." },
    { icon: <Wifi className="h-10 w-10 text-primary" />, title: "IoT", description: "Conectando dispositivos para um mundo mais inteligente." },
    { icon: <Router className="h-10 w-10 text-primary" />, title: "Telemetria", description: "Monitoramento e medição remota de dados para gestão eficiente." },
    { icon: <Building className="h-10 w-10 text-primary" />, title: "Smart Cities", description: "Tecnologia para criar cidades mais conectadas e sustentáveis." },
  ];

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiplicador para um arrastar mais responsivo
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {/* CSS para ocultar a barra de rolagem */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
      <section id="segmentos" className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Segmentos que
              <span className="text-[#C8D820]"> Atendemos</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Desenvolvemos soluções eletrônicas personalizadas para uma vasta gama de indústrias, impulsionando a inovação e a eficiência.
            </p>
          </div>

          {/* Carrossel com Drag-to-Scroll */}
          <div 
            ref={carouselRef}
            className="relative w-full overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex w-max py-4">
              {segments.map((segment) => (
                <div 
                  key={segment.title} 
                  className="flex flex-shrink-0 flex-col items-center justify-start mx-4 w-64 text-center select-none"
                >
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-background p-4 shadow-md pointer-events-none">
                    {segment.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-primary-foreground pointer-events-none">
                    {segment.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 pointer-events-none">
                    {segment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Segmento;
