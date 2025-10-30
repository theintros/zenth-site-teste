import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://zenth.com.br'),
  title: {
    default: "Zenth - Agência de Marketing Digital Data-Driven | ROI Comprovado",
    template: "%s | Zenth Marketing"
  },
  description: "Transforme seu negócio com marketing digital baseado em dados. Especialistas em Meta Ads, Google Ads e automações. Aumente seu ROI em até 3.8x com estratégias comprovadas.",
  keywords: [
    "agência de marketing digital",
    "marketing data-driven",
    "gestão de tráfego pago",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Google Ads",
    "automação de marketing",
    "ROI marketing digital",
    "consultoria marketing digital",
    "agência performance digital",
    "tráfego qualificado",
    "conversão digital",
    "análise de dados marketing",
    "estratégia digital"
  ],
  authors: [{ name: "Zenth Marketing" }],
  creator: "Zenth Marketing Digital",
  publisher: "Zenth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://zenth.com.br",
    siteName: "Zenth Marketing",
    title: "Zenth - Marketing Digital Data-Driven com ROI Comprovado",
    description: "Agência especializada em Meta Ads, Google Ads e automações. Transforme dados em resultados reais. 98% de satisfação dos clientes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenth - Marketing Digital Data-Driven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenth - Marketing Digital Data-Driven com ROI Comprovado",
    description: "Especialistas em Meta Ads, Google Ads e automações. Aumente seu ROI em até 3.8x.",
    images: ["/og-image.png"],
    creator: "@zenth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://zenth.com.br",
  },
  category: "Marketing Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="canonical" href="https://zenth.com.br" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="Brasil" />
        <meta name="theme-color" content="#06b6d4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zenth Marketing",
              "url": "https://zenth.com.br",
              "logo": "https://zenth.com.br/logo-zenth.png",
              "description": "Agência de marketing digital especializada em estratégias data-driven para maximizar ROI",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://www.linkedin.com/company/zenth",
                "https://www.instagram.com/zenth",
                "https://www.facebook.com/zenth"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Atendimento ao Cliente",
                "availableLanguage": "Portuguese"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Brasil"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Marketing Digital",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gestão de Tráfego Pago",
                      "description": "Meta Ads e Google Ads com foco em ROI"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automação de Marketing",
                      "description": "Automações inteligentes com N8N e Evolution API"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Análise de Dados",
                      "description": "Dashboards e relatórios estratégicos data-driven"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Zenth Marketing",
              "url": "https://zenth.com.br",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://zenth.com.br/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}