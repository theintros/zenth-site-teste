import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contato - Agende uma Reunião Gratuita | Zenth Marketing",
  description: "Entre em contato com a Zenth para transformar seu marketing digital. Agende uma reunião estratégica gratuita e descubra como aumentar seu ROI com nossas estratégias data-driven.",
  openGraph: {
    title: "Fale com a Zenth - Consultoria Gratuita em Marketing Digital",
    description: "Agende uma reunião e descubra como podemos ajudar seu negócio a crescer com marketing baseado em dados. Resposta em até 24h.",
    url: "https://zenth.com.br/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato Zenth - Reunião Estratégica Gratuita",
    description: "Transforme seu marketing digital. Entre em contato e agende uma análise gratuita.",
  },
  alternates: {
    canonical: "https://zenth.com.br/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
