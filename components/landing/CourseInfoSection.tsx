import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, AlertTriangle } from "lucide-react"
import { EVENT_DETAILS } from "@/lib/event"
import { scrollToSection } from "@/lib/scroll"

export function CourseInfoSection() {
  return (
    <section className="py-20 bg-[#242424]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-serif font-light tracking-tight text-white text-center mb-12">
            Informações da Aula
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-transparent border border-[#F4CE71] rounded-xl p-6 text-center">
              <Calendar className="w-8 h-8 text-[#F4CE71] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-3">Data</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {EVENT_DETAILS.date.split(' ').map((part, i) => (
                  <span key={i} className="block">{part}</span>
                ))}
              </p>
            </div>

            <div className="bg-transparent border border-[#F4CE71] rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-[#F4CE71] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-3">Horário</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {EVENT_DETAILS.time.replace(' ', '\n')}
                <span className="block">{EVENT_DETAILS.duration}</span>
              </p>
            </div>

            <div className="bg-transparent border border-[#F4CE71] rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-[#F4CE71] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-3">Formato</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                100% online e ao vivo
              </p>
            </div>

            <div className="bg-transparent border border-[#F4CE71] rounded-xl p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-[#F4CE71] mx-auto mb-3" />
              <h3 className="font-bold text-white mb-3">Replay</h3>
              <p className="text-red-400 text-sm">
                Não haverá
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection('inscricao')}
              size="lg"
              className="bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] text-black hover:from-[#F4CE71]/90 hover:to-[#BE8C38]/90 text-lg px-8 py-6 rounded-full font-medium transition-all"
            >
              Quero garantir minha vaga na aula
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


