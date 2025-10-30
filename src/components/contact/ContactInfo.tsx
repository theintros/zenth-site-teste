"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Envelope,
  Phone,
  Clock,
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
} from "phosphor-react";
import GlassCard from "../GlassCard";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Localização do Escritório",
      content: "Rua da Inovação 123, Distrito Tech\nSão Paulo, SP 01234-567",
    },
    {
      icon: Envelope,
      title: "E-mail",
      content: "contato@zenth.com.br\nsuporte@zenth.com.br",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 1234-5678\n+55 (11) 9876-5432",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda - Sexta: 9h - 18h BRT\nFins de semana: Mediante agendamento",
    },
  ];

  const socialLinks = [
    { icon: LinkedinLogo, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: TwitterLogo, href: "https://twitter.com", label: "Twitter" },
    { icon: InstagramLogo, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <div className="space-y-8">
      <GlassCard>
        <h2 className="text-3xl font-bold mb-2">Informações de Contato</h2>
        <p className="text-muted-foreground mb-8">
          Prefere entrar em contato diretamente? Aqui está como nos encontrar.
        </p>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={24} weight="bold" className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{detail.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {detail.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="text-xl font-bold mb-6">Conecte-se Conosco</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all"
                aria-label={social.label}
              >
                <Icon size={24} weight="bold" />
              </motion.a>
            );
          })}
        </div>
      </GlassCard>

      <GlassCard className="bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
        <h3 className="text-xl font-bold mb-3">Garantia de Resposta Rápida</h3>
        <p className="text-muted-foreground">
          Respondemos a todas as consultas em até 24 horas durante os dias úteis. Para assuntos urgentes, ligue diretamente.
        </p>
      </GlassCard>
    </div>
  );
}