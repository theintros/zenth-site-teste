"use client";

import { motion } from "framer-motion";
import { Check, Sparkle, Lightning, Rocket } from "phosphor-react";
import GlassCard from "../GlassCard";
import Link from "next/link";

export default function PricingCards() {
  const plans = [
    {
      name: "Crescimento",
      icon: Lightning,
      price: "R$ 5.000",
      period: "/mês",
      description: "Perfeito para marcas em crescimento prontas para escalar",
      features: [
        "Análise de dados e relatórios",
        "Gestão de mídias sociais",
        "Criação de conteúdo (8 peças/mês)",
        "Sessões de estratégia mensais",
        "Campanhas de e-mail marketing",
        "Otimização básica de SEO",
      ],
      cta: "Começar Agora",
      popular: false,
    },
    {
      name: "Escala",
      icon: Rocket,
      price: "R$ 10.000",
      period: "/mês",
      description: "Para marcas estabelecidas buscando dominância no mercado",
      features: [
        "Tudo do Crescimento, mais:",
        "Análise e atribuição avançadas",
        "Campanhas multicanal",
        "Criação de conteúdo (20 peças/mês)",
        "Sessões de estratégia semanais",
        "SEO & SEM avançados",
        "Configuração de automação de marketing",
        "Gerente de conta dedicado",
      ],
      cta: "Começar Agora",
      popular: true,
    },
    {
      name: "Empresarial",
      icon: Sparkle,
      price: "Personalizado",
      period: "",
      description: "Soluções sob medida para marcas de nível empresarial",
      features: [
        "Tudo do Escala, mais:",
        "Plataforma de análise personalizada",
        "Gestão de campanha full-service",
        "Criação de conteúdo ilimitada",
        "Suporte estratégico 24/7",
        "Integrações personalizadas",
        "Equipe dedicada de especialistas",
        "Serviço white-glove",
      ],
      cta: "Falar com Vendas",
      popular: false,
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Preços <span className="gradient-text">Transparentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que se encaixa nas suas ambições. Todos os planos incluem nossa garantia de satisfação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <GlassCard
                  className={`h-full flex flex-col ${
                    plan.popular ? "border-primary/40 glow-effect" : ""
                  }`}
                  hover={false}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={28} weight="bold" className="text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check
                          size={20}
                          weight="bold"
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="w-full">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? "bg-primary text-primary-foreground glow-effect"
                          : "glass-card hover:border-primary/20"
                      }`}
                    >
                      {plan.cta}
                    </motion.button>
                  </Link>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}