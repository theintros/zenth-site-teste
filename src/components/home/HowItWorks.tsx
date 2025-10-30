"use client";

import { motion } from "framer-motion";
import {
  Crosshair,
  ChartLineUp,
  Rocket,
  TrendUp,
} from "phosphor-react";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function HowItWorks() {
  const steps = [
    {
      icon: Crosshair,
      title: "Descoberta e Análise",
      description:
        "Mergulhamos fundo no seu negócio, público e mercado para entender o que torna você único e onde estão as oportunidades.",
      number: "01",
    },
    {
      icon: ChartLineUp,
      title: "Desenvolvimento de Estratégia",
      description:
        "Estratégias orientadas por dados personalizadas para seus objetivos. Mapeamos a jornada completa do cliente e identificamos pontos-chave de contato.",
      number: "02",
    },
    {
      icon: Rocket,
      title: "Execução e Lançamento",
      description:
        "Implementação perfeita em todos os canais. Nossa equipe cuida de tudo, desde o criativo até a execução técnica.",
      number: "03",
    },
    {
      icon: TrendUp,
      title: "Otimização e Escala",
      description:
        "Monitoramento contínuo, testes e otimização. Refinamos campanhas para maximizar ROI e escalar o que funciona.",
      number: "04",
    },
  ];

  return (
    <section className="relative py-2 bg-gradient-to-b from-transparent via-primary/5 to-transparent overflow-hidden">
      {/* Shooting Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ShootingStars
          minSpeed={15}
          maxSpeed={25}
          minDelay={800}
          maxDelay={3000}
          starColor="#06b6d4"
          trailColor="#3b82f6"
          starWidth={15}
          starHeight={2}
          className="z-0"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como <span className="gradient-text">Trabalhamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma metodologia comprovada que transforma insights em ação e ação em crescimento mensurável.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative z-20"
                >
                  <div className="glass-card rounded-2xl p-8 h-full hover:border-primary/20 transition-all duration-300 group relative z-20">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-primary font-bold">
                        {step.number}
                      </span>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={32} weight="bold" className="text-primary" />
                    </div>

                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}