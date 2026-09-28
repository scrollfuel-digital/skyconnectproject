import React from 'react'
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
  Droplets
} from 'lucide-react'

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
        {specs.map((spec, i) => {
          const SpecIcon = spec.icon
          const isEven = i % 2 === 0
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: (i % 6) * 0.06,
                type: 'spring',
                stiffness: 90,
                damping: 14
              }}
              whileHover={{
                y: -8,
                scale: 1.04,
                transition: { duration: 0.25, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.97 }}
              className="relative bg-white border border-stone-300/90 p-4 sm:p-5 rounded-none flex flex-col items-center justify-center text-center shadow-xs hover:shadow-xl hover:border-[#966042] transition-all duration-300 group min-h-[130px] sm:min-h-[150px] overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#966042] group-hover:w-full transition-all duration-300" />

              <div className="w-10 h-10 sm:w-11 sm:h-11 mb-2 sm:mb-3 flex items-center justify-center text-[#966042] group-hover:scale-110 transition-transform duration-300">
                <SpecIcon className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.4]" />
              </div>
              <h3 className="font-sans text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0F1E36] tracking-wide leading-snug transition-colors duration-300">
                {spec.title}
              </h3>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}
