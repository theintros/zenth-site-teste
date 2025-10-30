"use client";

import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
      
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        staticity={50}
        color="#06b6d4"
        vx={0.02}
        vy={0.02}
      />

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground font-semibold">Sobre a Zenth</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          Transformamos Dados em{" "}
          <span className="gradient-text">Crescimento</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          Fundada por cientistas de dados e estrategistas de marketing cansados de agências que prometem demais e entregam de menos. Construímos a Zenth para ser diferente—transparente, focada em resultados e obcecada pelo seu sucesso.
        </motion.p>
      </div>
    </section>
  );
}
