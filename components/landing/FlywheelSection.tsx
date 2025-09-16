import Image from "next/image"
import { withBasePath } from "@/lib/paths"

export function FlywheelSection() {
  return (
    <section className="bg-[#242424] py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-normal leading-tight text-white mb-8 lg:mb-12" style={{ fontFamily: "'Butler', serif" }}>
            Por que o Flywheel é a virada de chave?
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side - Image with mask */}
            <div className="relative w-64 lg:w-72 h-48 lg:h-56 flex-shrink-0">
              <div className="absolute inset-0">
                <Image
                  src={withBasePath("/images/c20f135e303f1f62750e65febdf7b464e7a2f645.png")}
                  alt=""
                  fill
                  className="object-contain"
                  style={{
                    maskImage: "url('/metodoelg/images/72ffefa867a250fe93df6ea6a6e34306c1dfc37a.png')",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center"
                  }}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 flex flex-col gap-6 w-full">
              {/* Item 1 */}
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
                  <img src={withBasePath("/images/check-icon.svg")} alt="" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <p className="text-lg lg:text-xl font-normal text-white" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    Gera crescimento contínuo
                  </p>
                  <div className="h-px bg-[#333333] w-full mt-3"></div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
                  <img src={withBasePath("/images/check-icon.svg")} alt="" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <p className="text-lg lg:text-xl font-normal text-white" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    Cria clientes que compram e recomendam
                  </p>
                  <div className="h-px bg-[#333333] w-full mt-3"></div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0">
                  <img src={withBasePath("/images/check-icon.svg")} alt="" className="w-full h-full" />
                </div>
                <div className="flex-1">
                  <p className="text-lg lg:text-xl font-normal text-white" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    Elimina gargalos do funil tradicional
                  </p>
                  <div className="h-px bg-[#333333] w-full mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}