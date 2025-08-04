import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Home, Car, Stethoscope, Leaf, Building } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      title: "Automação Industrial",
      description: "Soluções para controle e monitoramento de processos industriais",
      icon: <Factory className="h-12 w-12" />,
      image: "/src/assets/industrial.jpg",
      features: ["Controle de Processos", "Monitoramento Remoto", "Integração SCADA", "Manutenção Preditiva"],
      benefits: "Aumente a eficiência, reduza custos operacionais e melhore a segurança dos seus processos industriais.",
      applications: ["Linhas de Produção", "Sistemas de Energia", "Controle de Qualidade", "Logística Industrial"]
    },
    {
      title: "Smart Home & Building",
      description: "Transforme ambientes em espaços inteligentes e conectados",
      icon: <Home className="h-12 w-12" />,
      image: "/src/assets/smart-home.jpg",
      features: ["Iluminação Inteligente", "Climatização", "Segurança", "Gestão Energética"],
      benefits: "Maior conforto, economia de energia e segurança avançada para residências e edifícios comerciais.",
      applications: ["Residências", "Escritórios", "Hotéis", "Shopping Centers"]
    },
    {
      title: "Automotive & Mobilidade",
      description: "Tecnologias embarcadas para o futuro da mobilidade",
      icon: <Car className="h-12 w-12" />,
      image: "/src/assets/hero-hardware.jpg",
      features: ["Telemetria Veicular", "Diagnóstico OBD", "Rastreamento", "Infotainment"],
      benefits: "Melhore a experiência do usuário, otimize a manutenção e aumente a segurança veicular.",
      applications: ["Veículos Pessoais", "Frotas Comerciais", "Transporte Público", "Logística"]
    },
    {
      title: "Health & MedTech",
      description: "Dispositivos médicos e de saúde conectados",
      icon: <Stethoscope className="h-12 w-12" />,
      image: "/src/assets/lab-workspace.jpg",
      features: ["Monitoramento Vital", "Telemedicina", "Dispositivos Wearable", "Análise de Dados"],
      benefits: "Cuidados de saúde mais precisos, acessíveis e personalizados para pacientes e profissionais.",
      applications: ["Hospitais", "Clínicas", "Home Care", "Fitness & Wellness"]
    },
    {
      title: "AgTech & Sustentabilidade",
      description: "Tecnologia para agricultura inteligente e sustentável",
      icon: <Leaf className="h-12 w-12" />,
      image: "/src/assets/circuit-board.jpg",
      features: ["Monitoramento Solo", "Irrigação Inteligente", "Sensores Ambientais", "Análise Climática"],
      benefits: "Aumente a produtividade, reduza o desperdício e promova práticas agrícolas sustentáveis.",
      applications: ["Agricultura de Precisão", "Estufas Inteligentes", "Pecuária", "Gestão Hídrica"]
    },
    {
      title: "Smart Cities",
      description: "Infraestrutura inteligente para cidades do futuro",
      icon: <Building className="h-12 w-12" />,
      image: "/src/assets/office-building.jpg",
      features: ["Iluminação Pública", "Gestão de Tráfego", "Monitoramento Ambiental", "Segurança Urbana"],
      benefits: "Cidades mais eficientes, sustentáveis e com melhor qualidade de vida para os cidadãos.",
      applications: ["Prefeituras", "Concessionárias", "Empresas de Energia", "Transportadoras"]
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Nossas Soluções
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transformamos setores inteiros com tecnologia embarcada inovadora. 
                Descubra como podemos revolucionar seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {solutions.map((solution, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        {solution.icon}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                      {solution.benefits}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Principais Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Aplicações:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="outline">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                      Solicitar Demonstração
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Como Desenvolvemos Suas Soluções
              </h2>
              <p className="text-xl text-muted-foreground">
                Processo estruturado para garantir o sucesso do seu projeto
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Análise", desc: "Entendemos suas necessidades e desafios específicos" },
                { step: "02", title: "Design", desc: "Criamos a arquitetura ideal para sua solução" },
                { step: "03", title: "Desenvolvimento", desc: "Implementamos com as melhores práticas e tecnologias" },
                { step: "04", title: "Entrega", desc: "Suporte completo na implementação e treinamento" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;