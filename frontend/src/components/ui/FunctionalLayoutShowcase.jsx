import React, { useState, useRef } from 'react'
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
  const [isMainLoading, setIsMainLoading] = useState(true)
  const [isDetailLoading, setIsDetailLoading] = useState(true)

  const mainStartTime = useRef(Date.now())
  const detailStartTime = useRef(Date.now())

  const handleSpaceChange = (space) => {
    if (activeSpace.id !== space.id) {
      mainStartTime.current = Date.now()
      detailStartTime.current = Date.now()
      setIsMainLoading(true)
      setIsDetailLoading(true)
      setActiveSpace(space)
    }
  }

  const handleMainLoad = () => {
    const elapsed = Date.now() - mainStartTime.current
    const remaining = Math.max(0, 180 - elapsed)
    setTimeout(() => {
      setIsMainLoading(false)
    }, remaining)
  }

  const handleDetailLoad = () => {
    const elapsed = Date.now() - detailStartTime.current
    const remaining = Math.max(0, 180 - elapsed)
    setTimeout(() => {
      setIsDetailLoading(false)
    }, remaining)
  }

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
          
          {/* Main Large Image Container */}
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-[16/11] lg:aspect-[16/10] bg-[#e6e2dc] overflow-hidden shadow-xs border border-stone-300/60">
              
              {/* Skeleton Loader Overlay */}
              <AnimatePresence>
                {isMainLoading && (
                  <motion.div
                    key="main-skeleton"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 z-20 bg-[#e7e3de] animate-pulse p-6 sm:p-8 flex flex-col justify-between pointer-events-none"
                  >
                    <div className="space-y-3">
                      <div className="h-6 w-1/3 bg-stone-300/90 rounded-md" />
                      <div className="h-4 w-1/2 bg-stone-300/60 rounded-md" />
                    </div>
                    <div className="w-full h-44 sm:h-56 bg-stone-300/70 rounded-lg animate-pulse my-auto" />
                    <div className="flex justify-between items-center pt-2">
                      <div className="h-4 w-1/4 bg-stone-300/60 rounded-md" />
                      <div className="h-7 w-20 bg-stone-300/80 rounded-full" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Image */}
              <img
                key={activeSpace.id}
                src={activeSpace.image}
                alt={activeSpace.alt}
                onLoad={handleMainLoad}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isMainLoading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>

          {/* Secondary Detail Image & Text Items */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            
            <div className="relative w-full aspect-[1.1/1] bg-[#e6e2dc] overflow-hidden shadow-xs border border-stone-300/60 mb-5 sm:mb-6">
              
              {/* Skeleton Loader Overlay */}
              <AnimatePresence>
                {isDetailLoading && (
                  <motion.div
                    key="detail-skeleton"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 z-20 bg-[#e7e3de] animate-pulse p-5 flex flex-col justify-between pointer-events-none"
                  >
                    <div className="space-y-2">
                      <div className="h-4 w-1/2 bg-stone-300/90 rounded-md" />
                      <div className="h-3 w-1/3 bg-stone-300/60 rounded-md" />
                    </div>
                    <div className="w-full h-28 bg-stone-300/70 rounded-lg animate-pulse my-auto" />
                    <div className="h-3 w-1/4 bg-stone-300/60 rounded-md" />
                  </motion.div>
                )}
              </AnimatePresence>

              <img
                key={activeSpace.id}
                src={activeSpace.image}
                alt={`${activeSpace.title} Detail`}
                onLoad={handleDetailLoad}
                className={`w-full h-full object-cover object-right transition-opacity duration-300 ${
                  isDetailLoading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2.5 pt-1">
              {functionalSpaces.map((space) => {
                const isActive = activeSpace.id === space.id
                return (
                  <button
                    key={space.id}
                    onClick={() => handleSpaceChange(space)}
                    onMouseEnter={() => handleSpaceChange(space)}
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
