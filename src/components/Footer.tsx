"use client";

import Link from "next/link";
import {
  LinkedinLogo,
  TwitterLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "phosphor-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Empresa: [
      { label: "Sobre", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contact" },
    ],
    Serviços: [
      { label: "Análise de Dados", href: "/#services" },
      { label: "Estratégia de Marketing", href: "/#services" },
      { label: "Posicionamento de Marca", href: "/#services" },
    ],
    Legal: [
      { label: "Política de Privacidade", href: "/privacy" },
      { label: "Termos de Serviço", href: "/terms" },
      { label: "Política de Cookies", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: LinkedinLogo, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: TwitterLogo, href: "https://twitter.com", label: "Twitter" },
    { icon: InstagramLogo, href: "https://instagram.com", label: "Instagram" },
    { icon: EnvelopeSimple, href: "mailto:contato@zenth.com.br", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="text-3xl font-bold gradient-text">ZENTH</div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Assessoria de marketing data-driven que entrega ROI real para marcas ambiciosas através de insights estratégicos e soluções inovadoras.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} weight="bold" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-foreground font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Zenth. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com precisão e paixão
          </p>
        </div>
      </div>
    </footer>
  );
}