"use client";

import { motion } from "framer-motion";
import { Lightning, ShieldCheck, Users, Atom } from "phosphor-react";
import { Sparkles } from "@/components/ui/sparkles";

export default function Differentiators() {
  const differentiators = [
    {
      icon: Lightning,
      title: "Velocidade e Agilidade",
      description:
        "Nos movemos rápido sem sacrificar qualidade. Testes rápidos, pivôs ágeis e tempo de lançamento mais veloz.",
    },
    {
      icon: ShieldCheck,
      title: "Resultados Comprovados",
      description:
        "98% de satisfação dos clientes, ROI médio de 3.5x e um histórico de transformação de marcas em diversos setores.",
    },
    {
      icon: Users,
      title: "Parceria Estratégica",
      description:
        "Não somos fornecedores—somos seus parceiros de crescimento. Seu sucesso é nosso sucesso, e estamos investidos em ambos.",
    },
    {
      icon: Atom,
      title: "Inovação em Primeiro Lugar",
      description:
        "Aproveitamos ferramentas de ponta, plataformas emergentes e estratégias inovadoras para mantê-lo à frente da curva.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0">
        <Sparkles
          density={120}
          speed={1}
          color="#06b6d4"
          className="absolute inset-0"
          direction="top"
          opacitySpeed={2}
          opacity={0.6}
        />
      </div>

      {/* Curved Bottom Section for Sparkles */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por Que Escolher a <span className="gradient-text">Zenth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não somos como outras agências. Aqui está o que nos torna diferentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative z-20"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <Icon size={40} weight="bold" className="text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}