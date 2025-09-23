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
  title: "Do Funil ao Flywheel — Método ELG",
  description:
    "Enquanto você insiste no Funil Tradicional, seus concorrentes já lucram com o Flywheel.",
  keywords: "método elg, douglas conrad, crescimento empresarial, retenção de clientes, aumento de receita, experience-led growth",
  authors: [{ name: "Douglas Conrad" }],
  openGraph: {
    title: "Do Funil ao Flywheel — Método ELG",
    description:
      "Enquanto você insiste no Funil Tradicional, seus concorrentes já lucram com o Flywheel.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Funil ao Flywheel — Método ELG",
    description:
      "Enquanto você insiste no Funil Tradicional, seus concorrentes já lucram com o Flywheel.",
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
