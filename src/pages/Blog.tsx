import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "O Futuro da IoT em Automação Industrial",
      description: "Como a Internet das Coisas está revolucionando a indústria com soluções embarcadas inteligentes. Exploramos as tendências e aplicações práticas.",
      category: "IoT",
      date: "2024-01-15",
      readTime: "5 min",
      author: "Equipe EmbTech",
      featured: true
    },
    {
      id: 2,
      title: "Desenvolvimento de Firmware: Melhores Práticas",
      description: "Técnicas avançadas para otimização e segurança no desenvolvimento de firmware embarcado para aplicações industriais.",
      category: "Firmware",
      date: "2024-01-10",
      readTime: "8 min",
      author: "Equipe EmbTech",
      featured: false
    },
    {
      id: 3,
      title: "Sensores Inteligentes na Indústria 4.0",
      description: "Explorando as tecnologias de sensoriamento que estão moldando o futuro da manufatura inteligente.",
      category: "Hardware",
      date: "2024-01-05",
      readTime: "6 min",
      author: "Equipe EmbTech",
      featured: false
    },
    {
      id: 4,
      title: "Conectividade em Sistemas Embarcados",
      description: "Análise das principais tecnologias de conectividade para sistemas IoT e aplicações embarcadas.",
      category: "Conectividade",
      date: "2023-12-28",
      readTime: "7 min",
      author: "Equipe EmbTech",
      featured: false
    },
    {
      id: 5,
      title: "Segurança em Dispositivos IoT",
      description: "Como implementar protocolos de segurança robustos em dispositivos conectados para a indústria.",
      category: "Segurança",
      date: "2023-12-20",
      readTime: "6 min",
      author: "Equipe EmbTech",
      featured: false
    },
    {
      id: 6,
      title: "Prototipagem Rápida com Arduino e ESP32",
      description: "Guia prático para desenvolvimento rápido de protótipos usando plataformas populares de desenvolvimento.",
      category: "Hardware",
      date: "2023-12-15",
      readTime: "4 min",
      author: "Equipe EmbTech",
      featured: false
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 py-16 ">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Blog EmbTech
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Insights, tendências e conhecimento sobre tecnologias embarcadas, IoT e automação industrial
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Todos
                </Badge>
                {categories.map((category) => (
                  <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <section key={post.id} className="py-12">
            <div className="container mx-auto px-4">
              <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="order-2 md:order-1">
                    <Badge className="mb-4">Destaque</Badge>
                    <Badge variant="secondary" className="mb-4 ml-2">
                      {post.category}
                    </Badge>
                    
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <p className="text-muted-foreground mb-6">{post.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Button size="lg">
                      Ler artigo completo
                    </Button>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <div className="text-primary/60 text-6xl">📡</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        ))}

        {/* All Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Todos os Artigos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
                      <div className="text-primary/60 text-4xl">📄</div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      Ler mais
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;