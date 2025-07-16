"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users } from "lucide-react"

// Interfaces
interface FormData {
  nome: string
  email: string
  telefone: string
  empresa: string
  segmento: string
  site: string
}

interface UtmData {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
}

// Função para formatar número de telefone
const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "")
  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim()
  } else {
    return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim()
  }
}

// Adiciona "https://" a uma URL se não tiver protocolo
const normalizeUrl = (url: string): string => {
  if (!url) return ""
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`
  }
  return url
}

export function LeadForm() {
  // Estados
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    segmento: "",
    site: "",
  })
  const [utmData, setUtmData] = useState<UtmData>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  })
  const [formErrors, setFormErrors] = useState<{
    email?: string
    telefone?: string
  }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Efeito para capturar UTMs
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setUtmData({
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
    })
  }, [])

  // Opções do Select
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
    "Outros",
  ]

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const field = id as keyof FormData

    if (field === "telefone") {
      const formattedValue = formatPhoneNumber(value)
      setFormData((prev) => ({ ...prev, [field]: formattedValue }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }

    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, segmento: value }))
  }

  // Submissão do Formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validação
    const currentErrors: { email?: string; telefone?: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      currentErrors.email = "Por favor, insira um email válido."
    }
    const cleanPhone = formData.telefone.replace(/\D/g, "")
    if (!cleanPhone || !(cleanPhone.length === 10 || cleanPhone.length === 11)) {
      currentErrors.telefone = "Telefone inválido. Use (XX) XXXXX-XXXX."
    }

    if (Object.keys(currentErrors).length > 0) {
      setFormErrors(currentErrors)
      alert(
        "Por favor, corrija os erros no formulário:\n" +
          Object.values(currentErrors).filter(Boolean).join("\n"),
      )
      return
    }
    setFormErrors({})
    setIsSubmitting(true)

    // Estrutura de dados para o Webhook
    const formDataForN8N = {
      ...formData,
      site: normalizeUrl(formData.site), // Normaliza a URL aqui
      ...utmData,
      telefone: cleanPhone,
    }

    const n8nBody = {
      form_id: "metodo_elg_2307",
      form_title: "Inscrição Método ELG - 23/07",
      form_data: formDataForN8N,
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
      user_agent: typeof window !== "undefined" ? navigator.userAgent : "",
      page_url: typeof window !== "undefined" ? window.location.href : "",
      referer_url: typeof document !== "undefined" ? document.referrer : "",
    }

    try {
      const response = await fetch(
        "https://n8n.opens.com.br/webhook/hubspot-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(n8nBody),
        },
      )

      if (response.ok) {
        if (typeof window !== "undefined") {
          window.location.href = "/metodoelg/inscricao-confirmada"
        }
      } else {
        const errorText = await response.text()
        throw new Error(
          `Erro no webhook: ${response.status} - ${errorText}`,
        )
      }
    } catch (err) {
      console.error("Erro ao enviar formulário:", err)
      alert(
        "Houve um problema ao processar sua inscrição. Por favor, tente novamente.",
      )
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
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-gray-300">
              Seu nome *
            </Label>
            <Input
              id="nome"
              type="text"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
              className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Seu email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
            />
            {formErrors.email && (
              <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="space-y-2">
            <Label htmlFor="telefone" className="text-gray-300">
              Seu telefone *
            </Label>
            <Input
              id="telefone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.telefone}
              onChange={handleInputChange}
              required
              className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
              maxLength={15}
            />
            {formErrors.telefone && (
              <p className="text-red-400 text-xs mt-1">{formErrors.telefone}</p>
            )}
          </div>

          {/* Empresa e Site */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-gray-300">
                Nome da sua empresa *
              </Label>
              <Input
                id="empresa"
                type="text"
                placeholder="Nome da sua empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                required
                className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
              />
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
                onChange={handleInputChange}
                className="bg-[#2A2A2A] border-gray-600 text-white placeholder:text-gray-400 focus:border-[#F9A826] focus:ring-[#F9A826]"
              />
            </div>
          </div>

          {/* Segmento */}
          <div className="space-y-2">
            <Label htmlFor="segmento" className="text-gray-300">
              Segmento de atuação *
            </Label>
            <Select
              value={formData.segmento}
              onValueChange={handleSelectChange}
              required
            >
              <SelectTrigger className="w-full bg-[#2A2A2A] border-gray-600 text-white focus:border-[#F9A826] focus:ring-[#F9A826]">
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

          {/* Botão de Submissão */}
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