import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, FileText, User, Lock, Copyright, AlertTriangle, Link, Scale } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfUsePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl font-bold mb-6">
                Termos de Uso
              </h1>
              <p className="text-lg text-muted-foreground">
                Ao acessar e utilizar nosso site, você concorda em cumprir os seguintes termos e condições. Por favor, leia-os com atenção.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose lg:prose-xl max-w-none text-lg text-muted-foreground text-justify space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><Check className="mr-3"/>1. Aceitação dos Termos</h2>
                <p>Ao navegar neste site, de propriedade da Embtech Soluções Eletrônicas (“Embtech”), você concorda com os Termos de Uso aqui estabelecidos. Se você não concorda com estes termos, por favor, não utilize o nosso site. Reservamo-nos o direito de alterar estes termos a qualquer momento, e o uso contínuo do site após tais alterações constitui sua aceitação dos novos termos.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><User className="mr-3"/>2. Uso do Site</h2>
                <p>O conteúdo deste site, incluindo textos, imagens, gráficos e outros materiais, destina-se a fins informativos sobre nossos produtos e serviços. Você concorda em não utilizar o site para qualquer finalidade ilegal ou proibida por estes termos. É proibido usar o site de qualquer maneira que possa danificar, desabilitar, sobrecarregar ou prejudicar o site ou interferir no uso de qualquer outra parte.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><Copyright className="mr-3"/>3. Propriedade Intelectual</h2>
                <p>Todo o conteúdo presente neste site, incluindo, mas não se limitando a, textos, logotipos, imagens, ícones e software, é de propriedade exclusiva da Embtech ou de seus parceiros e é protegido pelas leis de direitos autorais e propriedade industrial. A reprodução, modificação, distribuição ou qualquer outra forma de utilização do conteúdo, total ou parcial, sem a prévia autorização por escrito da Embtech, é estritamente proibida.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><AlertTriangle className="mr-3"/>4. Limitação de Responsabilidade</h2>
                <p>A Embtech se esforça para manter as informações do site precisas e atualizadas, mas não garante que o conteúdo esteja livre de erros ou omissões. O uso das informações contidas no site é de sua inteira responsabilidade. Em nenhuma circunstância a Embtech será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou da incapacidade de usar este site.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><Link className="mr-3"/>5. Links para Sites de Terceiros</h2>
                <p>Nosso site pode conter links para sites de terceiros. Esses links são fornecidos apenas para sua conveniência. A Embtech não endossa nem se responsabiliza pelo conteúdo de sites de terceiros e não faz qualquer representação sobre a precisão ou a qualidade do conteúdo neles contido.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><Scale className="mr-3"/>6. Legislação Aplicável</h2>
                <p>Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da comarca de Poços de Caldas, Minas Gerais, para dirimir quaisquer questões oriundas do uso deste site.</p>
              </div>

               <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Contato</h2>
                <p>Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:contato@embtech.com.br" className="text-primary hover:underline">contato@embtech.com.br</a>.</p>
                <p className="mt-8 text-sm"><strong>Última atualização:</strong> 08 de agosto de 2025</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;
