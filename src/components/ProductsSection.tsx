import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Wifi, Shield, Zap, Smartphone, Settings, CircuitBoard } from "lucide-react";
import iotDevice from "@/assets/iot-device.jpg";
import smartHome from "@/assets/smart-home.jpg";
import industrial from "@/assets/industrial.jpg";

const ProductsSection = () => {
  const products = [
    {
      title: "Hardware Embarcado",
      description: "Projeto e desenvolvimento de placas eletrônicas, displays, sensores e componentes customizados para sua aplicação específica.",
      image: iotDevice,
      icon: <Cpu className="w-8 h-8" />,
      color: "primary",
      features: ["Placas Eletrônicas", "Displays Customizados", "Sensores Integrados"]
    },
    {
      title: "Firmware & Software",
      description: "Desenvolvimento de firmware embarcado, software de controle e aplicativos mobile para gestão completa dos sistemas.",
      image: smartHome,
      icon: <Wifi className="w-8 h-8" />,
      color: "tech-blue",
      features: ["Firmware Embarcado", "Software Desktop", "Apps Mobile"]
    },
    {
      title: "Conectividade & Automação",
      description: "Soluções de conectividade IoT e sistemas de automação para controle inteligente de produtos e equipamentos industriais.",
      image: industrial,
      icon: <Shield className="w-8 h-8" />,
      color: "tech-purple",
      features: ["IoT Connectivity", "Automação Industrial", "Controle Remoto"]
    }
  ];

  const features = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Microcontroladores",
      description: "Desenvolvimento com as mais avançadas arquiteturas ARM e RISC-V"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Conectividade",
      description: "WiFi, Bluetooth, LoRa, Zigbee e outras tecnologias de comunicação"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Segurança",
      description: "Criptografia avançada e protocolos seguros para proteção de dados"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Baixo Consumo",
      description: "Otimização energética para máxima autonomia e eficiência"
    }
  ];

  return (
    <section id="produtos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Eletrônicas
            <span className="text-[#C8D820]"> Embarcadas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Projeto, desenvolvimento e fabricação de soluções eletrônicas embarcadas.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white`}>
                  {product.icon}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                
                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  <a href="/contato">Consulte Nossa Equipe</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-background rounded-2xl p-8 shadow-card">
          <h3 className="text-3xl font-bold text-center mb-12">
            Tecnologia de <span className="text-primary">Ponta</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;