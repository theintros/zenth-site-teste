"use client";

import { motion } from "framer-motion";
import { Sparkle } from "phosphor-react";

export default function MissionStatement() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
      
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12 md:p-16 text-center glow-effect"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 mb-8"
          >
            <Sparkle size={32} weight="fill" className="text-primary" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground">
              Nossa Missão
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            Acreditamos que o marketing deve ser{" "}
            <span className="gradient-text text-glow">mensurável</span>,{" "}
            <span className="gradient-text text-glow">estratégico</span> e{" "}
            <span className="gradient-text text-glow">lucrativo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Capacitamos marcas ambiciosas a alcançar seu máximo potencial transformando dados em estratégia, estratégia em ação e ação em crescimento exponencial. Sem enrolação, sem métricas de vaidade—apenas resultados reais que impactam seu resultado final.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}