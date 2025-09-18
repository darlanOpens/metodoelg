'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { withBasePath } from "@/lib/paths"
import { useState } from "react"

export function FlywheelSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const benefits = [
    {
      title: "Gera crescimento contínuo",
      description: "Cada cliente se torna um motor de crescimento",
      icon: "🚀"
    },
    {
      title: "Cria clientes que compram e recomendam",
      description: "Transforme clientes em embaixadores da marca",
      icon: "💎"
    },
    {
      title: "Elimina gargalos do funil tradicional",
      description: "Fluxo otimizado sem pontos de fricção",
      icon: "⚡"
    }
  ]

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary via-dark-primary to-dark-tertiary"></div>

      {/* Animated Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4CE71' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerAnimation}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            variants={itemAnimation}
          >
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-normal leading-tight text-white mb-4" style={{ fontFamily: "'Butler', serif" }}>
              Por que o <span className="gradient-gold-text font-semibold">Flywheel</span> é a virada de chave?
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-2xl">
              Descubra como transformar seu negócio em uma máquina de crescimento exponencial
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Interactive Flywheel Visualization */}
            <motion.div
              className="relative"
              variants={itemAnimation}
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Rotating Flywheel */}
                <motion.div
                  className="relative w-72 h-72 lg:w-80 lg:h-80 mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-gold-start/20"></div>

                  {/* Middle Ring */}
                  <div className="absolute inset-8 rounded-full border-2 border-gold-mid/30"></div>

                  {/* Inner Circle */}
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-gold-start/10 to-gold-end/10 backdrop-blur-sm"></div>

                  {/* Center Logo/Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 relative">
                      <Image
                        src={withBasePath("/images/c20f135e303f1f62750e65febdf7b464e7a2f645.png")}
                        alt="Flywheel"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-full"
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div
                        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-gold-start to-gold-end flex items-center justify-center text-white font-bold shadow-lg"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateX(140px)`
                        }}
                      >
                        {i + 1}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute inset-0 blur-3xl bg-gold-start/10 -z-10 pulse-glow"></div>

                {/* Labels */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <span className="text-xs text-gold-start font-semibold uppercase tracking-wider">Atração</span>
                  </div>
                  <div className="absolute bottom-0 left-0 transform -translate-x-8 translate-y-8">
                    <span className="text-xs text-emerald font-semibold uppercase tracking-wider">Engajamento</span>
                  </div>
                  <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Encantamento</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits Cards */}
            <div className="flex flex-col gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="relative"
                >
                  <motion.div
                    className="glass-dark rounded-2xl p-6 border border-white/10 hover-lift cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Gradient on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gold-start/10 to-gold-end/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredItem === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-start/20 to-gold-end/20 flex items-center justify-center text-2xl flex-shrink-0"
                        animate={{
                          rotate: hoveredItem === index ? [0, -10, 10, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {benefit.icon}
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {benefit.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mt-4 h-1 bg-dark-tertiary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-gold-start to-gold-end"
                            initial={{ width: 0 }}
                            animate={{ width: hoveredItem === index ? "100%" : "30%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <motion.svg
                        className="w-6 h-6 text-gold-start opacity-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                          opacity: hoveredItem === index ? 1 : 0,
                          x: hoveredItem === index ? 0 : -10
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </div>
                  </motion.div>

                  {/* Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 blur-2xl bg-gold-start/5 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredItem === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}

              {/* Comparison CTA */}
              <motion.div
                variants={itemAnimation}
                className="mt-6"
              >
                <div className="glass rounded-xl p-4 border border-emerald/30 bg-emerald/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-emerald mb-1">
                        Veja a diferença na prática
                      </p>
                      <p className="text-xs text-gray-400">
                        Comparação completa: Funil vs Flywheel
                      </p>
                    </div>
                    <motion.button
                      className="px-4 py-2 rounded-lg bg-emerald/20 text-emerald font-semibold text-sm hover:bg-emerald/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Comparação →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerAnimation}
          >
            {[
              { value: "3x", label: "Mais Crescimento" },
              { value: "87%", label: "Taxa de Retenção" },
              { value: "250%", label: "ROI Médio" },
              { value: "45%", label: "Redução de CAC" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemAnimation}
                whileHover={{ y: -5 }}
              >
                <div className="glass-dark rounded-xl p-4 border border-white/5">
                  <motion.p
                    className="text-3xl lg:text-4xl font-bold gradient-gold-text mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}