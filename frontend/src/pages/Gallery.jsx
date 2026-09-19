import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Calendar, Image as ImageIcon, Layers, Eye } from 'lucide-react'
import EnquiryModal from '../components/common/EnquiryModal.jsx'
import exteriorImg from '../assets/7crown-exterior.jpg'
import hallImg from '../assets/Hall Image.png'
import kitchenImg from '../assets/kitchens Image.png'
import bedroomImg from '../assets/Bedroom Image.png'
import floorMapImg from '../assets/Floor Map 2d.png'
import fontBalconyImg from '../assets/Font balcony image.png'

/**
 * ============================================================================
 * GALLERY PAGE COMPONENT - SKY CONNECT NAGPUR
 * ============================================================================
 * An interactive media gallery displaying project architectural renders, 
 * interior spaces, floor plans, and amenities.
 * 
 * Key Features:
 * - Dynamic Category Filtering (All, Exterior, Interior, Rooftop, Floor Plans)
 * - Animated Grid Transitions using Framer Motion (layout & scale animations)
 * - Sharp 90-degree Architectural Design Aesthetics (rounded-none cards & buttons)
 * - Hover Quick-View Eye Button triggering the Lead Enquiry Modal
 * - Integrated Site Visit Call-to-Action (CTA) Banner
 * ============================================================================
 */
export default function Gallery() {
  // --------------------------------------------------------------------------
  // STATE MANAGEMENT
  // --------------------------------------------------------------------------
  // Controls visibility of the site visit / lead enquiry modal
  const [modalOpen, setModalOpen] = useState(false)

  // Tracks the currently selected category filter tab ('all' by default)
  const [activeTab, setActiveTab] = useState('all')

  // --------------------------------------------------------------------------
  // GALLERY DATASET
  // --------------------------------------------------------------------------
  // Array of gallery item objects representing showcase renders & photographs
  const galleryItems = [
    { title: 'Project Exterior - Front View', category: 'exterior', image: exteriorImg },
    { title: 'Illuminated Sunset View', category: 'exterior', image: exteriorImg },
    { title: 'Living & Dining Suite', category: 'interior', image: hallImg },
    { title: 'Master Bedroom Suite', category: 'interior', image: bedroomImg },
    { title: 'Modular Kitchen & Utility', category: 'interior', image: kitchenImg },
    { title: 'Front Balcony Sunset View', category: 'interior', image: fontBalconyImg },
    { title: 'Rooftop Garden Oasis', category: 'rooftop', image: exteriorImg },
    { title: 'Typical Floor Plan Layout', category: 'floorplans', image: floorMapImg }
  ]

  // --------------------------------------------------------------------------
  // FILTERING LOGIC
  // --------------------------------------------------------------------------
  // Computes items to display based on the active category tab selection
  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab)

  return (
    <div className="bg-[#F8FAFC] text-[#18181B] min-h-screen font-sans selection:bg-[#EFCA74] selection:text-[#18181B]">
      
      {/* ======================================================================
          SECTION 1: HERO HEADER BANNER
          ====================================================================== */}
      <section className="bg-[#121212] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-zinc-800">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Monospaced Section Tag Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-700 text-[#EFCA74] text-xs font-mono tracking-[0.25em] uppercase font-bold rounded-none">
            <Sparkles className="w-3.5 h-3.5" />
            01 / PROJECT HIGHLIGHTS
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight">
            Sky Connect Gallery
          </h1>

          {/* Subtitle / Intro Description */}
          <p className="font-sans text-base text-slate-300 max-w-xl mx-auto font-normal">
            Take a closer look at Sky Connect and discover the spaces, architecture, design, and features that define the project in Nagpur.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 2: MAIN GALLERY SHOWCASE (FILTER TABS & GRID)
          ====================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --------------------------------------------------------------------
            Category Filter Navigation Buttons
            -------------------------------------------------------------------- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 font-mono text-xs font-bold uppercase tracking-[0.2em]">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'exterior', label: 'Project Exterior' },
            { id: 'interior', label: 'Interior Spaces' },
            { id: 'rooftop', label: 'Rooftop Garden' },
            { id: 'floorplans', label: 'Floor Plans' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-none border transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#18181B] text-[#EFCA74] border-[#18181B] shadow-md font-bold'
                  : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* --------------------------------------------------------------------
            Gallery Grid - Sharp Architectural Image Cards with Framer Motion
            -------------------------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group rounded-none overflow-hidden bg-black border border-slate-300 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                {/* Showcase Image with Hover Scale */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                
                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Card Title & Monospaced Index Tag */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="font-mono text-[11px] text-[#EFCA74] tracking-[0.25em] uppercase font-bold block">
                    0{idx + 1} / {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-xl font-light text-white leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Action Button (Eye Icon -> Opens Modal) */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="p-3 rounded-none bg-black/80 text-[#EFCA74] border border-[#EFCA74]/40 shadow-lg cursor-pointer hover:bg-[#EFCA74] hover:text-[#18181B] transition-colors"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ======================================================================
            SECTION 3: SITE VISIT CALL-TO-ACTION BANNER
            ====================================================================== */}
        <div className="mt-20 bg-white border border-slate-300 rounded-none p-10 sm:p-14 text-center max-w-4xl mx-auto shadow-md space-y-6">
          <span className="font-mono text-xs text-[#B89230] tracking-[0.25em] uppercase font-bold block">
            02 / VISIT US IN NAGPUR
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#18181B]">
            See It. Experience It. Make It Yours.
          </h2>
          <p className="font-sans text-base text-[#475569] font-normal leading-relaxed max-w-xl mx-auto">
            Pictures give you an idea. A site visit lets you experience the space for yourself. Connect with our team to schedule your visit.
          </p>

          {/* Schedule Site Visit CTA Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 bg-[#18181B] text-white font-mono text-xs font-bold uppercase tracking-[0.25em] rounded-none hover:bg-slate-800 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer border border-[#EFCA74]/30"
          >
            <Calendar className="w-4 h-4 text-[#EFCA74]" />
            Schedule a Site Visit
          </button>
        </div>

      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Schedule a Site Visit"
      />
    </div>
  )
}
