import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Check, Target, Zap } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Dados dos Cases de Sucesso atualizados
const allCases = [
    {
      id: "fornos-industriais",
      title: "Solução para Fornos Profissionais e Industriais",
      description: "Placas eletrônicas para controle e automação de fornos, garantindo precisão e eficiência no processo.",
      image: "images/fornos.png",
      longDescription: "Possuímos soluções eletrônicas para os seguintes fornos profissionais e industriais:",
      features: [
          { title: "Básicos", description: "Placas eletrônicas para controle e automação de tempo, temperatura e funções específicas para fornos básicos e combinados profissionais. Placa otimizada para realizar todas as funções do equipamento." },
          { title: "Lastro", description: "Placas para controle de tempo e temperatura do teto e do lastro separadamente, com leitura de sensores tipo termopar. Acionamento em estado sólido e controle de vapor automático." },
          { title: "Programáveis", description: "Placa microcontrolada com display de LCD gráfico, suporte multi-idioma, controle de nível de vapor e caldeira, e capacidade de criação e armazenamento de receitas com até seis passos cada uma." },
          { title: "Gastronomia (TSi)", description: "Placas para central de cocção inteligente com microcontrolador ARM Cortex, display gráfico colorido de 7” com touch, rede EMBNET (CAN), leitura de termopares de alta resolução e porta USB para importação/exportação de receitas e atualizações." },
          { title: "Speed Ovens", description: "Solução com placas em rede EMBNET (CAN), microcontroladores ARM Cortex, display de 5” com touch capacitivo, gerenciamento de micro-ondas e convecção forçada, e porta Ethernet para conectividade em nuvem." }
      ]
    },
    {
      id: "secador-cafe",
      title: "Solução para Secador de Café",
      description: "Sistema com microcontrolador ARM Cortex para gerenciamento preciso da temperatura da fonte de calor.",
      image: "images/secadoraCafe.png",
      longDescription: "Sistema eletrônico de controle do secador de café. Utiliza microcontrolador ARM Cortex de alta velocidade de processamento, gerenciando a temperatura da fonte de calor, que pode ser por sistema de caldeira ou sistema de palha.",
      features: [
        "Utiliza sensor com tecnologia sem fio ZigBee instalado no cesto rotativo.",
        "Sensor alimentado por bateria de lítio.",
        "Realiza medição de temperatura com sensor digital de alta precisão.",
        "Permite a programação de receitas de secagem para atender as peculiaridades de cada produtor."
      ]
    },
    {
      id: "refrigerador-vacinas",
      title: "Solução para Refrigerador de Bolsas de Sangue e Vacinas",
      description: "Placas para controle, automação e programação de refrigeradores de bolsas de sangue, vacinas e medicamentos.",
      image: "images/refrigeradorSangue.png",
      longDescription: "Placas eletrônicas para controle, automação e programação de armazenador/refrigerador de bolsas de sangue, vacinas e medicamento oncológicos que necessitam de processos rígidos de controle de temperatura e umidade.",
      features: [
        "Compostas por IHM de 7 polegadas.",
        "Touch screen colorida.",
        "Funções inteligentes de armazenamento de dados.",
        "Tratamento e envio de dados para monitoramento."
      ]
    },
    {
      id: "incubadora-ovos",
      title: "Solução para Incubadora de Ovos",
      description: "Placas para controle, automação e programação de incubadoras de ovos de grande porte, com IHM de 7 polegadas.",
      image: "images/incubadora.png",
      longDescription: "Placas eletrônicas para controle, automação e programação de incubadoras de ovos de grande porte.",
      features: ["Compostos por IHM de 7 polegadas touch screen colorida.", "Funções inteligentes de armazenamento, tratamento e consulta de dados."],
    },
    {
      id: "pesadora-industrial",
      title: "Solução para Pesadora e Ensacadora Industrial",
      description: "Solução composta por placa eletrônica IHM e potência, com display colorido e touch resistivo.",
      image: "images/pesadora.png",
      longDescription: "Solução composta por placa eletrônica IHM e potência. Display colorido 3.5” TFT e touch resistivo.",
      features: ["Placa de potência com saídas em estado sólido para acionamento de bobinas de vibração.", "Leitura de célula de carga, com precisão para dosagem automática de produtos.", "Acionamento de motor DC com sistema de freio eletrônico e controle de velocidade por PWM.", "Possui parâmetros configuráveis: receitas, mensagens de falhas e contadores de operação."],
    },
    {
      id: "jardins-verticais",
      title: "Solução para Jardins Verticais",
      description: "Controlador eletrônico para automação e controle de regas de jardim vertical de acordo com estações do ano.",
      image: "images/controladorJardim.png",
      longDescription: "Controlador eletrônico para automação e controle de regas de jardim vertical de acordo com estações do ano.",
      features: ["Controle com data e hora programadas.", "Acionamento de bomba de irrigação e controle do volume de água.", "Sistema de detecção de falta d´água com alarme.", "Interface intuitiva com display LCD 16x2 alfanumérico."],
    },
    {
      id: "camara-climatica",
      title: "Controle para Câmara Climática de Fermentação",
      description: "Placa eletrônica com sensor integrado de umidade e temperatura para fermentação de massas e pães.",
      image: "images/camaraClimatica.png",
      longDescription: "Placa eletrônica com sensor integrado digital de umidade e temperatura, gerenciando com precisão a fermentação, sem perda de umidade. Data/hora com programação de padeiro noturno, permitindo inverter a refrigeração para aquecimento, dando início a fermentação controlada. Possui display alfanumérico, com mensagens intuitivas. Gerenciamento de reservatório para geração de umidade, com sensor de nível e controle de reabastecimento de água.",
      features: ["Sensor digital de umidade e temperatura integrado.", "Programação de padeiro noturno (refrigeração para aquecimento).", "Display alfanumérico com mensagens intuitivas.", "Gerenciamento de reservatório de umidade com sensor de nível."],
    },
    {
      id: "trocador-calor-piscina",
      title: "Solução para Trocador de Calor de Piscinas",
      description: "Gerenciamento completo para bomba de calor utilizada em aquecimento de piscinas e Spas.",
      image: "images/trocadorCalor.png",
      longDescription: "Gerenciamento completo para bomba de calor utilizada em aquecimento de piscinas e Spa. Duas placas, compostas por painel e unidade de potência, formam o conjunto eletrônico, além de três sensores de temperatura. Gerencia a filtragem de acordo com a programação do usuário. Controla o aquecimento, mantendo a temperatura desejada programada, inclusive em dias da semana, reduzindo o consumo de energia. Sistema de segurança de pressão alta e baixa, ciclo de degelo automático e função “dormir” para reduzir barulho durante horário de sono do usuário. Display alfanumérico com mensagens intuitivas. Sistema de diagnóstico com mensagens de falhas.",
      features: ["Gerencia filtragem e aquecimento com programação semanal.", "Sistema de segurança com monitoramento de pressão.", "Ciclo de degelo automático e função 'dormir'.", "Display alfanumérico com sistema de diagnóstico de falhas."],
    },
    {
      id: "lava-loucas-profissional",
      title: "Solução para Lava-Louças Profissionais",
      description: "Placa eletrônica para interface, controle e automação de lava-louças de alta performance.",
      image: "images/lavaLouca.png",
      longDescription: "Placa eletrônica para interface, controle e automação de lava-louça profissional. Gerencia todo ciclo de abastecimento de água, aquecimento e ciclo de lavagem. Suporta programação de tempos e sequência de acionamento de acordo com modelo do equipamento.",
      features: ["Gerenciamento completo do ciclo (abastecimento, aquecimento, lavagem).", "Suporte para programação de tempos e sequências.", "Adaptável a diferentes modelos de equipamento."],
    },
    {
      id: "seladora-vacuo",
      title: "Solução para Seladoras a Vácuo Profissionais",
      description: "Placas eletrônicas para controle, automação e programação de seladoras a vácuo.",
      image: "images/seladoraVacuo.png",
      longDescription: "Placas eletrônicas para controle, automação e programação de seladoras à vácuo, com possibilidade de armazenamento de receitas de selagem. A Placa aciona todas as cargas do equipamento, como bomba de vácuo, válvulas e solda da embalagem. Garante o ciclo e o tempo no processo. Permite que o usuário programe e utilize uma determinada receita de acordo com o produto que esteja embalando. Possui controle de troca de óleo da bomba de vácuo de acordo com horas de utilização do equipamento.",
      features: ["Armazenamento de receitas de selagem.", "Controle total do equipamento (bomba, válvulas, solda).", "Programação de receitas de acordo com o produto.", "Controle de manutenção da bomba de vácuo por horas de uso."],
    },
    {
      id: "batedeira-profissional",
      title: "Solução para Batedeiras Profissionais",
      description: "Placas eletrônicas para controle e automação de batedeiras profissionais de alta capacidade.",
      image: "images/batedeiras.png",
      longDescription: "Placas eletrônicas para controle e automação de batedeiras profissionais. Gerenciamento de velocidade e tempo de acordo com os ajustes do operador. Saída analógica 0-10V para controle do inversor de frequência. Sistema de segurança com bloqueio de acionamento para atender as normas de segurança.",
      features: ["Gerenciamento de velocidade e tempo.", "Saída analógica 0-10V para controle de inversor.", "Sistema de segurança com bloqueio de acionamento."],
    },
    {
      id: "amassadeira-profissional",
      title: "Solução para Amassadeiras Profissionais",
      description: "Placas eletrônicas para controle e automação de amassadeiras industriais.",
      image: "images/amassadeira.png",
      longDescription: "Placas eletrônicas para controle e automação de amassadeiras profissionais. Interface simples para operação do equipamento, alimentação em 24V para atender norma de segurança NR10, e acionamento do motor de acordo com ciclo programado.",
      features: ["Interface de operação simplificada.", "Alimentação em 24V (Norma NR10).", "Acionamento do motor por ciclo programado."],
    },
    {
      id: "adega-vinho",
      title: "Solução para Adegas de Vinho",
      description: "Placa eletrônica para interface, controle e automação de adegas de vinho climatizadas.",
      image: "images/adega.png",
      longDescription: "Placa eletrônica para interface, controle e automação para adegas, mantendo a temperatura ideal para a conservação dos vinhos.",
      features: ["Controle preciso de temperatura", "Interface de usuário", "Automação de refrigeração", "Design customizável"],
    },
    {
      id: "forno-cura-ceramica",
      title: "Solução para Fornos de Cura de Cerâmica",
      description: "Placa eletrônica para interface, controle e automação de fornos de cura de cerâmica.",
      image: "images/fornosCeramica.png",
      longDescription: "Placa eletrônica para interface, controle e automação de fornos de cura de cerâmica, garantindo um processo preciso.",
      features: ["Controle de temperatura e tempo", "Programação de rampas e patamares", "Interface de alta precisão", "Automação do ciclo de cura"],
    },
    {
      id: "litotriptor",
      title: "Solução para Equipamento Médico Litotriptor",
      description: "Placa eletrônica para interface, controle e automação de equipamento médico litotriptor.",
      image: "images/equipMed.png",
      longDescription: "Placa eletrônica para interface, controle e automação de equipamento médico litotriptor. Controle operacional do equipamento com interface por display LCD alfanumérico e gerenciamento do acionamento das válvulas pneumáticas de acordo com a frequência desejada.",
      features: ["Controle operacional via display LCD alfanumérico.", "Gerenciamento de acionamento de válvulas pneumáticas.", "Controle de frequência de operação."],
    },
    {
      id: "seladora-termica",
      title: "Solução para Seladora Térmica de Embalagens",
      description: "Placa eletrônica com tecnologia de teclado capacitivo para controle e automação.",
      image: "images/seladoraTermica.png",
      longDescription: "Placa eletrônica com tecnologia de teclado capacitivo para controle, automação e programação de seladoras térmicas de embalagens.",
      features: ["Teclado capacitivo", "Controle de temperatura e tempo", "Automação de selagem", "Interface moderna"],
    },
    {
      id: "sensor-ozonio",
      title: "Solução para Sensor de Ozônio",
      description: "Placa eletrônica para automação e controle de geração de ozônio para sanitização.",
      image: "images/sensorOzo.jpg",
      longDescription: "Placa eletrônica para automação e controle de geração de ozônio. Possui fonte chaveada embarcada na própria placa. Leitura e condicionamento de sensor de ozônio. Controle de acionamento do gerador de ozônio por horário e limite configuráveis. Utilizado em aplicações de sanitização com ozônio.",
      features: ["Fonte chaveada embarcada.", "Leitura e condicionamento de sensor de ozônio.", "Controle de acionamento por horário e limite.", "Ideal para aplicações de sanitização."],
    }
  ];

// Componente para a tela de detalhes do case
const CaseDetail = ({ caseItem, onBack }) => (
  <section className="py-32 bg-background">
    <div className="container mx-auto px-4">
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-8 inline-flex items-center bg-transparent text-black border-2 border-transparent rounded-lg hover:bg-transparent hover:text-black hover:border-primary hover:scale-105 transition-all duration-300"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para todos os cases
      </Button>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <img src={caseItem.image} alt={caseItem.title} className="w-full rounded-2xl shadow-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{caseItem.title}</h1>
          <p className="text-lg text-black/70 mb-8">{caseItem.longDescription}</p>
          
          <h3 className="text-2xl font-semibold mb-4 flex items-center"><Target className="h-6 w-6 mr-3 text-primary"/> Detalhes da Solução</h3>
          <div className="space-y-4 mb-8">
            {caseItem.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                {typeof feature === 'object' ? (
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-black/70">{feature.description}</p>
                  </div>
                ) : (
                  <span>{feature}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Componente para a lista de cases com paginação
const CaseList = ({ cases, onCaseClick, currentPage, totalPages, onPageChange }) => (
  <>
    {/* Hero Section */}
    <section className="pt-32 pb-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Cases de <span style={{color: '#C8D820'}}>Sucesso</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore alguns dos projetos que desenvolvemos em parceria com nossos clientes, transformando desafios em soluções inovadoras.
          </p>
        </div>
      </div>
    </section>

    {/* Cases Grid */}
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <Card key={caseItem.id} className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img src={caseItem.image} alt={caseItem.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <CardHeader className="p-0 pb-4"><CardTitle>{caseItem.title}</CardTitle></CardHeader>
                <CardContent className="flex-1 p-0"><CardDescription>{caseItem.description}</CardDescription></CardContent>
                <CardFooter className="p-0 pt-6">
                  <Button onClick={() => onCaseClick(caseItem)} className="w-full" style={{backgroundColor: '#C8D820', color: 'black'}}>
                    Saber Mais
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-16">
          <Button variant="outline" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Anterior
          </Button>
          <span className="text-lg font-medium">{currentPage} / {totalPages}</span>
          <Button variant="outline" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Próxima <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  </>
);

const CasesPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 6;
  const totalPages = Math.ceil(allCases.length / casesPerPage);

  const handleCaseClick = (caseItem) => {
    setSelectedCase(caseItem);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedCase(null);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = allCases.slice(indexOfFirstCase, indexOfLastCase);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {selectedCase ? (
          <CaseDetail caseItem={selectedCase} onBack={handleBackToList} />
        ) : (
          <CaseList 
            cases={currentCases} 
            onCaseClick={handleCaseClick}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CasesPage;
