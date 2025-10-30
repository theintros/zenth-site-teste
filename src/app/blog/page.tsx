import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog Zenth - Dicas de Marketing Digital e Estratégias Data-Driven",
  description: "Aprenda estratégias avançadas de marketing digital, Meta Ads, Google Ads e automações. Conteúdo exclusivo sobre análise de dados, otimização de campanhas e aumento de ROI.",
  openGraph: {
    title: "Blog Zenth - Insights e Estratégias de Marketing Digital",
    description: "Conteúdo especializado sobre marketing data-driven, gestão de tráfego pago e automações. Aprenda com quem entrega resultados reais.",
    url: "https://zenth.com.br/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Zenth - Marketing Digital Data-Driven",
    description: "Insights, estratégias e cases de sucesso em marketing digital.",
  },
  alternates: {
    canonical: "https://zenth.com.br/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
