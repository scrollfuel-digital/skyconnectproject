import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Navigation,
  Plane,
  Building2,
  ShoppingBag,
  Sparkles,
  Clock,
  ExternalLink,
  Compass,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  CheckCircle2,
  Bus
} from 'lucide-react'

/**
 * ============================================================================
 * INTERACTIVE LOCATION & ACCORDION MAP COMPONENT - SKY CONNECT NAGPUR
 * ============================================================================
 * Design Features:
 * - Left Column: Clean Categorized Accordion List (Connectivity, Education, Healthcare, Lifestyle)
 *   Matching reference design layout with expandable sections, arrow indicators, and distance readout.
 * - Right Column: Architectural Vector Radar Map & Live Google Satellite Embed
 * - Interactive Synchronized Selection (Accordion Item Click -> Map Pin Highlight & Tooltip)
 * - Brand Color Palette: Clean White (#FFFFFF), Light Slate (#F8FAFC), Dark Slate (#18181B), Gold (#B89230 / #EFCA74)
 * ============================================================================
 */
export default function InteractiveLocationMap({ onEnquire }) {
  // --------------------------------------------------------------------------
  // STATE MANAGEMENT
  // --------------------------------------------------------------------------
  // Active expanded accordion category ID (defaults to 'healthcare')
  const [openCategory, setOpenCategory] = useState('healthcare')

  // Selected location item ID (defaults to 'hospital1')
  const [selectedId, setSelectedId] = useState('hospital1')

  // Map View Mode: 'custom' (Architectural Vector Radar) | 'google' (Live Google Map)
  const [mapMode, setMapMode] = useState('custom')

  // --------------------------------------------------------------------------
  // CATEGORIZED LOCATION DATASET
  // --------------------------------------------------------------------------
  const locationCategories = [
    {
      id: 'connectivity',
      title: 'Connectivity',
      items: [
        {
          id: 'metro',
          name: 'Jaiprakash Nagar Metro Station',
          distance: '0.8 Km',
          time: '2 Mins',
          icon: Navigation,
          x: 72,
          y: 36,
          description: 'Jaiprakash Nagar Metro Station provides swift rapid transit connectivity across commercial and residential hubs in Nagpur.',
          googleMapsUrl: 'https://maps.google.com/?q=Jaiprakash+Nagar+Metro+Station+Nagpur'
        },
        {
          id: 'airport',
          name: 'Nagpur International Airport',
          distance: '4.2 Km',
          time: '10 Mins',
          icon: Plane,
          x: 22,
          y: 24,
          description: 'Dr. Babasaheb Ambedkar International Airport offering rapid access for domestic & international flights.',
          googleMapsUrl: 'https://maps.google.com/?q=Nagpur+International+Airport'
        },
        {
          id: 'highway',
          name: 'Wardha Road Highway',
          distance: '0.3 Km',
          time: '1 Min',
          icon: Navigation,
          x: 52,
          y: 48,
          description: 'Direct arterial Wardha Road connectivity connecting Airport, MIHAN IT hub, and Central Nagpur.',
          googleMapsUrl: 'https://maps.google.com/?q=Wardha+Road+Nagpur'
        }
      ]
    },
    {
      id: 'education',
      title: 'Educational Institutes',
      items: [
        {
          id: 'school1',
          name: 'St. Vincent Pallotti School',
          distance: '1.2 Km',
          time: '3 Mins',
          icon: Building2,
          x: 35,
          y: 42,
          description: 'Premier K-12 educational institution located minutes from Jaiprakash Nagar.',
          googleMapsUrl: 'https://maps.google.com/?q=St+Vincent+Pallotti+School+Nagpur'
        },
        {
          id: 'college1',
          name: 'VNIT Engineering College',
          distance: '3.5 Km',
          time: '8 Mins',
          icon: Building2,
          x: 62,
          y: 26,
          description: 'National Institute of Technology campus featuring top-tier engineering & research facilities.',
          googleMapsUrl: 'https://maps.google.com/?q=VNIT+Nagpur'
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare Facilities',
      items: [
        {
          id: 'hospital1',
          name: 'KIMS Kingsway Hospital',
          distance: '1.0 Km',
          time: '3 Mins',
          icon: Building2,
          x: 32,
          y: 58,
          description: 'Multi-specialty tertiary care hospital with 24x7 emergency, trauma, and advanced ICU facilities.',
          googleMapsUrl: 'https://maps.google.com/?q=Kingsway+Hospital+Nagpur'
        },
        {
          id: 'hospital2',
          name: 'AIIMS Nagpur Hospital',
          distance: '4.5 Km',
          time: '10 Mins',
          icon: Building2,
          x: 18,
          y: 78,
          description: 'All India Institute of Medical Sciences offering world-class super-specialty healthcare services.',
          googleMapsUrl: 'https://maps.google.com/?q=AIIMS+Nagpur'
        },
        {
          id: 'hospital3',
          name: 'Orange City Hospital',
          distance: '2.4 Km',
          time: '6 Mins',
          icon: Building2,
          x: 66,
          y: 64,
          description: 'Established multi-specialty hospital and healthcare research center.',
          googleMapsUrl: 'https://maps.google.com/?q=Orange+City+Hospital+Nagpur'
        }
      ]
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle and Social',
      items: [
        {
          id: 'trends',
          name: 'Trends Shopping Mall',
          distance: '1.2 Km',
          time: '3 Mins',
          icon: ShoppingBag,
          x: 78,
          y: 74,
          description: 'Major retail hub offering top apparel brands, footwear, and everyday lifestyle shopping.',
          googleMapsUrl: 'https://maps.google.com/?q=Trends+Nagpur'
        },
        {
          id: 'westside',
          name: 'Westside Department Store',
          distance: '1.8 Km',
          time: '5 Mins',
          icon: ShoppingBag,
          x: 46,
          y: 84,
          description: 'Multi-brand shopping center for clothing, personal care, and contemporary home decor.',
          googleMapsUrl: 'https://maps.google.com/?q=Westside+Nagpur'
        },
        {
          id: 'ginger',
          name: 'Ginger Business Hotel',
          distance: '1.5 Km',
          time: '4 Mins',
          icon: Building2,
          x: 26,
          y: 70,
          description: 'Contemporary business hotel featuring modern dining, corporate suites, and guest accommodation.',
          googleMapsUrl: 'https://maps.google.com/?q=Ginger+Hotel+Nagpur'
        },
        {
          id: 'pride',
          name: 'Pride Luxury Hotel',
          distance: '2.1 Km',
          time: '6 Mins',
          icon: Building2,
          x: 82,
          y: 20,
          description: '5-star luxury hotel with fine dining, banquets, executive suites, and spa facilities.',
          googleMapsUrl: 'https://maps.google.com/?q=Pride+Hotel+Nagpur'
        }
      ]
    },
    {
      id: 'neighborhoods',
      title: 'Key Neighborhoods & Suburbs',
      items: [
        {
          id: 'malginagar',
          name: 'Malgi Nagar',
          distance: '3.8 Km',
          time: '9 Mins',
          icon: MapPin,
          x: 38,
          y: 72,
          description: 'Rapidly developing residential neighborhood in South-East Nagpur with direct Ring Road access.',
          googleMapsUrl: 'https://maps.google.com/?q=Malgi+Nagar+Nagpur'
        },
        {
          id: 'pardi',
          name: 'Pardi',
          distance: '7.5 Km',
          time: '18 Mins',
          icon: Navigation,
          x: 88,
          y: 32,
          description: 'Major eastern connectivity junction & commercial transport hub along Bhandara Road flyover.',
          googleMapsUrl: 'https://maps.google.com/?q=Pardi+Nagpur'
        },
        {
          id: 'wardhamannagar',
          name: 'Wardhaman Nagar',
          distance: '6.2 Km',
          time: '15 Mins',
          icon: Building2,
          x: 80,
          y: 45,
          description: 'Established prime commercial and residential hub in East Nagpur.',
          googleMapsUrl: 'https://maps.google.com/?q=Wardhaman+Nagar+Nagpur'
        },
        {
          id: 'nandanvan',
          name: 'Nandanvan',
          distance: '4.8 Km',
          time: '12 Mins',
          icon: Building2,
          x: 74,
          y: 54,
          description: 'Vibrant educational & residential hub housing major colleges, markets, and transit links.',
          googleMapsUrl: 'https://maps.google.com/?q=Nandanvan+Nagpur'
        },
        {
          id: 'shrikrishnanagar',
          name: 'Shrikrishna Nagar',
          distance: '4.1 Km',
          time: '10 Mins',
          icon: MapPin,
          x: 64,
          y: 68,
          description: 'Well-connected residential locality situated near Nandanvan and Manewada Road.',
          googleMapsUrl: 'https://maps.google.com/?q=Shrikrishna+Nagar+Nagpur'
        }
      ]
    }
  ]

  // Flatten all locations for map pin lookup
  const allLocations = locationCategories.flatMap((cat) => cat.items)
  const activeLoc = allLocations.find((item) => item.id === selectedId) || allLocations[0]
  const ActiveIcon = activeLoc ? activeLoc.icon : MapPin

  // Calculate trajectory angle for bus heading in degrees facing direction of travel
  const getBusAngle = (startX, startY, endX, endY) => {
    const dx = endX - startX
    const dy = endY - startY
    return Math.atan2(dy, dx) * (180 / Math.PI)
  }

  const busAngle = activeLoc ? getBusAngle(50, 50, activeLoc.x, activeLoc.y) : 0

  // Toggle category expansion
  const toggleCategory = (catId) => {
    setOpenCategory((prev) => (prev === catId ? null : catId))
  }

  return (
    <section id="location" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* ====================================================================
            LEFT COLUMN: CATEGORIZED ACCORDION LOCATION LIST
            ==================================================================== */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/10 border border-[#B89230]/40 text-[#B89230] text-xs font-mono tracking-[0.25em] uppercase font-bold rounded-none">
            <Sparkles className="w-3.5 h-3.5 text-[#B89230]" />
            PRIME LOCATION
          </div>

          {/* Main Section Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight">
            Stay Connected to What Matters
          </h2>

          {/* Intro Description Copy */}
          <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed mt-3">
            Positioned strategically in <span className="font-semibold text-slate-900">Jaiprakash Nagar, Nagpur</span>, Sky Connect brings transit, healthcare, schools, and shopping destinations within minutes of your home.
          </p>

          {/* ================= ACCORDION CATEGORIES LIST ================= */}
          <div className="border-t border-slate-200 pt-4 divide-y divide-slate-200">
            {locationCategories.map((category) => {
              const isOpen = openCategory === category.id

              return (
                <div key={category.id} className="py-3">
                  {/* Category Header Button */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between py-2 text-left group transition-colors cursor-pointer"
                  >
                    <span
                      className={`font-serif text-xl sm:text-2xl font-light transition-colors ${
                        isOpen ? 'text-[#B89230] font-normal' : 'text-[#475569] group-hover:text-[#18181B]'
                      }`}
                    >
                      {category.title}
                    </span>
                    <span className="p-1 text-[#B89230] group-hover:scale-110 transition-transform">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#B89230]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-[#B89230]" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Expanded Sub-Items List */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-2 space-y-2.5 pl-2 sm:pl-4">
                          {category.items.map((item) => {
                            const isSelected = item.id === selectedId

                            return (
                              <button
                                key={item.id}
                                onClick={() => {
                                  setSelectedId(item.id)
                                  setMapMode('custom')
                                }}
                                className={`w-full text-left py-2 px-3 rounded-none transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer border ${
                                  isSelected
                                    ? 'bg-amber-50/60 border-[#B89230]/40 text-[#18181B] shadow-xs'
                                    : 'bg-transparent border-transparent hover:bg-slate-100/60 text-[#475569]'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  {/* Triangle Arrow Bullet matching reference design */}
                                  <span className="text-[#B89230] text-xs shrink-0 select-none">►</span>
                                  <span
                                    className={`font-sans text-sm sm:text-base font-normal truncate ${
                                      isSelected ? 'text-[#18181B] font-semibold' : 'text-[#334155]'
                                    }`}
                                  >
                                    {item.name}:
                                  </span>
                                </div>

                                <span
                                  className={`font-mono text-xs sm:text-sm shrink-0 whitespace-nowrap ${
                                    isSelected ? 'text-[#B89230] font-bold' : 'text-slate-500 font-medium'
                                  }`}
                                >
                                  {item.distance}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Action CTA Button */}
          <div className="pt-4">
            <button
              onClick={() => onEnquire && onEnquire('Explore Location & Connectivity')}
              className="px-8 py-4 bg-[#B89230] text-white font-mono text-xs font-bold uppercase tracking-[0.25em] rounded-none hover:bg-[#9a7724] shadow-md inline-flex items-center gap-2 cursor-pointer transition-all"
            >
              EXPLORE FULL LOCATION PLAN
            </button>
          </div>

        </div>

        {/* ====================================================================
            RIGHT COLUMN: ARCHITECTURAL VECTOR / LIVE GOOGLE MAP CANVAS
            ==================================================================== */}
        <div className="lg:col-span-7 relative">
          
          {/* Map Outer Frame Card */}
          <div className="bg-[#0E0F12] border border-zinc-800 rounded-none shadow-2xl overflow-hidden relative min-h-[540px] sm:min-h-[600px] flex flex-col justify-between">
            
            {/* Map Header Control Toolbar */}
            <div className="bg-[#141519] border-b border-zinc-800 p-4 flex flex-wrap items-center justify-between gap-3 relative z-20">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#EFCA74]" />
                <span className="font-mono text-xs text-white uppercase tracking-[0.2em] font-bold">
                  NAGPUR LOCATION MATRIX
                </span>
              </div>

              {/* Toggle Buttons: Custom Vector Map vs Live Google Satellite Map */}
              <div className="flex items-center bg-zinc-900 border border-zinc-700/80 p-0.5 rounded-none font-mono text-[10px] uppercase font-bold tracking-wider">
                <button
                  onClick={() => setMapMode('custom')}
                  className={`px-3 py-1.5 rounded-none transition-all cursor-pointer ${
                    mapMode === 'custom'
                      ? 'bg-[#EFCA74] text-[#121212]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Architectural Map
                </button>
                <button
                  onClick={() => setMapMode('google')}
                  className={`px-3 py-1.5 rounded-none transition-all cursor-pointer ${
                    mapMode === 'google'
                      ? 'bg-[#EFCA74] text-[#121212]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Live Google Map
                </button>
              </div>
            </div>

            {/* ----------------------------------------------------------------
                MODE 1: ARCHITECTURAL VECTOR RADAR MAP
                ---------------------------------------------------------------- */}
            {mapMode === 'custom' ? (
              <div className="relative w-full flex-1 min-h-[480px] bg-[#0A0B0D] overflow-hidden select-none">
                
                {/* Architectural Grid Pattern Background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#EFCA74 1px, transparent 1px), linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)`,
                    backgroundSize: '30px 30px, 60px 60px, 60px 60px'
                  }}
                />

                {/* SVG Radial Distance Rings & Signature Google Maps Blue Route Line */}
                <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  {/* Concentric Distance Rings around Sky Connect */}
                  <circle cx="500" cy="300" r="180" fill="none" stroke="#EFCA74" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
                  <circle cx="500" cy="300" r="350" fill="none" stroke="#EFCA74" strokeWidth="1" strokeDasharray="4 4" opacity="0.18" />
                  <circle cx="500" cy="300" r="480" fill="none" stroke="#EFCA74" strokeWidth="1" strokeDasharray="4 4" opacity="0.1" />

                  {/* Ring Distance Markers */}
                  <text x="510" y="200" fill="#EFCA74" opacity="0.4" fontSize="12" fontFamily="monospace">1.5 KM</text>
                  <text x="510" y="100" fill="#EFCA74" opacity="0.3" fontSize="12" fontFamily="monospace">4.0 KM</text>

                  {/* SIGNATURE GOOGLE MAPS THICK ROYAL BLUE ROUTE LINE & BUS LOCKED STRICTLY TO THE BLUE LINE */}
                  {activeLoc && (
                    <g key={`route-group-${activeLoc.id}`}>
                      {/* Outer Blue Casing / Glow */}
                      <path
                        d={`M 500,300 L ${activeLoc.x * 10},${activeLoc.y * 6}`}
                        stroke="#1D4ED8"
                        strokeWidth="12"
                        strokeLinecap="round"
                        opacity="0.5"
                      />

                      {/* Main Royal Blue Route Line Path (Target for animateMotion) */}
                      <path
                        id={`blue-route-path-${activeLoc.id}`}
                        d={`M 500,300 L ${activeLoc.x * 10},${activeLoc.y * 6}`}
                        stroke="#2563EB"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />

                      {/* Inner Pulsing Highlight Line */}
                      <path
                        d={`M 500,300 L ${activeLoc.x * 10},${activeLoc.y * 6}`}
                        stroke="#93C5FD"
                        strokeWidth="2.5"
                        strokeDasharray="8 6"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />

                      {/* THE BUS RUNS STRICTLY AND EXCLUSIVELY ON TOP OF THIS ROYAL BLUE ROUTE LINE */}
                      <g className="pointer-events-none">
                        <animateMotion
                          href={`#blue-route-path-${activeLoc.id}`}
                          dur="3.4s"
                          repeatCount="indefinite"
                          rotate="auto"
                        />
                        
                        {/* Realistic City Bus Graphic Centered Directly On The Blue Line */}
                        <g transform="translate(-24, -10)">
                          {/* Bus Shadow */}
                          <ellipse cx="24" cy="21" rx="20" ry="2.5" fill="#000000" opacity="0.6" />

                          {/* Main Bus Body */}
                          <rect x="2" y="4" width="44" height="15" rx="4" ry="4" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.2" />

                          {/* Roof & Gold Strip */}
                          <rect x="3" y="4" width="42" height="3" fill="#991B1B" />
                          <rect x="3" y="7" width="42" height="1.5" fill="#EFCA74" />

                          {/* Windshield Glass (Facing Right = Direction of Travel along the path) */}
                          <path d="M 34 5.5 L 42 5.5 C 44 5.5 45 7 45 9 L 45 12 L 34 12 Z" fill="#38BDF8" opacity="0.95" stroke="#0284C7" strokeWidth="0.6" />

                          {/* Side Passenger Windows */}
                          <rect x="6" y="7" width="5" height="5" fill="#38BDF8" rx="1" opacity="0.85" />
                          <rect x="13" y="7" width="5" height="5" fill="#38BDF8" rx="1" opacity="0.85" />
                          <rect x="20" y="7" width="5" height="5" fill="#38BDF8" rx="1.5" opacity="0.85" />
                          <rect x="27" y="7" width="5" height="5" fill="#38BDF8" rx="1.5" opacity="0.85" />

                          {/* Wheels */}
                          <circle cx="12" cy="19" r="3.5" fill="#0F172A" stroke="#E2E8F0" strokeWidth="1" />
                          <circle cx="12" cy="19" r="1.4" fill="#94A3B8" />
                          <circle cx="36" cy="19" r="3.5" fill="#0F172A" stroke="#E2E8F0" strokeWidth="1" />
                          <circle cx="36" cy="19" r="1.4" fill="#94A3B8" />

                          {/* Headlights Beam */}
                          <polygon points="45,13 51,10 51,18 45,15" fill="#FEF08A" opacity="0.85" />
                          <circle cx="45" cy="14" r="1.2" fill="#FACC15" />

                          {/* Rear Brake Light */}
                          <rect x="2" y="12" width="1.5" height="3" fill="#EF4444" rx="0.4" />
                        </g>
                      </g>
                    </g>
                  )}
                </svg>

                {/* CENTRAL HUB: SKY CONNECT SITE MARKER */}
                <div
                  className="absolute z-20 -translate-x-12 -translate-y-12 flex flex-col items-center pointer-events-none"
                  style={{ left: '50%', top: '50%' }}
                >
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-[#EFCA74] opacity-40" />
                    <div className="w-10 h-10 rounded-none bg-[#121212] border-2 border-[#EFCA74] text-[#EFCA74] flex items-center justify-center shadow-[0_0_20px_rgba(239,202,116,0.8)]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-1 px-2.5 py-1 bg-[#121212] border border-[#EFCA74] text-[#EFCA74] font-mono text-[10px] uppercase font-bold tracking-widest whitespace-nowrap shadow-xl">
                    SKY CONNECT (SITE)
                  </div>
                </div>

                {/* LANDMARK LOCATION PINS */}
                {allLocations.map((loc) => {
                  const isSelected = loc.id === selectedId
                  const IconComp = loc.icon

                  return (
                    <div
                      key={loc.id}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
                      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    >
                      <button
                        onClick={() => setSelectedId(loc.id)}
                        className={`group relative flex items-center justify-center p-2 rounded-none transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-[#EFCA74] text-[#121212] scale-125 shadow-[0_0_25px_rgba(239,202,116,0.9)] z-30'
                            : 'bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-[#EFCA74] hover:text-[#EFCA74]'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />

                        {/* Hover Tooltip Title Tag */}
                        {!isSelected && (
                          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/90 text-white font-mono text-[9px] uppercase font-bold tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-zinc-700">
                            {loc.name}
                          </span>
                        )}
                      </button>
                    </div>
                  )
                })}

                {/* ANIMATED POPUP TOOLTIP CARD FOR SELECTED LOCATION */}
                <AnimatePresence mode="wait">
                  {activeLoc && (
                    <motion.div
                      key={activeLoc.id}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="absolute bottom-4 left-4 right-4 z-30 bg-[#141519]/95 backdrop-blur-md border border-[#EFCA74]/50 p-5 rounded-none shadow-2xl text-white space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3 border-b border-zinc-800 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-none bg-[#EFCA74] text-[#121212] flex items-center justify-center font-bold shrink-0">
                            <ActiveIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-mono text-[10px] text-[#EFCA74] tracking-[0.2em] uppercase font-bold block">
                              DESTINATION
                            </span>
                            <h3 className="font-serif text-lg font-light text-white leading-tight">
                              {activeLoc.name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-700 text-[#EFCA74] font-bold">
                            {activeLoc.distance}
                          </span>
                          <span className="px-2.5 py-1 bg-amber-500/20 text-[#EFCA74] font-bold flex items-center gap-1 border border-[#EFCA74]/30">
                            <Clock className="w-3 h-3" />
                            {activeLoc.time}
                          </span>
                        </div>
                      </div>

                      <p className="font-sans text-xs text-zinc-300 font-normal leading-relaxed">
                        {activeLoc.description}
                      </p>

                      <div className="flex items-center justify-between pt-1 font-mono text-xs">
                        <span className="text-zinc-500 text-[10px] uppercase tracking-widest flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#EFCA74]" />
                          Connected via Wardha Road
                        </span>
                        <a
                          href={activeLoc.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#EFCA74] hover:text-white font-bold tracking-wider transition-colors"
                        >
                          OPEN IN MAPS
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ) : (
              /* ----------------------------------------------------------------
                 MODE 2: LIVE GOOGLE MAP WITH DIRECTIONS ROUTE FROM SKY CONNECT
                 ---------------------------------------------------------------- */
              <div className="relative w-full flex-1 min-h-[480px] bg-zinc-900 flex flex-col">
                {/* Dynamic Route Info Header Bar */}
                <div className="bg-[#141519] border-b border-zinc-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-white z-10">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-[#EFCA74] text-[#121212] flex items-center justify-center font-bold shrink-0 shadow-xs">
                      <Navigation className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] text-[#EFCA74] tracking-widest uppercase block">
                        LIVE GOOGLE MAPS DIRECTION & ROUTE
                      </span>
                      <h4 className="font-serif text-sm font-normal text-white truncate">
                        Sky Connect <span className="text-[#EFCA74] font-mono text-xs">➔</span> {activeLoc.name}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
                    <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-700 text-[#EFCA74] font-bold">
                      {activeLoc.distance}
                    </span>
                    <span className="px-2.5 py-1 bg-amber-500/20 text-[#EFCA74] font-bold flex items-center gap-1 border border-[#EFCA74]/30">
                      <Clock className="w-3 h-3" />
                      {activeLoc.time}
                    </span>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Jaiprakash Nagar, Nagpur')}&destination=${encodeURIComponent(activeLoc.name + ', Nagpur')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-[#EFCA74] text-[#121212] font-bold hover:bg-white transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
                    >
                      <span>MAPS APP</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* ANIMATED REALISTIC BUS TRANSIT TRACKING OVERLAY BAR */}
                {activeLoc && (
                  <div className="relative w-full bg-[#0E0F12] border-b border-zinc-800 px-4 py-2 flex items-center justify-between overflow-hidden z-10">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#EFCA74] animate-pulse" />
                      <span className="hidden sm:inline">START: SKY CONNECT</span>
                    </div>

                    {/* Route Track with Animated Driving Bus */}
                    <div className="relative flex-1 mx-4 h-6 flex items-center">
                      <div className="w-full h-[2px] bg-zinc-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#EFCA74]/40 animate-pulse" />
                      </div>

                      <motion.div
                        key={`google-bus-track-${activeLoc.id}`}
                        initial={{ left: '0%', opacity: 0 }}
                        animate={{
                          left: ['0%', '90%'],
                          opacity: [0, 1, 1, 1, 0]
                        }}
                        transition={{
                          duration: 3.4,
                          repeat: Infinity,
                          repeatDelay: 0.4,
                          ease: 'easeInOut'
                        }}
                        className="absolute top-1/2 -translate-y-1/2 pointer-events-none flex items-center"
                      >
                        <svg
                          viewBox="0 0 68 34"
                          className="w-10 h-5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
                        >
                          <ellipse cx="34" cy="30" rx="30" ry="3" fill="#000000" opacity="0.6" />
                          <rect x="2" y="6" width="60" height="20" rx="5" ry="5" fill="#E11D48" stroke="#FFFFFF" strokeWidth="1.5" />
                          <rect x="4" y="6" width="56" height="4" fill="#991B1B" />
                          <rect x="4" y="10" width="56" height="2" fill="#EFCA74" />
                          <path d="M 46 8 L 57 8 C 59.5 8 61 10 61 12.5 L 61 17 L 46 17 Z" fill="#38BDF8" opacity="0.95" stroke="#0284C7" strokeWidth="0.8" />
                          <rect x="8" y="10" width="7" height="7" fill="#38BDF8" rx="1.5" opacity="0.85" />
                          <rect x="17" y="10" width="7" height="7" fill="#38BDF8" rx="1.5" opacity="0.85" />
                          <rect x="26" y="10" width="7" height="7" fill="#38BDF8" rx="1.5" opacity="0.85" />
                          <rect x="35" y="10" width="7" height="7" fill="#38BDF8" rx="1.5" opacity="0.85" />
                          <circle cx="16" cy="26" r="4.5" fill="#0F172A" stroke="#E2E8F0" strokeWidth="1.5" />
                          <circle cx="16" cy="26" r="1.8" fill="#94A3B8" />
                          <circle cx="48" cy="26" r="4.5" fill="#0F172A" stroke="#E2E8F0" strokeWidth="1.5" />
                          <circle cx="48" cy="26" r="1.8" fill="#94A3B8" />
                          <polygon points="61,18 68,14 68,24 61,20" fill="#FEF08A" opacity="0.8" />
                          <circle cx="61" cy="19" r="1.5" fill="#FACC15" />
                          <rect x="2" y="17" width="2" height="4" fill="#EF4444" rx="0.5" />
                        </svg>
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#EFCA74] font-bold shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[130px] sm:max-w-none">{activeLoc.name.toUpperCase()}</span>
                    </div>
                  </div>
                )}

                {/* Google Maps Directions Embedded iFrame */}
                <iframe
                  key={activeLoc.id}
                  title={`Directions from Sky Connect to ${activeLoc.name}`}
                  src={`https://maps.google.com/maps?saddr=${encodeURIComponent('Jaiprakash Nagar, Nagpur')}&daddr=${encodeURIComponent(activeLoc.name + ', Nagpur')}&output=embed`}
                  className="w-full flex-1 min-h-[420px] border-0 filter contrast-[1.05] brightness-95"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}

            {/* Map Footer Bar */}
            <div className="bg-[#141519] border-t border-zinc-800 px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EFCA74] animate-pulse" />
                SITE ADDRESS: 7 CROWN, JAIPRAKASH NAGAR, NAGPUR
              </span>
              <span className="hidden sm:inline text-zinc-500 uppercase tracking-widest">
                SURROUNDING CONNECTIVITY RADIUS: 5.0 KM
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
