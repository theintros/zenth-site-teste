"use client";

import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-10">
      {/* Sparkles Background */}
      <Sparkles
        className="absolute inset-0"
        density={120}
        speed={0.4}
        size={1.2}
        color="#06b6d4"
        opacity={0.5}
      />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <span className="relative px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium text-primary backdrop-blur-md">
            Cases Selecionados
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Transformando Ideias em <br />
          <span className="gradient-text">Resultados Digitais</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Uma curadoria de projetos de alto impacto em design, desenvolvimento e performance.
          Mais de 40 empresas potencializadas através de estratégias data-driven.
        </motion.p>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-8"
        >
          {[
            { label: "Projetos Entregues", value: "+40" },
            { label: "Anos de Experiência", value: "+5" },
            { label: "Nichos Atendidos", value: "+12" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
