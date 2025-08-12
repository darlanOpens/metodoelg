import { TARGET_AUDIENCE } from "@/lib/event"
import { Target } from "lucide-react"

export function TargetAudienceSection() {
  return (
    <section className="py-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            💡 Feito para empresários que querem:
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {TARGET_AUDIENCE.map((item, index) => (
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
  )
}


