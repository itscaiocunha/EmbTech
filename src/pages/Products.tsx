import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, Layers, HardDrive, Zap, Shield, Puzzle, Headset, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Configuração do link para WhatsApp
const whatsAppNumber = "5535999998888";
const whatsAppMessage = "Olá! Gostaria de fazer um orçamento!";
const encodedMessage = encodeURIComponent(whatsAppMessage);
const links = {
  whatsapp: `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`,
};

// Dados detalhados dos produtos da linha EmbFlex
// Dados detalhados dos produtos da linha EmbFlex, atualizados com as novas informações
const allProducts = [
    {
      id: "cpu-esp32",
      title: "CPU EMBFlex ESP32",
      description: "Hardware com microprocessador Xtensa 32-bit LX6 de até 240MHz.",
      image: "images/produtos/CPUEsp.png",
      longDescription: "Hardware com um microprocessador Xtensa 32-bit LX6 de até 240MHz (4MB ROM, 520KB SRAM, SPI flash externa), oferecendo diversos recursos customizáveis para atender a uma solução embarcada completa, tais como: Wi-Fi, Bluetooth, mDNS, RS-485, memória EEPROM, RTC, sensor de temperatura e barramentos de expansão.",
      specs: [
        "1 Interface RS485/FlexBUS",
        "1 Interface Display TFT Colorido + Touch",
        "1 Interface UART (Programação/debug/aplicação)",
        "2 Microchaves de uso geral",
        "1 Interface JTAG",
        "EEPROM interna com 256Kb",
        "RTC com bateria CR2032",
        "Expansão 24 pinos (SPI/I2C/UART/ADC/DAC/GPIO)",
        "Alimentação 9 a 24Vdc"
      ],
      applications: ["Automação Residencial", "Sensores de IoT", "Dispositivos Vestíveis (Wearables)"]
    },
    {
      id: "cpu-lpc17",
      title: "CPU EMBFlex LPC17",
      description: "Hardware da linha EmbFlex que permite a implementação rápida e fácil de soluções inteligentes.",
      image: "images/produtos/CPULPC.png",
      longDescription: "A CPU LPC17 é um hardware da linha EmbFlex que permite a implementação rápida e fácil de soluções inteligentes e conectadas para equipamentos e processos. Equipada com poderoso microcontrolador ARM Cortex-M3. Suporte para FreeRTOS e desenvolvimento em linguagem C.",
      specs: [
        "Microcontrolador LPC1778 (ARM Cortex-M3) de 120MHz",
        "512KB de memória flash, 96KB de memória SRAM",
        "USB Host e Interface Ethernet 10/100Mbps",
        "Soquete para micro SD Card",
        "Interface RS-485 e Interface CAN 2.0B",
        "RTC com bateria CR2032",
        "Sensor digital de temperatura on-board",
        "Barramentos de expansão (GPIOs, ADC, SPI, I2C, PWM, CAN, UART)"
      ],
      applications: ["Controle de Motores", "CLPs (Controlador Lógico Programável)", "Sistemas de Aquisição de Dados"]
    },
    {
      id: "cpu-som",
      title: "CPU EMBFlex SoM",
      description: "Hardware da linha EmbFlex que permite a criação de soluções computacionais prontas para uso.",
      image: "images/produtos/CPUSoM.png",
      longDescription: "Hardware da linha EmbFlex que permite a criação de soluções computacionais prontas para uso, de tamanho reduzido, alto poder de processamento e presença de várias interfaces industriais e de conectividade. Compatível com módulos Toradex da Família Verdin/Colibri (adquiridos separadamente).",
      specs: [
        "Portas USB (Host/Device) e Ethernet",
        "HDMI (FullHD/4K)",
        "Interface para Display RGB (18bits) + touch resistivo",
        "Micro SD Card e Interface de Áudio (Line OUT/IN, MIC)",
        "2 Interfaces RS-485 e 1 FlexBUS",
        "Barramento de Expansão (GPIOs, CAN, PWM, I2C, SPI, ADC)",
        "RTC com bateria CR2032"
      ],
      applications: ["Interfaces Homem-Máquina (IHM)", "Visão Computacional", "Gateways de IoT"]
    },
    {
      id: "flexcard-io",
      title: "FLEXCard I/O",
      description: "Placa de I/O com entradas/saídas digitais, saídas a relé e entradas analógicas.",
      image: "images/produtos/FlexIO.png",
      longDescription: "Placa de I/O com entradas/saídas digitais, saídas a relé e entradas analógicas. Entradas isoladas com acoplamento óptico. Comunicação Flexbus/Modbus RTU Slave.",
      specs: [
        "Até 8 saídas digitais (NPN, PNP, NPN opto-isolada ou relés)",
        "Até 6 entradas digitais opto-isoladas NPN/PNP",
        "2 entradas analógicas (NTC, 4 a 20mA, 0 a 10V, 0 a 5V)",
        "1 saída analógica de 0 a 10V",
        "Sensor digital de temperatura na placa",
        "Memória EEPROM de 256Kb"
      ],
      applications: ["Automação de Máquinas", "Monitoramento de Processos", "Controle de Atuadores"]
    },
    {
      id: "flexcard-energy",
      title: "FLEXCard Energy",
      description: "Hardware dedicado para medição e análise de qualidade de energia.",
      image: "images/produtos/Energy.png",
      longDescription: "Hardware dedicado para medição e análise de qualidade de energia. Trabalha em rede AC 127/220/380 VAC, monitorando diversos parâmetros de consumo e qualidade da rede. Comunica com qualquer CPU EMBFlex ou Modbus RTU, podendo ser utilizada para medição centralizada ou isolada e diagnóstico de falhas em instalações e equipamentos.",
      specs: [
        "Monitoramento de redes monofásicas e trifásicas",
        "Medição de corrente direta (shunt), TC ou Bobina de Rogowski",
        "Parâmetros: corrente RMS, tensão RMS, potências, energia, frequência, etc.",
        "Distorção harmônica total (THD) de tensão e corrente",
        "Comunicação serial RS-485/FlexBus compatível com Modbus RTU"
      ],
      applications: ["Medidores de Energia Inteligentes", "Análise de Qualidade de Energia", "Gestão de Cargas"]
    },
    {
      id: "flexcard-analog",
      title: "FLEXCard Analog",
      description: "Hardware da linha EMBFlex para aquisição de sinais analógicos.",
      image: "images/produtos/Analog.png",
      longDescription: "Hardware da linha EmbFlex para aquisição de sinais analógicos. Pode trabalhar com diversas configurações atendendo vários ranges de tensões e sensores de temperatura. Ideal para automação de equipamentos com diversos sensores ou construção de datalog multicanal. Comunica com qualquer CPU EMBFlex ou via interface RS-485 (Modbus RTU).",
      specs: [
        "Até 8 entradas analógicas de alta resolução (16 bits)",
        "Até 8 entradas analógicas de 12 bits (NTC, 4 a 20mA, 0 a 10V, 0 a 5V)",
        "Sensor digital de temperatura na placa",
        "Memória EEPROM de 256Kb",
        "Microcontrolador ARM Cortex M0+ 300MHz"
      ],
      applications: ["Controle de Temperatura em Fornos", "Monitoramento de Câmaras Frias", "Instrumentação Científica"]
    },
    {
      id: "accessory-usb",
      title: "Adaptador USB",
      description: "Adaptador USB-Serial para gravação de firmware nas placas EMBFlex.",
      image: "images/produtos/AdapUSB.png",
      longDescription: "Este adaptador facilita a comunicação entre o seu computador e qualquer placa da linha EMBFlex, permitindo a gravação de firmware, depuração de código e visualização de dados via porta serial de forma simples e direta.",
      specs: ["Interface USB-C", "Conversor USB-Serial CH340/FTDI", "LEDs indicadores de TX/RX", "Compatível com Windows, macOS e Linux"],
      applications: ["Desenvolvimento de Firmware", "Depuração de Código", "Interface com o Computador"]
    },
    {
      id: "accessory-din",
      title: "Régua Trilho DIN",
      description: "Suporte para fixação da placa no painel elétrico para montagem em trilho DIN.",
      image: "images/produtos/TrilhoDIN.png",
      longDescription: "Projetado para ambientes industriais, este suporte permite a montagem segura e organizada de qualquer placa EMBFlex em painéis elétricos padrão DIN, garantindo uma instalação limpa e profissional.",
      specs: ["Padrão de montagem DIN 35mm", "Material de alta resistência", "Sistema de trava rápida", "Fácil instalação e remoção"],
      applications: ["Painéis de Automação", "Quadros de Comando", "Instalações Industriais"]
    },
    {
      id: "accessory-display",
      title: "Display TFT Touch",
      description: "Display TFT colorido com touch resistivo compatível com as CPUs EMBFlex.",
      image: "images/produtos/DisplayTFT.png",
      longDescription: "Crie interfaces gráficas ricas e interativas para seus produtos com nosso display TFT colorido. Com touchscreen resistivo, é ideal para IHMs em ambientes industriais, onde o uso de luvas é comum.",
      specs: ["Tamanhos de 3.5”, 4.3” e 7”", "Resolução de até 800x480 pixels", "Touchscreen resistivo de 4 fios", "Interface paralela de alta velocidade"],
      applications: ["Interfaces Homem-Máquina (IHM)", "Painéis de Controle", "Equipamentos com Interface Gráfica"]
    }
  ];


// Componente para a tela de detalhes do produto
const ProductDetail = ({ product, onBack }) => (
  <section className="py-32 bg-background">
    <div className="container mx-auto px-4">
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-8 inline-flex items-center bg-transparent text-black border-2 border-transparent rounded-lg hover:bg-transparent hover:text-black hover:border-primary hover:scale-105 transition-all duration-300"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar para todos os produtos
      </Button>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <img src={product.image} alt={product.title} className="w-full rounded-2xl shadow-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-black/70 mb-8 text-justify">{product.longDescription}</p>
          
          <h3 className="text-2xl font-semibold mb-4">Especificações Técnicas</h3>
          <ul className="space-y-2 mb-8">
            {product.specs.map(spec => (
              <li key={spec} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Aplicações Comuns</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {product.applications.map(app => (
              <Badge key={app} variant="secondary">{app}</Badge>
            ))}
          </div>
          
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button  
              className="text-black"
              style={{backgroundColor: '#C8D820'}}
            >
              Solicitar Orçamento
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);


const EmbFlexPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <ProductDetail product={selectedProduct} onBack={handleBackToList} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Product Catalog Section */}
         <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold">Catálogo de <span className="text-primary">Produtos</span></h1>
                <p className="text-lg text-black/70 mt-2">Explore nossas CPUs, placas de expansão e acessórios.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts.map((product) => (
                    <Card key={product.id} className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ">
                        <div className="aspect-video overflow-hidden"><img src={product.image} alt={product.title} className="h-full w-full object-cover transition-transform duration-300"/></div>
                        <div className="flex flex-1 flex-col p-6">
                            <CardHeader className="p-0 pb-4"><CardTitle>{product.title}</CardTitle></CardHeader>
                            <CardContent className="flex-1 p-0"><CardDescription>{product.description}</CardDescription></CardContent>
                            <CardFooter className="p-0 pt-6">
                                <Button onClick={() => handleProductClick(product)} className="w-full" style={{backgroundColor: '#C8D820', color: 'black'}}>
                                    Ver Detalhes
                                </Button>
                            </CardFooter>
                        </div>
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

export default EmbFlexPage;
