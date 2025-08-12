import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { EVENT_DETAILS } from "@/lib/event"

export function CourseInfoSection() {
  return (
    <section className="py-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">🕒 Informações da Aula</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#0C1211] border-[#F9A826]/30">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-[#F9A826] mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Data</h3>
                <p className="text-gray-300">{EVENT_DETAILS.date}</p>
              </CardContent>
            </Card>
            <Card className="bg-[#0C1211] border-[#F9A826]/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-[#F9A826] mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Horário</h3>
                <p className="text-gray-300">{EVENT_DETAILS.time} ({EVENT_DETAILS.duration})</p>
              </CardContent>
            </Card>
            <Card className="bg-[#0C1211] border-[#F9A826]/30">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-[#F9A826] mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Formato</h3>
                <p className="text-gray-300">{EVENT_DETAILS.format}</p>
              </CardContent>
            </Card>
            <Card className="bg-[#0C1211] border-[#F9A826]/30">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Replay</h3>
                <p className="text-red-400">{EVENT_DETAILS.replay}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <a href="#inscricao">
              <Button className="w-full lg:w-auto bg-gradient-to-r from-[#F9A826] to-[#FFDE59] text-black font-bold py-4 px-8 rounded-full text-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105">
                <span className="lg:hidden">✅ {EVENT_DETAILS.ctas.final}</span>
                <span className="hidden lg:inline">✅ {EVENT_DETAILS.ctas.final}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


