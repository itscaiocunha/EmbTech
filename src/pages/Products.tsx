import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Wifi, Shield, Battery, Zap, Settings } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      title: "Hardware Embarcado",
      description: "Placas eletrônicas customizadas para suas necessidades específicas",
      icon: <Cpu className="h-8 w-8" />,
      features: ["PCB Design", "Microcontroladores", "Sensores", "Atuadores"],
      details: "Desenvolvemos hardware embarcado sob medida, desde a concepção até a fabricação, garantindo performance e confiabilidade."
    },
    {
      title: "Firmware & Software",
      description: "Desenvolvimento de firmware otimizado e software de controle",
      icon: <Settings className="h-8 w-8" />,
      features: ["Real-time OS", "Drivers", "Protocolos", "APIs"],
      details: "Criamos firmware eficiente e software robusto para garantir o funcionamento perfeito dos seus dispositivos."
    },
    {
      title: "Conectividade IoT",
      description: "Soluções completas de conectividade para Internet das Coisas",
      icon: <Wifi className="h-8 w-8" />,
      features: ["WiFi", "Bluetooth", "LoRaWAN", "5G"],
      details: "Implementamos conectividade avançada para integrar seus dispositivos na nuvem e criar ecossistemas inteligentes."
    },
    {
      title: "Aplicativos Móveis",
      description: "Apps nativos para controle e monitoramento dos dispositivos",
      icon: <Zap className="h-8 w-8" />,
      features: ["iOS", "Android", "Dashboard", "Notificações"],
      details: "Desenvolvemos aplicativos intuitivos para controle remoto e monitoramento em tempo real dos seus equipamentos."
    },
    {
      title: "Segurança Embarcada",
      description: "Proteção avançada para dispositivos conectados",
      icon: <Shield className="h-8 w-8" />,
      features: ["Criptografia", "Autenticação", "OTA Seguro", "Compliance"],
      details: "Implementamos camadas de segurança robustas para proteger seus dispositivos contra ameaças cibernéticas."
    },
    {
      title: "Otimização Energética",
      description: "Soluções de baixo consumo para máxima autonomia",
      icon: <Battery className="h-8 w-8" />,
      features: ["Sleep Modes", "Power Management", "Energy Harvesting", "Bateria"],
      details: "Otimizamos o consumo energético para garantir maior autonomia e eficiência dos seus dispositivos."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nossos Produtos
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Soluções eletrônicas embarcadas completas, desde o hardware até aplicativos, 
                projetadas para transformar suas ideias em realidade tecnológica.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.details}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para desenvolver seu produto?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para transformar sua ideia em um produto eletrônico inovador. 
              Entre em contato e vamos conversar sobre seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[200px]">
                Iniciar Projeto
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;