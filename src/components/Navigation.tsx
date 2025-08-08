import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Configuração do link para WhatsApp
const whatsAppNumber = "5535999998888";
const whatsAppMessage = "Olá! Gostaria de fazer um orçamento para um produto EmbFlex.";
const encodedMessage = encodeURIComponent(whatsAppMessage);
const links = {
  whatsapp: `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`,
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    // Define o path ativo com base na URL atual quando o componente é montado
    setActivePath(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/produtos", label: "Produtos" },
    { href: "/solucoes", label: "Serviços" },
    { href: "/cases", label: "Cases" },
    { href: "/blog", label: "Blog" },
    // { href: "/contato", label: "Contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img 
                src="https://emb-tech.vercel.app/images/logoEmbtech.png"
                alt="EmbTech" 
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`transition-colors ${
                  activePath === link.href 
                  ? "text-primary font-semibold" 
                  : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button  
                    variant="hero" className="w-full"
                  >
                    Fale Conosco
                  </Button>
                </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                 <a 
                    key={link.href}
                    href={link.href} 
                    className={`transition-colors ${
                    activePath === link.href 
                    ? "text-primary font-semibold" 
                    : "text-foreground hover:text-primary"
                    }`}
                >
                    {link.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Button  
                    variant="hero" className="w-full"
                  >
                    Fale Conosco
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;