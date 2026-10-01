import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Building2, Layers, CheckCircle2 } from 'lucide-react'
import FunctionalLayoutShowcase from '../components/ui/FunctionalLayoutShowcase.jsx'
import FloorMapSection from '../components/ui/FloorMapSection.jsx'
import SpecificationsSection from '../components/ui/SpecificationsSection.jsx'
import LocationSection from '../components/ui/LocationSection.jsx'
import EnquiryModal from '../components/ui/EnquiryModal.jsx'
import projectPageImg from '../assets/project page image.png'

export default function ProjectPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Schedule a Site Visit')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const openEnquiry = (title = 'Enquire About Skyconnect Project') => {
    setModalTitle(title)
    setModalOpen(true)
  }

  return (
    <div className="bg-[#FAF8F5] text-[#18181B] min-h-screen font-sans selection:bg-[#EFCA74] selection:text-[#18181B] relative">
      
      {/* 7 CROWN BRANDING HEADER BANNER */}
      <section className="relative w-full bg-[#FAF8F5] overflow-hidden flex flex-col items-center justify-start pt-16 sm:pt-20 pb-0">
        
        {/* Edge-to-Edge Banner Graphic Touching Navbar & Screen Borders */}
        <div className="relative w-full flex items-center justify-center p-0 m-0">
          <img
            src={projectPageImg}
            alt="Introducing 7 Crown - Crown Your Life With Excellence"
            className="w-full h-auto object-contain object-center max-w-none p-0 m-0 block"
          />
        </div>

        {/* ANIMATED SCROLL TO EXPLORE PILL IN CHAMPAGNE SUNSET TONE (#FDE4C6) */}
        <div className="w-full bg-[#FDE4C6] py-4 sm:py-6 flex flex-col items-center justify-center gap-1.5 z-20">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#966042] font-bold">
            SCROLL TO EXPLORE
          </span>
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-[#966042]/80 p-0.5 sm:p-1 flex justify-center bg-white/40 backdrop-blur-xs shadow-xs">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 sm:w-1.5 sm:h-2.5 bg-[#966042] rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1: FUNCTIONAL LAYOUT SHOWCASE */}
      <div className="relative w-full">
        <FunctionalLayoutShowcase onEnquire={openEnquiry} />
      </div>

      {/* SECTION 2: FLOOR MAP SECTION WITH PINNED SPECIFICATIONS LAYER */}
      <div className="relative w-full">
        <FloorMapSection onEnquire={openEnquiry}>
          <SpecificationsSection />
        </FloorMapSection>
      </div>

      {/* SECTION 3: CONNECTIVITY & LOCATION */}
      <div className="relative w-full">
        <LocationSection />
      </div>

      {/* ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  )
}
