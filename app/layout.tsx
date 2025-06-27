import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Método ELG - Como Dobrar sua Receita Sem Gastar Mais em Tráfego",
  description: "Aula gratuita e ao vivo com Douglas Conrad. Descubra como transformar sua base de clientes em fonte constante de faturamento, recompra e indicação com o Método ELG.",
  keywords: "método elg, douglas conrad, crescimento empresarial, retenção de clientes, aumento de receita, experience-led growth",
  authors: [{ name: "Douglas Conrad" }],
  openGraph: {
    title: "Método ELG - Como Dobrar sua Receita Sem Gastar Mais em Tráfego",
    description: "Aula gratuita e ao vivo com Douglas Conrad. Transforme sua base de clientes em fonte constante de faturamento.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Método ELG - Como Dobrar sua Receita Sem Gastar Mais em Tráfego",
    description: "Aula gratuita e ao vivo com Douglas Conrad. Transforme sua base de clientes em fonte constante de faturamento.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
