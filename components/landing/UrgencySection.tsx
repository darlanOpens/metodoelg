export function UrgencySection() {
  return (
    <section className="bg-[#242424] py-12 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          <div className="lg:w-2/5 space-y-6">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-serif font-light tracking-tight text-white">
              Por que essa mudança é inadiável em 2025?
            </h2>
            <p className="text-lg lg:text-xl text-gray-300">
              O cenário mudou. Ignorar isso significa ser deixado para trás.
            </p>
          </div>

          <div className="lg:w-3/5 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-[#F4CE71] p-6 text-left">
                <span className="text-4xl mb-4 block bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text text-transparent" aria-hidden>💰</span>
                <h3 className="text-xl font-bold bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text text-transparent mb-3">CAC Disparou</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Depender apenas de novos clientes é a fórmula para esmagar sua margem de lucro.
                </p>
              </div>

              <div className="rounded-xl border border-[#F4CE71] p-6 text-left">
                <span className="text-4xl mb-4 block bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text text-transparent" aria-hidden>⚔️</span>
                <h3 className="text-xl font-bold bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text text-transparent mb-3">Concorrência Brutal</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  O único diferencial defensável a longo prazo é uma experiência do cliente excepcional.
                </p>
              </div>

              <div className="rounded-xl border border-[#F4CE71] p-6 text-left">
                <span className="text-4xl mb-4 block bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text text-transparent" aria-hidden>🤝</span>
                <h3 className="text-xl font-bold bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text text-transparent mb-3">Consumidores Céticos</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Eles confiam mais em outros clientes do que em anúncios. Seus clientes atuais são seu marketing mais poderoso.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#BE8C38] px-8 py-5 text-center">
              <p className="text-xl lg:text-2xl font-semibold text-black">
                Continuar no modelo de funil não é mais uma opção estratégica. É um risco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

