"use client";

import { motion } from "framer-motion";
import {
  ChartLineUp,
  Handshake,
  Lightbulb,
  Target,
  Users,
  Sparkle,
} from "phosphor-react";
import GlassCard from "../GlassCard";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function CoreValues() {
  const values = [
    {
      icon: ChartLineUp,
      title: "Mentalidade Data-First",
      description:
        "Cada decisão que tomamos é respaldada por dados. Não fazemos suposições—analisamos, testamos e otimizamos com base em métricas reais.",
    },
    {
      icon: Handshake,
      title: "Transparência Radical",
      description:
        "Você sempre saberá onde seu orçamento foi investido, o que está funcionando e o que não está. Sem se esconder atrás de jargões ou cortinas de fumaça.",
    },
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      description:
        "Marketing evolui rápido. Nos mantemos à frente testando constantemente novas plataformas, tecnologias e estratégias.",
    },
    {
      icon: Target,
      title: "Obsessão por Resultados",
      description:
        "Não nos satisfazemos com 'bom o suficiente'. Otimizamos continuamente até atingir—e superar—seus objetivos.",
    },
    {
      icon: Users,
      title: "Mentalidade de Parceria",
      description:
        "Seu sucesso é nosso sucesso. Não somos fornecedores—somos parceiros estratégicos investidos no seu crescimento de longo prazo.",
    },
    {
      icon: Sparkle,
      title: "Excelência Sempre",
      description:
        "Da estratégia à execução, mantemos os mais altos padrões. Qualidade não é negociável—é nossa base.",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-primary/5 via-transparent to-transparent overflow-hidden">
      {/* Shooting Stars Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ShootingStars 
          className="z-0"
          minSpeed={5}
          maxSpeed={15}
          minDelay={1500}
          maxDelay={4000}
          starColor="#06b6d4"
          trailColor="#3b82f6"
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
            Nossos <span className="gradient-text">Valores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Os princípios que guiam cada decisão, campanha e parceria.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <GlassCard key={index} delay={index * 0.1} className="relative z-20">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon size={28} weight="bold" className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}