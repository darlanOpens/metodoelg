import { Button } from "@/components/ui/button"
import { CheckCircle, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#0C1211] text-white font-inter flex items-center justify-center p-6">
      <div className="max-w-3xl mx-auto text-center bg-[#1E1E1E] p-8 md:p-12 rounded-2xl border border-[#F9A826]/30 shadow-2xl shadow-[#F9A826]/10">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Inscrição confirmada!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Parabéns! Sua vaga para a aula gratuita "Do Funil ao Flywheel" está garantida.
          Enviaremos todos os detalhes para o seu e-mail e WhatsApp.
        </p>

        <div className="bg-[#0C1211] p-6 rounded-lg border border-gray-700/50 mb-8">
          <h2 className="text-xl font-bold text-[#F9A826] mb-4">
            Enquanto a aula não começa, conecte-se conosco:
          </h2>
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://www.instagram.com/douglascon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-8 h-8" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/douglasconrad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <Link href="/">
          <Button
            variant="outline"
            className="border-[#F9A826] text-[#F9A826] hover:bg-[#F9A826] hover:text-black transition-all duration-300"
          >
            Voltar para a página principal
          </Button>
        </Link>
      </div>
    </div>
  )
} 