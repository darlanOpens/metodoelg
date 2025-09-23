import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Users, MessageCircle, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

/**
 * Página de alerta pós-inscrição
 * Alerta que é necessário entrar na comunidade para receber o link da aula
 * Inclui mockup pequeno da comunidade ao lado direito
 */
export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#0C1211] text-white font-inter flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Conteúdo Principal - 2/3 da largura */}
          <div className="lg:col-span-2">
            <div className="bg-[#1E1E1E] p-8 md:p-12 rounded-2xl border border-[#F9A826]/30 shadow-2xl shadow-[#F9A826]/10 text-center lg:text-left">
          
              {/* Ícone de Confirmação */}
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="w-20 h-20 bg-gradient-to-b from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                ✅ Inscrição Confirmada!
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Sua vaga para a aula gratuita <strong className="text-[#F9A826]">"Do Funil ao Flywheel"</strong> está garantida!
              </p>

              {/* Alerta Principal - Próximo Passo */}
              <div className="bg-gradient-to-r from-[#F9A826]/20 to-[#BE8C38]/20 border-2 border-[#F9A826] rounded-xl p-8 mb-8">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <AlertTriangle className="w-8 h-8 text-[#F9A826] mr-3" />
                  <h2 className="text-2xl font-bold text-[#F9A826]">
                    🚨 PRÓXIMO PASSO OBRIGATÓRIO
                  </h2>
                </div>
                
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Para receber o <strong>link da aula ao vivo</strong> e todas as informações importantes, 
                  você <strong className="text-[#F9A826]">PRECISA entrar na nossa comunidade exclusiva</strong> no WhatsApp.
                </p>

                <div className="bg-[#0C1211] p-4 rounded-lg border border-[#F9A826]/30 mb-6">
                  <p className="text-gray-300 text-sm">
                    ⚠️ <strong>Importante:</strong> O link da aula será enviado APENAS através da comunidade. 
                    Sem entrar no grupo, você não receberá o acesso!
                  </p>
                </div>

                {/* Botão Principal */}
                <a
                  href="https://chat.whatsapp.com/LT4FVpqXdzgK3V4r2cJyZT?mode=ems_copy_c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-4"
                >
                  <Button className="w-full bg-gradient-to-r from-[#F9A826] to-[#BE8C38] hover:from-[#BE8C38] hover:to-[#F9A826] text-black font-bold py-6 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F9A826]/25">
                    🚀 ENTRAR NA COMUNIDADE AGORA
                  </Button>
                </a>

                <p className="text-sm text-gray-400">
                  👆 Clique no botão acima para garantir seu acesso à aula
                </p>
              </div>

              {/* Informações Adicionais */}
              <div className="text-center lg:text-left mb-8">
                <p className="text-gray-400 mb-4">
                  Após entrar na comunidade, você receberá:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-300">Link direto da aula</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-300">Lembretes importantes</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-300">Material complementar</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-300">Suporte exclusivo</span>
                  </div>
                </div>
              </div>

              {/* Link de Volta */}
              <div className="pt-6 border-t border-gray-700/50">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    Voltar para a página principal
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Mockup Pequeno da Comunidade - 1/3 da largura */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              {/* Smartphone Frame - Versão Menor */}
              <div className="w-64 h-[480px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-[#1a1a1a] rounded-[2rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 py-2 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                      <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                      <div className="w-4 h-1.5 bg-green-500 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="px-4 py-3 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm">🧠 Comunidade | ELG</h3>
                        <p className="text-gray-400 text-xs">Comunidade • 10 grupos</p>
                      </div>
                    </div>
                  </div>

                  {/* Community Content */}
                  <div className="px-4 py-3 space-y-3">
                    {/* Post 1 */}
                    <div className="bg-[#2a2a2a] rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-[#F4CE71] rounded-full flex items-center justify-center">
                          <span className="text-black text-xs font-bold">DC</span>
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">Douglas Conrad</p>
                          <p className="text-gray-400 text-xs">2h atrás</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs mb-2">
                        Acabei de implementar o flywheel na minha empresa e os resultados são incríveis! 📈
                      </p>
                      <div className="flex items-center space-x-3 text-gray-400 text-xs">
                        <span className="flex items-center space-x-1">
                          <MessageCircle className="w-2.5 h-2.5" />
                          <span>24</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <TrendingUp className="w-2.5 h-2.5" />
                          <span>156</span>
                        </span>
                      </div>
                    </div>

                    {/* Post 2 */}
                    <div className="bg-[#2a2a2a] rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">M</span>
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">Maria Silva</p>
                          <p className="text-gray-400 text-xs">4h atrás</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs mb-2">
                        Alguém tem dicas para melhorar a experiência do cliente no onboarding?
                      </p>
                      <div className="flex items-center space-x-3 text-gray-400 text-xs">
                        <span className="flex items-center space-x-1">
                          <MessageCircle className="w-2.5 h-2.5" />
                          <span>18</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <TrendingUp className="w-2.5 h-2.5" />
                          <span>89</span>
                        </span>
                      </div>
                    </div>

                    {/* Active Members */}
                    <div className="bg-[#2a2a2a] rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white text-xs font-medium">Membros Ativos</h4>
                        <Users className="w-3 h-3 text-[#F4CE71]" />
                      </div>
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-[#2a2a2a]"></div>
                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-[#2a2a2a]"></div>
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-[#2a2a2a]"></div>
                        <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-[#2a2a2a]"></div>
                        <div className="w-6 h-6 bg-[#F4CE71] rounded-full border-2 border-[#2a2a2a] flex items-center justify-center">
                          <span className="text-black text-xs font-bold">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}