"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState, memo } from "react";
import { Sparkles } from "@/components/ui/sparkles";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

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

  // Gerar partículas uma vez só (não recalcular a cada render)
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const angle = (i / 25) * Math.PI * 2;
      const radius = 200 + Math.random() * 100;
      const size = 2 + Math.random() * 4;
      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;

      return {
        angle,
        radius,
        size,
        duration,
        delay,
      };
    });
  }, []);

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - use contents on mobile to allow individual ordering */}
          <div className="contents lg:block lg:order-1">
            {/* Badge - order 1 on mobile */}
            <div className="order-1 lg:order-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center lg:justify-start mb-6"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-muted-foreground">
                    Excelência Baseada em Dados
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Title - order 2 on mobile */}
            <div className="order-2 lg:order-none mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left"
              >
                Marketing<br />
                no Máximo{" "}
                <span className="relative inline-flex overflow-hidden justify-center lg:justify-start min-w-[280px] md:min-w-[400px]">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute gradient-text font-bold left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0"
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
              </motion.h1>
            </div>

            {/* Description - order 3 on mobile */}
            <div className="order-3 lg:order-none mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl text-muted-foreground leading-relaxed text-center lg:text-left"
              >
                Transforme sua marca com estratégias data-driven que entregam resultados mensuráveis. Transformamos insights em ação, e ação em crescimento.
              </motion.p>
            </div>

            {/* Buttons - order 5 on mobile (after image) */}
            <div className="order-5 lg:order-none mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
                    className="w-full sm:w-auto px-10 py-4 glass-card rounded-full font-semibold text-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
                  >
                    Saiba Mais
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Stats - order 6 on mobile */}
            <div className="order-6 lg:order-none">
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
                  <div key={index} className="space-y-1 text-center lg:text-left">
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

          {/* Right Image - order 4 on mobile (between description and buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-4 lg:order-2 translate-x-2 lg:translate-x-6"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px]">
              {/* Particle System - Mobile */}
              <div className="lg:hidden">
                {particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                      width: particle.size,
                      height: particle.size,
                      left: '50%',
                      top: '50%',
                      x: Math.cos(particle.angle) * particle.radius * 0.45,
                      y: Math.sin(particle.angle) * particle.radius * 0.45,
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1],
                      x: [
                        Math.cos(particle.angle) * particle.radius * 0.45,
                        Math.cos(particle.angle + 0.5) * (particle.radius * 0.45 + 15),
                        Math.cos(particle.angle) * particle.radius * 0.45,
                      ],
                      y: [
                        Math.sin(particle.angle) * particle.radius * 0.45,
                        Math.sin(particle.angle + 0.5) * (particle.radius * 0.45 + 15),
                        Math.sin(particle.angle) * particle.radius * 0.45,
                      ],
                    }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: particle.delay,
                    }}
                  />
                ))}
              </div>

              {/* Particle System - Desktop */}
              <div className="hidden lg:block">
                {particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                      width: particle.size,
                      height: particle.size,
                      left: '50%',
                      top: '50%',
                      x: Math.cos(particle.angle) * particle.radius * 0.9,
                      y: Math.sin(particle.angle) * particle.radius * 0.9,
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1],
                      x: [
                        Math.cos(particle.angle) * particle.radius * 0.9,
                        Math.cos(particle.angle + 0.5) * (particle.radius * 0.9 + 20),
                        Math.cos(particle.angle) * particle.radius * 0.9,
                      ],
                      y: [
                        Math.sin(particle.angle) * particle.radius * 0.9,
                        Math.sin(particle.angle + 0.5) * (particle.radius * 0.9 + 20),
                        Math.sin(particle.angle) * particle.radius * 0.9,
                      ],
                    }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: particle.delay,
                    }}
                  />
                ))}
              </div>

              {/* Main 3D Image Container */}
              <motion.div
                className="relative w-full h-full"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                style={{
                  transition: "transform 0.4s ease-out",
                }}
              >
                {/* Actual Image */}
                <div className="relative h-full">
                  <Image
                    src="/hero-image.png"
                    alt="Zenth Marketing"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}