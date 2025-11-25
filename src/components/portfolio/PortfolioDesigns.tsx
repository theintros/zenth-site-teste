"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, CaretLeft, CaretRight } from "phosphor-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// Todas as artes mapeadas
const designProjects = [
  {
    id: 1,
    title: "Provedor de Internet",
    category: "Social Media",
    image: "/portfolio/designs/melhor ano de sua vida fibraon sfs.png",
  },
  {
    id: 2,
    title: "Hamburgueria",
    category: "Gastronomia",
    image: "/portfolio/designs/BACON CLÁSSICO + BATATA - BROGUI.jpg",
  },
  {
    id: 3,
    title: "Pizzaria",
    category: "Gastronomia",
    image: "/portfolio/designs/BLACK PIZZA.jpg",
  },
  {
    id: 4,
    title: "Construtora",
    category: "Institucional",
    image: "/portfolio/designs/JUSTO E LOPES v1.jpg",
  },
  {
    id: 5,
    title: "Cervejaria",
    category: "E-commerce",
    image: "/portfolio/designs/CELULAR 14 CENT.webp",
  },
  {
    id: 6,
    title: "Pizzaria",
    category: "Gastronomia",
    image: "/portfolio/designs/QUINTA ARTESÃO - CRIATIVO - MARGUERITA.jpg",
  },
  {
    id: 7,
    title: "Suplementos",
    category: "Saúde",
    image: "/portfolio/designs/KIT WHEY 2.jpg",
  },
  {
    id: 8,
    title: "Beach Tenis",
    category: "Eventos",
    image: "/portfolio/designs/ANIVERSÁRIO v2 - CONEXÃO PRAIA.jpg",
  },
  {
    id: 9,
    title: "Odontologia",
    category: "Estética",
    image: "/portfolio/designs/ANTES E DEPOIS ALINE 2.jpg",
  },
  {
    id: 10,
    title: "Festividades",
    category: "Institucional",
    image: "/portfolio/designs/BOAS FESTAS CMN.jpg",
  },
  {
    id: 11,
    title: "Campanha Política",
    category: "Eleições",
    image: "/portfolio/designs/cantarella google.jpg",
  },
  {
    id: 12,
    title: "Restaurante",
    category: "Gastronomia",
    image: "/portfolio/designs/CRIATIVO 1.png",
  },
  {
    id: 13,
    title: "Datas Comemorativas",
    category: "Datas",
    image: "/portfolio/designs/DIA DA MULHER - CASA CONCEITO.jpg",
  },
  {
    id: 14,
    title: "Provedor de Internet",
    category: "Social Media",
    image: "/portfolio/designs/playlists fibraon sfs.png",
  },
  {
    id: 15,
    title: "E-commerce de Moda",
    category: "Moda",
    image: "/portfolio/designs/REGATA VILCHES.jpg",
  },
  {
    id: 16,
    title: "Pizzaria",
    category: "Gastronomia",
    image: "/portfolio/designs/SORTEIO PIZZARIA PAULISTANA.jpg",
  },
  {
    id: 17,
    title: "Colégio",
    category: "Institucional",
    image: "/portfolio/designs/ultimas vagas.png",
  },
];

export default function PortfolioDesigns() {
  const [selectedImage, setSelectedImage] = useState<typeof designProjects[0] | null>(null);

  // Navegação entre imagens
  const navigateImage = useCallback((direction: "next" | "prev") => {
    if (!selectedImage) return;
    const currentIndex = designProjects.findIndex(p => p.id === selectedImage.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % designProjects.length;
    } else {
      newIndex = (currentIndex - 1 + designProjects.length) % designProjects.length;
    }

    setSelectedImage(designProjects[newIndex]);
  }, [selectedImage]);

  // Atalhos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateImage]);

  return (
    <section className="relative py-20 overflow-hidden bg-black/20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <Palette size={32} weight="bold" className="text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Galeria Criativa</h2>
            </div>
            <p className="text-muted-foreground max-w-xl">
              Algumas das artes desenvolvidas para redes sociais, anúncios e campanhas.
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 pb-4">
              {designProjects.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div 
                    className="h-full relative group cursor-pointer"
                    onClick={() => setSelectedImage(project)}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className={`relative aspect-square rounded-xl overflow-hidden bg-background border border-white/5 flex flex-col shadow-lg`}>
                      {/* Image Area */}
                      <div className="relative w-full h-full">
                         <Image 
                           src={project.image}
                           alt={project.title}
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-110"
                           sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 20vw"
                         />
                         {/* Gradient leve para destacar o título se a imagem for clara, mas sutil */}
                         <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    </div>
                    {/* Visual mais limpo para o título fora da imagem */}
                    <div className="mt-3 px-1">
                      <h3 className="text-sm font-bold text-white/90 truncate">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <CarouselPrevious className="static transform-none w-10 h-10" />
              <CarouselNext className="static transform-none w-10 h-10" />
            </div>
            <CarouselPrevious className="hidden md:flex -left-12 w-10 h-10" />
            <CarouselNext className="hidden md:flex -right-12 w-10 h-10" />
          </Carousel>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden md:flex"
            >
              <CaretLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden md:flex"
            >
              <CaretRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 z-50 flex gap-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="relative w-full h-full flex items-center justify-center py-8">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img 
                   src={selectedImage.image} 
                   alt={selectedImage.title}
                   className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                 />
              </div>

              <div className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center pointer-events-none">
                <div className="inline-block px-6 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                   <h3 className="text-xl font-bold text-white mb-1">{selectedImage.title}</h3>
                   <span className="text-sm text-primary font-medium">{selectedImage.category}</span>
                </div>
              </div>
            </motion.div>

            {/* Mobile Nav Overlay (invisible tap areas) */}
             <div className="absolute inset-y-0 left-0 w-1/4 z-40 md:hidden" onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }} />
             <div className="absolute inset-y-0 right-0 w-1/4 z-40 md:hidden" onClick={(e) => { e.stopPropagation(); navigateImage("next"); }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
