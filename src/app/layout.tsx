import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Átomo - Manutenção e Instalação para Ambientes Corporativos",
  description:
    "Soluções inteligentes de manutenção, instalação e reparos para escritórios, ambientes corporativos e edifícios comerciais.",
  keywords:
    "manutenção, instalação, reparos, escritórios, ambientes corporativos, edifícios comerciais, automação, controle de acesso, Átomo",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <head>
        {/* GTM Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MCHRXVKR');`,
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Átomo - Serviços de Manutenção e Reparos" />
        <meta
          property="og:description"
          content="Soluções de manutenção, instalação e reparos para escritórios, ambientes corporativos e edifícios comerciais."
        />
        <meta property="og:image" content="https://seu-dominio.com/caminho/para/imagem.jpg" />
        <meta property="og:url" content="https://www.atomosolucoes.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Átomo - Serviços de Manutenção e Reparos" />
        <meta
          name="twitter:description"
          content="Soluções de manutenção, instalação e reparos para escritórios, ambientes corporativos e edifícios comerciais."
        />
        <meta name="twitter:image" content="https://seu-dominio.com/caminho/para/imagem.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.atomosolucoes.com/" />

        {/* Dados Estruturados (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Átomo",
              url: "https://www.atomosolucoes.com/",
              logo: "https://www.atomosolucoes.com/atomo.svg",
              description:
                "Soluções de manutenção, instalação e reparos para escritórios, ambientes corporativos e edifícios comerciais.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55 11 964685030",
                contactType: "Customer Service",
                areaServed: "BR",
                availableLanguage: "Portuguese",
              },
              sameAs: [
                "https://www.facebook.com/atomo",
                "https://www.linkedin.com/company/atomo",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* GTM noscript — logo após abertura do body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCHRXVKR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;