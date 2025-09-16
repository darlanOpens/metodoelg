import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/scroll"

export function ToolkitSection() {
  return (
    <section className="py-20 bg-[#242424]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-serif font-light tracking-tight text-white text-center mb-12">
            Seu Kit de ferramentas para o Flywheel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#1E1E1E] border border-[#F4CE71] rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                O Motor do Engajamento
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Template de régua de relacionamento para automatizar a recompra e manter o ciclo em movimento
              </p>
            </div>

            <div className="bg-[#1E1E1E] border border-[#F4CE71] rounded-xl p-8 text-center">
              <div className="w-12 h-12 bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                O Mapa do Atrito
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Planilha de diagnóstico para encontrar e eliminar os pontos que travam o crescimento na sua base de clientes
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-[#F4CE71] text-xl font-bold">
              Disponível apenas durante a transmissão.
            </p>

            <Button
              onClick={() => scrollToSection('inscricao')}
              size="lg"
              className="bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] text-black hover:from-[#F4CE71]/90 hover:to-[#BE8C38]/90 text-lg px-8 py-6 rounded-full font-medium transition-all"
            >
              Quero minha vaga e o kit de ferramentas
            </Button>

            <p className="text-white text-lg">
              <span className="text-red-400">⚠️ </span>
              <span className="font-black">Não haverá replay.</span>
              {" "}Essa é sua única chance de participar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}