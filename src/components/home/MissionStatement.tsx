"use client";

import { motion } from "framer-motion";
import { BorderTrail } from "@/components/ui/border-trail";

export default function MissionStatement() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
      
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-card rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <BorderTrail
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
            size={150}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'linear',
            }}
          />

          {/* Inner Glow Effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 60% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                Nossa Missão
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            >
              Acreditamos que o marketing deve ser{" "}
              <span className="gradient-text">mensurável</span>,{" "}
              <span className="gradient-text">estratégico</span> e{" "}
              <span className="gradient-text">lucrativo</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Capacitamos marcas ambiciosas a alcançar seu máximo potencial transformando dados em estratégia, estratégia em ação e ação em crescimento exponencial. Sem enrolação, sem métricas de vaidade—apenas resultados reais que impactam seu resultado final.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}