import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies | Zenth Marketing",
  description: "Política de Cookies da Zenth Marketing. Saiba como utilizamos cookies em nosso site e como gerenciar suas preferências.",
  alternates: {
    canonical: "https://zenthmarketing.com/cookies",
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Política de Cookies</h1>
        <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. O que são Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Como Utilizamos Cookies</h2>
            <p className="text-muted-foreground mb-4">
              A Zenth Marketing utiliza cookies para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Garantir o funcionamento adequado do site</li>
              <li>Melhorar a experiência do usuário</li>
              <li>Analisar como os visitantes utilizam nosso site</li>
              <li>Personalizar conteúdo e anúncios</li>
              <li>Lembrar suas preferências e configurações</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Tipos de Cookies que Utilizamos</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">3.1 Cookies Essenciais</h3>
                <p className="text-muted-foreground mb-2">
                  Estes cookies são necessários para o funcionamento do site e não podem ser desativados. Eles geralmente são definidos apenas em resposta a ações feitas por você, como definir preferências de privacidade, fazer login ou preencher formulários.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.2 Cookies de Análise</h3>
                <p className="text-muted-foreground mb-2">
                  Utilizamos cookies de análise para entender como os visitantes interagem com nosso site. Esses cookies nos ajudam a melhorar o site coletando e relatando informações sobre como você o utiliza.
                </p>
                <p className="text-muted-foreground">
                  Podemos utilizar serviços de terceiros como Google Analytics para esse fim. Esses serviços podem usar cookies próprios para coletar informações sobre seu uso do site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.3 Cookies de Funcionalidade</h3>
                <p className="text-muted-foreground mb-2">
                  Estes cookies permitem que o site forneça funcionalidades e personalização aprimoradas. Eles podem ser definidos por nós ou por provedores de serviços terceirizados cujos serviços adicionamos às nossas páginas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.4 Cookies de Marketing</h3>
                <p className="text-muted-foreground mb-2">
                  Estes cookies podem ser definidos através do nosso site por nossos parceiros de publicidade. Eles podem ser usados para criar um perfil do seu interesse e mostrar anúncios relevantes em outros sites.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cookies de Terceiros</h2>
            <p className="text-muted-foreground mb-4">
              Alguns cookies são colocados por serviços de terceiros que aparecem em nossas páginas. Não temos controle sobre esses cookies. Você deve verificar os sites de terceiros para mais informações sobre esses cookies.
            </p>
            <p className="text-muted-foreground mb-4">
              Serviços de terceiros que podem utilizar cookies em nosso site incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Google Analytics - para análise de tráfego do site</li>
              <li>Redes sociais - para compartilhamento de conteúdo</li>
              <li>Ferramentas de marketing - para rastreamento de conversões</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Como Gerenciar Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que sejam colocados. No entanto, se você fizer isso, pode ter que ajustar manualmente algumas preferências toda vez que visitar um site e alguns serviços e funcionalidades podem não funcionar.
            </p>
            <p className="text-muted-foreground mb-4">
              Para gerenciar cookies em diferentes navegadores:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
              <li><strong>Mozilla Firefox:</strong> Opções → Privacidade e segurança → Cookies e dados do site</li>
              <li><strong>Safari:</strong> Preferências → Privacidade → Cookies e dados de sites</li>
              <li><strong>Microsoft Edge:</strong> Configurações → Cookies e permissões de site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Opt-out de Cookies de Análise</h2>
            <p className="text-muted-foreground mb-4">
              Você pode optar por não participar do Google Analytics visitando a página de opt-out do Google Analytics:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Alterações nesta Política</h2>
            <p className="text-muted-foreground mb-4">
              Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta página periodicamente para se manter informado sobre nosso uso de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:
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

