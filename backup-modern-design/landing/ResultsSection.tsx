'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { withBasePath } from "@/lib/paths"
import { scrollToSection } from "@/lib/scroll"
import { useRef } from "react"

export function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  const particlesArray = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ opacity }}
    >
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary">
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 50%, rgba(244, 206, 113, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 50%, rgba(190, 140, 56, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 100%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
              `,
            }}
          />
        </div>
      </div>

      {/* Animated Gold Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particlesArray.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-gold-start to-gold-end"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              x: [0, particle.id % 2 === 0 ? 20 : -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated SVG Background Pattern */}
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[800px] h-[800px] opacity-10"
        style={{ scale }}
      >
        <svg viewBox="0 0 800 800" className="w-full h-full">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4CE71" />
              <stop offset="50%" stopColor="#D4A574" />
              <stop offset="100%" stopColor="#BE8C38" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            strokeDasharray="10 10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r="250"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="0.5"
            strokeDasharray="5 15"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r="200"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="0.3"
            strokeDasharray="20 5"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Label Badge */}
              <motion.div
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-gold-start/30 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 rounded-full bg-gold-start animate-pulse" />
                <span className="text-xs font-semibold gradient-gold-text uppercase tracking-wider">
                  Comprovado por Dados
                </span>
              </motion.div>

              {/* Main Title */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-white mb-6" style={{ fontFamily: "'Butler', serif" }}>
                <span className="block">Resultados que</span>
                <span className="gradient-gold-text font-semibold">transformam negócios</span>
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
                Empresas que aplicam o <span className="text-gold-start font-semibold">Flywheel</span> crescem{" "}
                <span className="text-emerald font-bold">3x mais rápido</span> que aquelas presas no funil tradicional.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Aumento em vendas", value: "+245%", icon: "📈" },
                  { label: "Redução de CAC", value: "-68%", icon: "💰" },
                  { label: "Taxa de recompra", value: "92%", icon: "🔄" },
                  { label: "NPS médio", value: "+78", icon: "⭐" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-dark rounded-xl p-4 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(244, 206, 113, 0.3)" }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{stat.icon}</span>
                      <div>
                        <p className="text-2xl font-bold gradient-gold-text">{stat.value}</p>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Premium CTA Button */}
              <motion.button
                onClick={() => scrollToSection('inscricao')}
                className="relative group overflow-hidden rounded-full gradient-gold text-black font-semibold text-lg py-4 px-10 btn-modern"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Quero esses resultados</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
                {/* Button Glow */}
                <div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-gold-start to-gold-end opacity-50 group-hover:opacity-70 transition-opacity" />
              </motion.button>
            </motion.div>

            {/* Right Visual - Interactive Chart */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Glass Card Container */}
                <div className="glass-dark rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                  {/* Chart Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Crescimento comparativo</p>
                      <p className="text-2xl font-bold text-white">Funil vs Flywheel</p>
                    </div>
                    <div className="glass px-3 py-1 rounded-lg">
                      <span className="text-xs font-semibold text-emerald">+300%</span>
                    </div>
                  </div>

                  {/* Animated Bar Chart */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Funil Tradicional</span>
                        <span className="text-sm font-semibold text-gray-300">32%</span>
                      </div>
                      <div className="h-3 bg-dark-tertiary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-gray-500 to-gray-600"
                          initial={{ width: 0 }}
                          animate={{ width: "32%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Método Flywheel</span>
                        <span className="text-sm font-semibold gradient-gold-text">96%</span>
                      </div>
                      <div className="h-3 bg-dark-tertiary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-gold-start to-gold-end"
                          initial={{ width: 0 }}
                          animate={{ width: "96%" }}
                          transition={{ duration: 1.2, delay: 0.7 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Growth Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                    {["Ano 1", "Ano 2", "Ano 3"].map((year, index) => (
                      <motion.div
                        key={year}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <div className="relative">
                          <motion.div
                            className="text-2xl font-bold gradient-gold-text"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 1 + index * 0.1,
                              type: "spring",
                              stiffness: 200
                            }}
                          >
                            {index === 0 ? "2x" : index === 1 ? "5x" : "12x"}
                          </motion.div>
                          <p className="text-xs text-gray-500 mt-1">{year}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Achievement Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-gold-start/30"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-xs font-bold text-gold-start">TOP 1%</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-emerald/30"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-xs font-bold text-emerald">VALIDADO</span>
                </motion.div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-gold-start/10 to-emerald/10 -z-10" />
            </motion.div>
          </div>

          {/* Bottom Testimonial */}
          <motion.div
            className="mt-20 glass-dark rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-gold-start text-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "Em apenas 6 meses aplicando o Flywheel, triplicamos nossa base de clientes e reduzimos o CAC em 70%."
                </p>
                <p className="text-sm font-semibold text-white">
                  João Silva • CEO da TechCorp
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="glass px-6 py-3 rounded-xl border border-gold-start/30">
                  <p className="text-xs text-gray-400 mb-1">Faturamento</p>
                  <p className="text-xl font-bold gradient-gold-text">+R$ 2.3M</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}