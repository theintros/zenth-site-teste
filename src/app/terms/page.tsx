import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Serviço | Zenth Marketing",
  description: "Termos de Serviço da Zenth Marketing. Leia os termos e condições de uso de nossos serviços de marketing digital.",
  alternates: {
    canonical: "https://zenthmarketing.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Termos de Serviço</h1>
        <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground mb-4">
              Ao acessar e utilizar o site da Zenth Marketing ("Site") e nossos serviços, você concorda em cumprir e estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
            <p className="text-muted-foreground mb-4">
              A Zenth Marketing oferece serviços de marketing digital, incluindo mas não limitado a:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Gestão de tráfego pago (Meta Ads, Google Ads)</li>
              <li>Análise de dados e relatórios</li>
              <li>Estratégia de marketing digital</li>
              <li>Posicionamento de marca</li>
              <li>Automação de marketing</li>
              <li>Desenvolvimento de sites e landing pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Uso do Site</h2>
            <p className="text-muted-foreground mb-4">Você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Fornecer informações precisas e atualizadas ao utilizar nossos serviços</li>
              <li>Não utilizar o site para fins ilegais ou não autorizados</li>
              <li>Não tentar acessar áreas restritas do site sem autorização</li>
              <li>Não interferir ou interromper o funcionamento do site</li>
              <li>Não transmitir vírus, malware ou código malicioso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground mb-4">
              Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da Zenth Marketing ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais e outras leis de propriedade intelectual. Você não pode reproduzir, distribuir ou criar obras derivadas sem nossa autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contratos de Serviço</h2>
            <p className="text-muted-foreground mb-4">
              Quando você contrata nossos serviços, será estabelecido um contrato específico que detalhará o escopo dos serviços, prazos, valores e outras condições. Este contrato específico prevalecerá sobre estes Termos de Serviço em caso de conflito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Pagamentos e Reembolsos</h2>
            <p className="text-muted-foreground mb-4">
              Os valores dos serviços serão acordados em contrato específico. Pagamentos devem ser realizados conforme o cronograma estabelecido. Políticas de reembolso serão definidas em cada contrato de serviço individual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground mb-4">
              A Zenth Marketing não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou impossibilidade de uso de nossos serviços</li>
              <li>Perda de dados, receitas ou oportunidades de negócio</li>
              <li>Resultados específicos de campanhas de marketing, que dependem de diversos fatores externos</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Nossa responsabilidade total não excederá o valor pago pelos serviços no período de 12 meses anteriores ao evento que deu origem à reivindicação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Indenização</h2>
            <p className="text-muted-foreground mb-4">
              Você concorda em indenizar e isentar a Zenth Marketing de qualquer reivindicação, dano, perda, responsabilidade e despesa (incluindo honorários advocatícios) decorrentes de seu uso do site ou violação destes Termos de Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Modificações dos Serviços</h2>
            <p className="text-muted-foreground mb-4">
              Reservamos o direito de modificar, suspender ou descontinuar qualquer aspecto dos serviços a qualquer momento, com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros por qualquer modificação, suspensão ou descontinuação dos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Rescisão</h2>
            <p className="text-muted-foreground mb-4">
              Podemos encerrar ou suspender seu acesso aos serviços imediatamente, sem aviso prévio, por qualquer motivo, incluindo violação destes Termos de Serviço. Após a rescisão, seu direito de usar os serviços cessará imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Lei Aplicável</h2>
            <p className="text-muted-foreground mb-4">
              Estes Termos de Serviço são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Alterações nos Termos</h2>
            <p className="text-muted-foreground mb-4">
              Reservamos o direito de modificar estes Termos de Serviço a qualquer momento. Alterações significativas serão comunicadas através do site. O uso continuado dos serviços após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contato</h2>
            <p className="text-muted-foreground mb-4">
              Para questões sobre estes Termos de Serviço, entre em contato conosco:
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

