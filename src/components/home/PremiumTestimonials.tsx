"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO",
    company: "TechVibe Startup",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "A Zenth transformou completamente nossa abordagem de marketing. Em 4 meses, nosso ROI aumentou 280% e finalmente entendemos de onde vem cada real investido. A equipe é extremamente profissional.",
    results: ["280% ROI", "4 meses", "Análise completa"]
  },
  {
    name: "Marina Silva",
    role: "Diretora de Marketing",
    company: "EcoStore Brasil",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Trabalhar com a Zenth foi um divisor de águas. Eles não apenas executam campanhas, mas ensinam nossa equipe a pensar estrategicamente. Nosso custo por aquisição caiu 45% em 3 meses.",
    results: ["45% redução CAC", "Treinamento", "Estratégia data-driven"]
  },
  {
    name: "Rafael Costa",
    role: "Fundador",
    company: "FitApp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Finalmente encontramos uma agência que fala a nossa língua. Os relatórios são claros, os resultados são tangíveis e o suporte é excepcional. Recomendo de olhos fechados.",
    results: ["Relatórios claros", "Suporte 24/7", "Crescimento sustentável"]
  },
  {
    name: "Juliana Oliveira",
    role: "CMO",
    company: "Luxe Fashion",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "A Zenth nos ajudou a escalar de forma inteligente. Passamos de 50 para 300 vendas mensais mantendo a mesma margem. O trabalho com Meta Ads e Google Ads foi impecável.",
    results: ["6x vendas", "Mesma margem", "Escala inteligente"]
  },
  {
    name: "Pedro Santos",
    role: "Diretor Comercial",
    company: "Imobiliária Prime",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Depois de tentar com 3 agências diferentes, finalmente achamos quem entrega. A Zenth não só gerou mais leads, como melhorou a qualidade deles. Taxa de conversão subiu 65%.",
    results: ["65% conversão", "Leads qualificados", "ROI positivo"]
  }
];

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    })
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-br from-background via-primary/5 to-background text-foreground overflow-hidden">
      {/* Optimized Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-purple-500/[0.05] to-primary/[0.08]" />
        
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-muted-foreground">
              Histórias de Sucesso
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
          >
            <span className="text-foreground">
              O Que Dizem
            </span>
            <br />
            <motion.span 
              className="gradient-text"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Nossos Clientes
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Resultados reais de empresas que transformaram seu marketing conosco.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative h-[500px] md:h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="relative h-full glass-card rounded-3xl p-8 md:p-12 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-purple-500/[0.05] to-primary/[0.08] rounded-3xl" />

                  <div className="absolute top-8 right-8 opacity-10">
                    <Quote className="w-16 h-16 text-foreground" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0 text-center md:text-left">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-primary/20 relative">
                          <img 
                            src={testimonials[currentIndex].avatar} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-primary mb-1 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {testimonials[currentIndex].company}
                      </p>
                      
                      <div className="flex justify-center md:justify-start gap-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="flex-1">
                      <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 font-light italic">
                        "{testimonials[currentIndex].text}"
                      </blockquote>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <div
                            key={i}
                            className="glass-card rounded-lg p-3 backdrop-blur-sm"
                          >
                            <span className="text-sm text-muted-foreground font-medium">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full glass-card text-foreground hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full glass-card text-foreground hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {[
            { number: "+75", label: "Clientes Ativos" },
            { number: "98%", label: "Taxa de Satisfação" },
            { number: "3.8x", label: "ROI Médio" },
            { number: "24/7", label: "Suporte Dedicado" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={fadeInUp}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

