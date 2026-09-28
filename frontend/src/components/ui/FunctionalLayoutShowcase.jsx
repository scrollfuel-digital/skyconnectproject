import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import bedroomImg from '../../assets/Gallery Section/Bedroom Image.png'
import hallImg from '../../assets/Gallery Section/Hall Image.png'
import kitchenImg from '../../assets/Gallery Section/kitchens Image.png'

export default function FunctionalLayoutShowcase({ onEnquire }) {
  const functionalSpaces = [
    {
      id: 'bedroom',
      title: 'Bed Room',
      tag: 'ENSUITE MASTER SUITE',
      feature: "Attached Bath & 16' Balcony",
      description: 'Serene master bedroom suite designed with elegant finishes, abundant natural light, and restful comfort.',
      image: bedroomImg,
      alt: 'Master Bedroom Suite',
    },
    {
      id: 'living',
      title: 'Living Room',
      tag: '3 BHK FAMILY LOUNGE',
      feature: 'Open Lounge & Dining Area',
      description: 'Expansive drawing and living spaces designed for family gatherings, quiet evenings, and entertaining guests.',
      image: hallImg,
      alt: 'Drawing & Living Spaces',
    },
    {
      id: 'kitchen',
      title: 'Kitchen',
      tag: 'SEMI-MODULAR KITCHEN',
      feature: 'Granite Platform & Utility Deck',
      description: 'Thoughtfully planned kitchen workspace with semi-modular fittings, ample storage, and private utility balcony.',
      image: kitchenImg,
      alt: 'Semi-Modular Kitchen',
    },
  ]

  const [activeSpace, setActiveSpace] = useState(functionalSpaces[0])

  return (
    <section id="layouts" className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5] border-y border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10 lg:mb-14 items-end">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight">
              Functional Layouts.
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-800 font-normal leading-relaxed max-w-2xl">
              Experience the essence of refined living through a curated visual collection that captures the architecture, interiors, and lifestyle of our residences. From sweeping skyline views to serene indoor moments, each image tells a story of timeless elegance and design mastery.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onEnquire?.("Discover The Residences")}
                className="group cursor-pointer inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-stone-400/80 text-slate-900 hover:bg-slate-900 hover:text-white font-sans text-xs sm:text-sm font-medium transition-all duration-300 shadow-xs"
              >
                <span>Discover The Residences</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-[16/11] lg:aspect-[16/10] bg-stone-200 overflow-hidden shadow-xs border border-stone-300/60">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSpace.id}
                  src={activeSpace.image}
                  alt={activeSpace.alt}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-start">
            
            <div className="relative w-full aspect-[1.1/1] bg-stone-200 overflow-hidden shadow-xs border border-stone-300/60 mb-5 sm:mb-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSpace.id}
                  src={activeSpace.image}
                  alt={`${activeSpace.title} Detail`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-right"
                />
              </AnimatePresence>
            </div>

            <div className="space-y-1.5 sm:space-y-2.5 pt-1">
              {functionalSpaces.map((space) => {
                const isActive = activeSpace.id === space.id
                return (
                  <button
                    key={space.id}
                    onClick={() => setActiveSpace(space)}
                    onMouseEnter={() => setActiveSpace(space)}
                    className={`block w-full text-left font-serif text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-[#966042] font-bold translate-x-1'
                        : 'text-stone-400 hover:text-slate-800 font-medium'
                    }`}
                  >
                    {space.title}
                  </button>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
