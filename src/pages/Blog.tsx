import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Dados dos posts com conteúdo completo para a página de detalhes
const blogPosts = [
  {
    id: 1,
    title: "Embtech presente na FIEE Smart Future, realizada em São Paulo",
    description: "De 18 a 21 de julho, em São Paulo (SP), acontece a FIEE Smart Future, o maior evento da América Latina para a indústria elétrica, eletrônica e de automação.",
    category: "Evento",
    date: "2023-07-17",
    image: "/images/EventoFIEE.jpg",
    content: `
      <p class="mb-4">De 18 a 21 de julho, em São Paulo (SP), acontece a FIEE Smart Future, Feira Internacional da Indústria Elétrica, Eletrônica, Energia e Automação. Este é o maior evento da América Latina nesta área e a Embtech, empresa de alta tecnologia, que projeta e fabrica soluções eletrônicas embarcadas para controle e automação de máquinas e equipamentos, estará presente.</p>
    `
  },
  {
    id: 2,
    title: "Desenvolvendo soluções embarcadas com a família EMBFlex",
    description: "A Embtech oferece uma família de hardware voltada para o desenvolvimento rápido de soluções embarcadas através das suas placas EMBFlex.",
    category: "Placas Embarcadas",
    date: "2020-07-09",
    image: "/images/placaBlog.jpg",
    content: `
      <p class="mb-4">A Embtech oferece uma família de hardware voltada para desenvolvimento rápido de soluções embarcadas através das suas placas EMBFlex.</p>
      <p class="mb-4">O sistema EMBFlex é formado por uma CPU EMBFlex e, se necessário, algumas placas FLEXCard. Na linha de CPU, oferecemos atualmente três modelos:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Uma CPU ARM baseada no microcontrolador LPC17xx da NXP.</li>
        <li>Uma CPU baseada em computação em módulo, podendo rodar Linux ou Windows embarcado.</li>
        <li>Uma CPU com conectividade sem fio (Wi-Fi/Bluetooth) baseada no ESP32.</li>
      </ul>
      <img src="images/placa1.jpg" alt="CPU EMBFlex LPC17" class="my-6 rounded-lg shadow-md" />
      <img src="images/placa2.jpg" alt="CPU EMBFlex SoM" class="my-6 rounded-lg shadow-md" />
      <img src="images/placa3.jpg" alt="CPU EMBFlex ESP32" class="my-6 rounded-lg shadow-md" />
      <p class="mb-4">De acordo com a aplicação, pode-se adicionar uma ou mais placas FLEXCard conectadas à CPU para realizar aquisição de sinais ou acionamentos de cargas. Isso é feito através do barramento FLEXBUS, que permite ligar até 31 placas do tipo FLEXCard por CPU EMBFlex.</p>
      <p class="mb-4">Na família de FLEXCards, temos placas para diversos tipos de sinais como, por exemplo, entradas e saídas digitais, relés, entradas analógicas e medição com análise de qualidade de energia. Além do hardware, a Embtech oferece todas as bibliotecas de software prontas para que o desenvolvedor possa criar suas aplicações rapidamente, sem ter que escrever o código do zero. Os compiladores disponíveis são, em sua maioria, gratuitos e em linguagem C.</p>
      <p>Se o cliente desejar, pode também contratar o desenvolvimento da aplicação pela Embtech, que vai entregar a solução funcionando. Oferecemos também todo o suporte para desenvolvedores de software que desejam utilizar os hardwares da família EMBFlex na criação de soluções embarcadas e IoT. Para mais informações e cotações, entre em contato com nossa equipe.</p>
    `
  },
  {
    id: 3,
    title: "Embtech lança nova linha de produtos na FIEE Smart Future",
    description: "De 23 a 26 de julho, em São Paulo (SP), acontece a FIEE Smart Future, onde a Embtech apresentará suas inovações e nova linha de produtos.",
    category: "Lançamento",
    date: "2019-07-19",
    image: "/images/linhaProdutos.jpg",
    content: `
      <p class="mb-4">De 23 a 26 de julho, em São Paulo (SP), acontece a FIEE Smart Future, Feira Internacional da Indústria Elétrica, Eletrônica, Energia e Automação. Este é o maior evento da América Latina nesta área e a Embtech, empresa de alta tecnologia que projeta e fabrica soluções eletrônicas embarcadas para controle e automação de máquinas e equipamentos, estará presente.</p>
      <p class="mb-4">A FIEE acontece a cada dois anos, e esta é a segunda vez que a Embtech participa. O objetivo é lançar a nova linha de produtos, Embflex, direcionada para desenvolvedores. São seis novas placas, uma delas desenvolvida em parceria com a suíça Toradex, especialista em módulos de processamento.</p>
      <h3 class="text-2xl font-bold my-6">Embflex</h3>
      <img src="images/fiee.jpg" alt="Placas da linha Embflex" class="my-6 rounded-lg shadow-md" />
      <p class="mb-4">Como o próprio nome sugere, estas placas podem ser combinadas para qualquer necessidade. O objetivo é que os programadores e integradores montem suas próprias soluções eletrônicas. “O céu é o limite para os makers desenvolverem suas soluções. Cada Flexcard (placa) possui características específicas, como se fossem peças de um quebra-cabeças que se complementam para atender à necessidade de automação e controle desejada”, explica a diretora geral da Embtech, Vanessa Miguel.</p>
      <p>A Embflex pode ser aplicada nos mais diversos setores, como industrial, hospitalar, agronegócio, logística, máquinas e Internet of Things (IoT). A intenção da empresa é lançar no mínimo cinco novas placas por ano, para abranger mercados ainda maiores.</p>
    `
  },
  {
    id: 4,
    title: "Máquinas Conectadas - A Revolução da IoT na Indústria",
    description: "Uma grande mudança tecnológica vem ocorrendo nos sistemas digitais de controle de máquinas. Assim como as pessoas, equipamentos também caminham para estarem sempre conectados.",
    category: "IoT",
    date: "2019-07-18",
    image: "images/iot.jpg",
    content: `
      <p class="mb-4">Uma grande mudança tecnológica vem ocorrendo nos sistemas digitais de controle de máquinas e equipamentos. Assim como as pessoas, máquinas e equipamentos também caminham para estarem sempre conectados, trocando informações e permitindo um controle muito mais inteligente e eficiente. É a era da Internet das Coisas (IoT) transformando a indústria.</p>
      <img src="images/iot2.jpg" alt="Indústria 4.0" class="my-6 rounded-lg shadow-md" />
      <p class="mb-4">Com a IoT, é possível monitorar em tempo real o desempenho de uma máquina, prever falhas antes que aconteçam (manutenção preditiva), otimizar o consumo de energia e coletar dados valiosos para a tomada de decisões estratégicas. A Embtech está na vanguarda dessa revolução, desenvolvendo soluções que embarcam inteligência e conectividade em seus produtos.</p>
      <h3 class="text-2xl font-bold my-6">Benefícios da Conectividade</h3>
      <img src="images/iot3.jpg" alt="Dashboard de monitoramento IoT" class="my-6 rounded-lg shadow-md" />
      <p>A conexão de máquinas e equipamentos abre um leque de possibilidades, desde a gestão remota de uma linha de produção até a criação de novos modelos de negócio baseados em serviços. A capacidade de coletar e analisar dados de operação permite um ciclo de melhoria contínua, aumentando a produtividade e a competitividade no mercado.</p>
    `
  }
];

// Componente para a página de detalhes de um post
const PostDetail = ({ post, onBack }) => (
  <section className="py-32 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-8 inline-flex items-center bg-transparent text-black border-2 border-transparent rounded-lg hover:bg-transparent hover:text-black hover:border-primary hover:scale-105 transition-all duration-300"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para Blog
      </Button>
      <article>
        <header className="mb-8">
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8" />
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="default" className="bg-primary/10 text-primary">{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1.5 h-4 w-4" />
              {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">{post.title}</h1>
        </header>
        <div 
          className="prose lg:prose-xl max-w-none text-lg text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  </section>
);

// Componente para a lista de posts do blog
const BlogList = ({ posts, onPostClick }) => (
  <>
    {/* Hero Section */}
    <section className="pt-32 pb-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Blog & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Compartilhamos conhecimento sobre tecnologias embarcadas, IoT e as últimas inovações do setor.
          </p>
        </div>
      </div>
    </section>

    {/* Blog Grid */}
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <CardHeader className="p-0 pb-4">
                  <div className="mb-3 flex items-center gap-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1.5 h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-0">
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-0 pt-6">
                  <Button onClick={() => onPostClick(post)} className="w-full" style={{backgroundColor: '#C8D820', color: 'black'}}>
                    Ler Post Completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </>
);


const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-background text-justify">
      <Navigation />
      <main>
        {selectedPost ? (
          <PostDetail post={selectedPost} onBack={handleBackToList} />
        ) : (
          <BlogList posts={blogPosts} onPostClick={handlePostClick} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
