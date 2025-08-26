import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GTMProvider from "@/components/GTMProvider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Construindo uma Máquina de Lucro Recorrente — Método ELG",
  description:
    "IA + processos simples para ativar quem já é seu cliente, reduzir perdas silenciosas e criar previsibilidade de caixa.",
  keywords: "método elg, douglas conrad, crescimento empresarial, retenção de clientes, aumento de receita, experience-led growth",
  authors: [{ name: "Douglas Conrad" }],
  openGraph: {
    title: "Construindo uma Máquina de Lucro Recorrente — Método ELG",
    description:
      "IA + processos simples para ativar quem já é seu cliente, reduzir perdas silenciosas e criar previsibilidade de caixa.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construindo uma Máquina de Lucro Recorrente — Método ELG",
    description:
      "IA + processos simples para ativar quem já é seu cliente, reduzir perdas silenciosas e criar previsibilidade de caixa.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Script adicional para garantir carregamento */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K3SBSHG5');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3SBSHG5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <GTMProvider>{children}</GTMProvider>
      </body>
    </html>
  );
}
