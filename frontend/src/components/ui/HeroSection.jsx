import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import video1 from '../../assets/Header video/Video Project 7.mp4'
import video2 from '../../assets/Header video/Video Project 6.mp4'

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = [useRef(null), useRef(null)]
  const videos = [video1, video2]

  const scrollToContent = () => {
    const el = document.getElementById('main-content')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleVideoEnd = (index) => {
    if (index === currentIndex) {
      const nextIndex = (currentIndex + 1) % videos.length
      setCurrentIndex(nextIndex)
    }
  }

  useEffect(() => {
    const activeVideo = videoRefs[currentIndex].current
    if (activeVideo) {
      activeVideo.currentTime = 0
      activeVideo.play().catch(() => {})
    }
  }, [currentIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  }

  const textItemVariants = {
    hidden: { opacity: 0, y: 35, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0A0A0A] text-white select-none">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        {videos.map((src, idx) => {
          const isActive = idx === currentIndex
          return (
            <video
              key={idx}
              ref={videoRefs[idx]}
              src={src}
              muted
              playsInline
              onEnded={() => handleVideoEnd(idx)}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-in-out transform ${
                isActive
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            />
          )
        })}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent pointer-events-none z-[5]" />

      <motion.div
        key="hero-text-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-20 left-6 sm:bottom-28 sm:left-12 lg:bottom-32 lg:left-20 xl:left-24 z-10 max-w-xl sm:max-w-2xl text-left space-y-4 sm:space-y-6"
      >
        
        <div className="overflow-hidden">
          <motion.h1
            variants={textItemVariants}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.08]"
          >
            <span className="text-white inline-block">
              Your Home
            </span>
            <span className="italic font-semibold block text-[#EFCA74] mt-1">Nagpur.</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.p
            variants={textItemVariants}
            className="font-sans text-sm sm:text-base lg:text-lg text-black font-normal leading-relaxed max-w-xl"
          >
            Thoughtfully planned residential homes with contemporary architecture, luxury amenities, and unmatched connectivity in Jaiprakash Nagar.
          </motion.p>
        </div>

        <motion.div variants={buttonVariants} className="pt-2">
          <motion.button
            onClick={scrollToContent}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="relative overflow-hidden group px-7 py-3.5 sm:px-8 sm:py-4 bg-white text-slate-900 font-mono text-xs sm:text-sm font-bold tracking-[0.15em] uppercase cursor-pointer flex items-center gap-3 border border-[#EFCA74] hover:border-[#EFCA74] shadow-2xl hover:shadow-[0_12px_35px_rgba(239,202,116,0.45)] transition-all duration-300"
          >
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full pointer-events-none animate-btn-shine" />
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FAF8F5] via-[#FFFDF8] to-[#FAF8F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <span className="relative z-10 text-slate-900 group-hover:text-[#966042] transition-colors duration-300">
              Explore Sky Connect
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 text-slate-900 group-hover:text-[#966042] group-hover:translate-x-2 transition-all duration-300" />
          </motion.button>
        </motion.div>

        <motion.div variants={buttonVariants} className="flex items-center gap-2 pt-2">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-[#EFCA74]'
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
