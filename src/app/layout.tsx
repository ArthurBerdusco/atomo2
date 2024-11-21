import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  description: "Soluções inteligentes de manutenção, instalação e reparos para escritórios, ambientes corporativos e edifícios comerciais.",
  keywords: "manutenção, instalação, reparos, escritórios, ambientes corporativos, edifícios comerciais, automação, controle de acesso, Átomo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow" />


        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Átomo - Serviços de Manutenção e Reparos" />
        <meta property="og:description" content="Soluções de manutenção, instalação e reparos para escritórios, ambientes corporativos e edifícios comerciais." />
        <meta property="og:image" content="https://seu-dominio.com/caminho/para/imagem.jpg" />
        <meta property="og:url" content="https://atomo2.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Átomo - Serviços de Manutenção e Reparos" />
        <meta name="twitter:description" content="Soluções de manutenção, instalação e reparos para escritórios, ambientes corporativos e edifícios comerciais." />
        <meta name="twitter:image" content="https://seu-dominio.com/caminho/para/imagem.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://atomo2.vercel.app/" />

        {/* Dados Estruturados (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Átomo",
            "url": "https://atomo2.vercel.app/",
            "logo": "https://atomo2.vercel.app/logo.png",
            "description": "Soluções de manutenção, instalação e reparos para escritórios, ambientes corporativos e edifícios comerciais.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55 11 986745464",
              "contactType": "Customer Service",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://www.facebook.com/atomo",
              "https://www.linkedin.com/company/atomo"
            ]
          }
        `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
