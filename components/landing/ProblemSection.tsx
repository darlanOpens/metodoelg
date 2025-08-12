import { PROBLEM } from "@/lib/event"

export function ProblemSection() {
  return (
    <section className="py-14 bg-gradient-to-b from-[#1a0f0d] via-[#0C1211] to-[#0C1211]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
            <span role="img" aria-label="alerta">🚨</span>
            {PROBLEM.title}
          </h2>

          <div className="text-base lg:text-lg text-gray-300 space-y-2">
            {PROBLEM.intro.map((introLine, lineIndex) => (
              <p key={lineIndex}>{introLine}</p>
            ))}
          </div>

          <p className="text-lg lg:text-xl font-semibold text-[#F9A826]">
            {PROBLEM.highlight}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {PROBLEM.cards.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className="rounded-xl bg-white/5 border border-white/10 p-6 text-left flex flex-col items-center justify-center gap-3 md:items-start"
              >
                <span className="text-3xl" aria-hidden>
                  {card.icon}
                </span>
                <p className="text-sm lg:text-base font-medium text-gray-200 text-center md:text-left">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-red-900/50 border border-red-800/50 px-4 py-4 text-center">
            <p className="text-lg lg:text-xl font-semibold text-red-100">
              {PROBLEM.result}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


