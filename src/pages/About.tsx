import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Target, Eye, Heart, Shield, Building, Award, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  // Dados da linha do tempo
  const timeline = [
    {
      year: "2010",
      title: "Fundação da Embtech",
      description: "A Embtech é fundada com o objetivo de oferecer soluções inovadoras em eletrônica embarcada para o mercado nacional."
    },
    {
      year: "2012",
      title: "Primeira Sede",
      description: "Inauguração da primeira sede própria, expandindo a capacidade de produção e desenvolvimento."
    },
    {
      year: "2015",
      title: "Certificação ISO 9001",
      description: "Conquista da certificação ISO 9001, atestando o compromisso da empresa com os mais altos padrões de qualidade."
    },
    {
      year: "2019",
      title: "Lançamento da Linha EmbFlex",
      description: "Apresentação da linha de produtos próprios EmbFlex na feira FIEE, um marco na história da empresa."
    },
    {
      year: "2023",
      title: "Expansão da Estrutura",
      description: "Ampliação da planta fabril para 1000m², com novas máquinas e aumento da capacidade produtiva para atender à crescente demanda."
    },
  ];

  // Unificando Missão, Visão e Valores
  const commitments = [
      {
          icon: <Target className="h-12 w-12 text-primary mb-4" />,
          title: "Missão",
          content: "Colaborar com empresas para serem mais competitivas, agregando valor, eficiência e diferencial através de soluções tecnológicas inovadoras para seus produtos."
      },
      {
          icon: <Eye className="h-12 w-12 text-primary mb-4" />,
          title: "Visão",
          content: "Crescer com sustentabilidade no mercado de soluções eletrônicas embarcadas, sendo referência em qualidade e inovação."
      },
      {
          icon: <Heart className="h-12 w-12 text-primary mb-4" />,
          title: "Valores",
          content: "Satisfação dos clientes e colaboradores, Qualidade, Confidencialidade das informações, Integridade e respeito às pessoas, Lucratividade e crescimento sustentáveis, Comprometimento."
      }
  ];
  
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });

  return (
    <div className="min-h-screen bg-background text-justify">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
               <h1 className="text-5xl font-bold mb-6">
                Nossos <span className="text-primary">Compromissos</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                A Embtech está localizada na cidade de Poços de Caldas, sul do estado de Minas Gerais, numa região de maior referência em eletrônica do país. Nos últimos 14 anos, passou a dedicar-se exclusivamente ao projeto, desenvolvimento e montagem de placas eletrônicas com software embarcado, para controle de equipamentos e máquinas dos mais diversos segmentos.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="aspect-video max-w-4xl mx-auto">
              <iframe 
                className="w-full h-full rounded-2xl shadow-lg" 
                src="images/video.MP4" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>

        {/* Apresentação Section */}
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Engenharia Eletrônica para o seu Negócio</h2>
                        <div className="text-lg text-muted-foreground space-y-4">
                            <p>Possuímos vasta experiência com mais de 150 produtos diferentes no portfólio, que atendem linhas low cost de baixa complexidade e controles, à linhas premium de alta complexidade e controles.</p>
                            <p>Atuamos em todas as etapas do projeto, tendo como principal objetivo ser a engenharia eletrônica de seus clientes: através de desenvolvimento, sugestão de melhorias, otimização de recursos, avaliação e testes dos resultados antes que o produto seja colocado no mercado.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/images/tecnologia.JPG" alt="Desenvolvimento de Produtos na Embtech" className="rounded-2xl shadow-lg"/>
                    </div>
                </div>
            </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Nossa Trajetória</h2>
              <p className="text-lg text-muted-foreground mt-2">Uma história de inovação e crescimento contínuo.</p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 w-1 bg-border h-full -translate-x-1/2"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12"></div>
                  <div className="z-10 flex items-center bg-primary text-primary-foreground w-12 h-12 rounded-full justify-center text-lg font-bold">{item.year.slice(-2)}</div>
                  <div className="w-5/12">
                    <Card className="p-6 shadow-md">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments Section (Carousel on Mobile, Grid on Desktop) */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
              <div className="flex -ml-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:m-0">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex-grow-0 flex-shrink-0 basis-full md:basis-auto pl-4 md:p-0">
                    <Card className="h-full text-center p-6">
                      <div className="flex flex-col items-center">
                        {commitment.icon}
                        <h3 className="text-2xl font-bold mb-2">{commitment.title}</h3>
                        <p className="text-muted-foreground">{commitment.content}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Política da Qualidade Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Award className="h-12 w-12 text-primary mx-auto mb-4"/>
            <h2 className="text-3xl font-bold mb-4">Política da Qualidade</h2>
            <p className="text-xl text-muted-foreground italic">
              "Propiciar o desenvolvimento sustentável da Embtech pela excelência em inovação tecnológica de soluções eletrônicas embarcadas com a satisfação de nossos clientes, colaboradores e parceiros; tendo como compromisso atender os requisitos aplicáveis e a melhoria contínua do Sistema de Gestão da Qualidade, em um ambiente de negócios ético, respeitável e seguro."
            </p>
          </div>
        </section>

        {/* Prêmios Section */}
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Nossos Prêmios</h2>
                        <p className="text-primary font-semibold mb-4">CONHEÇA NOSSAS PREMIAÇÕES</p>
                        <p className="text-lg text-justify text-muted-foreground mb-6">A Embtech foi finalista, nos anos de 2011 e 2012, do Prêmio MPE Brasil - Prêmio de Competitividade para Micro e Pequenas Empresas, que tem como fundamento os reconhecimentos estadual e nacional na disseminação de conceitos e práticas de excelência em gestão, promovendo o aumento da sua qualidade, produtividade e competitividade.</p>
                    </div>
                    <div className="flex items-center justify-center gap-8">
                        <img src="images/selo1.png" alt="Selo MPE Brasil 2011 - Destaque de Inovação" className="w-30 h-auto"/>
                        <img src="images/selo2.png" alt="Selo MPE Brasil 2011 - Categoria Indústria" className="w-30 h-auto"/>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
