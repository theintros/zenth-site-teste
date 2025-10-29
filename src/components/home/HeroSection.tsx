"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendUp } from "phosphor-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
              className="text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Transforme sua marca com estratégias data-driven que entregam resultados mensuráveis. Transformamos insights em ação, e ação em crescimento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity glow-effect flex items-center justify-center space-x-2 group"
                >
                  <span>Comece Sua Jornada</span>
                  <ArrowRight
                    size={20}
                    weight="bold"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
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
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "+250", label: "Clientes" },
                { value: "98%", label: "Satisfação" },
                { value: "3.5x", label: "ROI Médio" },
              ].map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Central Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full" />
            
            {/* Main Card */}
            <div className="relative glass-card p-8 rounded-3xl glow-effect">
              <div className="w-80 h-80 flex items-center justify-center">
                {/* Centralized Pulsing Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.3 },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                  className="relative"
                >
                  {/* Glow Effect Behind Icon */}
                  <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full scale-150" />
                  
                  {/* Icon Container */}
                  <div className="relative w-32 h-32 glass-card rounded-3xl flex items-center justify-center border-2 border-primary/30">
                    <TrendUp size={80} weight="bold" className="text-primary" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}