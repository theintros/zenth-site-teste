"use client";

import { motion } from "framer-motion";
import {
  ChartBar,
  MegaphoneSimple,
  Target,
  Brain,
  DeviceMobile,
  PenNib,
} from "phosphor-react";
import GlassCard from "../GlassCard";

export default function ServicesGrid() {
  const services = [
    {
      icon: ChartBar,
      title: "Análise de Dados",
      description:
        "Transforme dados brutos em insights acionáveis. Análises avançadas, modelagem preditiva e dashboards personalizados.",
      features: ["Relatórios em Tempo Real", "Análise Preditiva", "KPIs Personalizados"],
    },
    {
      icon: MegaphoneSimple,
      title: "Marketing Digital",
      description:
        "Campanhas multicanal que geram resultados. SEO, SEM, mídias sociais e marketing de conteúdo otimizados para ROI.",
      features: ["SEO & SEM", "Mídias Sociais", "Estratégia de Conteúdo"],
    },
    {
      icon: Target,
      title: "Posicionamento de Marca",
      description:
        "Destaque-se em mercados lotados. Posicionamento estratégico que ressoa com seu público e diferencia sua marca.",
      features: ["Pesquisa de Mercado", "Análise Competitiva", "Estratégia de Marca"],
    },
    {
      icon: Brain,
      title: "Automação de Marketing",
      description:
        "Escale seus esforços com automação inteligente. Nutrição de leads, campanhas de e-mail e otimização de fluxo de trabalho.",
      features: ["E-mail Marketing", "Pontuação de Leads", "Integração CRM"],
    },
    {
      icon: DeviceMobile,
      title: "Marketing de Performance",
      description:
        "Pague por resultados, não por promessas. Campanhas baseadas em desempenho com rastreamento transparente de ROI e otimização.",
      features: ["Gestão de PPC", "Otimização de Conversão", "Testes A/B"],
    },
    {
      icon: PenNib,
      title: "Serviços Criativos",
      description:
        "Conteúdo envolvente que converte. De copywriting a design, criamos mensagens que movem pessoas à ação.",
      features: ["Copywriting", "Design", "Produção de Vídeo"],
    },
  ];

  return (
    <section id="services" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Serviços <span className="gradient-text">Completos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para dominar seu mercado, tudo em um só lugar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} weight="bold" className="text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}