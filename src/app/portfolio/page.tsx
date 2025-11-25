import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioDesigns from "@/components/portfolio/PortfolioDesigns";
import PortfolioWebsites from "@/components/portfolio/PortfolioWebsites";
import PortfolioAds from "@/components/portfolio/PortfolioAds";

export const metadata: Metadata = {
  title: "Portfólio - Trabalhos Realizados | Zenth Marketing",
  description: "Conheça alguns dos projetos desenvolvidos ao longo da carreira. Artes criativas, sites, landing pages, sistemas e gestão de contas de anúncios com resultados comprovados.",
  openGraph: {
    title: "Portfólio - Trabalhos Realizados | Zenth Marketing",
    description: "Explore projetos desenvolvidos em marketing digital, design, desenvolvimento web e gestão de tráfego pago. Resultados reais, trabalhos reais.",
    url: "https://zenth.com.br/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio - Zenth Marketing",
    description: "Trabalhos desenvolvidos em marketing digital, design e desenvolvimento web.",
  },
  alternates: {
    canonical: "https://zenth.com.br/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PortfolioHero />
        <PortfolioDesigns />
        <PortfolioWebsites />
        <PortfolioAds />
      </main>
      <Footer />
    </div>
  );
}

