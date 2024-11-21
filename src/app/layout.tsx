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
  title: "Átomo - Serviços de Manutenção e Reparos",
  description: "Oferecemos serviços de manutenção, instalação e reparos para empresas e residências. Confie na Átomo para manter seu local seguro e funcional.",
  keywords: "manutenção, instalação, reparos, engenharia elétrica, engenharia civil, automação, controle de acesso, Átomo",
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
        <meta property="og:description" content="Oferecemos serviços de manutenção, instalação e reparos para empresas e residências. Confie na Átomo para manter seu local seguro e funcional." />
        <meta property="og:image" content="https://seu-dominio.com/caminho/para/imagem.jpg" />
        <meta property="og:url" content="https://atomo2.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Átomo - Serviços de Manutenção e Reparos" />
        <meta name="twitter:description" content="Oferecemos serviços de manutenção, instalação e reparos para empresas e residências. Confie na Átomo para manter seu local seguro e funcional." />
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
            "description": "A Átomo oferece serviços de manutenção, instalação e reparos para empresas e residências, com foco em segurança e funcionalidade.",
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
