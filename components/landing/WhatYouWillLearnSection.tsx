import { Check } from "lucide-react"

const learningPoints = [
  "Como o Flywheel funciona na prática e como adaptá-lo ao seu negócio.",
  "Como transformar seu atendimento e pós-venda no principal combustível que acelera seu flywheel.",
  "Estratégias para transformar seus clientes em promotores e criar um ciclo de vendas autossustentável.",
  "Como mapear os pontos exatos da sua operação que freiam o crescimento e a recompra.",
  "O passo a passo para construir um sistema (com IA e automação) que estimula o cliente a comprar de novo."
]

export function WhatYouWillLearnSection() {
  return (
    <section className="py-20 bg-[#242424]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-serif font-light tracking-tight text-white">
              O que você vai aprender na aula gratuita
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              <span className="text-[#F4CE71]">Nesta aula exclusiva e gratuita</span>
              {" "}com Douglas Conrad, você vai descobrir o segredo para{" "}
              <span className="font-semibold">transformar sua estratégia de vendas</span>
            </p>
          </div>

          <div className="space-y-0 max-w-2xl mx-auto">
            {learningPoints.map((point, index) => (
              <div key={index}>
                <div className="flex items-start gap-4 py-6">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <Check className="w-5 h-5 text-[#F4CE71]" />
                  </div>
                  <p className="text-white text-base lg:text-lg leading-relaxed">{point}</p>
                </div>
                {index < learningPoints.length - 1 && (
                  <div className="border-b border-gray-700/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


