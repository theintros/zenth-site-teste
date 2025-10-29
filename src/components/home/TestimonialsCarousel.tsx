"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretLeft, CaretRight, Star } from "phosphor-react";
import GlassCard from "../GlassCard";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVision",
      content:
        "A Zenth transformou completamente nossa estratégia de marketing. A abordagem orientada por dados resultou em um aumento de 340% em leads qualificados em apenas 6 meses.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "Michael Rodriguez",
      role: "CMO, GrowthLabs",
      content:
        "Trabalhar com a Zenth mudou o jogo. Seus insights são precisos, a execução é impecável e os resultados falam por si mesmos.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Emily Thompson",
      role: "Fundadora, BrandCraft",
      content:
        "A equipe da Zenth não entrega apenas campanhas—ela entrega resultados. Nosso ROI nunca foi tão alto, e nossa presença de marca nunca foi tão forte.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Confiança de <span className="gradient-text">Líderes do Setor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não acredite apenas na nossa palavra—ouça das marcas que ajudamos a alcançar o topo.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="p-12" hover={false}>
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} weight="fill" className="text-primary" />
                  ))}
                </div>
                <p className="text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden glass-card">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-primary/20 transition-colors"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-primary/20 transition-colors"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}