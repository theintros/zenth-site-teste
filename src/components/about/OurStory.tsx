"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";

export default function OurStory() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="gradient-text">História</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                A Zenth nasceu da frustração. Nossos fundadores passaram anos observando agências tradicionais de marketing queimarem o orçamento de clientes com pouco resultado. As campanhas não tinham estratégia, dados eram ignorados e os resultados estavam sempre "logo ali".
              </p>
              <p>
                Em 2018, decidimos construir a agência que gostaríamos que existisse. Uma que combinasse análise rigorosa de dados com execução criativa de marketing. Uma que medisse sucesso pelo ROI do cliente, não por métricas de vaidade. Uma que tratasse cada real investido como se fosse nosso.
              </p>
              <p>
                Hoje, a Zenth cresceu para uma equipe de mais de 40 cientistas de dados, estrategistas e criativos. Já ajudamos mais de 250 marcas em 15+ setores a alcançar em média 3,5x de ROI. Mas nossa missão permanece a mesma: transformar dados em crescimento, e crescimento em sucesso duradouro.
              </p>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "2018", label: "Fundada" },
              { value: "40+", label: "Membros da Equipe" },
              { value: "250+", label: "Marcas Atendidas" },
              { value: "15+", label: "Setores" },
            ].map((stat, index) => (
              <GlassCard
                key={index}
                delay={index * 0.1}
                className="text-center p-8"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}