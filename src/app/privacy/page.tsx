import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Zenth Marketing",
  description: "Política de Privacidade da Zenth Marketing. Saiba como coletamos, usamos e protegemos suas informações pessoais.",
  alternates: {
    canonical: "https://zenthmarketing.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p className="text-muted-foreground mb-4">
              A Zenth Marketing ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade e segurança das informações pessoais de nossos clientes e visitantes do site. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nosso site ou serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
            <p className="text-muted-foreground mb-4">Coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Informações de Contato:</strong> Nome, e-mail, telefone e nome da empresa quando você preenche nossos formulários de contato.</li>
              <li><strong>Informações de Navegação:</strong> Dados sobre como você interage com nosso site, incluindo páginas visitadas, tempo de permanência e origem do tráfego.</li>
              <li><strong>Informações Técnicas:</strong> Endereço IP, tipo de navegador, sistema operacional e informações do dispositivo.</li>
              <li><strong>Cookies:</strong> Utilizamos cookies para melhorar sua experiência de navegação. Para mais informações, consulte nossa Política de Cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Como Usamos suas Informações</h2>
            <p className="text-muted-foreground mb-4">Utilizamos suas informações pessoais para:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Responder às suas solicitações e fornecer nossos serviços de marketing digital</li>
              <li>Enviar comunicações relacionadas aos nossos serviços, incluindo atualizações e newsletters</li>
              <li>Melhorar nosso site e serviços com base no feedback dos usuários</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Prevenir fraudes e garantir a segurança de nossos sistemas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-muted-foreground mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir obrigações legais ou responder a processos judiciais</li>
              <li>Com prestadores de serviços que nos auxiliam na operação do site (sob acordos de confidencialidade)</li>
              <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Segurança dos Dados</h2>
            <p className="text-muted-foreground mb-4">
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
            <p className="text-muted-foreground mb-4">Você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Acessar suas informações pessoais que possuímos</li>
              <li>Solicitar a correção de informações incorretas ou incompletas</li>
              <li>Solicitar a exclusão de suas informações pessoais</li>
              <li>Opor-se ao processamento de suas informações pessoais</li>
              <li>Solicitar a portabilidade de seus dados</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Para exercer esses direitos, entre em contato conosco através do e-mail: <a href="mailto:contato@zenthmarketing.com" className="text-primary hover:underline">contato@zenthmarketing.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Retenção de Dados</h2>
            <p className="text-muted-foreground mb-4">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Alterações nesta Política</h2>
            <p className="text-muted-foreground mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas publicando a nova política nesta página e atualizando a data de "Última atualização".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos suas informações pessoais, entre em contato conosco:
            </p>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong>Zenth Marketing</strong></p>
              <p className="text-muted-foreground mb-2">E-mail: <a href="mailto:contato@zenthmarketing.com" className="text-primary hover:underline">contato@zenthmarketing.com</a></p>
              <p className="text-muted-foreground">Telefone: (17) 99284-1484</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

