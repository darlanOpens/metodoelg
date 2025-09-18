import Image from "next/image"
import { Crown, Zap } from "lucide-react"
import { withBasePath } from "@/lib/paths"
import { METHOD_DESCRIPTION, MENTOR_QUOTE, EVENT_DETAILS } from "@/lib/event"

export function MentorSection() {
  return (
    <section className="py-16 bg-[#0C1211]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">Sobre o mentor</h2>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="lg:col-span-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  <span>MENTOR</span>
                </div>
              </div>
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#F9A826]/50 via-[#F9A826]/20 to-transparent">
                <div className="bg-[#0C1211] p-2 rounded-[14px]">
                  <Image
                    src={withBasePath("/douglas_conrad.png")}
                    alt="Douglas Conrad"
                    width={500}
                    height={700}
                    className="rounded-lg grayscale"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-3 space-y-8 text-gray-300">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-wider">
                  {EVENT_DETAILS.mentor.toUpperCase()}
                </h3>
                <p className="text-lg text-[#F9A826] font-medium">
                  Criador do Método {EVENT_DETAILS.methodName}
                </p>
                <p className="text-lg">CRO da Opens e Mentor do G4 Educação</p>
              </div>

              <div className="bg-[#1E1E1E]/80 border border-gray-700/50 rounded-lg p-6 space-y-4">
                <h4 className="flex items-center gap-2 text-xl font-bold text-white">
                  <Zap className="w-5 h-5 text-[#F9A826]" />
                  SOBRE O MÉTODO ELG
                </h4>
                <p>{METHOD_DESCRIPTION}</p>
                <blockquote className="text-lg italic text-[#F9A826] border-l-4 border-[#F9A826] pl-4 my-4">
                  “{MENTOR_QUOTE}”
                </blockquote>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#1E1E1E]/80 border border-gray-700/50 rounded-lg p-4">
                  <h5 className="font-bold text-[#F9A826]">FLYWHEEL DE CRESCIMENTO</h5>
                  <p className="text-sm">Ciclo contínuo onde clientes satisfeitos atraem novos negócios</p>
                </div>
                <div className="bg-[#1E1E1E]/80 border border-gray-700/50 rounded-lg p-4">
                  <h5 className="font-bold text-[#F9A826]">CRESCIMENTO SUSTENTÁVEL</h5>
                  <p className="text-sm">Três fases: Engajamento, Encantamento e Indicação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


