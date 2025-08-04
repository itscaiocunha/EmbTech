import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "O Futuro da IoT em Automação Industrial",
      description: "Como a Internet das Coisas está revolucionando a indústria com soluções embarcadas inteligentes.",
      category: "IoT",
      date: "2024-01-15",
      readTime: "5 min",
      image: "/src/assets/iot-device.jpg"
    },
    {
      id: 2,
      title: "Desenvolvimento de Firmware: Melhores Práticas",
      description: "Técnicas avançadas para otimização e segurança no desenvolvimento de firmware embarcado.",
      category: "Firmware",
      date: "2024-01-10",
      readTime: "8 min",
      image: "/src/assets/circuit-board.jpg"
    },
    {
      id: 3,
      title: "Sensores Inteligentes na Indústria 4.0",
      description: "Explorando as tecnologias de sensoriamento que estão moldando o futuro da manufatura.",
      category: "Hardware",
      date: "2024-01-05",
      readTime: "6 min",
      image: "/src/assets/industrial.jpg"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-[#C8D820] bg-clip-text text-transparent">
            Blog & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compartilhamos conhecimento sobre tecnologias embarcadas, IoT e inovação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm">
              <div className="aspect-video bg-primary mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                  <div className="text-primary/60 text-4xl">📡</div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {post.readTime} de leitura
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blog">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
              Ver todos os posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;