import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import circuitBoard from "@/assets/circuit-board.jpg";
import labWorkspace from "@/assets/lab-workspace.jpg";

const TechnologySection = () => {
  const technologies = [
    {
      category: "Segurança",
      color: "success",
      items: [
        "Criptografia AES-256",
        "Secure Boot",
        "Hardware Security Module",
        "Certificados digitais",
        "Proteção contra ataques"
      ]
    },
    {
      category: "Conectividade", 
      color: "tech-blue",
      items: [
        "WiFi 6/6E",
        "Bluetooth 5.3",
        "LoRaWAN",
        "Cellular 4G/5G",
        "Ethernet Gigabit"
      ]
    },
    {
      category: "Energia",
      color: "tech-orange", 
      items: [
        "Ultra baixo consumo",
        "Gerenciamento inteligente",
        "Sleep modes avançados",
        "Energy harvesting",
        "Baterias de longa duração"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-[#C8D820]">
            Inovação Tecnológica
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa tecnologia vai
            <span className="block text-[#C8D820]">te surpreender em:</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos as mais avançadas tecnologias de hardware e software para 
            criar soluções que superam expectativas e definem novos padrões no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-background to-primary/5 border-primary/20"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">{tech.category}</h3>
                
                <ul className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center group/item">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 group-hover/item:scale-110 transition-transform" />
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Section with Images */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={circuitBoard} 
              alt="Circuito avançado"
              className="w-full h-80 object-cover rounded-2xl shadow-elegant"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Tecnologia de <span className="text-[#C8D820]">Ponta</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Utilizamos os componentes mais avançados do mercado para garantir 
              máxima performance e confiabilidade em nossos produtos.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Visual Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6">
              Laboratório <span className="text-[#C8D820]">Moderno</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa infraestrutura de ponta permite desenvolver e testar 
              soluções com os mais altos padrões de qualidade.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={labWorkspace} 
              alt="Laboratório moderno"
              className="w-full h-80 object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;