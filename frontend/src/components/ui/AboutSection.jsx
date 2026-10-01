import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, RefreshCw } from 'lucide-react'
import frontViewImg from '../../assets/About section/7 crown front view.jpeg'
import backViewImg from '../../assets/About section/backView.jpg'

export default function AboutSection({ onEnquire }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const sanctuaryRef = useRef(null)

  return (
    <section ref={sanctuaryRef} id="about" className="relative w-full bg-[#FAF8F5] text-slate-800 p-0 m-0 border-b border-stone-200 overflow-hidden">
      <span id="main-content" className="sr-only" />
      
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#966042]/8 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#966042]/5 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-6 order-2 lg:order-1 h-full min-h-[480px] sm:min-h-[580px] lg:min-h-[680px] xl:min-h-[760px] flex"
        >
          <div
            onClick={() => setIsFlipped(prev => !prev)}
            className="relative w-full h-full bg-[#FAF8F5] select-none cursor-pointer group"
            style={{ perspective: '1600px' }}
            title="Click image to turn page & view architectural perspective"
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
              className="relative w-full h-full min-h-full"
            >
              <div
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#FAF8F5] p-3 sm:p-5 lg:p-8 flex items-center justify-center"
              >
                <img
                  src={frontViewImg}
                  alt="Skyconnect 7 Crown Front Elevation View"
                  className="w-full h-full object-contain object-center rounded-xl shadow-xl group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              <div
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#FAF8F5] p-3 sm:p-5 lg:p-8 flex items-center justify-center"
              >
                <img
                  src={backViewImg}
                  alt="Skyconnect 7 Crown Architectural View"
                  className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 p-6 sm:p-10 lg:p-16 flex flex-col justify-center max-w-2xl mx-auto lg:max-w-none">
          
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#966042] uppercase block">
            LUXURY RESIDENTIAL SANCTUARY
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Crafted For Distinction.
          </h2>

          <div className="space-y-4 max-w-xl">
            <p className="font-sans text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
              Designed for those who appreciate refined living, Skyconnect brings together contemporary architecture, meticulous engineering, and serene surroundings in the heart of Nagpur.
            </p>

            <p className="font-sans text-sm sm:text-base text-slate-800 font-normal leading-relaxed">
              Every residence is thoughtfully planned with open, light-filled living spaces, premium finishes, and modern amenities that deliver everyday comfort.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
            <div className="bg-white p-2.5 sm:p-3.5 border border-stone-300 shadow-sm text-center">
              <span className="font-serif text-sm sm:text-lg font-bold text-[#966042] block">3 BHK</span>
              <span className="font-sans text-[9px] sm:text-xs text-slate-800 uppercase tracking-wider block mt-0.5 font-medium">Luxury Living</span>
            </div>
            <div className="bg-white p-2.5 sm:p-3.5 border border-stone-300 shadow-sm text-center">
              <span className="font-serif text-sm sm:text-lg font-bold text-[#966042] block">Prime</span>
              <span className="font-sans text-[9px] sm:text-xs text-slate-800 uppercase tracking-wider block mt-0.5 font-medium">Jaiprakash Nagar</span>
            </div>
            <div className="bg-white p-2.5 sm:p-3.5 border border-stone-300 shadow-sm text-center">
              <span className="font-serif text-sm sm:text-lg font-bold text-[#966042] block">100%</span>
              <span className="font-sans text-[9px] sm:text-xs text-slate-800 uppercase tracking-wider block mt-0.5 font-medium">Vastu Compliant</span>
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={() => onEnquire?.("Explore Skyconnect")}
              className="group cursor-pointer inline-flex items-center gap-3 border-b-2 border-slate-900 pb-1.5 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-slate-900 hover:text-[#966042] hover:border-[#966042] transition-colors"
            >
              <span>EXPLORE SKYCONNECT</span>
              <ArrowRight className="w-4 h-4 text-slate-900 group-hover:text-[#966042] group-hover:translate-x-1.5 transition-all" />
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}
