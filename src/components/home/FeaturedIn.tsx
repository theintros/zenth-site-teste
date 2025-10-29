"use client";

import { motion } from "framer-motion";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const MetaAds = () => (
  <span className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
    Meta Ads
  </span>
);

const GoogleAds = () => (
  <span className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
    Google Ads
  </span>
);

const N8N = () => (
  <span className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
    N8N
  </span>
);

const CardapioWeb = () => (
  <span className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
    Cardápio Web
  </span>
);

const GoogleAnalytics = () => (
  <span className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
    Google Analytics
  </span>
);

const WhatsApp = () => (
  <span className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
    WhatsApp
  </span>
);

const Evolution = () => (
  <span className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
    Evolution API
  </span>
);

const Omnial = () => (
  <span className="text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
    Omnial
  </span>
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
          <InfiniteSlider className="flex h-full w-full items-center" duration={30} gap={96}>
            {logos.map(({ id, component: Logo }) => (
              <div key={id} className="flex-shrink-0 px-4">
                <Logo />
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-[200px]"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-[200px]"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
}