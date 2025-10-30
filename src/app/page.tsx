import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedIn from "@/components/home/FeaturedIn";
import { PremiumTestimonials } from "@/components/home/PremiumTestimonials";
import ProblemSolution from "@/components/home/ProblemSolution";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesGrid from "@/components/home/ServicesGrid";
import MissionStatement from "@/components/home/MissionStatement";
import Differentiators from "@/components/home/Differentiators";
import SocialProof from "@/components/home/SocialProof";
import PricingCards from "@/components/home/PricingCards";
import FAQAccordion from "@/components/home/FAQAccordion";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Zenth - Agência de Marketing Digital Data-Driven | Meta Ads & Google Ads",
  description: "Transforme seu negócio com estratégias data-driven comprovadas. Gestão profissional de Meta Ads, Google Ads e automações. ROI médio de 3.8x. +75 clientes satisfeitos. Agende uma reunião gratuita!",
  openGraph: {
    title: "Zenth - Marketing Digital com ROI Comprovado | Meta Ads & Google Ads",
    description: "Alcance o máximo potencial do seu negócio com estratégias baseadas em dados. 98% de satisfação, ROI médio de 3.8x. Especialistas em Meta Ads, Google Ads e automações.",
    url: "https://zenth.com.br",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenth Marketing Digital - Dashboards e Resultados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenth - Marketing Digital Data-Driven | ROI de 3.8x",
    description: "Transforme dados em crescimento real. Meta Ads, Google Ads e automações que entregam resultados mensuráveis.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://zenth.com.br",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedIn />
        <ProblemSolution />
        <HowItWorks />
        <ServicesGrid />
        <PremiumTestimonials />
        <MissionStatement />
        <Differentiators />
        <SocialProof />
        <PricingCards />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}