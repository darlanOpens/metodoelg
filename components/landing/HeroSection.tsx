import Image from "next/image"
import { Caveat } from "next/font/google"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/paths"
import { EVENT_DETAILS } from "@/lib/event"

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] })

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/Background.png")}
          alt="Background"
          fill
          className="object-cover object-left-top lg:object-top"
          priority
        />
        <div className="absolute inset-0"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#F9A826]/10 to-transparent"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#F9A826]/30 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#F9A826]/20 rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-[#F9A826]/25 -rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="space-y-8 lg:col-span-8 xl:col-span-8">
            <div className="space-y-4">
              <div className="mb-2">
                <Image
                  src={withBasePath("/metodoELGhorizontal.png")}
                  alt="Método ELG"
                  width={600}
                  height={180}
                  className="h-32 lg:h-40 w-auto"
                />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-12 lg:mb-16">
                <span>Construindo uma Máquina de </span>
                <span className="relative inline-block">
                  <span className="line-through decoration-red-500 decoration-4">Vendas</span>
                  <span
                    className={`${caveat.className} absolute left-12 sm:left-14 md:left-16 lg:left-18 bottom-[-0.4rem] sm:bottom-[-0.4rem] lg:bottom-[-0.2rem] text-[#F9A826] text-3xl lg:text-4xl rotate-[-14deg] whitespace-nowrap leading-[0.85] tracking-tight`}
                  >
                    Lucro Recorrente
                  </span>
                </span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                {EVENT_DETAILS.subtitle}
              </p>
            </div>

            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#F9A826]" />
                <span>
                  <strong>Data:</strong> {EVENT_DETAILS.date}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F9A826]" />
                <span>
                  <strong>Horário:</strong> {EVENT_DETAILS.time}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#F9A826]" />
                <span>
                  <strong>{EVENT_DETAILS.format}</strong> – {EVENT_DETAILS.noReplayShort}.
                </span>
              </div>
            </div>

            <a href="#inscricao" className="block pt-6">
              <Button className="w-full lg:w-auto bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
                <span className="lg:hidden">🔒 {EVENT_DETAILS.ctas.primary}</span>
                <span className="hidden lg:inline">🔒 {EVENT_DETAILS.ctas.primary}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>

            <p className="text-sm text-gray-400">
              👉 <em>Transmissão única. Vagas limitadas.</em>
            </p>
          </div>

          {/* Coluna direita vazia */}
          <div className="relative hidden lg:block lg:col-span-4"></div>
        </div>
      </div>
    </section>
  )
}


