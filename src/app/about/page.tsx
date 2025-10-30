import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import OurMethodology from "@/components/about/OurMethodology";
import TeamPhilosophy from "@/components/about/TeamPhilosophy";

export const metadata: Metadata = {
  title: "Sobre a Zenth - Nossa História e Valores",
  description: "Conheça a Zenth, agência de marketing digital especializada em estratégias data-driven. Nossa missão é transformar dados em crescimento real e mensurável para nossos clientes. Descubra nossos valores e metodologia.",
  openGraph: {
    title: "Sobre a Zenth - Agência de Marketing Digital Data-Driven",
    description: "Somos especialistas em transformar dados em resultados. Conheça nossa história, valores e metodologia que já ajudou +75 empresas a crescerem.",
    url: "https://zenth.com.br/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a Zenth - Marketing Digital Baseado em Dados",
    description: "Conheça a agência que transforma insights em ação e ação em crescimento.",
  },
  alternates: {
    canonical: "https://zenth.com.br/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <OurStory />
        <CoreValues />
        <OurMethodology />
        <TeamPhilosophy />
      </main>
      <Footer />
    </div>
  );
}
