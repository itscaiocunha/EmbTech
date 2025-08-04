import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Users, Award, Lightbulb, HeartHandshake } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Nosso Escritório",
      details: ["Rua Caetano Peterie, 200 Country Club - Poços de Caldas - MG, 37704-281"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone & WhatsApp",
      details: ["(35) 3722-7950"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      details: ["contato@embtech.com.br"],
    }
  ];

  const teamHighlights = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "50+ Especialistas",
      description: "Engenheiros experientes em eletrônica embarcada"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "10+ Anos",
      description: "De experiência em desenvolvimento tecnológico"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "200+ Projetos",
      description: "Entregues com sucesso para diversos setores"
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "98% Satisfação",
      description: "Taxa de satisfação dos nossos clientes"
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
                Fale Conosco
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Pronto para transformar sua ideia em realidade? Nossa equipe de especialistas 
                está aqui para ajudar você a desenvolver soluções eletrônicas inovadoras.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="text-sm px-4 py-2">Consultoria Especializada</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Orçamento Sem Compromisso</Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">Suporte Especializado</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="lg:order-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Vamos Conversar</CardTitle>
                  <CardDescription>
                    Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome Completo *</label>
                      <Input placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Empresa</label>
                      <Input placeholder="Nome da empresa" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">E-mail *</label>
                      <Input type="email" placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Telefone *</label>
                      <Input placeholder="(11) 99999-9999" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tipo de Projeto</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de projeto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hardware">Hardware Embarcado</SelectItem>
                        <SelectItem value="firmware">Firmware & Software</SelectItem>
                        <SelectItem value="iot">Conectividade IoT</SelectItem>
                        <SelectItem value="mobile">Aplicativo Móvel</SelectItem>
                        <SelectItem value="complete">Solução Completa</SelectItem>
                        <SelectItem value="consulting">Consultoria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Orçamento Estimado</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a faixa de orçamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10k">R$ 10k - 50k</SelectItem>
                        <SelectItem value="50k">R$ 50k - 100k</SelectItem>
                        <SelectItem value="100k">R$ 100k - 500k</SelectItem>
                        <SelectItem value="500k">R$ 500k+</SelectItem>
                        <SelectItem value="undefined">Ainda não definido</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Descrição do Projeto *</label>
                    <Textarea 
                      placeholder="Descreva seu projeto, objetivos e requisitos principais..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1">
                      Enviar Solicitação
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Agendar Reunião
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="lg:order-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Informações de Contato</h2>
                  <p className="text-muted-foreground text-lg">
                    Entre em contato conosco através dos canais abaixo ou visite nosso escritório.
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por Que Escolher a EmbTech?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Somos especialistas em transformar ideias em soluções tecnológicas de alto impacto
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamHighlights.map((highlight, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-3 bg-primary/10 text-primary rounded-lg mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ or Additional CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Pronto para Começar seu Projeto?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nossa equipe está esperando para ajudar você a transformar sua visão em realidade. 
                Agende uma consultoria gratuita hoje mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="min-w-[200px]">
                  Agendar Consultoria Gratuita
                </Button>
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  Download Material Técnico
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;