"use client";

import { motion } from "framer-motion";
import { Code, ArrowSquareOut, DeviceMobile, Monitor, CheckCircle, ShoppingCart, Rocket, GameController, Diamond, Storefront, Buildings, Pizza, Heartbeat, HouseLine } from "phosphor-react";
import { useState } from "react";
import Link from "next/link";
import { FrostedGlassCard } from "@/components/ui/frosted-glass-card";

// Reordenação solicitada:
// 1. D'Sanzo
// 2. Omnial
// 3. Cardápio Feudal
// 4. Justo & Lopes
// 5. Boardgame
// 6. Vila Portuária
// 7. Inovar
// 8. Zéa Joias
// 9. Horizon Play

const websiteProjects = [
  {
    id: 7,
    title: "D'Sanzo Pisos",
    description: "Site institucional para empresa de construção e reformas. Catálogo de serviços e orçamentos.",
    type: "Institucional",
    technologies: ["WordPress", "PHP"],
    url: "https://dsanzopisos.com.br/",
    color: "from-slate-600 to-gray-500",
    icon: Storefront,
    allowIframe: true,
  },
  {
    id: 2,
    title: "Omnial",
    description: "Landing Page SaaS B2B focada em conversão e apresentação de software.",
    type: "SaaS Landing Page",
    technologies: ["React", "Tailwind"],
    url: "https://omnial.com.br/",
    color: "from-violet-600 to-purple-500",
    icon: Rocket,
    allowIframe: true,
  },
  {
    id: 8,
    title: "Cardápio Feudal",
    description: "Sistema de cardápio digital otimizado para delivery rápido.",
    type: "Web App Delivery",
    technologies: ["PWA", "React"],
    url: "https://cardapio.feudalburguer.com.br/",
    color: "from-yellow-600 to-orange-500",
    icon: Pizza,
    allowIframe: true,
  },
  {
    id: 3,
    title: "Justo & Lopes",
    description: "Site institucional premium para construtora de alto padrão. Design sofisticado.",
    type: "Institucional",
    technologies: ["React", "Next.js"],
    url: "https://justoelopes.com.br/",
    color: "from-slate-700 to-gray-600",
    icon: HouseLine,
    allowIframe: true,
  },
  {
    id: 5,
    title: "Feudal Boardgame",
    description: "Catálogo interativo gamificado para hamburgueria temática.",
    type: "Web App",
    technologies: ["React", "Interactive"],
    url: "https://boardgame.feudalburguer.com.br/",
    color: "from-orange-600 to-red-500",
    icon: GameController,
    allowIframe: true,
  },
  {
    id: 9,
    title: "Vila Portuária",
    description: "Landing page institucional para empreendimento e eventos.",
    type: "Landing Page",
    technologies: ["Netlify", "Static"],
    url: "https://vilaportuaria.netlify.app/",
    color: "from-cyan-600 to-blue-500",
    icon: Buildings,
    allowIframe: true,
  },
  {
    id: 4,
    title: "Inovar Odontologia",
    description: "Landing page para clínica odontológica com foco em agendamento.",
    type: "Landing Page",
    technologies: ["WordPress", "Elementor"],
    url: "https://www.clinicainovarodontologia.com.br/",
    color: "from-teal-500 to-emerald-400",
    icon: Heartbeat,
    allowIframe: true,
  },
  {
    id: 6,
    title: "Zéa Joias",
    description: "Landing Page Institucional apresentando a marca e processo de criação.",
    type: "Institucional Luxo",
    technologies: ["Web Design", "Branding"],
    url: "https://zeajoias.com/",
    color: "from-emerald-600 to-teal-500",
    icon: Diamond,
    allowIframe: true,
  },
  {
    id: 1,
    title: "Horizon Play",
    description: "E-commerce completo de eletrônicos e games. Sistema robusto.",
    type: "E-commerce Full",
    technologies: ["Vtex IO", "React"],
    url: "https://www.horizonplay.com.br/",
    color: "from-blue-600 to-cyan-500",
    icon: ShoppingCart,
    allowIframe: false,
  },
];

export default function PortfolioWebsites() {
  const [iframeErrors, setIframeErrors] = useState<Record<number, boolean>>({});

  const handleIframeError = (id: number) => {
    setIframeErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code size={24} weight="bold" className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Sites & Sistemas</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Experiências web imersivas. Preview ao vivo dos projetos desenvolvidos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {websiteProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative bg-background/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col h-full shadow-lg">
                {/* Browser Bar */}
                <div className="h-9 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2 shrink-0 z-20">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="ml-3 flex-1 h-5 rounded bg-white/5 flex items-center px-2 text-[10px] text-muted-foreground font-mono truncate opacity-50">
                    {project.url.replace('https://', '').replace('www.', '')}
                  </div>
                </div>

                {/* Live Preview / Placeholder Area */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-white group/preview">
                  {/* Background Fallback */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <project.icon size={48} className="text-white/30" weight="duotone" />
                  </div>

                  {/* Iframe Live Preview */}
                  {project.allowIframe && !iframeErrors[project.id] && (
                    <iframe
                      src={project.url}
                      className="absolute inset-0 w-[400%] h-[400%] scale-25 origin-top-left border-0 pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 bg-white"
                      loading="lazy"
                      onLoad={(e) => {
                        (e.target as HTMLIFrameElement).style.opacity = "1"; 
                      }}
                      onError={() => handleIframeError(project.id)}
                    />
                  )}
                  
                  {/* Overlay Gradient for Text Readability on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col bg-background/80 backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1 block">{project.type}</span>
                      <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                    </div>
                    <Link 
                      href={project.url} 
                      target="_blank" 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all -mr-1 -mt-1"
                    >
                      <ArrowSquareOut size={16} />
                    </Link>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-secondary/50 border border-white/5 text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
