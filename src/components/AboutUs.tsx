import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Target, Eye, Heart, Shield } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react'

const AboutUs = () => {
  // Dados corrigidos e formatados para a seção
  const commitments = [
    {
      icon: <Target className="h-8 w-8" />,
      category: "Missão",
      items: [
        "Colaborar com empresas para serem mais competitivas, agregando valor, eficiência e diferencial através de soluções tecnológicas inovadoras para seus produtos."
      ]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      category: "Visão", 
      items: [
        "Crescer com sustentabilidade no mercado de soluções eletrônicas embarcadas, sendo referência em qualidade e inovação."
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      category: "Valores",
      items: [
        "Satisfação dos clientes",
        "Qualidade e Inovação",
        "Confidencialidade e Integridade",
        "Respeito às pessoas",
        "Crescimento sustentável",
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      category: "Política da Qualidade",
      items: [
        "Fornecer soluções em montagem de placas e produtos eletrônicos, buscando a melhoria contínua dos processos e a satisfação dos clientes, atendendo aos seus requisitos."
      ]
    }
  ];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm" style={{borderColor: '#C8D820'}}>
            Conheça a Embtech
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span style={{color: '#C8D820'}}>Compromissos</span>
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Somos especializados em montagem eletrônica, projeto e desenvolvimento de soluções embarcadas sob medida para automação e controle de máquinas, equipamentos e dispositivos inteligentes.
          </p>
        </div>

        {/* Carousel on Mobile, Grid on Desktop */}
        <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
          <div className="flex -ml-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:m-0">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex-grow-0 flex-shrink-0 basis-full md:basis-auto pl-4 md:p-0">
                <Card className="group h-full flex flex-col transition-all duration-500 transform hover:-translate-y-2 bg-white border">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl">
                        {commitment.icon}
                      </div>
                      <CardTitle className="text-2xl font-bold">{commitment.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-1">
                    <ul className="space-y-3">
                      {commitment.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                           {commitment.category === 'Valores' ? (
                            <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          ) : (
                            <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          )}
                          <span className="text-black/70">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
