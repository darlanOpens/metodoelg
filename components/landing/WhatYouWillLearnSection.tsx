import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHAT_YOU_WILL_LEARN, EVENT_DETAILS } from "@/lib/event"

export function WhatYouWillLearnSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            ✅ Nesta aula gratuita, você vai:
          </h2>

          <div className="space-y-6">
            {WHAT_YOU_WILL_LEARN.map((item, index) => (
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
              <Button className="w-full lg:w-auto bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
                <span className="lg:hidden">👉 {EVENT_DETAILS.ctas.secondary}</span>
                <span className="hidden lg:inline">👉 {EVENT_DETAILS.ctas.secondary}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


