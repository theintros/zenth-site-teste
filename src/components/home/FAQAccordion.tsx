"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "phosphor-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O que torna a Zenth diferente de outras agências de marketing?",
      answer:
        "Somos obcecados por dados e resultados. Enquanto outros focam em métricas de vaidade, priorizamos ROI e impacto nos negócios. Nossa plataforma proprietária de análise oferece insights em tempo real sobre o desempenho da campanha, e nossa metodologia comprovada entregou ROI médio de 3.5x para clientes.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "A maioria dos clientes vê melhorias mensuráveis em 60-90 dias. No entanto, crescimento sustentável é uma maratona, não um sprint. Focamos em construir momentum que se acumula ao longo do tempo, com otimização contínua garantindo que suas campanhas melhorem mês após mês.",
    },
    {
      question: "Com quais setores vocês trabalham?",
      answer:
        "Trabalhamos com sucesso com marcas em mais de 15 setores, incluindo SaaS, e-commerce, fintech, saúde, serviços B2B e muito mais. Nossa abordagem orientada por dados é agnóstica ao setor—focamos em entender sua dinâmica de mercado única e comportamento do cliente.",
    },
    {
      question: "Vocês exigem contratos de longo prazo?",
      answer:
        "Oferecemos modelos de engajamento flexíveis. Embora recomendemos pelo menos 6 meses para alcançar resultados ideais, não prendemos clientes em contratos restritivos. Nossa taxa de retenção de 98% vem de entregar valor, não de obrigações contratuais.",
    },
    {
      question: "Quais ferramentas e plataformas vocês usam?",
      answer:
        "Aproveitamos ferramentas de ponta, incluindo Google Analytics, HubSpot, Salesforce, SEMrush e nossa plataforma proprietária de análise. Somos agnósticos em plataforma e trabalharemos com sua stack de tecnologia existente ou recomendaremos soluções ideais com base em suas necessidades.",
    },
    {
      question: "Como vocês medem o sucesso?",
      answer:
        "Começamos cada engajamento definindo KPIs claros alinhados com seus objetivos de negócio. Métricas comuns incluem ROI, custo de aquisição de cliente, valor vitalício, taxas de conversão e crescimento de receita. Você terá acesso a dashboards em tempo real mostrando exatamente como as campanhas performam.",
    },
  ];

  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo o que você precisa saber sobre trabalhar com a Zenth.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-card rounded-2xl p-6 text-left hover:border-primary/20 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaretDown size={24} weight="bold" className="text-primary" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}