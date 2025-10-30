"use client";

import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

const MetaAds = () => (
  <div className="h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
    <Image 
      src="/logos-parceiros/meta.png" 
      alt="Meta Ads" 
      width={200} 
      height={60} 
      className="object-contain h-full w-auto"
    />
  </div>
);

const GoogleAds = () => (
  <div className="h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
    <Image 
      src="/logos-parceiros/google.png" 
      alt="Google Ads" 
      width={200} 
      height={60} 
      className="object-contain h-full w-auto"
    />
  </div>
);

const N8N = () => (
  <div className="h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
    <Image 
      src="/logos-parceiros/n8n.png" 
      alt="N8N" 
      width={200} 
      height={60} 
      className="object-contain h-full w-auto"
    />
  </div>
);

const CardapioWeb = () => (
  <div className="h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
    <Image 
      src="/logos-parceiros/cardapio.png" 
      alt="Cardápio Web" 
      width={200} 
      height={60} 
      className="object-contain h-full w-auto"
    />
  </div>
);

const GoogleAnalytics = () => (
  <div className="h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
    <Image 
      src="/logos-parceiros/google.png" 
      alt="Google Analytics" 
      width={200} 
      height={60} 
      className="object-contain h-full w-auto"
    />
  </div>
);

const WhatsApp = () => (
  <div className="h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
    <Image 
      src="/logos-parceiros/wpp.png" 
      alt="WhatsApp" 
      width={200} 
      height={60} 
      className="object-contain h-full w-auto"
    />
  </div>
);

const Evolution = () => (
  <div className="h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
    <Image 
      src="/logos-parceiros/evolution.png" 
      alt="Evolution API" 
      width={200} 
      height={60} 
      className="object-contain h-full w-auto"
    />
  </div>
);

const Omnial = () => (
  <div className="h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
    <Image 
      src="/logos-parceiros/omnial.png" 
      alt="Omnial" 
      width={200} 
      height={60} 
      className="object-contain h-full w-auto"
    />
  </div>
);

const logos = [
  { id: "meta", component: MetaAds },
  { id: "google", component: GoogleAds },
  { id: "n8n", component: N8N },
  { id: "cardapio", component: CardapioWeb },
  { id: "analytics", component: GoogleAnalytics },
  { id: "whatsapp", component: WhatsApp },
  { id: "evolution", component: Evolution },
  { id: "omnial", component: Omnial },
];

export default function FeaturedIn() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-3">
            Ferramentas que <span className="gradient-text">Dominamos</span>
          </h3>
          <p className="text-muted-foreground">
            Utilizamos as melhores tecnologias do mercado
          </p>
        </motion.div>

        {/* Infinite Slider */}
        <div className="relative h-[80px] w-full">
          <InfiniteSlider className="flex h-full w-full items-center" duration={30} gap={128}>
            {logos.map(({ id, component: Logo }) => (
              <div key={id} className="flex-shrink-0 px-8">
                <Logo />
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[80px] md:w-[200px]"
            direction="left"
            blurIntensity={0.5}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[80px] md:w-[200px]"
            direction="right"
            blurIntensity={0.5}
          />
        </div>
      </div>
    </section>
  );
}