import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import fontBalconyImg from '../../assets/Gallery Section/Font balcony image.png'
import bedroomImg from '../../assets/Gallery Section/Bedroom Image.png'
import rooftopGardenImg from '../../assets/Gallery Section/Rooftop Garden.png'
import standingBalconyImg from '../../assets/Gallery Section/Standing balcony image.png'
import kitchenImg from '../../assets/Gallery Section/kitchens Image.png'
import liftImg from '../../assets/Gallery Section/Lift.png'
import utilityImg from '../../assets/Gallery Section/Utility.png'
import bedroom2Img from '../../assets/Gallery Section/Bedroom 2.png'
import bedroom3Img from '../../assets/Gallery Section/Bedroom 3.png'

function ShutterGalleryCard({ image, title, category, onClick, delay = 0, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      onClick={onClick}
      className={`relative bg-stone-200 overflow-hidden border border-stone-300/70 group cursor-pointer select-none ${className}`}
    >
      <motion.img
        src={image}
        alt={title}
        variants={{
          hidden: { scale: 1.18, filter: 'brightness(0.7)' },
          visible: { scale: 1, filter: 'brightness(1)' }
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      <motion.div
        variants={{
          hidden: { y: '0%' },
          visible: { y: '-100%' }
        }}
        transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1], delay }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#0F1E36] z-20 border-b border-[#EFCA74]/70 shadow-2xl"
      >
        <div className="w-full h-full bg-[linear-gradient(to_bottom,rgba(239,202,116,0.08)_1px,transparent_1px)] bg-[size:100%_12px]" />
      </motion.div>

      <motion.div
        variants={{
          hidden: { y: '0%' },
          visible: { y: '100%' }
        }}
        transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1], delay }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0F1E36] z-20 border-t border-[#EFCA74]/70 shadow-2xl"
      >
        <div className="w-full h-full bg-[linear-gradient(to_bottom,rgba(239,202,116,0.08)_1px,transparent_1px)] bg-[size:100%_12px]" />
      </motion.div>

      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.4 },
          visible: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 0.4, delay: delay + 0.7, type: 'spring', stiffness: 220 }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-stone-200 flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform"
      >
        <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
      </motion.div>

      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 bg-slate-900/85 backdrop-blur-md px-4 py-2 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[10px] text-[#EFCA74] tracking-widest uppercase block font-bold">
          {category}
        </span>
        <span className="font-serif text-xs sm:text-sm text-white">
          {title}
        </span>
      </div>
    </motion.div>
  )
}

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const galleryImages = [
    {
      id: 1,
      title: 'Front Balcony Skyline View',
      category: 'BALCONY DECK',
      image: fontBalconyImg,
    },
    {
      id: 2,
      title: 'Master Bedroom Suite',
      category: 'BEDROOM',
      image: bedroomImg,
    },
    {
      id: 3,
      title: 'Panoramic Sky Deck & Rooftop Garden',
      category: 'ROOFTOP GARDEN',
      image: rooftopGardenImg,
    },
    {
      id: 4,
      title: 'Standing Private Balcony Deck',
      category: 'BALCONY DECK',
      image: standingBalconyImg,
    },
    {
      id: 5,
      title: 'Semi-Modular Kitchen Workspace',
      category: 'KITCHEN',
      image: kitchenImg,
    },
    {
      id: 6,
      title: 'High-Speed Elevator Lobby',
      category: 'AMENITIES',
      image: liftImg,
    },
    {
      id: 7,
      title: 'Private Utility & Service Deck',
      category: 'UTILITY',
      image: utilityImg,
    },
    {
      id: 8,
      title: 'Second Luxury Bedroom Suite',
      category: 'BEDROOM',
      image: bedroom2Img,
    },
    {
      id: 9,
      title: 'Guest Suite & Lounge',
      category: 'BEDROOM',
      image: bedroom3Img,
    },
  ]

  const openLightbox = (index) => {
    setSelectedIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const featured = galleryImages.slice(0, 3)

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-28 bg-[#FAF8F5] border-t border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 sm:mb-12">
          <span className="font-mono text-xs text-[#966042] tracking-[0.25em] uppercase font-bold block mb-2 sm:mb-3">
            GALLERY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight">
            A life in view.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          <div className="lg:col-span-6 flex">
            <ShutterGalleryCard
              image={featured[0].image}
              title={featured[0].title}
              category={featured[0].category}
              onClick={() => openLightbox(0)}
              delay={0.1}
              className="w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[580px]"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6">
            <ShutterGalleryCard
              image={featured[1].image}
              title={featured[1].title}
              category={featured[1].category}
              onClick={() => openLightbox(1)}
              delay={0.3}
              className="w-full aspect-[16/10]"
            />

            <ShutterGalleryCard
              image={featured[2].image}
              title={featured[2].title}
              category={featured[2].category}
              onClick={() => openLightbox(2)}
              delay={0.5}
              className="w-full aspect-[16/10]"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6 sm:mt-8">
          <button
            onClick={() => openLightbox(0)}
            className="group cursor-pointer inline-flex items-center gap-3 px-6 py-3 bg-[#966042] text-white hover:bg-[#0F1E36] font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md"
          >
            <span>VIEW ALL GALLERY ({galleryImages.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 select-none"
          >
            <div className="flex items-center justify-between z-20 pb-4 border-b border-white/10">
              <div className="space-y-0.5">
                <span className="font-mono text-xs text-[#EFCA74] tracking-widest uppercase block font-bold">
                  GALLERY IMAGE {selectedIndex + 1} OF {galleryImages.length}
                </span>
                <h3 className="font-serif text-lg sm:text-2xl text-white font-bold">
                  {galleryImages[selectedIndex].title}
                </h3>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center py-4 px-2 sm:px-12 overflow-hidden">
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={galleryImages[selectedIndex].image}
                  alt={galleryImages[selectedIndex].title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[70vh] max-w-full object-contain shadow-2xl border border-white/10"
                />
              </AnimatePresence>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

            <div className="z-20 pt-4 border-t border-white/10 flex gap-2 sm:gap-3 overflow-x-auto justify-center pb-2 max-w-5xl mx-auto scrollbar-none">
              {galleryImages.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 border transition-all cursor-pointer overflow-hidden ${
                    idx === selectedIndex
                      ? 'border-[#EFCA74] scale-105 opacity-100'
                      : 'border-transparent opacity-40 hover:opacity-80'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
