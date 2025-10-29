"use client";

import { motion } from "framer-motion";
import { Warning, Lightbulb, RocketLaunch } from "phosphor-react";
import GlassCard from "../GlassCard";

export default function ProblemSolution() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8 border-destructive/20">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <Warning size={32} weight="bold" className="text-destructive" />
              </div>
              <h3 className="text-3xl font-bold mb-4">O Desafio</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A maioria das marcas luta com dados fragmentados, métricas pouco claras e campanhas que não entregam ROI. O marketing tradicional é trabalho de adivinhação—adivinhação cara.
              </p>
              <ul className="space-y-3">
                {[
                  "Gastos desperdiçados em canais ineficazes",
                  "Falta de insights acionáveis dos dados",
                  "Marketing e objetivos de negócios desconectados",
                  "Incapacidade de medir o impacto real das campanhas",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8 border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb size={32} weight="bold" className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Nossa <span className="gradient-text">Solução</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Utilizamos análises avançadas e insights estratégicos para criar campanhas de marketing mensuráveis, escaláveis e lucrativas. Chega de adivinhação—apenas resultados.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Estratégia orientada por dados com métricas reais",
                  "Otimização multicanal para máximo ROI",
                  "KPIs claros alinhados aos objetivos de negócio",
                  "Testes e refinamento contínuos",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold cursor-pointer glow-effect"
              >
                <RocketLaunch size={20} weight="bold" />
                <span>Transforme Seu Marketing</span>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}