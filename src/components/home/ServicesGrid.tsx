"use client";

import { motion } from "framer-motion";
import {
  ChartBar,
  MegaphoneSimple,
  Target,
  Brain,
  Globe,
  PenNib,
  ChatCircle,
  TrendUp,
  ShoppingCart,
} from "phosphor-react";
import GlassCard from "../GlassCard";

export default function ServicesGrid() {
  const services = [
    {
      icon: TrendUp,
      title: "Gestão de Tráfego Pago",
      description:
        "Maximize seu investimento em Meta Ads e Google Ads com gestão profissional. Campanhas otimizadas, públicos segmentados e gestão de orçamento que entregam ROI comprovado.",
      features: ["Meta Ads (Facebook/Instagram)", "Google Ads", "Otimização Contínua"],
    },
    {
      icon: PenNib,
      title: "Serviços Criativos",
      description:
        "Conteúdo envolvente que converte. De copywriting a design, criamos mensagens que movem pessoas à ação.",
      features: ["Copywriting", "Design", "Produção de Vídeo"],
    },
    {
      icon: Target,
      title: "Posicionamento de Marca",
      description:
        "Destaque-se em mercados lotados. Posicionamento estratégico que ressoa com seu público e diferencia sua marca.",
      features: ["Pesquisa de Mercado", "Análise Competitiva", "Estratégia de Marca"],
    },
    {
      icon: ChatCircle,
      title: "Chatbots e Automações com IA",
      description:
        "Inteligência artificial que trabalha 24/7 para seu negócio. Chatbots inteligentes, automações conversacionais e atendimento automatizado que convertem leads em clientes.",
      features: ["Chatbots WhatsApp/Telegram", "IA Generativa", "Automação Conversacional"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Conversão",
      description:
        "Transforme visitantes em clientes. Otimização de lojas online, funil de vendas, checkout inteligente e estratégias de conversão que aumentam suas vendas de forma mensurável.",
      features: ["Otimização de Loja Online", "Funil de Vendas", "Checkout Inteligente"],
    },
    {
      icon: MegaphoneSimple,
      title: "Marketing Digital",
      description:
        "Campanhas multicanal que geram resultados. SEO, SEM, mídias sociais e marketing de conteúdo otimizados para ROI.",
      features: ["SEO & SEM", "Mídias Sociais", "Estratégia de Conteúdo"],
    },
    {
      icon: Globe,
      title: "Sites, Landing Pages e Sistemas",
      description:
        "Desenvolvimento completo de presença digital. Criamos sites institucionais, landing pages de alta conversão e sistemas personalizados como agendamentos online e CRMs simplificados para controle interno do seu negócio.",
      features: ["Sites Institucionais", "Landing Pages", "Sistemas Personalizados"],
    },
    {
      icon: ChartBar,
      title: "Análise de Dados",
      description:
        "Transforme dados brutos em insights acionáveis. Análises avançadas, modelagem preditiva e dashboards personalizados.",
      features: ["Relatórios em Tempo Real", "Análise Preditiva", "KPIs Personalizados"],
    },
    {
      icon: Brain,
      title: "Automação de Marketing",
      description:
        "Escale seus esforços com automação inteligente. Nutrição de leads, campanhas de e-mail e otimização de fluxo de trabalho.",
      features: ["E-mail Marketing", "Pontuação de Leads", "Integração CRM"],
    },
  ];

  return (
    <section id="services" className="relative py-22">
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
              <GlassCard key={index} delay={index * 0.1} glowing={true}>
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