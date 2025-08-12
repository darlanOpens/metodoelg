import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#F9A826]/20 to-[#FFDE59]/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">🔒 Garanta sua vaga agora</h2>

          <div className="space-y-4 text-lg text-gray-300">
            <p>As vagas são limitadas para garantir a qualidade da experiência.</p>
            <p className="text-xl font-bold text-[#F9A826]">Não haverá replay. A decisão é agora.</p>
          </div>

          <a href="#inscricao">
            <Button className="w-full lg:w-auto bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-6 px-12 rounded-full text-xl hover:brightness-110 transition-all duration-300 transform hover:scale-105">
              👉 Sim, quero participar
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}


