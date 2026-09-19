import React, { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  X,
  FileDown,
  Calendar,
  Compass,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Eye,
  ShieldCheck,
  Building2,
  Box,
  Car
} from 'lucide-react'
import floorMapImg from '../assets/Floor Map 2d.png'
import isometricImg from '../assets/Isometric view.png'
import parkingMapImg from '../assets/Parking Floor Plan.png'

export default function FloorMapSection({ onEnquire, children }) {
  const containerRef = useRef(null)
  const cardsRef = useRef(null)
  const [scrollDistance, setScrollDistance] = useState(2400)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxActiveTab, setLightboxActiveTab] = useState('2d') // '2d' | '3d' | 'parking'

  // Track scroll progress within this 500vh pinned sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Measure total width of horizontal cards track for dynamic pixel-perfect scrubbing
  useEffect(() => {
    const calculateDistance = () => {
      if (cardsRef.current) {
        const totalW = cardsRef.current.scrollWidth
        const viewW = window.innerWidth
        setScrollDistance(Math.max(0, totalW - viewW + 120))
      }
    }
    calculateDistance()
    window.addEventListener('resize', calculateDistance)
    return () => window.removeEventListener('resize', calculateDistance)
  }, [])

  // =========================================================================
  // MULTI-STAGE SCROLL ANIMATION TIMING:
  // Stage 1 (0.00 -> 0.06): Amenities section stops & pins in place (clean viewing pause)
  // Stage 2 (0.06 -> 0.22): Floor Map emerges & expands from bottom-right corner over Amenities
  // Stage 3 (0.24 -> 0.84): Horizontal scrub of architectural cards from right to left
  // Stage 4 (0.84 -> 0.92): Final card hold for comfortable CTA interaction
  // Stage 5 (0.92 -> 0.99): Curtain lift exit (slides up from down to up revealing CTA banner)
  // =========================================================================

  // Entry: scale up from bottom-right corner over Amenities
  const scale = useTransform(scrollYProgress, [0.06, 0.22], [0.15, 1.0])
  const floorMapOpacity = useTransform(scrollYProgress, [0.05, 0.08, 0.92, 0.99], [0, 1, 1, 0.8])
  const borderRadius = useTransform(scrollYProgress, [0.06, 0.18, 0.22], ['36px', '16px', '0px'])

  // Horizontal scrub of cards
  const x = useTransform(scrollYProgress, [0.24, 0.84], [0, -scrollDistance])

  // Exit: closes from down to up (curtain lift)
  const translateY = useTransform(scrollYProgress, [0.92, 0.99], ['0%', '-100%'])

  // Pinned Amenities section opacity and pointer events
  const amenitiesOpacity = useTransform(scrollYProgress, [0.18, 0.24], [1, 0])
  const floorMapPointerEvents = useTransform(scrollYProgress, (val) => (val > 0.05 ? 'auto' : 'none'))
  const amenitiesPointerEvents = useTransform(scrollYProgress, (val) => (val < 0.22 ? 'auto' : 'none'))

  const openLightboxWithTab = (tab) => {
    setLightboxActiveTab(tab)
    setLightboxOpen(true)
  }

  return (
    <div
      ref={containerRef}
      id="amenities"
      className="relative h-[400vh] bg-[#FAF8F5] -mt-2"
    >
      {/* Target anchor for floor-map nav links */}
      <div id="floor-map" className="absolute top-[22%] pointer-events-none -mt-20" />
      <span id="floormap" className="sr-only" />

      {/* STICKY FULLSCREEN VIEWPORT CONTAINER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-auto">
        
        {/* ================= BACKGROUND PINNED LAYER (AMENITIES SECTION) ================= */}
        <motion.div
          style={{
            opacity: amenitiesOpacity,
            pointerEvents: amenitiesPointerEvents
          }}
          className="absolute inset-0 w-full h-full z-0 flex items-center justify-center bg-[#FAF8F5] border-t border-slate-200 overflow-y-auto lg:overflow-hidden"
        >
          {children}
        </motion.div>

        {/* ================= FOREGROUND ANIMATING FLOOR MAP CANVAS (EXPANDS FROM BOTTOM-RIGHT) ================= */}
        <motion.div
          style={{
            scale,
            opacity: floorMapOpacity,
            borderRadius,
            y: translateY,
            transformOrigin: 'bottom right',
            pointerEvents: floorMapPointerEvents
          }}
          className="relative z-10 w-full h-full bg-[#FAF8F5] text-slate-900 shadow-[-12px_-12px_45px_rgba(0,0,0,0.15)] border-t border-stone-300/80 overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#966042]/10 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-amber-600/10 via-transparent to-transparent rounded-full filter blur-3xl pointer-events-none" />

          {/* ================= HORIZONTAL CARDS TRACK ================= */}
          <div className="relative z-10 flex-1 flex items-center overflow-hidden py-4 sm:py-6">
            <motion.div
              ref={cardsRef}
              style={{ x }}
              className="flex items-center gap-0 pl-6 sm:pl-10 lg:pl-16 pr-16 sm:pr-24 shrink-0 will-change-transform"
            >
              
              {/* =============================================================
                  CARD 1: [ 01 ] ARCHITECTURE (2D FLOOR PLAN LAYOUT)
                  ============================================================= */}
              <div className="w-[88vw] sm:w-[640px] lg:w-[760px] h-[75vh] sm:h-[80vh] bg-[#F4F1EA] text-slate-900 rounded-none p-6 sm:p-10 lg:p-12 flex flex-col justify-between shrink-0 border border-stone-300 relative group">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs sm:text-sm text-slate-500 tracking-wider">
                      [ 01 ]
                    </span>
                    <span className="font-mono text-[10px] text-[#966042] tracking-widest uppercase font-bold bg-amber-500/10 px-2.5 py-0.5 border border-[#966042]/20">
                      MASTER LAYOUT
                    </span>
                  </div>
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F1E36] tracking-tight mt-2">
                    Architecture
                  </h3>
                </div>

                {/* Centerpiece: Architectural 2D Plan (Maximized Viewport) */}
                <div
                  onClick={() => openLightboxWithTab('2d')}
                  className="relative flex-1 mt-4 sm:mt-6 bg-[#EAE7DF] border border-stone-300/80 p-3 sm:p-6 flex items-center justify-center cursor-zoom-in group/inner overflow-hidden shadow-inner"
                >
                  <img
                    src={floorMapImg}
                    alt="Sky Connect 3 BHK Architecture Plan"
                    className="w-full h-full object-contain filter drop-shadow-sm group-hover/inner:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Compass */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 border border-stone-300 flex items-center gap-1.5 font-mono text-[10px] text-slate-700 shadow-sm pointer-events-none">
                    <Compass className="w-3.5 h-3.5 text-[#B89230]" />
                    <span className="font-bold">100% VASTU</span>
                  </div>

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/inner:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-[#18181B]/90 text-[#EFCA74] px-3 py-1.5 text-xs font-mono tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> Enlarge 2D Plan
                    </span>
                  </div>
                </div>
              </div>

              {/* =============================================================
                  CARD 2: [ 02 ] ISOMETRIC VIEW (3D ARCHITECTURAL CUTAWAY)
                  ============================================================= */}
              <div className="w-[88vw] sm:w-[680px] lg:w-[800px] h-[75vh] sm:h-[80vh] bg-[#F4F1EA] text-slate-900 rounded-none p-6 sm:p-10 lg:p-12 flex flex-col justify-between shrink-0 border-y border-r border-stone-300 relative group">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs sm:text-sm text-slate-500 tracking-wider">
                      [ 02 ]
                    </span>
                    <span className="font-mono text-[10px] text-[#966042] tracking-widest uppercase font-bold bg-amber-500/10 px-2.5 py-0.5 border border-[#966042]/20">
                      3D PERSPECTIVE
                    </span>
                  </div>
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F1E36] tracking-tight mt-2">
                    Isometric View
                  </h3>
                </div>

                {/* Centerpiece: 3D Isometric View Image (Maximized Viewport) */}
                <div
                  onClick={() => openLightboxWithTab('3d')}
                  className="relative flex-1 mt-4 sm:mt-6 bg-[#EAE7DF] border border-stone-300/80 p-3 sm:p-6 flex items-center justify-center cursor-zoom-in group/inner overflow-hidden shadow-inner"
                >
                  <img
                    src={isometricImg}
                    alt="Sky Connect 3D Isometric View"
                    className="w-full h-full object-contain filter drop-shadow-md group-hover/inner:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 border border-stone-300 flex items-center gap-1.5 font-mono text-[10px] text-slate-700 shadow-sm pointer-events-none">
                    <Box className="w-3.5 h-3.5 text-[#B89230]" />
                    <span className="font-bold">3D CUTAWAY</span>
                  </div>

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/inner:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-[#18181B]/90 text-[#EFCA74] px-3 py-1.5 text-xs font-mono tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> Enlarge 3D View
                    </span>
                  </div>
                </div>
              </div>

              {/* =============================================================
                  CARD 3: [ 03 ] PARKING FLOOR PLAN LAYOUT
                  ============================================================= */}
              <div className="w-[88vw] sm:w-[680px] lg:w-[800px] h-[75vh] sm:h-[80vh] bg-[#F4F1EA] text-slate-900 rounded-none p-6 sm:p-10 lg:p-12 flex flex-col justify-between shrink-0 border-y border-r border-stone-300 relative group">
                
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs sm:text-sm text-slate-500 tracking-wider">
                      [ 03 ]
                    </span>
                    <span className="font-mono text-[10px] text-[#966042] tracking-widest uppercase font-bold bg-amber-500/10 px-2.5 py-0.5 border border-[#966042]/20">
                      PARKING LAYOUT
                    </span>
                  </div>
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0F1E36] tracking-tight mt-2">
                    Parking Floor Plan
                  </h3>
                </div>

                {/* Centerpiece: Parking Floor Plan Image */}
                <div
                  onClick={() => openLightboxWithTab('parking')}
                  className="relative flex-1 mt-4 sm:mt-6 bg-[#EAE7DF] border border-stone-300/80 p-3 sm:p-6 flex items-center justify-center cursor-zoom-in group/inner overflow-hidden shadow-inner"
                >
                  <img
                    src={parkingMapImg}
                    alt="Sky Connect Parking Floor Plan"
                    className="w-full h-full object-contain filter drop-shadow-md group-hover/inner:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 border border-stone-300 flex items-center gap-1.5 font-mono text-[10px] text-slate-700 shadow-sm pointer-events-none">
                    <Car className="w-3.5 h-3.5 text-[#B89230]" />
                    <span className="font-bold">COVERED PARKING</span>
                  </div>

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/inner:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-[#18181B]/90 text-[#EFCA74] px-3 py-1.5 text-xs font-mono tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> Enlarge Parking Plan
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* ================= BOTTOM METRICS BAR ================= */}
          <div className="relative z-20 w-full px-6 sm:px-12 lg:px-16 py-4 flex flex-wrap items-center justify-between gap-4 border-t border-stone-300/80 text-xs font-mono text-slate-600 shrink-0 bg-[#FAF8F5]/95 backdrop-blur-xs">
            <div className="flex items-center gap-6">
              <span>CONFIG: 3 BHK LUXURY</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">BALCONIES: 3 PRIVATE DECKS</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">VASTU: 100% COMPLIANT</span>
            </div>
            <span className="text-[#966042] font-semibold">SCROLL DOWN TO ADVANCE ↓</span>
          </div>

        </motion.div>

      </div>

      {/* ================= LIGHTBOX MODAL FOR FULLSCREEN FLOOR PLAN / 3D VIEW / PARKING ================= */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="absolute inset-0 cursor-pointer"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-6xl bg-white p-4 sm:p-6 shadow-2xl border border-zinc-700 max-h-[95vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-200 mb-4 gap-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-slate-900">
                    Sky Connect — Architectural {lightboxActiveTab === '2d' ? '2D Floor Plan' : lightboxActiveTab === '3d' ? '3D Isometric View' : 'Parking Floor Plan'}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 mt-0.5">
                    100% Vastu Compliant • Jaiprakash Nagar, Nagpur
                  </p>
                </div>

                {/* View Mode Toggle Tabs */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-stone-100 p-1 border border-stone-200 flex-wrap">
                    <button
                      onClick={() => setLightboxActiveTab('2d')}
                      className={`px-3 py-1 text-xs font-mono font-bold transition-colors cursor-pointer ${
                        lightboxActiveTab === '2d'
                          ? 'bg-[#18181B] text-[#EFCA74]'
                          : 'text-slate-600 hover:text-black'
                      }`}
                    >
                      2D Layout
                    </button>
                    <button
                      onClick={() => setLightboxActiveTab('3d')}
                      className={`px-3 py-1 text-xs font-mono font-bold transition-colors cursor-pointer ${
                        lightboxActiveTab === '3d'
                          ? 'bg-[#18181B] text-[#EFCA74]'
                          : 'text-slate-600 hover:text-black'
                      }`}
                    >
                      3D Isometric
                    </button>
                    <button
                      onClick={() => setLightboxActiveTab('parking')}
                      className={`px-3 py-1 text-xs font-mono font-bold transition-colors cursor-pointer ${
                        lightboxActiveTab === 'parking'
                          ? 'bg-[#18181B] text-[#EFCA74]'
                          : 'text-slate-600 hover:text-black'
                      }`}
                    >
                      Parking Plan
                    </button>
                  </div>

                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="p-2 text-slate-600 hover:text-slate-900 hover:bg-stone-100 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Large Image View */}
              <div className="bg-[#ECEEF1] p-4 flex items-center justify-center rounded-none overflow-auto">
                <img
                  src={lightboxActiveTab === '2d' ? floorMapImg : lightboxActiveTab === '3d' ? isometricImg : parkingMapImg}
                  alt={lightboxActiveTab === '2d' ? "Sky Connect 2D Floor Plan" : lightboxActiveTab === '3d' ? "Sky Connect 3D Isometric View" : "Sky Connect Parking Floor Plan"}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              {/* Modal Footer CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-200 mt-4">
                <span className="font-sans text-xs text-slate-600">
                  Detailed room dimensions and CAD drawings available upon enquiry.
                </span>
                <button
                  onClick={() => {
                    setLightboxOpen(false)
                    onEnquire?.('Enquire About Floor Plan Layout')
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#18181B] text-[#EFCA74] font-mono text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                >
                  Enquire About This Layout
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
