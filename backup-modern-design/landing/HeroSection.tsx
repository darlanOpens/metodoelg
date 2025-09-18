'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { withBasePath } from "@/lib/paths"
import { EVENT_DETAILS } from "@/lib/event"
import { scrollToSection } from "@/lib/scroll"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section
      className="relative overflow-hidden min-h-screen"
      style={{ opacity }}
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-tertiary">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-dark-primary/50"></div>
      </div>

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ scale }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gold-start/20 via-transparent to-emerald/10 animated-gradient"></div>
      </motion.div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-start rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <Image
          src={withBasePath("/Background.png")}
          alt="Background"
          fill
          className="object-cover mix-blend-luminosity opacity-20"
          priority
        />
      </motion.div>

      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-primary/30 to-dark-primary/80 backdrop-blur-[2px]"></div>

      {/* Hero Content */}
      <motion.div
        className="container mx-auto px-6 py-16 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerAnimation}
      >
        <div className="max-w-[55rem] mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-10 items-center text-center">
            {/* Animated Logo */}
            <motion.div
              className="w-80 lg:w-96"
              variants={itemAnimation}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={withBasePath("/metodoELGhorizontal.png")}
                alt="Método ELG"
                width={493}
                height={211}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Animated Main Title */}
            <motion.h1
              className="text-3xl lg:text-5xl xl:text-6xl font-light leading-relaxed tracking-tight max-w-4xl"
              style={{ fontFamily: "'Butler', serif" }}
              variants={titleAnimation}
            >
              <span className="text-white">Enquanto você insiste no </span>
              <span className="gradient-gold-text font-semibold">funil tradicional</span>
              <span className="text-white">, seus concorrentes já </span>
              <span className="text-emerald font-semibold">lucram</span>
              <span className="text-white"> com o </span>
              <span className="gradient-gold-text font-semibold">Flywheel</span>
              <span className="text-white">.</span>
            </motion.h1>

            {/* Animated Badge */}
            <motion.div
              variants={itemAnimation}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative"
            >
              <div className="glass px-6 py-2 rounded-full border border-gold-start/50">
                <span className="text-xs lg:text-sm font-bold gradient-gold-text uppercase tracking-wider">
                  Aula Estratégica Exclusiva
                </span>
              </div>
              <div className="absolute inset-0 blur-xl bg-gold-start/20 -z-10 animate-pulse"></div>
            </motion.div>
          </div>

          {/* Event Info Cards with Glass Morphism */}
          <motion.div
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center"
            variants={containerAnimation}
          >
            <div className="flex-1 max-w-lg">
              <motion.div
                className="glass-dark rounded-2xl p-8 border border-white/10 hover-lift"
                variants={itemAnimation}
              >
                <div className="flex flex-col gap-6">
                  {/* Date */}
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-start to-gold-end flex items-center justify-center">
                      <img src={withBasePath("/images/calendar-icon.svg")} alt="" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Data do Evento</p>
                      <p className="text-lg font-semibold text-white">09 de Outubro de 2025</p>
                    </div>
                  </motion.div>

                  {/* Time */}
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald to-emerald/70 flex items-center justify-center">
                      <img src={withBasePath("/images/clock-icon.svg")} alt="" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Horário</p>
                      <p className="text-lg font-semibold text-white">17:00 às 18:30 (Brasília)</p>
                    </div>
                  </motion.div>

                  {/* Live */}
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
                      <img src={withBasePath("/images/live-icon.svg")} alt="" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Formato</p>
                      <p className="text-lg font-semibold text-white">100% Online e Ao Vivo</p>
                    </div>
                  </motion.div>
                </div>

                {/* Premium CTA Button */}
                <motion.button
                  onClick={() => scrollToSection('inscricao')}
                  className="mt-8 w-full relative overflow-hidden rounded-full py-4 px-8 font-semibold text-black gradient-gold btn-modern group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Garantir Minha Vaga Gratuita</span>
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
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold-end to-gold-start"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Urgency Text */}
                <motion.p
                  className="text-center text-sm text-gray-400 mt-4"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-gold-start font-semibold">Vagas limitadas</span> • Sem replay disponível
                </motion.p>
              </motion.div>
            </div>

            {/* Premium Event Badge */}
            <motion.div
              className="flex-shrink-0"
              variants={itemAnimation}
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-48 h-52 glass rounded-3xl border-2 border-gold-start/30 flex items-center justify-center relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-start via-transparent to-gold-end animated-gradient"></div>
                  </div>

                  <div className="text-center z-10">
                    <motion.div
                      className="mb-3 w-16 h-16 mx-auto"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Image
                        src={withBasePath("/ticket.png")}
                        alt=""
                        width={64}
                        height={64}
                        className="w-full h-full object-contain drop-shadow-2xl"
                        style={{ filter: "brightness(1.2) saturate(1.3)" }}
                      />
                    </motion.div>
                    <p className="text-sm font-black gradient-gold-text uppercase tracking-wider mb-1">
                      Aula Gratuita
                    </p>
                    <p className="text-xs text-gray-400">
                      Certificado Incluído
                    </p>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 blur-2xl bg-gold-start/20 -z-10 pulse-glow"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Descubra mais</p>
              <svg className="w-6 h-6 text-gold-start" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}