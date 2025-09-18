'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/paths"
import { EVENT_DETAILS } from "@/lib/event"
import { scrollToSection } from "@/lib/scroll"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
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

  return (
    <motion.section
      className="relative overflow-hidden bg-[#242424] min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#c1933d]"></div>


      {/* Static Floating Elements - One on each side */}
      <div className="absolute inset-0">
        {/* Left Side Element */}
        <div className="absolute top-1/2 -left-32 w-[800px] h-[800px] opacity-10 transform -translate-y-1/2">
          <Image
            src={withBasePath("/funil.png")}
            alt="Flywheel"
            fill
            className="object-contain"
          />
        </div>

        {/* Right Side Element */}
        <div className="absolute top-1/2 -right-32 w-[800px] h-[800px] opacity-10 transform -translate-y-1/2">
          <Image
            src={withBasePath("/flywheel.png")}
            alt="Funil"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      {/* Original Hero Content with Animation */}
      <motion.div
        className="container mx-auto px-6 py-16 relative z-10"
        variants={containerAnimation}
      >
        <div className="max-w-[45rem] mx-auto flex flex-col gap-12 justify-center min-h-screen">
          <div className="flex flex-col items-center text-center">
            {/* Main Title - Do Funil ao Flywheel */}
            <motion.h1
              className="w-full max-w-[731px] text-[60px] lg:text-[80px] xl:text-[120px] leading-[90%] text-left"
              style={{
                fontFamily: "'Butler', serif",
                fontWeight: 300,
                letterSpacing: "-0.03em"
              }}
              variants={titleAnimation}
            >
              <span
                style={{
                  background: "linear-gradient(180deg, #F4CE71, #BE8C38)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block"
                }}
              >
                Do Funil<br />
                ao Flywheel
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl lg:text-3xl xl:text-[28px] font-normal leading-[1.15] text-white max-w-[723px] mt-8 -tracking-[0.96px] text-left"
              style={{
                fontFamily: "'Open Sans', sans-serif"
              }}
              variants={itemAnimation}
            >
              Enquanto você insiste no <span className="font-semibold">Funil Tradicional</span>, seus concorrentes já lucram com o <span className="font-semibold">Flywheel</span>.
            </motion.p>
          </div>

          {/* Bottom section with event info and badge */}
          <motion.div
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center"
            variants={containerAnimation}
          >
            <motion.div
              className="flex-1 max-w-md flex flex-col gap-8"
              variants={itemAnimation}
            >
              {/* Event Info */}
              <div className="flex flex-col gap-4">
                <motion.div
                  className="flex gap-4 items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-6 h-6">
                    <img src={withBasePath("/images/calendar-icon.svg")} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-base lg:text-lg text-gray-300">
                    <span className="font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>Data:</span>
                    <span className="font-normal" style={{ fontFamily: "'Work Sans', sans-serif" }}> 09 de Outubro de 2025</span>
                  </p>
                </motion.div>

                <motion.div
                  className="flex gap-4 items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-6 h-6">
                    <img src={withBasePath("/images/clock-icon.svg")} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-base lg:text-lg text-gray-300">
                    <span className="font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>Horário:</span>
                    <span className="font-normal" style={{ fontFamily: "'Work Sans', sans-serif" }}> 17:00 às 18:30 (Brasília)</span>
                  </p>
                </motion.div>

                <motion.div
                  className="flex gap-4 items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-6 h-6">
                    <img src={withBasePath("/images/live-icon.svg")} alt="" className="w-full h-full" />
                  </div>
                  <p className="text-base lg:text-lg text-gray-300">
                    <span className="font-bold" style={{ fontFamily: "'Work Sans', sans-serif" }}>100% online e ao vivo</span>
                    <span className="font-normal" style={{ fontFamily: "'Work Sans', sans-serif" }}> – sem replay.</span>
                  </p>
                </motion.div>
              </div>

              {/* CTA Button with Animation */}
              <motion.button
                onClick={() => scrollToSection('inscricao')}
                className="bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] text-black text-base lg:text-lg font-normal py-4 px-8 rounded-full w-full max-w-md mx-auto lg:mx-0 whitespace-nowrap hover:from-[#F4CE71]/90 hover:to-[#BE8C38]/90 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Assistir aula estratégica gratuita</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#BE8C38] to-[#F4CE71]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Animated Event Badge */}
            <motion.div
              className="flex-shrink-0"
              variants={itemAnimation}
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-40 h-44 lg:w-44 lg:h-48 border border-[#F4CE71] rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-start/5 to-transparent"></div>

                <div className="text-center z-10">
                  <motion.div
                    className="mb-2 w-8 h-8 lg:w-10 lg:h-10 mx-auto"
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
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                      style={{ filter: "brightness(0) saturate(100%) invert(83%) sepia(69%) saturate(372%) hue-rotate(346deg) brightness(93%) contrast(91%)" }}
                    />
                  </motion.div>
                  <p className="text-xs lg:text-sm font-semibold bg-gradient-to-b from-[#F4CE71] to-[#BE8C38] bg-clip-text uppercase tracking-wide" style={{ WebkitTextFillColor: "transparent", fontFamily: "'Inter', sans-serif" }}>
                    AULA GRATUITA
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mt-8"
            variants={itemAnimation}
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