"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState, memo } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Sparkles } from "@/components/ui/sparkles";

// Memoize Sparkles to prevent re-renders
const MemoizedSparkles = memo(() => (
  <Sparkles
    className="absolute inset-0"
    density={100}
    speed={0.5}
    size={1.5}
    color="#06b6d4"
    opacity={0.6}
  />
));

MemoizedSparkles.displayName = "MemoizedSparkles";

export default function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  
  const titles = useMemo(
    () => ["Desempenho", "Potencial", "Resultado", "Retorno"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Sparkles Background */}
      <MemoizedSparkles />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center">
          {/* Content - centered on desktop */}
          <div className="w-full max-w-4xl">
            {/* Badge */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center mb-6"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-muted-foreground">
                    Excelência Baseada em Dados
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Title */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center"
              >
                <div className="block">
                  Marketing no Máximo
                </div>
                <div className="relative h-[1.2em] flex items-center justify-center mt-2">
                  <span className="relative inline-flex overflow-hidden justify-center min-w-[280px] md:min-w-[400px]">
                    {titles.map((title, index) => (
                      <motion.span
                        key={index}
                        className="absolute gradient-text font-bold left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        animate={
                          titleNumber === index
                            ? {
                                y: 0,
                                opacity: 1,
                              }
                            : {
                                y: titleNumber > index ? -150 : 150,
                                opacity: 0,
                              }
                        }
                      >
                        {title}
                      </motion.span>
                    ))}
                    <span className="invisible gradient-text font-bold">
                      Desempenho
                    </span>
                  </span>
                </div>
              </motion.h1>
            </div>

            {/* Description */}
            <div className="mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl text-muted-foreground leading-relaxed text-center"
              >
                Transforme sua marca com estratégias data-driven que entregam resultados mensuráveis. Transformamos insights em ação, e ação em crescimento.
              </motion.p>
            </div>

            {/* Buttons */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contato">
                  <InteractiveHoverButton 
                    initialText="Agendar Reunião"
                    hoverText="Comece Sua Jornada"
                    className="w-full sm:w-auto glow-effect"
                  />
                </Link>
                <Link href="/sobre">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-10 py-4 glass-card rounded-full font-semibold text-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
                  >
                    Saiba Mais
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { value: "+75", label: "Clientes" },
                  { value: "98%", label: "Satisfação" },
                  { value: "3.8x", label: "ROI Médio" },
                ].map((stat, index) => (
                  <div key={index} className="space-y-1 text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text">
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
      </div>
    </section>
  );
}