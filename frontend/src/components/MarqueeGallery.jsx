import React from 'react'
import { motion } from 'framer-motion'

import exteriorImg from '../assets/7crown-exterior.jpg'
import livingImg from '../assets/7crown-living.png'
import kitchenImg from '../assets/7crown-kitchen.png'
import homePageImg from '../assets/home page image.png'
import locationMapImg from '../assets/location-map.png'

const galleryImages = [
  { id: 1, src: exteriorImg, alt: 'Sky Connect Exterior Architecture' },
  { id: 2, src: livingImg, alt: 'Luxury Living & Drawing Room' },
  { id: 3, src: kitchenImg, alt: 'Semi-Modular Kitchen & Balcony' },
  { id: 4, src: homePageImg, alt: 'Modern Residential Building' },
  { id: 5, src: locationMapImg, alt: 'Jaiprakash Nagar Location Matrix' }
]

// Duplicate images array 3 times to ensure a 100% seamless infinite loop
const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages]

export default function MarqueeGallery() {
  return (
    <section className="py-20 bg-[#FAF8F5] border-y border-stone-200 overflow-hidden select-none">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <span className="font-mono text-xs text-[#B89230] tracking-[0.25em] uppercase font-bold block mb-2">
          VISUAL GALLERY
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight">
          Experience the Architecture & Lifestyle
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-600 mt-3 font-normal max-w-xl mx-auto">
          Hover over the gallery to pause and explore our modern living spaces in detail.
        </p>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden flex group">
        
        {/* Soft Side Fade Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

        {/* Marquee Animation Track */}
        <motion.div
          className="flex gap-6 shrink-0 group-hover:[animation-play-state:paused]"
          animate={{
            x: ['0%', '-33.3333%']
          }}
          transition={{
            ease: 'linear',
            duration: 22,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        >
          {infiniteImages.map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className="relative shrink-0 w-[280px] sm:w-[360px] lg:w-[420px] h-[220px] sm:h-[260px] lg:h-[300px] rounded-2xl overflow-hidden shadow-xl border border-stone-300/80 bg-stone-100 group/card cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-700 filter brightness-[0.96]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="font-sans text-xs sm:text-sm font-medium text-white drop-shadow">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  )
}
