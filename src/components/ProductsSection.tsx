import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Puzzle, Headset, Cpu, Layers, HardDrive, ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'

const ProdutosPropriosSection = () => {
  // Principais características da linha EmbFlex
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Desenvolvimento Rápido",
      description: "Acelere seu tempo de mercado com nossas plataformas de hardware prontas para uso e fáceis de integrar."
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Hardware Robusto",
      description: "Projetados para operar em ambientes industriais, nossos produtos garantem confiabilidade e longa vida útil."
    },
    {
      icon: <Puzzle className="h-8 w-8 text-white" />,
      title: "Flexibilidade e Customização",
      description: "Placas modulares que se adaptam às necessidades específicas do seu projeto, permitindo customizações."
    },
    {
      icon: <Headset className="h-8 w-8 text-white" />,
      title: "Suporte Técnico Direto",
      description: "Conte com o suporte direto da nossa equipe de engenharia para auxiliar na implementação do seu projeto."
    }
  ];

  // Todos os produtos unificados em uma lista
  const allProducts = [
    {
      title: "CPU EMBFlex ESP32",
      description: "CPU baseada no ESP32 para prototipagem rápida e soluções conectadas.",
      image: "images/produtos/CPUEsp.png",
      category: "CPU"
    },
    {
      title: "CPU EMBFlex LPC17",
      description: "Microcontrolador ARM Cortex-M3 para aplicações industriais e de automação.",
      image: "images/produtos/CPULPC.png",
      category: "CPU"
    },
    {
      title: "CPU EMBFlex SoM",
      description: "System on Module de alta capacidade de processamento para as soluções mais exigentes.",
      image: "images/produtos/CPUSoM.png",
      category: "CPU"
    },
    {
      title: "FLEXCard I/O",
      description: "Placa para aquisição de dados e acionamento de periféricos.",
      image: "images/produtos/FlexIO.png",
      category: "Flexcard"
    },
    {
      title: "Energy",
      description: "Placa para medição de qualidade de energia elétrica em redes AC.",
      image: "images/produtos/Energy.png",
      category: "Flexcard"
    },
    {
      title: "Analog",
      description: "Placa de expansão de sinais analógicos para temperatura, corrente, etc.",
      image: "images/produtos/Analog.png",
      category: "Flexcard"
    },
    {
      title: "Adaptador USB",
      description: "Adaptador USB-Serial para gravação de firmware nas placas EMBFlex.",
      image: "images/produtos/AdapUSB.png",
      category: "Acessório"
    },
    {
      title: "Régua Trilho DIN",
      description: "Suporte para fixação da placa no painel elétrico para montagem em trilho DIN.",
      image: "images/produtos/TrilhoDIN.png",
      category: "Acessório"
    },
    {
      title: "Display TFT Touch",
      description: "Display TFT colorido com touch resistivo compatível com as CPUs EMBFlex.",
      image: "images/produtos/DisplayTFT.png",
      category: "Acessório"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  return (
    // Assumindo que 'bg-primary' corresponde à cor azul (hsl(204, 100%, 23%))
    <section id="produtos-proprios" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Produtos Próprios: <span style={{color: '#C8D820'}}>EmbFlex</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mt-4">
            Nossa linha de produtos embarcados projetada para acelerar o desenvolvimento de soluções robustas, conectadas e com suporte técnico direto.
          </p>
        </div>

        {/* Grid com as Características */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Carrossel de Produtos */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {allProducts.map((product, index) => (
                <div key={index} className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white text-black transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={product.image}
                        alt={`Imagem do produto ${product.title}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle>{product.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 p-0">
                        <CardDescription className="text-black/70">{product.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-0 pt-6 justify-center">
                        <a href="/produtos">
                          <Button className="w-full text-black hover:bg-[#C8D820]/90" style={{backgroundColor: '#C8D820'}}>Mais Informações</Button>
                        </a>
                      </CardFooter>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdutosPropriosSection;
