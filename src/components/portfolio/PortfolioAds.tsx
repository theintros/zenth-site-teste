"use client";

import { motion, useInView } from "framer-motion";
import { ChartLine, TrendUp, CurrencyDollar, Users, Target, Storefront, Buildings, Student } from "phosphor-react";
import { Sparkles } from "@/components/ui/sparkles";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useState, useEffect, useRef } from "react";

// Função helper para formatar valores monetários
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Componente para animar números quando visível
const AnimatedNumber = ({ value, format = "number", suffix = "" }: { value: number; format?: "currency" | "number" | "decimal"; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500; // Mais suave
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        if (format === "decimal") {
          setDisplayValue(Number(current.toFixed(1)));
        } else {
          setDisplayValue(Math.floor(current));
        }
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, format, isInView]);

  let formattedValue;
  if (format === "currency") {
    formattedValue = <>{formatCurrency(displayValue)}</>;
  } else if (format === "decimal") {
    formattedValue = <>{displayValue.toFixed(1)}{suffix}</>;
  } else {
    formattedValue = <>{Math.floor(displayValue).toLocaleString("pt-BR")}{suffix}</>;
  }

  return <span ref={ref}>{formattedValue}</span>;
};

export default function PortfolioAds() {
  return (
    <section className="relative py-24 overflow-hidden bg-black/20"> {/* Mais espaçamento vertical */}
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-6 ring-1 ring-primary/20">
            <ChartLine size={32} weight="duotone" className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Gestão de <span className="gradient-text">Tráfego</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estratégias validadas em mais de <span className="text-foreground font-medium">40 projetos</span>. 
            Transformamos investimento em receita através de inteligência de dados.
          </p>
        </motion.div>

        {/* Bento Grid Layout - Refined */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[200px]">
          
          {/* Main Metric - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl"
          >
            <GlowingEffect spread={60} glow={true} disabled={false} proximity={120} inactiveZone={0.2} />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay" />
            
            <div className="relative h-full p-8 md:p-12 flex flex-col justify-center items-center text-center z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-8 ring-1 ring-white/10 shadow-lg shadow-primary/10">
                <CurrencyDollar size={32} weight="fill" className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-4">
                Investimento Gerenciado
              </h3>
              <div className="w-full">
                <div className="text-[11vw] sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-6 tabular-nums gradient-text drop-shadow-2xl">
                  <AnimatedNumber value={6450000} format="currency" suffix="+" />
                </div>
              </div>
              <p className="text-base md:text-lg text-muted-foreground/80 max-w-lg leading-relaxed">
                Valor total investido em Meta Ads e Google Ads, com foco absoluto em ROI e performance de escala.
              </p>
            </div>
          </motion.div>

          {/* Secondary Metric - Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] p-8 flex flex-col justify-center items-center text-center group h-[240px] md:h-auto shadow-xl"
          >
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={80} inactiveZone={0.1} />
            <div className="relative z-10">
              <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block group-hover:bg-white/10 transition-colors">
                 <Users size={28} weight="duotone" className="text-primary" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 tabular-nums tracking-tight">
                <AnimatedNumber value={40} suffix="+" />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contas Atendidas</div>
            </div>
          </motion.div>

          {/* Secondary Metric - ROI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] p-8 flex flex-col justify-center items-center text-center group h-[240px] md:h-auto shadow-xl"
          >
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={80} inactiveZone={0.1} />
            <div className="relative z-10">
               <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block group-hover:bg-white/10 transition-colors">
                 <TrendUp size={28} weight="duotone" className="text-green-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2 tabular-nums tracking-tight">
                <AnimatedNumber value={4.5} format="decimal" suffix="x" />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">ROI Médio Global</div>
            </div>
          </motion.div>

          {/* Nichos - Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] p-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
          >
             {/* Background Gradient Subtle */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50 pointer-events-none" />

            <div className="flex-1 text-center md:text-left relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-white">Experiência Multisetorial</h3>
              <p className="text-muted-foreground">
                Metodologia adaptável testada e aprovada em diversos segmentos de mercado.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              {[
                { icon: Storefront, label: "E-commerce" },
                { icon: Buildings, label: "Negócios Locais" },
                { icon: Student, label: "Infoprodutos" },
                { icon: Target, label: "SaaS B2B" },
              ].map((niche, idx) => (
                <div key={idx} className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all cursor-default">
                  <niche.icon size={20} weight="fill" className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">{niche.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
