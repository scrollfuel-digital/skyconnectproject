import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Plane,
  Train,
  Building2,
  ShoppingBag,
  Hotel,
  Navigation,
  ExternalLink,
  Clock
} from 'lucide-react'

const destinations = [
  {
    id: 'jp-metro',
    name: 'Metro Station (Jaiprakash Nagar)',
    shortName: 'Jaiprakash Nagar Metro',
    time: '3 Min',
    category: 'Transit',
    icon: Train,
    mapQuery: 'Jaiprakash+Nagar+Metro+Station+Wardha+Road+Nagpur',
    description: 'Direct Aqua Line metro station outside project connecting Sitabuldi & Airport.'
  },
  {
    id: 'ginger-hotel',
    name: 'Ginger Hotel',
    shortName: 'Ginger Hotel',
    time: '2 Min',
    category: 'Hotels',
    icon: Hotel,
    mapQuery: 'Ginger+Hotel+Wardha+Road+Nagpur',
    description: 'Premier business hotel located right along the Wardha Road commercial hub.'
  },
  {
    id: 'trends-westside',
    name: 'Trends & Westside Mall',
    shortName: 'Trends & Westside',
    time: '2 Min',
    category: 'Shopping',
    icon: ShoppingBag,
    mapQuery: 'Trends+Westside+Wardha+Road+Nagpur',
    description: 'High-street fashion & lifestyle retail stores within 2 minutes walk.'
  },
  {
    id: 'chatrapati-sq',
    name: 'Chatrapati Square',
    shortName: 'Chatrapati Square',
    time: '2 Min',
    category: 'Landmark',
    icon: Building2,
    mapQuery: 'Chatrapati+Square+Wardha+Road+Nagpur',
    description: 'Major arterial junction connecting Ring Road and Wardha Road.'
  },
  {
    id: 'hotel-pride',
    name: 'Pride Hotel & Banquet',
    shortName: 'Pride Hotel',
    time: '3 Min',
    category: 'Hotels',
    icon: Hotel,
    mapQuery: 'The+Pride+Hotel+Nagpur+Wardha+Road',
    description: '4-Star luxury hotel and banquet venue near airport corridor.'
  },
  {
    id: 'radisson',
    name: 'Radisson Blu 5-Star Hotel',
    shortName: 'Radisson Blu',
    time: '4 Min',
    category: 'Hotels',
    icon: Hotel,
    mapQuery: 'Radisson+Blu+Hotel+Nagpur',
    description: '5-Star luxury hotel, dining, and convention center.'
  },
  {
    id: 'airport',
    name: 'International Airport',
    shortName: 'Nagpur Airport',
    time: '5 Min',
    category: 'Transit',
    icon: Plane,
    mapQuery: 'Dr+Babasaheb+Ambedkar+International+Airport+Nagpur',
    description: 'Dr. Babasaheb Ambedkar International Airport offering domestic & international flights.'
  }
]

const categories = ['All', 'Transit', 'Hotels', 'Shopping', 'Landmark']

export default function LocationSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedDest, setSelectedDest] = useState(destinations[0])
  const [mapType, setMapType] = useState('roadmap')

  const filteredDestinations = activeCategory === 'All'
    ? destinations
    : destinations.filter(d => d.category === activeCategory)

  const query = selectedDest?.mapQuery || 'Jaiprakash+Nagar+Wardha+Road+Nagpur'

  const mapEmbedUrl = mapType === 'satellite'
    ? `https://maps.google.com/maps?q=${query}&t=k&z=16&ie=UTF8&iwloc=&output=embed`
    : `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF8F5] text-slate-900 relative overflow-hidden border-t border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-10 sm:mb-12 items-end border-b border-stone-300/80 pb-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#966042] uppercase block">
              CONNECTIVITY & LOCATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight">
              Prime Jaiprakash Nagar Address
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-800 font-normal leading-relaxed max-w-2xl">
              Strategically positioned along Wardha Road with direct metro access, high-street retail, and 5 minutes to Nagpur International Airport.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href={`https://maps.google.com/?q=${query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer inline-flex items-center gap-3 px-6 py-3.5 bg-[#966042] text-white hover:bg-[#0F1E36] font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-md rounded-none"
            >
              <span>GET DIRECTIONS</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* MAIN 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white p-3 border border-stone-300 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#966042]" />
                <span className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Sky Connect • {selectedDest?.shortName || 'Jaiprakash Nagar'}
                </span>
              </div>

              <div className="flex items-center bg-stone-100 p-1 border border-stone-200">
                <button
                  onClick={() => setMapType('roadmap')}
                  className={`px-3 py-1 text-[11px] font-mono font-bold transition-colors cursor-pointer ${
                    mapType === 'roadmap'
                      ? 'bg-[#18181B] text-[#EFCA74]'
                      : 'text-slate-600 hover:text-black'
                  }`}
                >
                  Road Map
                </button>
                <button
                  onClick={() => setMapType('satellite')}
                  className={`px-3 py-1 text-[11px] font-mono font-bold transition-colors cursor-pointer ${
                    mapType === 'satellite'
                      ? 'bg-[#18181B] text-[#EFCA74]'
                      : 'text-slate-600 hover:text-black'
                  }`}
                >
                  Satellite
                </button>
              </div>
            </div>

            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] bg-stone-200 border border-stone-300 shadow-xl overflow-hidden group">
              <iframe
                key={selectedDest?.id + mapType}
                title={`Sky Connect Map - ${selectedDest?.name}`}
                src={mapEmbedUrl}
                className="w-full h-full border-0 filter saturate-[0.95]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#18181B]/95 backdrop-blur-md text-white p-3.5 border border-[#EFCA74]/40 shadow-2xl flex items-center gap-3">
                <Navigation className="w-5 h-5 text-[#EFCA74] shrink-0" />
                <div>
                  <span className="font-mono text-[10px] text-[#EFCA74] font-bold uppercase tracking-widest block">
                    LOCATION HIGHLIGHT • {selectedDest?.time} AWAY
                  </span>
                  <p className="font-serif text-xs sm:text-sm text-stone-200 mt-0.5 font-semibold">
                    {selectedDest?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sleek Executive Destination Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 h-full">
            
            {/* Header & Category Filter Pills */}
            <div className="space-y-3 shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-xs font-bold text-[#966042] tracking-[0.25em] uppercase">
                  DISTANCES THAT CONNECT
                </h3>
                <span className="font-mono text-[11px] text-slate-500 font-medium bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200">
                  {filteredDestinations.length} Key Hubs
                </span>
              </div>

              {/* Soft Rounded Filter Pills */}
              <div className="flex items-center gap-2 flex-wrap pt-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#966042] text-white shadow-sm font-semibold'
                        : 'bg-white text-slate-700 border border-stone-200 hover:border-[#966042] hover:text-[#966042]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* List of Destinations with Y Scroller aligned with map height */}
            <div className="space-y-3 max-h-[350px] sm:max-h-[395px] overflow-y-auto pr-2 [scrollbar-width:thin] [scrollbar-color:#966042_transparent]">
              {filteredDestinations.map((dest) => {
                const isSelected = selectedDest?.id === dest.id
                const DestIcon = dest.icon

                return (
                  <div
                    key={dest.id}
                    onClick={() => setSelectedDest(dest)}
                    className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? 'bg-white text-slate-900 border-[#966042] shadow-md ring-1 ring-[#966042]/20'
                        : 'bg-white/90 text-slate-800 border-stone-200/80 hover:border-[#966042]/50 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#966042] text-white shadow-xs'
                          : 'bg-[#FAF7F2] text-[#966042] border border-stone-200 group-hover:bg-[#966042] group-hover:text-white'
                      }`}>
                        <DestIcon className="w-4 h-4" />
                      </div>
                      
                      <div className="min-w-0">
                        <h4 className={`font-serif text-sm font-semibold truncate transition-colors ${
                          isSelected ? 'text-slate-900' : 'text-slate-800 group-hover:text-[#966042]'
                        }`}>
                          {dest.shortName}
                        </h4>
                        <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mt-0.5">
                          {dest.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className={`font-mono text-xs font-bold tracking-wider px-3 py-1 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#966042] text-white shadow-xs'
                          : 'bg-[#FAF7F2] text-[#966042] border border-[#966042]/30 group-hover:bg-[#966042] group-hover:text-white'
                      }`}>
                        {dest.time}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Strategic Summary Highlight Card */}
            <div className="p-3.5 bg-white rounded-xl border border-stone-200/90 flex items-start gap-3 shadow-xs shrink-0">
              <Clock className="w-4 h-4 text-[#966042] shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-slate-700 leading-relaxed font-normal">
                <strong className="text-slate-900 font-semibold">Selected Hub:</strong> {selectedDest?.name} ({selectedDest?.time} away). {selectedDest?.description}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
