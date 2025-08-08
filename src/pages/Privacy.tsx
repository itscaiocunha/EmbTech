import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Shield, FileText, User, Lock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-5xl font-bold mb-6">
                Política de Privacidade
              </h1>
              <p className="text-lg text-muted-foreground">
                Seu compromisso com a transparência e a segurança dos seus dados é nossa prioridade. Entenda como coletamos, usamos e protegemos suas informações.
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose lg:prose-xl max-w-none text-lg text-muted-foreground text-justify space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><FileText className="mr-3"/>Introdução</h2>
                <p>A presente Política de Privacidade descreve a forma como a Embtech Soluções Eletrônicas (“Embtech”, “nós”) coleta, utiliza, armazena, compartilha e protege os dados pessoais dos usuários (“Usuário”, “você”) que visitam nosso site e utilizam nossos serviços. Nosso compromisso é garantir a privacidade e a segurança das suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><User className="mr-3"/>Coleta de Dados</h2>
                <p>Coletamos informações que você nos fornece diretamente ao entrar em contato conosco através de formulários, e-mail ou telefone. Esses dados podem incluir:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Dados de Identificação:</strong> Nome, sobrenome, cargo, empresa.</li>
                  <li><strong>Dados de Contato:</strong> E-mail, número de telefone, endereço.</li>
                  <li><strong>Dados do Projeto:</strong> Informações e especificações sobre o projeto ou consulta que você nos envia.</li>
                </ul>
                <p className="mt-4">Também podemos coletar dados de navegação de forma automática, como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência, para fins de análise e melhoria do nosso site.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><Check className="mr-3"/>Uso das Informações</h2>
                <p>As informações coletadas são utilizadas para as seguintes finalidades:</p>
                 <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Responder às suas solicitações de contato, orçamento e informações.</li>
                  <li>Fornecer e melhorar nossos produtos e serviços.</li>
                  <li>Comunicar sobre atualizações, eventos e novidades relevantes da Embtech, caso você opte por receber nossas comunicações.</li>
                  <li>Cumprir obrigações legais e regulatórias.</li>
                  <li>Analisar o desempenho do nosso site para aprimorar a experiência do usuário.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary flex items-center"><Lock className="mr-3"/>Segurança e Armazenamento dos Dados</h2>
                <p>A Embtech adota medidas técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados, perda, alteração ou destruição. Todas as informações confidenciais de projetos de clientes são tratadas sob rigorosos acordos de confidencialidade (NDA).</p>
                <p className="mt-4">Seus dados são armazenados em servidores seguros e serão mantidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, ou para cumprir requisitos legais.</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Seus Direitos</h2>
                <p>Como titular dos dados, você tem o direito de solicitar o acesso, a correção, a anonimização, o bloqueio ou a eliminação de seus dados pessoais. Para exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@embtech.com.br" className="text-primary hover:underline">contato@embtech.com.br</a>.</p>
              </div>

               <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Alterações na Política</h2>
                <p>Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como estamos protegendo suas informações. A data da última atualização será sempre indicada no final deste documento.</p>
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

export default PrivacyPolicyPage;
