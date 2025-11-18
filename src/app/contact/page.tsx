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
      {/* Netlify Form Detection - Hidden form for Contact */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="company" />
        <input type="tel" name="phone" />
        <select name="service">
          <option value="Gestão de Tráfego Pago">Gestão de Tráfego Pago</option>
          <option value="Serviços Criativos">Serviços Criativos</option>
          <option value="Posicionamento de Marca">Posicionamento de Marca</option>
          <option value="Chatbots e Automações com IA">Chatbots e Automações com IA</option>
          <option value="E-commerce & Conversão">E-commerce & Conversão</option>
          <option value="Marketing Digital">Marketing Digital</option>
          <option value="Sites, Landing Pages e Sistemas">Sites, Landing Pages e Sistemas</option>
          <option value="Análise de Dados">Análise de Dados</option>
          <option value="Automação de Marketing">Automação de Marketing</option>
          <option value="Outro">Outro</option>
        </select>
        <select name="budget">
          <option value="R$ 25.000 - R$ 50.000">R$ 25.000 - R$ 50.000</option>
          <option value="R$ 50.000 - R$ 100.000">R$ 50.000 - R$ 100.000</option>
          <option value="R$ 100.000 - R$ 250.000">R$ 100.000 - R$ 250.000</option>
          <option value="R$ 250.000 - R$ 500.000">R$ 250.000 - R$ 500.000</option>
          <option value="R$ 500.000 - R$ 1.000.000">R$ 500.000 - R$ 1.000.000</option>
          <option value="R$ 1.000.000+">R$ 1.000.000+</option>
        </select>
        <textarea name="message"></textarea>
        <input type="hidden" name="bot-field" />
      </form>
      
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
