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

        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Inscrição confirmada!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Parabéns! Sua vaga para a aula gratuita "Construindo uma Máquina de Lucro Recorrente" está garantida.
          Enviaremos todos os detalhes para o seu e-mail e WhatsApp.
        </p>

        <div className="bg-[#0C1211] p-6 rounded-lg border border-gray-700/50 mb-8">
          <h2 className="text-xl font-bold text-[#F9A826] mb-4">
            Enquanto a aula não começa, conecte-se conosco:
          </h2>
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://www.instagram.com/douglascon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-8 h-8" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/douglasconrad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
              <span>LinkedIn</span>
            </a>
          </div>
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