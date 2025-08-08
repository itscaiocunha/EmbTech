import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

// Dados dos posts (mantidos para o exemplo)
const blogPosts = [
  {
    id: 1,
    title: "Embtech presente na FIEE Smart Future, realizada em São Paulo",
    description: "De 18 a 21 de julho, em São Paulo (SP), acontece a FIEE Smart Future, o maior evento da América Latina para a indústria elétrica, eletrônica e de automação.",
    category: "Evento",
    date: "2023-07-17",
    image: "/images/EventoFIEE.jpg",
    link: "/blog"
  },
  {
    id: 2,
    title: "Desenvolvendo soluções embarcadas com a família EMBFlex",
    description: "A Embtech oferece uma família de hardware voltada para o desenvolvimento rápido de soluções embarcadas através das suas placas EMBFlex.",
    category: "Placas Embarcadas",
    date: "2020-07-09",
    image: "/images/placaBlog.jpg",
    link: "/blog"
  },
  {
    id: 3,
    title: "Embtech lança nova linha de produtos na FIEE Smart Future",
    description: "De 23 a 26 de julho, em São Paulo (SP), acontece a FIEE Smart Future, onde a Embtech apresentará suas inovações e nova linha de produtos.",
    category: "Lançamento",
    date: "2019-07-19",
    image: "/images/linhaProdutos.jpg",
    link: "/blog"
  }
];

const BlogPostCard = ({ post }) => {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl">
      {/* Imagem do Post */}
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={`Imagem de capa para o post: ${post.title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Conteúdo do Card */}
      <div className="flex flex-1 flex-col p-6">
        <CardHeader className="p-0 pb-4">
          <div className="mb-3 flex items-center gap-4">
            <Badge variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
              {post.category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1.5 h-4 w-4" />
              {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </div>
          </div>
          
          <CardTitle className="text-xl leading-tight transition-colors duration-300 group-hover:text-primary">
            {post.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 p-0">
          <CardDescription className="text-base">
            {post.description}
          </CardDescription>
        </CardContent>
        
        {/* Link "Ler Mais" que aparece no final do card */}
        <div className="mt-6 flex items-center text-sm font-semibold text-primary">
          Saiba mais
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      {/* Link invisível que cobre todo o card */}
      <a href={post.link} className="absolute inset-0">
        <span className="sr-only">Ver post: {post.title}</span>
      </a>
    </Card>
  );
};

const BlogSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#C8D820]">
            Blog & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compartilhamos conhecimento sobre tecnologias embarcadas, IoT e as últimas inovações do setor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
