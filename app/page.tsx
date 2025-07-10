import { ArrowRight, Calendar, Clock, MapPin, CheckCircle, Gift, AlertTriangle, Target, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/LeadForm"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0C1211] text-white font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/metodoelg/Background.png"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="mb-2">
                  <Image
                    src="/metodoelg/metodoELGhorizontal.png"
                    alt="Método ELG"
                    width={600}
                    height={180}
                    className="h-32 lg:h-40 w-auto"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  💰 Como a IA vai Dobrar sua Receita Sem Gastar Mais em Tráfego
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                Descubra com o Douglas Conrad como transformar sua base de clientes em fonte constante de faturamento, recompra e indicação usando todo poder da IA e uma estratégia consolidada.
                </p>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#F9A826]" />
                  <span>
                    <strong>Data:</strong> 23 de Julho
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#F9A826]" />
                  <span>
                    <strong>Horário:</strong> 19:00 (Horário de Brasília)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#F9A826]" />
                  <span>
                    <strong>100% online e AO VIVO</strong> – sem replay.
                  </span>
                </div>
              </div>

              <a href="#inscricao" className="block pt-6">
                <Button className="w-full lg:w-auto bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
                  <span className="lg:hidden">🔒 Garantir vaga</span>
                  <span className="hidden lg:inline">🔒 Quero garantir minha vaga agora</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>

              <p className="text-sm text-gray-400">
                👉 <em>Vagas limitadas – não haverá retransmissão</em>
              </p>
            </div>

            {/* Coluna direita vazia */}
            <div className="relative">
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              🚨 Você está gastando demais e lucrando de menos?
            </h2>

            <div className="text-lg text-gray-300 space-y-4">
              <p>
                Você investe em tráfego, gera leads, faz vendas…
                <br />
                Mas no mês seguinte começa tudo do zero?
              </p>

              <p className="text-xl font-semibold text-[#F9A826]">
                A real é que você está ignorando o maior ativo da sua empresa: sua base de clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-[#1E1E1E] border-red-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-red-400 text-2xl mb-3">❌</div>
                  <p className="text-white font-semibold">Clientes esquecidos = dinheiro parado</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1E1E1E] border-red-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-red-400 text-2xl mb-3">📉</div>
                  <p className="text-white font-semibold">Recompra inexistente = LTV baixo</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1E1E1E] border-red-500/30">
                <CardContent className="p-6 text-center">
                  <div className="text-red-400 text-2xl mb-3">🔄</div>
                  <p className="text-white font-semibold">Relacionamento reativo = churn invisível</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-6 mt-8">
              <p className="text-xl font-bold text-white">
                <strong>Resultado? Mais esforço, menos resultado.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              ✅ Nesta aula gratuita você vai aprender:
            </h2>

            <div className="space-y-6">
              {[
                'Como encontrar dinheiro "escondido" na sua base atual',
                "O modelo mental que trava seu crescimento (e como virar a chave)",
                "Os erros que fazem seus clientes sumirem em silêncio",
                "Como usar a jornada do cliente para vender mais com menos",
                "A Estratégia ELG (Experience-Led Growth): como criar um ciclo de retenção, expansão e indicação sem aumentar o CAC",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-[#1E1E1E] rounded-lg border border-[#F9A826]/20"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#F9A826]" />
                  </div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="#inscricao">
                <Button className="bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
                  👉 Sim, quero aprender como crescer sem depender só de tráfego
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="inscricao" className="py-16 bg-gradient-to-r from-[#F9A826]/5 to-[#FFDE59]/5">
        <div className="container mx-auto px-6">
          <LeadForm />
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-[#1E1E1E]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">💡 Essa aula é pra você se:</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Você quer parar de depender só de tráfego pago e leads novos",
                'Já tem uma base de clientes, mas ela está "parada"',
                "Percebe que perde cliente sem saber o motivo",
                "Quer escalar vendas sem escalar custo",
                "Quer implementar uma jornada estruturada com mais inteligência e menos esforço",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-[#0C1211] rounded-lg border border-[#F9A826]/20"
                >
                  <Target className="w-6 h-6 text-[#F9A826] flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">🎓 Sobre o mentor</h2>

            <Card className="bg-[#1E1E1E] border-[#F9A826]/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#F9A826] to-[#FFDE59] rounded-full flex items-center justify-center">
                      <User className="w-10 h-10 text-black" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-[#F9A826]">Douglas Conrad</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Especialista em crescimento com base de clientes e experiência do cliente.
                      <br />
                      Empreendedor há mais de 20 anos, fundador da Opens,
                      <br />
                      <strong className="text-[#F9A826]">mentor no G4 Educação e em diversas empresas B2B e B2C</strong>
                      <br />
                      que estão construindo crescimento sustentável com foco em relacionamento.
                    </p>
                    <blockquote className="text-lg italic text-[#F9A826] border-l-4 border-[#F9A826] pl-4">
                      "Cliente que alcança sucesso vira promotor. Cliente que só recebe entrega vira fantasma."
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 bg-gradient-to-r from-[#F9A826]/10 to-[#FFDE59]/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">🎁 Bônus Exclusivos para Participantes Ao Vivo:</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#1E1E1E] border-[#F9A826]/30">
                <CardContent className="p-6 text-center">
                  <Gift className="w-12 h-12 text-[#F9A826] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">📋 Template da régua de relacionamento</h3>
                  <p className="text-gray-300">Para clientes silenciosos</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1E1E1E] border-[#F9A826]/30">
                <CardContent className="p-6 text-center">
                  <Gift className="w-12 h-12 text-[#F9A826] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">📊 Planilha de diagnóstico</h3>
                  <p className="text-gray-300">De oportunidades na jornada do cliente</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-[#F9A826] font-bold text-lg mt-8">*Só para quem estiver presente ao vivo.*</p>

            <div className="mt-12">
              <a href="#inscricao">
                <Button className="bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
                  🔒 Garantir minha vaga na aula
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <p className="text-red-400 font-semibold mt-4">
                ⚠️ <strong>Não haverá replay.</strong> Essa é sua única chance de participar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Info Section */}
      <section className="py-16 bg-[#1E1E1E]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">🕒 Informações da Aula</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-[#0C1211] border-[#F9A826]/30">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-[#F9A826] mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Data</h3>
                  <p className="text-gray-300">23 de Julho</p>
                </CardContent>
              </Card>
              <Card className="bg-[#0C1211] border-[#F9A826]/30">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-[#F9A826] mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Horário</h3>
                  <p className="text-gray-300">19:00</p>
                </CardContent>
              </Card>
              <Card className="bg-[#0C1211] border-[#F9A826]/30">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-[#F9A826] mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Formato</h3>
                  <p className="text-gray-300">Online, ao vivo (1h30)</p>
                </CardContent>
              </Card>
              <Card className="bg-[#0C1211] border-[#F9A826]/30">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Replay</h3>
                  <p className="text-red-400">Sem retransmissão</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <a href="#inscricao">
                <Button className="bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
                  ✅ Quero participar da aula e transformar minha base em receita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#F9A826]/20 to-[#FFDE59]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">🔒 Garanta sua vaga agora</h2>

            <div className="space-y-4 text-lg text-gray-300">
              <p>As vagas são limitadas para garantir a qualidade da experiência.</p>
              <p className="text-xl font-bold text-[#F9A826]">Não haverá replay. A decisão é agora.</p>
            </div>

            <a href="#inscricao">
              <Button className="bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-6 px-12 rounded-full text-xl hover:brightness-110 transition-all duration-300 transform hover:scale-105">
                👉 Sim, quero participar
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-400">© 2024 Método ELG - Douglas Conrad. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
