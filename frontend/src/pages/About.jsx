import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2, Calendar } from 'lucide-react'
import EnquiryModal from '../components/common/EnquiryModal.jsx'
import exteriorImg from '../assets/7crown-exterior.jpg'
import hallImg from '../assets/Hall Image.png'
import kitchenImg from '../assets/kitchens Image.png'
import homePageImg from '../assets/home page image.png'

export default function About() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="bg-[#121212] text-[#18181B] min-h-screen font-sans selection:bg-[#EFCA74] selection:text-[#18181B] overflow-x-hidden">

      {/* ================= STAGE 1: TOP HERO BANNER (DARK SECTION) ================= */}
      <section className="bg-[#121212] text-white pt-20 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-700 text-[#EFCA74] text-xs font-mono tracking-[0.3em] uppercase font-bold rounded-none">
            <Sparkles className="w-3.5 h-3.5" />
            ABOUT US
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white uppercase">
            About Us
          </h1>

          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
            Meet the vision, engineering, and architectural craftsmanship behind Sky Connect Nagpur.
          </p>
        </div>
      </section>

      {/* ================= UN-CROPPED FEATURED IMAGE BRIDGING DARK & WHITE SURFACES ================= */}
      <div className="relative z-30 bg-[#F8FAFC]">
        {/* Dark Top Half Background for 50/50 Split */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#121212]" />

        <div className="relative z-10 max-w-sm sm:max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-none border-4 border-[#121212] shadow-2xl bg-zinc-900 overflow-hidden"
          >
            <img
              src={homePageImg}
              alt="Sky Connect Architectural View"
              className="w-full h-auto max-h-[500px] object-cover sm:object-contain bg-zinc-950"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= STAGE 2: MANIFESTO & 2-COLUMN STORY (WHITE SECTION) ================= */}
      <section className="bg-[#F8FAFC] text-[#18181B] pt-14 sm:pt-16 pb-20 px-4 sm:px-8 lg:px-12 border-b border-slate-200 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Header Tag & Shortened Manifesto Title */}
          <div className="text-center space-y-4">
            <span className="font-mono text-xs text-[#B89230] tracking-[0.3em] uppercase font-bold block">
              OUR PHILOSOPHY
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-[#18181B] leading-[1.25] tracking-tight max-w-3xl mx-auto">
              Crafting modern homes in Nagpur designed for quality, security & <span className="italic font-normal text-[#B89230]">elevated living</span>
            </h2>
          </div>

          {/* Shortened 2-Column Copy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 font-sans text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
            <p>
              Sky Connect was created to bring together thoughtful space planning, contemporary architecture, and practical everyday amenities for modern families in Nagpur.
            </p>
            <p>
              Located in Jaiprakash Nagar, our homes feature RCC earthquake-resistant engineering, red brick construction, smart biometric access, and direct connectivity.
            </p>
          </div>

          {/* Side-by-Side Highlight Card (Image + Quote) */}
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-slate-200">
            {/* Left Image */}
            <div className="lg:col-span-5 rounded-none overflow-hidden border border-slate-300 shadow-md bg-black">
              <img
                src={hallImg}
                alt="Sky Connect Interior Living Space"
                className="w-full h-72 sm:h-80 object-cover filter brightness-95"
              />
            </div>

            {/* Right Quote Content */}
            <div className="lg:col-span-7 space-y-4 pl-0 lg:pl-6">
              <p className="font-serif text-2xl sm:text-3xl font-light text-[#18181B] leading-snug italic">
                "The team took everything we envisioned for modern urban living in Nagpur and turned it into a residential home that finally feels like elevated living."
              </p>
              <p className="font-sans text-xs text-[#475569] leading-relaxed">
                7 Crown by Sky Connect features spacious drawing and dining suites, semi-modular kitchens, Italian marble finish flooring, and direct balcony access.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= STAGE 4: DARK BOTTOM SHOWCASE GRID ================= */}
      <section className="bg-[#121212] text-white py-24 px-4 sm:px-8 lg:px-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-4 space-y-6">
            <span className="font-mono text-xs text-[#EFCA74] tracking-[0.3em] uppercase font-bold block">
              VISITATION & TEAM
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Meet Your New Home
            </h2>

            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
              We invite you for a guided project walkthrough, sample home tour, and direct interaction with our engineering and sales team in Nagpur.
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 bg-[#EFCA74] text-[#18181B] font-mono text-xs font-bold uppercase tracking-[0.25em] rounded-none hover:bg-[#deb45a] transition-all cursor-pointer shadow-xl flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Schedule Visit
            </button>
          </div>

          {/* Right Column: 2 Parallel Vertical Image Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="space-y-3 group">
              <div className="rounded-none overflow-hidden border border-zinc-800 bg-zinc-900 h-72 sm:h-80">
                <img
                  src={kitchenImg}
                  alt="Semi-Modular Kitchen Detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
              </div>
              <div className="font-mono text-xs text-[#EFCA74] tracking-[0.2em] uppercase font-bold">
                INTERIOR CRAFTSMANSHIP
              </div>
            </div>

            {/* Card 2 */}
            <div className="space-y-3 group">
              <div className="rounded-none overflow-hidden border border-zinc-800 bg-zinc-900 h-72 sm:h-80">
                <img
                  src={exteriorImg}
                  alt="Sky Connect Exterior Facade"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
              </div>
              <div className="font-mono text-xs text-[#EFCA74] tracking-[0.2em] uppercase font-bold">
                ARCHITECTURAL FACADE
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Schedule a Site Visit"
      />
    </div>
  )
}
