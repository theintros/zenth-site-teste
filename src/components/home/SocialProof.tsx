"use client";

import { motion } from "framer-motion";
import { TrendUp, Users, Trophy, ChartBar } from "phosphor-react";

export default function SocialProof() {
  const stats = [
    {
      icon: Users,
      value: "+250",
      label: "Clientes Felizes",
      description: "Em mais de 15 setores",
    },
    {
      icon: TrendUp,
      value: "3.5x",
      label: "ROI Médio",
      description: "No primeiro ano",
    },
    {
      icon: Trophy,
      value: "98%",
      label: "Retenção de Clientes",
      description: "Ano após ano",
    },
    {
      icon: ChartBar,
      value: "+R$50M",
      label: "Receita Gerada",
      description: "Para nossos clientes",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-primary/5 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Números Que <span className="gradient-text">Importam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Métricas reais de campanhas reais com impacto real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:border-primary/20 transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon size={32} weight="bold" className="text-primary" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}