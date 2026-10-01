import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import hallImg from '../../assets/Gallery Section/Hall Image.png'
import bedroomImg from '../../assets/Gallery Section/Bedroom Image.png'
import kitchenImg from '../../assets/Gallery Section/kitchens Image.png'

export default function HeroSection({ onEnquire }) {
  const slides = [
    {
      id: 'slide-1',
      title: '3 BHK Family Lounge',
      badge: 'SPACIOUS LIVING',
      line1: 'Unmatched Elegance.',
      line2: '3 BHK Family Lounge.',
      subtext: 'Expansive drawing and living spaces designed for family gatherings, quiet evenings, and entertaining guests in Jaiprakash Nagar.',
      image: hallImg,
    },
    {
      id: 'slide-2',
      title: 'Master Bedroom Suite',
      badge: 'ENSUITE MASTER SUITE',
      line1: 'Serene Luxury.',
      line2: 'Master Suite Balcony.',
      subtext: 'Serene master bedroom suite designed with elegant finishes, abundant natural light, and a private 16-foot balcony.',
      image: bedroomImg,
    },
    {
      id: 'slide-3',
      title: 'Semi-Modular Kitchen',
      badge: 'SEMI-MODULAR WORKSPACE',
      line1: 'Thoughtful Design.',
      line2: 'Modular Kitchen Deck.',
      subtext: 'Modern kitchen workspace fitted with premium granite platforms, ample storage, and private utility balcony.',
      image: kitchenImg,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const currentSlide = slides[currentIndex]

  // Continuous auto transition every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const scrollToGallery = () => {
    const el = document.getElementById('gallery')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else if (onEnquire) {
      onEnquire('Explore Skyconnect Residences')
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[680px] overflow-hidden bg-[#0A0A0A] text-white select-none"
    >
      {/* BACKGROUND IMAGE SLIDESHOW WITH SILKY SMOOTH CROSS-DISSOLVE & KEN BURNS */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={currentSlide.image}
              alt={currentSlide.title}
              initial={{ scale: 1.0 }}
              animate={{ scale: 1.06 }}
              transition={{ duration: 5.5, ease: 'easeInOut' }}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SOFT GRADIENT OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none z-[5]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40 pointer-events-none z-[5]" />

      {/* LEFT ARROW BUTTON (SCREEN EDGE) */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 border border-white/25 text-white hover:border-[#EFCA74] hover:text-[#EFCA74] hover:bg-black/75 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer group"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* RIGHT ARROW BUTTON (SCREEN EDGE) */}
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 border border-white/25 text-white hover:border-[#EFCA74] hover:text-[#EFCA74] hover:bg-black/75 backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer group"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* HERO MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-16 lg:px-20 flex flex-col justify-center pt-24 sm:pt-28 pb-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-10 xl:col-span-9 space-y-5 sm:space-y-6">
            
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide.id} className="space-y-4">
                
                {/* Badge Tag */}
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#EFCA74]/70 backdrop-blur-md text-[#EFCA74] font-mono text-[11px] uppercase tracking-[0.2em] shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#EFCA74]" />
                    <span>{currentSlide.badge}</span>
                  </motion.div>
                </div>

                {/* Staggered Headline */}
                <div className="space-y-1 overflow-hidden drop-shadow-md">
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
                      transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                      className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-md"
                    >
                      {currentSlide.line1}
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
                      transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                      className="font-serif text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#EFCA74] leading-[1.08] drop-shadow-md"
                    >
                      {currentSlide.line2}
                    </motion.h1>
                  </div>
                </div>

                {/* Narrative Subtext */}
                <div className="overflow-hidden max-w-xl pt-1">
                  <motion.p
                    initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="font-sans text-sm sm:text-base lg:text-lg text-stone-100 leading-relaxed font-normal drop-shadow-sm"
                  >
                    {currentSlide.subtext}
                  </motion.p>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={scrollToGallery}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden group px-7 py-3.5 sm:px-8 sm:py-4 bg-[#18181B] text-white font-mono text-xs sm:text-sm font-bold tracking-[0.18em] uppercase cursor-pointer inline-flex items-center gap-3 border border-[#EFCA74]/70 hover:bg-[#966042] transition-all duration-300 shadow-2xl"
              >
                <span>EXPLORE RESIDENCES</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
