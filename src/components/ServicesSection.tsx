import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Linha SMT",
      description: "Utilizamos equipamentos de última geração para montagem SMT, garantindo a máxima precisão e qualidade para componentes complexos como 0201, BGA e QFN. Nossa linha automatizada assegura eficiência e repetibilidade em larga escala.",
      image: "/images/smt.JPG",
      stats: [
        { value: "100k", label: "CPH (Componentes/Hora)" },
        { value: "99.8%", label: "Precisão de Montagem" }
      ]
    },
    {
      title: "Linha THT",
      description: "Nossa linha de montagem THT combina automação e expertise manual para garantir soldas perfeitas e duradouras, seguindo os mais rigorosos padrões da indústria, como o IPC-A-610.",
      image: "/images/tht.JPG",
      stats: [
        { value: "IPC-A-610", label: "Padrão de Qualidade" },
        { value: "100%", label: "Inspeção Pós-Solda" }
      ]
    },
    {
      title: "Controle de Qualidade",
      description: "A qualidade é o pilar do nosso processo. Com inspeção SPI e AOI, testes funcionais e elétricos, e rastreabilidade total, garantimos que cada produto atenda às mais altas exigências.",
      image: "/images/teste.JPG",
      stats: [
        { value: "ISO 9001", label: "Certificação" },
        { value: "100%", label: "Rastreabilidade" }
      ]
    },
    {
      title: "Turn Key & Box Building",
      description: "Oferecemos a solução completa: desde a compra de componentes até a montagem final do produto, embalagem e expedição. Simplifique sua cadeia de suprimentos conosco.",
      image: "/images/keyBox.JPG",
      stats: [
        { value: "500+", label: "Projetos Entregues" },
        { value: "98%", label: "Satisfação de Clientes" }
      ]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossos <span className="text-[#C8D820]">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Oferecemos um ciclo completo de produção eletrônica, desde a montagem até a entrega do produto final, com rigoroso controle de qualidade.
          </p>

          <CardFooter className="p-0 pt-6 justify-center">
            <a href="/produtos">
              <Button>Ver mais</Button>
            </a>
          </CardFooter>
        </div>

        {/* Layout em seções individuais para cada serviço */}
        <div className="space-y-28">
          {services.map((service, index) => (
            <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Coluna da Imagem */}
              <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
                  src={service.image} 
                  alt={`Imagem ilustrativa do serviço ${service.title}`}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Coluna do Texto e Stats */}
              <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h3 className="text-3xl font-bold mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.stats.map(stat => (
                    <div key={stat.label} className="text-center p-4 bg-muted/50 rounded-xl">
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
