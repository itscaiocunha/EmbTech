import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Cpu, Layers, Package, ShieldCheck, ShoppingCart, ArrowRight, Lightbulb, GitBranch, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Configuração do link para WhatsApp
const whatsAppNumber = "5535999998888";
const whatsAppMessage = "Olá! Gostaria de fazer um orçamento!";
const encodedMessage = encodeURIComponent(whatsAppMessage);
const links = {
  whatsapp: `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`,
};

const ServicesPage = () => {
  // Dados detalhados para cada serviço
  const services = [
    {
      title: "Linha SMT (Surface Mount Technology)",
      description: "Utilizamos equipamentos de última geração para montagem SMT, garantindo a máxima precisão e qualidade para componentes complexos como 0201, BGA e QFN. Nossa linha automatizada assegura eficiência e repetibilidade em larga escala.",
      image: "/images/servicos/smt.JPG",
      stats: [
        { value: "100k", label: "CPH (Componentes/Hora)" },
        { value: "99.8%", label: "Precisão de Montagem" }
      ],
      detailsList: [
        "Montagem de componentes 0201, BGA, QFN.",
        "Inspeção de pasta de solda (SPI) 3D.",
        "Inspeção óptica automatizada (AOI).",
        "Processo lead-free e rastreabilidade completa."
      ]
    },
    {
      title: "Linha THT (Through-Hole Technology)",
      description: "Nossa linha de montagem THT combina automação e expertise manual para garantir soldas perfeitas e duradouras, seguindo os mais rigorosos padrões da indústria, como o IPC-A-610.",
      image: "/images/servicos/tht.JPG",
      stats: [
        { value: "IPC-A-610", label: "Padrão de Qualidade" },
        { value: "100%", label: "Inspeção Pós-Solda" }
      ],
      detailsList: [
        "Montagem de componentes convencionais (PTH).",
        "Soldagem por onda (Wave Soldering).",
        "Soldagem seletiva para componentes sensíveis.",
        "Inspeção visual detalhada e testes funcionais."
      ]
    },
    {
      title: "Controle de Qualidade",
      description: "A qualidade é o pilar do nosso processo. Com inspeção SPI e AOI, testes funcionais e elétricos, e rastreabilidade total, garantimos que cada produto atenda às mais altas exigências.",
      image: "/images/servicos/teste.JPG",
      stats: [
        { value: "ISO 9001", label: "Certificação" },
        { value: "100%", label: "Rastreabilidade" }
      ],
      detailsList: [
        "Testes funcionais, elétricos e in-circuit sob demanda.",
        "Rastreabilidade por lote e número de série.",
        "Conformidade com normas IPC-A-610 e IEC 61340-5-1.",
        "Sistema de gestão da qualidade e melhoria contínua."
      ]
    },
    {
      title: "Turn Key & Box Building",
      description: "Oferecemos a solução completa: desde a compra de componentes até a montagem final do produto, embalagem e expedição. Simplifique sua cadeia de suprimentos conosco.",
      image: "/images/servicos/keyBox.JPG",
      stats: [
        { value: "500+", label: "Projetos Entregues" },
        { value: "98%", label: "Satisfação de Clientes" }
      ],
      detailsList: [
        "Suprimento completo e gestão de componentes.",
        "Montagem de placas, testes e validações.",
        "Montagem do produto final em seu gabinete (Box Building).",
        "Embalagem personalizada e logística de expedição."
      ]
    }
  ];

  const diferenciais = [
    "Projeto dedicado que agrega valor", "Produto diferenciado", "Inovação tecnológica",
    "Controle eficiente das funções", "Aumento da qualidade do produto final", "Interfaces inteligentes",
    "Possibilidade de novas e flexíveis funções", "Facilidade de suporte e manutenção",
    "Aumento da produtividade", "Valorização do produto", "Abertura de novos mercados",
    "Aumento de competitividade"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6">
                Nossos <span className="text-primary">Serviços</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Oferecemos uma solução completa, do projeto até a montagem eletrônica. Nosso ciclo de produção abrange desde a concepção do hardware até a entrega do produto final, com rigoroso controle de qualidade.
              </p>
            </div>
          </div>
        </section>

        {/* Services Details Section */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="space-y-28">
              {services.map((service, index) => (
                <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img src={service.image} alt={`Imagem do serviço ${service.title}`} className="w-full h-96 object-cover rounded-2xl shadow-lg"/>
                  </div>
                  <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <div className="mb-8 space-y-3">
                      <h3 className="text-xl font-semibold">Principais Destaques:</h3>
                      {service.detailsList.map(detail => (
                        <div key={detail} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.stats.map(stat => (
                        <div key={stat.label} className="text-center p-4 bg-muted/50 rounded-xl">
                          <div className="text-3xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Button  
                        className="text-white"
                      >
                        Solicitar Orçamento
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4" style={{color: '#C8D820'}}>Nossos Diferenciais</h2>
                <p className="text-xl text-primary-foreground/80 mb-8">Embarcamos inteligência em seu produto!</p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {diferenciais.map(item => (
                    <div key={item} className="flex items-center">
                      <Check className="h-6 w-6 mr-3 flex-shrink-0" style={{color: '#C8D820'}}/>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img src="images/servicos/inovacao.JPG" alt="Inovação e Tecnologia" className="rounded-2xl shadow-lg"/>
              </div>
            </div>
          </div>
        </section>

        {/* Pesquisa e Desenvolvimento Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Pesquisa & Desenvolvimento</h2>
              <p className="text-primary font-semibold mb-8">MELHORIA CONSTANTE</p>
              <div className="text-lg text-muted-foreground space-y-6 text-justify">
                <p>A Embtech possui uma equipe de pesquisa, desenvolvimento e inovação (PDI) formada por profissionais altamente capacitados e atentos às inovações tecnológicas, o que propicia know-how para projetar e desenvolver soluções eletrônicas inovadoras, diferenciando seus produtos e fazendo eles mais competitivos no mercado.</p>
                <p>Na Embtech, os projetos começam a partir do contato com o cliente, identificando assim as características, funcionalidades e necessidades específicas de controle para o produto/equipamento que receberá a solução eletrônica pretendida. Um dos procedimentos da empresa é assinar um contrato de confidencialidade, para resguardar os clientes no que diz respeito às informações e segredos industriais.</p>
                <p>Nós projetamos e desenvolvemos um pequeno lote piloto "prototipagem" para testes. Após aprovação, lotes de placas em quantidades e periodicidade são produzidas conforme a necessidade do cliente. Nossas soluções são desenvolvidas seguindo rigorosos padrões de qualidade, tanto de projeto quanto de manufatura.</p>
              </div>
              
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button className="text-white mt-12">
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
            </div>            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
