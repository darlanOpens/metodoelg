import Image from "next/image"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/paths"
import { EVENT_DETAILS } from "@/lib/event"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#242424] min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/Background.png")}
          alt="Background"
          fill
          className="object-cover mix-blend-lighten"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#242424] to-60%"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-8 items-center text-center">
            {/* Logo */}
            <div className="w-80 lg:w-96">
              <Image
                src={withBasePath("/metodoELGhorizontal.png")}
                alt="Método ELG"
                width={493}
                height={211}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main title */}
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-light leading-tight text-white tracking-tight max-w-4xl" style={{ fontFamily: "'Butler', serif" }}>
              Enquanto você insiste no funil tradicional, seus concorrentes já lucram com o Flywheel.
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-white max-w-3xl text-center leading-relaxed" style={{ fontFamily: "'Work Sans', sans-serif" }}>
              Assista à aula estratégica gratuita e descubra como transformar seu negócio.
            </p>
          </div>

          {/* Bottom section with event info and badge */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
            <div className="flex-1 max-w-md flex flex-col gap-8">
              {/* Event Info */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className="w-6 h-6">
                    <img src={withBasePath("/images/calendar-icon.svg")} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-base lg:text-lg text-gray-300">
                    <span className="font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>Data:</span>
                    <span className="font-normal" style={{ fontFamily: "'Work Sans', sans-serif" }}> 09 de Outubro de 2025</span>
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-6 h-6">
                    <img src={withBasePath("/images/clock-icon.svg")} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-base lg:text-lg text-gray-300">
                    <span className="font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>Horário:</span>
                    <span className="font-normal" style={{ fontFamily: "'Work Sans', sans-serif" }}> 17:00 às 18:30 (Brasília)</span>
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-6 h-6">
                    <img src={withBasePath("/images/live-icon.svg")} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-base lg:text-lg text-gray-300">
                    <span className="font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>100% online e ao vivo</span>
                    <span className="font-normal" style={{ fontFamily: "'Work Sans', sans-serif" }}> – sem replay.</span>
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] text-black text-base lg:text-lg font-normal py-4 px-8 rounded-full w-full max-w-xs mx-auto lg:mx-0 whitespace-nowrap">
                Assistir aula estratégica gratuita
              </button>
            </div>

            {/* Event Badge */}
            <div className="flex-shrink-0">
              <div className="w-40 h-44 lg:w-44 lg:h-48 border border-[#F4CE71] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-2 bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>🎁</div>
                  <p className="text-xs lg:text-sm font-semibold bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text uppercase tracking-wide" style={{ WebkitTextFillColor: "transparent", fontFamily: "'Inter', sans-serif" }}>
                    EVENTO GRATUITO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}