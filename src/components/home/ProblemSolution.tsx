"use client";

import { motion } from "framer-motion";
import { Warning, Lightbulb } from "phosphor-react";
import { FrostedGlassCard } from "@/components/ui/frosted-glass-card";
import { Sparkles } from "@/components/ui/sparkles";

export default function ProblemSolution() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative py-10">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <FrostedGlassCard className="p-8 h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <Warning size={32} weight="bold" className="text-destructive" />
              </div>
              <h3 className="text-3xl font-bold mb-4">O Desafio</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A maioria das marcas luta com dados fragmentados, métricas pouco claras e campanhas que não entregam ROI. O marketing tradicional é trabalho de adivinhação—adivinhação cara.
              </p>
              <ul className="space-y-3 mb-8">
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
            </FrostedGlassCard>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <FrostedGlassCard className="p-8 h-full flex flex-col">
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
            </FrostedGlassCard>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Curved bottom section with sparkles */}
      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#06b6d4,transparent_70%)] before:opacity-20" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-border bg-background" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#06b6d4"
          size={1}
          speed={0.5}
        />
      </div>
    </section>
  );
}