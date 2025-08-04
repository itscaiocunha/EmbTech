import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import teamWork from "@/assets/team-work.jpg";
import officeBuilding from "@/assets/office-building.jpg";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Estamos sempre
            <span className="block text-[#C8D820]">próximos a você</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para transformar suas ideias em realidade. 
            Entre em contato e vamos conversar sobre seu próximo projeto.
          </p>
        </div>

        {/* Team Image Section */}
        <div className="mb-16">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={teamWork} 
              alt="Nossa equipe trabalhando"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="text-white p-8 max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Equipe Especializada
                </h3>
                <p className="text-white/90">
                  Profissionais com mais de 10 anos de experiência em hardware embarcado
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa</label>
                    <Input placeholder="Nome da empresa" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <Input placeholder="Como podemos ajudar?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Descreva seu projeto ou dúvida..." 
                    rows={4}
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Image */}
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src={officeBuilding} 
                  alt="Nosso escritório"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="text-white p-4">
                    <h4 className="font-semibold">Nosso Escritório</h4>
                    <p className="text-white/90 text-sm">Localização privilegiada em São Paulo</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Caetano Peterie, 200 Country Club<br />
                      Poços de Caldas - MG, 37704-281
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tech-blue/10 text-tech-blue rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Telefone</h4>
                    <p className="text-muted-foreground">
                      (35) 3722-7950
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-tech-purple/10 text-tech-purple rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@embtech.com.br
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16 p-8 bg-gradient-primary rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para revolucionar seu projeto?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas está preparada para transformar suas ideias 
            em soluções de hardware embarcado inovadoras e eficientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Agendar Reunião
            </Button>
            <Button variant="secondary" size="lg">
              Solicitar Orçamento
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;