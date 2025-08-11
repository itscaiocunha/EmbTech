import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
  // --- Configurações de Links ---
  const whatsAppNumber = "5535999998888";
  const whatsAppMessage = "Olá! Gostaria de fazer um orçamento.";
  const encodedMessage = encodeURIComponent(whatsAppMessage);

  const links = {
    whatsapp: `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`,
    instagram: "https://www.instagram.com/embtech",
    linkedin: "https://www.linkedin.com/company/embtech/",
  };
  // --------------------------------

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Team Image Section */}
        <div className="mb-20">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src="/images/equipe.JPG" 
              alt="Nossa equipe colaborando em um projeto"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="text-white p-8 max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Equipe Especializada
                </h3>
                <p className="text-white/90">
                  Profissionais com mais de 10 anos de experiência em hardware embarcado e soluções de IoT.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary font-bold mb-6">
            Faça agora
            <span className="block text-[#C8D820]">seu orçamento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para transformar suas ideias em realidade. 
            Confira nossos canais de contato ou solicite um orçamento.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch max-w-7xl mx-auto">

          {/* Coluna da Esquerda: Imagem */}
          <div className="lg:w-1/2">
            <Card className="h-full overflow-hidden shadow-elegant">
              <CardContent className="p-0 h-full">
                <img 
                  src="/images/fachada.JPG" 
                  alt="Placa de circuito impresso vermelha desenvolvida pela EmbTech" 
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Coluna da Direita: Grid de Cards de Contato e Redes Sociais */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center"> <MapPin className="w-6 h-6" /> </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">Rua Caetano Peterie, 200<br />Poços de Caldas - MG</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center"> <Phone className="w-6 h-6" /> </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(35) 3722-7950</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center"> <Mail className="w-6 h-6" /> </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@embtech.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-elegant transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center"> <Clock className="w-6 h-6" /> </div>
                  <div>
                    <h4 className="font-semibold mb-1">Atendimento</h4>
                    <p className="text-muted-foreground">Seg. a Sex. das 8h às 18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="h-full">
              <Card className="hover:shadow-elegant transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center"> <Instagram className="w-6 h-6" /> </div>
                    <div>
                      <h4 className="font-semibold mb-1">Instagram</h4>
                      <p className="text-muted-foreground">Fique por dentro</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="h-full">
              <Card className="hover:shadow-elegant transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center"> <Linkedin className="w-6 h-6" /> </div>
                    <div>
                      <h4 className="font-semibold mb-1">LinkedIn</h4>
                      <p className="text-muted-foreground">Acompanhe a empresa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>

        {/* Seção do Botão de Orçamento (CTA) */}
        <div className="mt-20 text-center">
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg py-7 px-8 shadow-lg hover:shadow-primary/40 transition-shadow duration-300">
              <Phone className="w-5 h-5 mr-3" />
              Fazer Orçamento
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
