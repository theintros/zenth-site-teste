"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { Particles } from "@/components/ui/particles";

// Memoize Particles to prevent re-renders
const MemoizedParticles = memo(() => (
  <Particles
    className="absolute inset-0"
    quantity={120}
    ease={80}
    color="#06b6d4"
    refresh={false}
  />
));

MemoizedParticles.displayName = "MemoizedParticles";

export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Particles Background */}
      <MemoizedParticles />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">Entre em Contato</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          Vamos Construir Algo{" "}
          <span className="gradient-text">Incrível</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Pronto para transformar seu marketing? Estamos aqui para ajudar. Entre em contato e vamos começar a conversa.
        </motion.p>
      </div>
    </section>
  );
}