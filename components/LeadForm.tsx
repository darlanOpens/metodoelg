"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users } from "lucide-react"

interface FormData {
  nome: string
  email: string
  telefone: string
  empresa: string
  segmento: string
  site: string
}

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    segmento: "",
    site: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const segmentosOptions = [
    "E-commerce",
    "Consultoria",
    "Educação",
    "Saúde",
    "Tecnologia",
    "Marketing Digital",
    "Serviços Financeiros",
    "Imobiliário",
    "Alimentação",
    "Varejo",
    "Indústria",
    "Outros"
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aqui você pode integrar com sua API de captura de leads
      console.log("Dados do formulário:", formData)
      
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect ou mostrar sucesso
      alert("Inscrição realizada com sucesso! Você receberá mais informações em breve.")
      
      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        segmento: "",
        site: ""
      })
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Erro ao processar sua inscrição. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-[#1E1E1E] border-[#F9A826]/30 max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="w-6 h-6 text-[#F9A826]" />
          <CardTitle className="text-2xl font-bold text-white">
            Garanta sua vaga agora
          </CardTitle>
        </div>
        <p className="text-gray-300">
          Preencha os dados abaixo para se inscrever na aula gratuita
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-gray-300">
                Seu nome *
              </Label>
              <Input
                id="nome"
                type="text"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                required
                className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Seu email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-gray-300">
                Seu telefone *
              </Label>
              <Input
                id="telefone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                required
                className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-gray-300">
                Nome da sua empresa *
              </Label>
              <Input
                id="empresa"
                type="text"
                placeholder="Nome da sua empresa"
                value={formData.empresa}
                onChange={(e) => handleInputChange("empresa", e.target.value)}
                required
                className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="segmento" className="text-gray-300">
                Segmento de atuação *
              </Label>
              <Select
                value={formData.segmento}
                onValueChange={(value) => handleInputChange("segmento", value)}
                required
              >
                <SelectTrigger className="bg-[#2A2A2A] border-gray-600 text-white focus:border-[#F9A826] focus:ring-[#F9A826]">
                  <SelectValue placeholder="Selecione seu segmento" />
                </SelectTrigger>
                <SelectContent className="bg-[#2A2A2A] border-gray-600">
                  {segmentosOptions.map((segmento) => (
                    <SelectItem
                      key={segmento}
                      value={segmento}
                      className="text-white focus:bg-[#F9A826]/20 focus:text-white"
                    >
                      {segmento}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="site" className="text-gray-300">
                Site da sua empresa
              </Label>
              <Input
                id="site"
                type="url"
                placeholder="https://suaempresa.com.br"
                value={formData.site}
                onChange={(e) => handleInputChange("site", e.target.value)}
                className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              "Processando..."
            ) : (
              <>
                🔒 Solicitar lugar na aula
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-gray-400 text-center">
            * Campos obrigatórios • Seus dados estão seguros conosco
          </p>
        </form>
      </CardContent>
    </Card>
  )
} 