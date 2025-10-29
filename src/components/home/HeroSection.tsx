"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Particles } from "@/components/ui/particles";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={80}
        color="#06b6d4"
        refresh={false}
      />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-muted-foreground">
                  Excelência Baseada em Dados
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Marketing no{" "}
              <span className="gradient-text text-glow">Máximo Desempenho</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Transforme sua marca com estratégias data-driven que entregam resultados mensuráveis. Transformamos insights em ação, e ação em crescimento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <InteractiveHoverButton 
                  initialText="Agendar Reunião"
                  hoverText="Comece Sua Jornada"
                  className="w-full sm:w-auto glow-effect"
                />
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-card rounded-xl font-semibold text-lg hover:border-primary/20 transition-colors"
                >
                  Saiba Mais
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto"
            >
              {[
                { value: "+250", label: "Clientes" },
                { value: "98%", label: "Satisfação" },
                { value: "3.5x", label: "ROI Médio" },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-4xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}