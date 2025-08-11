import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'

const CasesSection = () => {
  // Dados dos cases de portfólio, com os novos itens
  const cases = [
    {
      id: 1,
      title: "Solução Eletrônica para Fornos Profissionais e Industriais",
      description: "Placas eletrônicas para controle e automação de fornos industriais, garantindo precisão e eficiência no processo.",
      image: "images/cases/fornos.png",
      link: "/cases"
    },
    {
      id: 2,
      title: "Solução Eletrônica para Secador de Café",
      description: "Sistema com microcontrolador ARM Cortex de alta velocidade para gerenciamento preciso da temperatura da fonte de calor.",
      image: "images/cases/secadoraCafe.png",
      link: "/cases"
    },
    {
      id: 3,
      title: "Solução para Refrigerador de Bolsas de Sangue e Vacinas",
      description: "Placas para controle, automação e programação de refrigeradores de bolsas de sangue, vacinas e medicamentos oncológicos.",
      image: "images/cases/refrigeradorSangue.png",
      link: "/cases"
    },
    {
      id: 4,
      title: "Solução Eletrônica para Incubadora de Ovos",
      description: "Placas para controle, automação e programação de incubadoras de ovos de grande porte, com IHM de 7 polegadas touchscreen.",
      image: "/images/cases/incubadora.png",
      link: "/cases"
    },
    {
      id: 5,
      title: "Solução Eletrônica para Pesadora e Ensacadora Industrial",
      description: "Solução composta por placa eletrônica IHM e potência. Display colorido 3.5” TFT e touch resistivo.",
      image: "images/cases/pesadora.png",
      link: "/cases"
    },
    {
      id: 6,
      title: "Solução Eletrônica para Jardins Verticais",
      description: "Controlador eletrônico para automação e controle de regas de jardim vertical de acordo com estações do ano.",
      image: "images/cases/controladorJardim.png",
      link: "/cases"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <section id="cases" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            NOSSAS SOLUÇÕES
          </p>
          <h2 className="text-4xl md:text-5xl text-primary font-bold">
            Portfólio de <span className="text-[#C8D820]">Aplicações</span>
          </h2>
        </div>

        {/* Carrossel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Container do carrossel com margem negativa para alinhar */}
            <div className="flex -ml-8">
              {cases.map((caseItem) => (
                // Cada slide com padding para criar o espaçamento
                <div key={caseItem.id} className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/2 lg:basis-1/3 pl-8">
                  <Card className="group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl border">
                    {/* Imagem do Case */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={`Imagem do case: ${caseItem.title}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Conteúdo do Card */}
                    <div className="flex flex-1 flex-col p-6">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-xl leading-tight">
                          {caseItem.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="flex-1 p-0">
                        <CardDescription className="text-base">
                          {caseItem.description}
                        </CardDescription>
                      </CardContent>
                      
                      <CardFooter className="p-0 pt-6">
                        <a href={caseItem.link} className="w-full">
                          <Button className="w-full">
                            Saber Mais
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
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

export default CasesSection;
