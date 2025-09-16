'use client'

import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/paths"
import Image from "next/image"
import { scrollToSection } from "@/lib/scroll"

export function ResultsSection() {
  return (
    <section className="bg-[#242424] py-0 relative overflow-hidden">
      <div className="w-full">
        <div className="relative w-full border-t border-b border-[#343434] py-16 lg:py-20 overflow-hidden">
          {/* Golden glow background effect */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(244, 206, 113, 0.08) 0%, rgba(190, 140, 56, 0.04) 50%, transparent 100%)'
            }}
          ></div>

          {/* Additional glow layers for more realistic effect */}
          <div
            className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(244, 206, 113, 0.12) 0%, rgba(190, 140, 56, 0.06) 50%, transparent 70%)'
            }}
          ></div>

          {/* Background decorative circles */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] opacity-25">
            <img
              src={withBasePath("/images/bb5812917df49de46cb4289203792a147aae1b6f.svg")}
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] opacity-10 scale-150">
            <img
              src={withBasePath("/images/04bad537f634011a7a5151b1c4b1ae80837ff46f.svg")}
              alt=""
              className="w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between max-w-6xl mx-auto">
              <div className="flex flex-col gap-6 max-w-2xl">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal text-white leading-tight" style={{ fontFamily: "'Butler', serif" }}>
                  Resultado
                </h2>
                <p className="text-lg lg:text-xl text-white leading-relaxed opacity-90" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  Empresas que aplicam o Flywheel crescem 3x mais rápido que aquelas presas no funil tradicional.
                </p>
              </div>

              <div className="flex-shrink-0 relative z-20">
                <button
                  onClick={() => scrollToSection('inscricao')}
                  className="bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] text-black text-lg lg:text-xl font-normal py-4 px-8 rounded-full whitespace-nowrap shadow-lg relative hover:from-[#F4CE71]/90 hover:to-[#BE8C38]/90 transition-all"
                >
                  Assistir aula gratuita
                </button>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] rounded-full blur-lg opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}