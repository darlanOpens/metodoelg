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
      <head />
      <body>
        <GTMProvider>{children}</GTMProvider>
      </body>
    </html>
  );
}
