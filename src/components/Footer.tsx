import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Sobre Nós": [
      { label: "Quem Somos", href: "/sobre-nos" },
      { label: "Notícias", href: "/blog" }      
    ],
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/embtech" },
    { icon: <Linkedin size={20} />, label: "Linkedin", href: "https://www.linkedin.com/company/embtech/" },
    { icon: <Phone size={20} />, label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=5535999998888&text=Ol%C3%A1%21+Gostaria+de+fazer+um+or%C3%A7amento%21&type=phone_number&app_absent=0" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Você precisa de ajuda?</h3>
              <p className="text-primary-foreground/80">
                Receba atualizações sobre novos produtos e tecnologias
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4 text-[#C8D820]">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className="text-primary-foreground/80 hover:text-primary-glow transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-[#C8D820]">Nossas redes sociais</h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center text-primary-foreground/80 hover:text-primary-glow transition-colors text-sm group"
                  >
                    <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center mr-3 group-hover:bg-primary-glow/20 transition-colors">
                      {social.icon}
                    </span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <img 
                src="images/logo/logoEmbtechBranca.png" 
                alt="EmbTech" 
                className="h-8 w-auto"
              />
              <span className="text-primary-foreground/60 text-sm">
                Copyright EmbTech {currentYear}. Todos os direitos reservados.
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacidade" className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-primary-foreground/80 hover:text-primary-glow transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;