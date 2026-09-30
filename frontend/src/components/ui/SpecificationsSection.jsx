import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  UtensilsCrossed,
  Car,
  Video,
  TreePine,
  Sun,
  Zap,
  ShieldCheck,
  ArrowUpCircle,
  Droplets,
  Sofa
} from 'lucide-react'

function AnimatedIcon({ title, icon: IconComponent, isHovered }) {
  let hoverAnimation = { scale: [1, 1.15, 1], transition: { repeat: Infinity, duration: 1.2 } }

  if (title.includes('Parking')) {
    // Car running back and forth on hover
    hoverAnimation = {
      x: [-8, 8, -8],
      y: [0, -1, 0, -1, 0],
      transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' }
    }
  } else if (title.includes('POP Finish')) {
    // Sparkle twinkling & rotating on hover
    hoverAnimation = {
      rotate: [0, 20, -20, 0],
      scale: [1, 1.25, 0.9, 1],
      transition: { repeat: Infinity, duration: 1.4, ease: 'easeInOut' }
    }
  } else if (title.includes('Kitchen')) {
    // Utensils tilting on hover
    hoverAnimation = {
      rotate: [-12, 12, -12],
      y: [0, -3, 0],
      transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' }
    }
  } else if (title.includes('Door Bell')) {
    // Video camera pulse on hover
    hoverAnimation = {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: { repeat: Infinity, duration: 0.9, ease: 'easeInOut' }
    }
  } else if (title.includes('Park-Facing')) {
    // Tree swaying on hover
    hoverAnimation = {
      rotate: [-8, 8, -8],
      skewX: [-4, 4, -4],
      transition: { repeat: Infinity, duration: 1.6, ease: 'easeInOut' }
    }
  } else if (title.includes('Solar')) {
    // Sun spinning on hover
    hoverAnimation = {
      rotate: [0, 360],
      transition: { repeat: Infinity, duration: 3, ease: 'linear' }
    }
  } else if (title.includes('EV Charging')) {
    // Lightning pulse flash on hover
    hoverAnimation = {
      scale: [1, 1.3, 0.85, 1.2, 1],
      y: [-2, 2, -2],
      transition: { repeat: Infinity, duration: 0.8, ease: 'easeInOut' }
    }
  } else if (title.includes('CCTV')) {
    // Security scanner pulse on hover
    hoverAnimation = {
      scale: [1, 1.15, 1],
      rotate: [-6, 6, -6],
      transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' }
    }
  } else if (title.includes('Lift Access')) {
    // Elevator rising and descending on hover
    hoverAnimation = {
      y: [6, -6, 6],
      transition: { repeat: Infinity, duration: 1.1, ease: 'easeInOut' }
    }
  } else if (title.includes('Rainwater') || title.includes('Water Supply')) {
    // Water droplet dripping / flow ONLY on hover
    hoverAnimation = {
      y: [-4, 6, -4],
      scale: [0.9, 1.15, 0.9],
      transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' }
    }
  } else if (title.includes('Terrace Sitout')) {
    // Relaxing gentle bounce on hover
    hoverAnimation = {
      y: [-3, 3, -3],
      scale: [1, 1.1, 1],
      transition: { repeat: Infinity, duration: 1.4, ease: 'easeInOut' }
    }
  }

  const staticState = { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, skewX: 0 }

  return (
    <motion.div
      animate={isHovered ? hoverAnimation : staticState}
      transition={isHovered ? hoverAnimation.transition : { duration: 0.25, ease: 'easeOut' }}
      className="inline-flex items-center justify-center"
    >
      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.4]" />
    </motion.div>
  )
}

function SpecCard({ spec, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.4,
        delay: (index % 6) * 0.05,
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white p-4 sm:p-5 rounded-none flex flex-col items-center justify-center text-center shadow-xs hover:shadow-xl transition-all duration-300 group min-h-[130px] sm:min-h-[150px] overflow-hidden cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#966042] group-hover:w-full transition-all duration-300" />

      <div className="w-10 h-10 sm:w-11 sm:h-11 mb-2 sm:mb-3 flex items-center justify-center text-[#966042] transition-transform duration-300">
        <AnimatedIcon title={spec.title} icon={spec.icon} isHovered={isHovered} />
      </div>
      <h3 className="font-sans text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0F1E36] tracking-wide leading-snug transition-colors duration-300">
        {spec.title}
      </h3>
    </motion.div>
  )
}

export default function SpecificationsSection() {
  const specs = [
    { title: 'Premium POP Finish', icon: Sparkles },
    { title: 'Semi-Modular Kitchen', icon: UtensilsCrossed },
    { title: 'Individual Covered Parking', icon: Car },
    { title: 'Smart Video Door Bell', icon: Video },
    { title: 'Park-Facing Homes', icon: TreePine },
    { title: 'Solar Powered Common Areas', icon: Sun },
    { title: 'EV Charging', icon: Zap },
    { title: '24×7 CCTV Surveillance', icon: ShieldCheck },
    { title: 'Lift Access to Rooftop', icon: ArrowUpCircle },
    { title: 'Rainwater Harvesting System', icon: Droplets },
    { title: '24×7 Water Supply', icon: Droplets },
    { title: 'Terrace Sitout', icon: Sofa },
  ]

  return (
    <section id="specifications" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#FAF8F5]">
      
      <div className="mb-8 border-b border-stone-300/80 pb-6 max-w-3xl mx-auto text-center">
        <span className="font-mono text-xs text-[#966042] tracking-[0.25em] uppercase font-bold block mb-2">
          SPECIFICATIONS
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
          Thoughtful Details.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
        {specs.map((spec, i) => (
          <SpecCard key={i} spec={spec} index={i} />
        ))}
      </div>

    </section>
  )
}
