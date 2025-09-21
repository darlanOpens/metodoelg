import { Button } from "@/components/ui/button"
import { AlertTriangle, Users, MessageCircle, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

/**
 * Página de alerta pós-inscrição
 * Informa que falta apenas um passo para receber o link do evento: entrar na comunidade
 */
export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#0C1211] text-white font-inter flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Smartphone Mockup da Comunidade */}
          <div className="flex justify-center order-2 lg:order-1">
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

          {/* Conteúdo de Alerta */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="bg-[#1E1E1E] p-8 md:p-12 rounded-2xl border border-[#F9A826]/30 shadow-2xl shadow-[#F9A826]/10">
              
              {/* Ícone de Alerta */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-b from-[#F9A826] to-[#BE8C38] rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-black" />
                </div>
              </div>

              {/* Título Principal */}
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                ⚠️ Falta apenas 1 passo!
              </h1>
              
              {/* Subtítulo */}
              <div className="space-y-4 mb-8">
                <p className="text-xl text-[#F9A826] font-semibold">
                  Para receber o link do evento, você precisa:
                </p>
                <div className="bg-[#0C1211] p-6 rounded-lg border border-[#F9A826]/20">
                  <p className="text-lg text-white font-bold mb-2">
                    🚀 Entrar na Comunidade ELG
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Faça parte da primeira comunidade focada em <span className="text-[#F4CE71] font-semibold">Experience-Led Growth</span> e receba o link da aula diretamente lá!
                  </p>
                </div>
              </div>

              {/* Benefícios */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-white">O que você ganha ao entrar:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300">Link exclusivo da aula gratuita</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300">Networking com profissionais qualificados</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-300">Conteúdos exclusivos e discussões estratégicas</p>
                  </div>
                </div>
              </div>

              {/* Botão de Ação */}
              <div className="space-y-4">
                <Button
                   asChild
                   size="lg"
                   className="bg-gradient-to-b from-[#F9A826] to-[#BE8C38] text-black hover:from-[#F9A826]/90 hover:to-[#BE8C38]/90 text-lg px-8 py-6 rounded-full font-medium transition-all w-full"
                 >
                   <a 
                     href="https://chat.whatsapp.com/LT4FVpqXdzgK3V4r2cJyZT?mode=ems_copy_c" 
                     target="_blank" 
                     rel="noopener noreferrer"
                   >
                     🚀 Entrar na Comunidade Agora
                   </a>
                 </Button>
                
                <p className="text-sm text-gray-400 text-center">
                  Após entrar na comunidade, você receberá o link da aula automaticamente
                </p>
              </div>

              {/* Link de Volta */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 w-full lg:w-auto"
                  >
                    Voltar para a página principal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}