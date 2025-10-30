"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "phosphor-react";
import GlassCard from "../GlassCard";

export default function BlogGrid() {
  const articles = [
    {
      title: "O Futuro do Marketing Data-Driven em 2025",
      excerpt:
        "Descubra como a inteligência artificial e analytics avançados estão transformando a forma como as marcas se conectam com seus públicos. Exploramos as principais tendências e ferramentas que definirão o sucesso no próximo ano.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Tendências",
      date: "15 Dez 2024",
      readTime: "8 min",
      author: "Maria Santos",
    },
    {
      title: "ROI em Marketing: Como Medir o Que Realmente Importa",
      excerpt:
        "Vá além das métricas de vaidade. Aprenda a construir frameworks de medição que conectam seus esforços de marketing diretamente aos resultados financeiros da empresa.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Analytics",
      date: "10 Dez 2024",
      readTime: "10 min",
      author: "João Oliveira",
    },
    {
      title: "Automação de Marketing: O Guia Definitivo para Escalar",
      excerpt:
        "Marketing automation não é apenas sobre enviar emails automatizados. Descubra estratégias avançadas para nurturing de leads, personalização em escala e integração multi-canal que realmente convertem.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "Estratégia",
      date: "5 Dez 2024",
      readTime: "12 min",
      author: "Ana Costa",
    },
    {
      title: "Brand Positioning: Como Destacar-se em Mercados Saturados",
      excerpt:
        "Em um mundo onde todos parecem vender a mesma coisa, o posicionamento estratégico é seu maior diferencial. Aprenda metodologias comprovadas para criar uma proposta de valor única e memorável.",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
      category: "Branding",
      date: "1 Dez 2024",
      readTime: "9 min",
      author: "Carlos Mendes",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <GlassCard
              key={index}
              delay={index * 0.1}
              className="group cursor-pointer overflow-hidden p-0"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 glass-card text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} weight="bold" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {article.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    Por {article.author}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-primary font-semibold text-sm group"
                  >
                    <span>Ler mais</span>
                    <ArrowRight size={16} weight="bold" />
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <GlassCard className="text-center p-12 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
            <h3 className="text-3xl font-bold mb-4">
              Receba Insights Exclusivos
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Inscreva-se na nossa newsletter e receba artigos, tendências e
              análises estratégicas direto na sua caixa de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-6 py-3 glass-card rounded-full bg-secondary/50 border focus:border-primary/50 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all whitespace-nowrap"
              >
                Inscrever-se
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
