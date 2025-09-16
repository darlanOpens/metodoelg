import { Gift, ArrowRight, AlertTriangle, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EVENT_DETAILS } from "@/lib/event"
import { scrollToSection } from "@/lib/scroll"

export function BonusesSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#F9A826]/10 to-[#FFDE59]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">🎁 Seu Kit de ferramentas para o Flywheel</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#1E1E1E] border-[#F9A826]/30">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-[#F9A826] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">📋 O Motor do Engajamento</h3>
                <p className="text-gray-300">Template de régua de relacionamento para automatizar a recompra e manter o ciclo em movimento</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1E1E1E] border-[#F9A826]/30">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-[#F9A826] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">📊 O Mapa do Atrito</h3>
                <p className="text-gray-300">Planilha de diagnóstico para encontrar e eliminar os pontos que travam o crescimento na sua base de clientes</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-[#F9A826] font-bold text-lg mt-8">Disponível apenas durante a transmissão.</p>

          <div className="mt-12">
            <Button
              onClick={() => scrollToSection('inscricao')}
              className="w-full lg:w-auto bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105"
            >
              <span className="lg:hidden">🔒 Quero minha vaga e o kit de ferramentas</span>
              <span className="hidden lg:inline">🔒 Quero minha vaga e o kit de ferramentas</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-red-400 font-semibold mt-4">
              ⚠️ <strong>Não haverá replay.</strong> Essa é sua única chance de participar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


