"use client";

import { motion } from "framer-motion";
import { Database, Strategy, Rocket, ChartBar } from "phosphor-react";

export default function OurMethodology() {
  const phases = [
    {
      icon: Database,
      phase: "Fase 1",
      title: "Análise Profunda",
      description:
        "Começamos entendendo seu negócio por dentro e por fora. Análise de mercado, pesquisa de concorrência, comportamento do cliente e dados históricos—não deixamos pedra sobre pedra.",
      details: [
        "Pesquisa abrangente de mercado",
        "Desenvolvimento de personas de cliente",
        "Análise de concorrência",
        "Auditoria de performance histórica",
      ],
    },
    {
      icon: Strategy,
      phase: "Fase 2",
      title: "Planejamento Estratégico",
      description:
        "Com base nos insights, criamos uma estratégia abrangente alinhada aos seus objetivos. Cada tática é escolhida por uma razão, cada canal otimizado para ROI.",
      details: [
        "Estratégia de marketing customizada",
        "Seleção de canais e alocação de orçamento",
        "Definição de KPIs e metas",
        "Roadmap detalhado de execução",
      ],
    },
    {
      icon: Rocket,
      phase: "Fase 3",
      title: "Execução Impecável",
      description:
        "Nossa equipe de especialistas dá vida à estratégia. Do desenvolvimento criativo à implementação técnica, cuidamos de tudo com precisão.",
      details: [
        "Desenvolvimento e lançamento de campanhas",
        "Produção criativa",
        "Implementação técnica",
        "Coordenação multicanal",
      ],
    },
    {
      icon: ChartBar,
      phase: "Fase 4",
      title: "Otimizar e Escalar",
      description:
        "Monitoramos, testamos e refinamos continuamente. O que funciona é escalado, o que não funciona é corrigido ou cortado. Este ciclo nunca para.",
      details: [
        "Monitoramento de performance em tempo real",
        "Testes A/B e experimentação",
        "Realocação de orçamento",
        "Escalamento de campanhas bem-sucedidas",
      ],
    },
  ];

  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa <span className="gradient-text">Metodologia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma estrutura comprovada e orientada por dados que entrega resultados consistentes.
          </p>
        </motion.div>

        <div className="space-y-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card rounded-3xl p-8 md:p-12 hover:border-primary/20 transition-all"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={32} weight="bold" className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-semibold mb-1">
                          {phase.phase}
                        </div>
                        <h3 className="text-3xl font-bold">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {phase.description}
                    </p>
                  </div>
                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    <div className="space-y-3">
                      {phase.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 text-foreground"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}