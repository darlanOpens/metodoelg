'use client'

import { Users, MessageCircle, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/scroll"

/**
 * Componente da seção de comunidade ELG
 * Apresenta a primeira comunidade focada em Experience-Led Growth
 */
export function ToolkitSection() {
  return (
    <section className="py-20 bg-[#242424]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-light tracking-tight text-white mb-6">
              Faça parte da Comunidade ELG
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A primeira comunidade focada em <span className="text-[#F4CE71] font-semibold">Experience-Led Growth</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Smartphone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Smartphone Frame */}
                <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-2 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-6 py-4 border-b border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg">🧠 Comunidade | ELG</h3>
                          <p className="text-gray-400 text-sm">Comunidade • 10 grupos</p>
                        </div>
                      </div>
                    </div>

                    {/* Community Content */}
                    <div className="px-6 py-4 space-y-4">
                      {/* Post 1 */}
                      <div className="bg-[#2a2a2a] rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-[#F4CE71] rounded-full flex items-center justify-center">
                            <span className="text-black text-sm font-bold">DC</span>
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Douglas Conrad</p>
                            <p className="text-gray-400 text-xs">2h atrás</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Acabei de implementar o flywheel na minha empresa e os resultados são incríveis! 📈
                        </p>
                        <div className="flex items-center space-x-4 text-gray-400 text-xs">
                          <span className="flex items-center space-x-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>24</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>156</span>
                          </span>
                        </div>
                      </div>

                      {/* Post 2 */}
                      <div className="bg-[#2a2a2a] rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">M</span>
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Maria Silva</p>
                            <p className="text-gray-400 text-xs">4h atrás</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Alguém tem dicas para melhorar a experiência do cliente no onboarding?
                        </p>
                        <div className="flex items-center space-x-4 text-gray-400 text-xs">
                          <span className="flex items-center space-x-1">
                            <MessageCircle className="w-3 h-3" />
                            <span>18</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>89</span>
                          </span>
                        </div>
                      </div>

                      {/* Active Members */}
                      <div className="bg-[#2a2a2a] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-white text-sm font-medium">Membros Ativos</h4>
                          <Users className="w-4 h-4 text-[#F4CE71]" />
                        </div>
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-[#2a2a2a]"></div>
                          <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-[#2a2a2a]"></div>
                          <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-[#2a2a2a]"></div>
                          <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-[#2a2a2a]"></div>
                          <div className="w-8 h-8 bg-[#F4CE71] rounded-full border-2 border-[#2a2a2a] flex items-center justify-center">
                            <span className="text-black text-xs font-bold">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Conecte-se com profissionais que pensam como você
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Uma comunidade exclusiva onde você pode trocar experiências, tirar dúvidas e acelerar seus resultados com Experience-Led Growth.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Discussões Exclusivas</h4>
                    <p className="text-gray-300">Participe de conversas sobre estratégias, cases de sucesso e desafios reais do mercado.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Networking Qualificado</h4>
                    <p className="text-gray-300">Conecte-se com empreendedores, gestores e especialistas em crescimento.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Conteúdo Exclusivo</h4>
                    <p className="text-gray-300">Acesso a materiais, templates e ferramentas compartilhadas pela comunidade.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] text-black hover:from-[#F4CE71]/90 hover:to-[#BE8C38]/90 text-lg px-8 py-6 rounded-full font-medium transition-all w-full lg:w-auto"
                >
                  <a 
                    href="https://chat.whatsapp.com/LT4FVpqXdzgK3V4r2cJyZT?mode=ems_copy_c" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Quero fazer parte da comunidade
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}