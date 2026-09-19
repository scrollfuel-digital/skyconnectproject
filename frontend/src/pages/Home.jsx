import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  TreePine,
  Car,
  UtensilsCrossed,
  Droplets,
  ArrowUpCircle,
  Video,
  Lock,
  Zap,
  Sun,
  MapPin,
  CheckCircle2,
  Calendar,
  PhoneCall,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import CinematicIntroHero from '../components/CinematicIntroHero.jsx'
import EnquiryModal from '../components/common/EnquiryModal.jsx'
import exteriorImg from '../assets/7crown-exterior.jpg'
import hallImg from '../assets/Hall Image.png'
import kitchenImg from '../assets/kitchens Image.png'
import bedroomImg from '../assets/Bedroom Image.png'
import homePageImg from '../assets/home page image.png'
import FloorMapSection from '../components/FloorMapSection.jsx'

const lifestyleSpaces = [
  {
    title: 'Master Bedroom',
    tag: 'Ensuite Suite',
    dimension: "10'8\" × 11'4\"",
    feature: "Attached Bath & 16' Balcony",
    description: 'Serene master bedroom suite designed with elegant finishes, abundant natural light, and restful comfort.',
    image: bedroomImg,
    alt: 'Master Bedroom Suite',
    aspectRatio: '1677 / 938',
    textPosition: 'top',
  },
  {
    title: 'Semi-Modular Kitchen',
    tag: 'Utility & Cooking',
    dimension: "9'4\" × 12'5\"",
    feature: "Separate 9'9\" Utility Wash Area",
    description: 'Thoughtfully planned semi-modular kitchen equipped with ample storage, clean circulation, and utility access.',
    image: kitchenImg,
    alt: 'Semi-Modular Kitchen',
    aspectRatio: '1664 / 945',
    textPosition: 'bottom',
  },
  {
    title: 'Drawing & Living',
    tag: '3 BHK Family Space',
    dimension: "12'8\" × 25'0\"",
    feature: 'Open Lounge & Dining Area',
    description: 'Expansive drawing and living spaces designed for family gatherings, quiet evenings, and entertaining guests.',
    image: hallImg,
    alt: 'Drawing & Living Spaces',
    aspectRatio: '1661 / 947',
    textPosition: 'top',
  },
]

function FunctionalLayoutCard({ item, onEnquire }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Spring physics for buttery-smooth 60fps camera pan
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 110, damping: 20, mass: 0.3 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    // Normalized position from card center: -1 to 1
    const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    // Directional pan: moving cursor reveals the full panoramic room in that direction
    x.set(normX * 85)
    y.set(normY * 16)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const renderImage = (curvePosition) => (
    <div
      className={`relative w-full h-[385px] sm:h-[415px] lg:h-[450px] overflow-hidden bg-stone-200/50 shrink-0 ${
        curvePosition === 'top'
          ? 'rounded-t-[22px] rounded-b-[24px]'
          : 'rounded-b-[22px] rounded-t-[24px]'
      }`}
    >
      <motion.img
        src={item.image}
        alt={item.alt}
        style={{
          x: springX,
          y: springY,
          scale: isHovered ? 1.08 : 1.02,
        }}
        transition={{ scale: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } }}
        className="w-full h-full object-contain object-center will-change-transform pointer-events-none"
      />
      {/* Subtle depth vignette when hovered */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-radial from-transparent via-black/5 to-black/20" />
      </div>
    </div>
  )

  const renderContent = () => (
    <div className="p-6 sm:p-7 h-[145px] sm:h-[155px] lg:h-[160px] flex flex-col justify-center">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-[#966042] tracking-[0.2em] uppercase font-bold">
          {item.tag}
        </span>
        <span className="font-mono text-xs text-slate-700 font-semibold px-2 py-0.5 bg-white/90 border border-stone-300/70 shadow-2xs rounded">
          {item.dimension}
        </span>
      </div>
      <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-slate-900 group-hover:text-[#966042] transition-colors leading-tight">
        {item.title}
      </h3>
      <p className="font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-1.5 line-clamp-1">
        {item.feature}
      </p>
    </div>
  )

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onEnquire?.(item.title)}
      className="group cursor-pointer bg-[#F5EFE6] rounded-[24px] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E5DDD0]/70 select-none overflow-hidden h-[530px] sm:h-[570px] lg:h-[610px]"
    >
      {item.textPosition === 'top' ? (
        <>
          {renderContent()}
          {renderImage('top')}
        </>
      ) : (
        <>
          {renderImage('bottom')}
          {renderContent()}
        </>
      )}
    </div>
  )
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("Schedule a Site Visit")
  const [expandedSpec, setExpandedSpec] = useState(null)
  const specScrollRef = React.useRef(null)

  const scrollSpecs = (direction) => {
    if (specScrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340
      specScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const toggleSpec = (index) => {
    setExpandedSpec(prev => (prev === index ? null : index))
  }

  const openEnquiry = (title = "Enquire About Sky Connect") => {
    setModalTitle(title)
    setModalOpen(true)
  }

  return (
    <div className="bg-[#FAF8F5] text-[#18181B] min-h-screen font-sans selection:bg-[#EFCA74] selection:text-[#18181B] relative">
      {/* Pinned Hero Header Section */}
      <CinematicIntroHero />

      {/* Main Page Content - Scrolls UP over the Hero Header */}
      <div className="relative z-20 bg-[#FAF8F5] shadow-[0_-20px_50px_rgba(0,0,0,0.25)]">
        {/* ================= 01. LUXURY WELCOME LETTER & 3D RESIDENCE SHOWCASE (ASYMMETRICAL OVERLAPPING FRAMES) ================= */}
        <section id="main-content" className="relative w-full bg-[#FAF8F5] text-slate-800 py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-b border-stone-200 overflow-hidden">
          
          {/* Subtle Corner Ambient Depth Lighting */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#B89230]/10 via-stone-800/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#EFCA74]/10 via-stone-800/5 to-transparent rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* LEFT COLUMN (6 COLS): ARCHITECTURAL BUILDING ELEVATION (SINGLE IMAGE) */}
            <div className="lg:col-span-6 order-2 lg:order-1 pt-6 lg:pt-0 pb-6 lg:pb-0">
              <div className="relative max-w-lg sm:max-w-xl lg:max-w-none mx-auto group rounded-none overflow-hidden shadow-2xl border border-stone-200/80 bg-stone-100">
                <img
                  src={exteriorImg}
                  alt="Sky Connect 7 Crown Architectural Elevation"
                  className="w-full h-[480px] sm:h-[560px] lg:h-[640px] xl:h-[700px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* RIGHT COLUMN (6 COLS): EDITORIAL TYPOGRAPHY & CTA MATCHING REFERENCE */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              
              {/* Clean Monospaced Unboxed Eyebrow Tag */}
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#966042] uppercase block">
                01 / LUXURY RESIDENTIAL SANCTUARY
              </span>

              {/* Large Editorial Serif Title */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight">
                Crafted for Distinction in Jaiprakash Nagar.
              </h2>

              {/* Body Paragraphs */}
              <div className="space-y-4 max-w-xl">
                <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Designed for those who appreciate refined living, Sky Connect brings together contemporary architecture, meticulous engineering, and serene surroundings in the heart of Nagpur.
                </p>

                <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  Every residence is thoughtfully planned with open, light-filled living spaces, premium finishes, and modern amenities that deliver everyday comfort.
                </p>
              </div>

              {/* 3 Highlights List */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="bg-white p-3.5 border border-slate-200 shadow-sm text-center">
                  <span className="font-serif text-lg font-medium text-[#966042] block">3 BHK</span>
                  <span className="font-sans text-[10px] text-slate-500 uppercase tracking-wider block mt-0.5">Luxury Living</span>
                </div>
                <div className="bg-white p-3.5 border border-slate-200 shadow-sm text-center">
                  <span className="font-serif text-lg font-medium text-[#966042] block">Prime</span>
                  <span className="font-sans text-[10px] text-slate-500 uppercase tracking-wider block mt-0.5">JP Nagar</span>
                </div>
                <div className="bg-white p-3.5 border border-slate-200 shadow-sm text-center">
                  <span className="font-serif text-lg font-medium text-[#966042] block">100%</span>
                  <span className="font-sans text-[10px] text-slate-500 uppercase tracking-wider block mt-0.5">Vastu Compliant</span>
                </div>
              </div>

              {/* Editorial Underline CTA Link (Matching Reference Image) */}
              <div className="pt-3">
                <button
                  onClick={() => openEnquiry("Explore Sky Connect")}
                  className="group cursor-pointer inline-flex items-center gap-3 border-b-2 border-slate-900 pb-1.5 font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-slate-900 hover:text-[#966042] hover:border-[#966042] transition-colors"
                >
                  <span>EXPLORE SKY CONNECT</span>
                  <ArrowRight className="w-4 h-4 text-slate-900 group-hover:text-[#966042] group-hover:translate-x-1.5 transition-all" />
                </button>
              </div>

            </div>

          </div>

        </section>

        {/* ================= FUNCTIONAL LAYOUTS ================= */}
        <section id="layouts" className="py-20 lg:py-28 bg-[#FBF8F3] border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header: Our Original Title, Eyebrow & Description with VIEW ALL CTA */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 border-b border-slate-200/80 pb-8">
              <div className="max-w-2xl">
                <span className="font-mono text-xs text-[#966042] tracking-[0.25em] uppercase font-bold block mb-2">
                  FUNCTIONAL LAYOUTS
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight">
                  A Home Designed Around Your Lifestyle
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-light">
                  A well-designed home should make everyday life comfortable, practical, and enjoyable. Sky Connect features thoughtfully planned living spaces, semi-modular kitchens, utility areas, and private balconies.
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => openEnquiry("Explore All Layouts")}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3E372A] text-[#FAF6F0] hover:bg-[#966042] font-mono text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 shadow-sm hover:shadow cursor-pointer"
                >
                  <span>VIEW ALL</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FAF6F0] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 3-Card Alternating Layout Grid in Reference Format Shape with Interactive Cursor-Directed Video Pan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
              {lifestyleSpaces.map((item, index) => (
                <FunctionalLayoutCard
                  key={index}
                  item={item}
                  onEnquire={openEnquiry}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ================= QUALITY SPECIFICATIONS (HORIZONTAL SCROLLING 4-CARD ROW) ================= */}
        <section id="specifications" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Title and Scroll Arrows */}
          <div className="mb-10 lg:mb-12">
            <span className="font-mono text-xs text-[#966042] tracking-[0.25em] uppercase font-bold block mb-3">
              02 / SPECIFICATIONS
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight">
                  Contemporary Design. Thoughtful Details.
                </h2>
                <p className="font-sans text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-light leading-relaxed">
                  Attention to detail extends from overall structural engineering to everyday fittings and finishes. Click any arrow to reveal technical specifications.
                </p>
              </div>

              {/* Scroll Navigation Controls */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => scrollSpecs('left')}
                  aria-label="Scroll left"
                  className="p-3 border border-slate-300 hover:border-[#966042] hover:text-[#966042] text-slate-700 bg-white shadow-sm transition-colors cursor-pointer group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => scrollSpecs('right')}
                  aria-label="Scroll right"
                  className="p-3 border border-slate-300 hover:border-[#966042] hover:text-[#966042] text-slate-700 bg-white shadow-sm transition-colors cursor-pointer group"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Scrollable Row (4 Cards Per Screen View on Desktop) */}
          <div
            ref={specScrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 snap-x snap-mandatory"
          >
            {[
              {
                code: '01',
                title: 'RCC-Framed Structure',
                subtitle: 'STRUCTURE & SEISMIC',
                desc: 'Engineered for maximum structural stability and earthquake resistance.',
                icon: Building2,
                points: [
                  'IS-code compliant earthquake resistant design',
                  'High-strength M25/M30 concrete mix',
                  'Heavy-gauge steel column & beam framework',
                  'Engineered foundation for high durability'
                ]
              },
              {
                code: '02',
                title: 'Red Brick Walls',
                subtitle: 'MASONRY & INSULATION',
                desc: 'Provides superior thermal insulation and long-lasting wall strength.',
                icon: ShieldCheck,
                points: [
                  'First-class red clay brick construction',
                  'Enhanced acoustic isolation between rooms',
                  'Smooth internal plaster finish',
                  'Weather-resistant external protective coat'
                ]
              },
              {
                code: '03',
                title: 'UPVC Sliding Windows',
                subtitle: 'WINDOWS & VENTILATION',
                desc: 'Smooth sliding UPVC windows with noise reduction and weather sealing.',
                icon: CheckCircle2,
                points: [
                  'Heavy-section UPVC frames with clear glass',
                  'Integrated stainless steel mosquito mesh track',
                  'Acoustic insulation against city noise',
                  'Monsoon weather-tight rubber gaskets'
                ]
              },
              {
                code: '04',
                title: 'Decorative Main Door',
                subtitle: 'DOORS & SECURITY',
                desc: 'Smart biometric lock provision for modern keyless security.',
                icon: Lock,
                points: [
                  'Teakwood frame with elegant designer veneer finish',
                  'Provision for smart digital biometric lock',
                  'Heavy-duty brass hinges and fittings',
                  'Wide-angle door optical viewer'
                ]
              },
              {
                code: '05',
                title: 'Premium Sanitary Ware',
                subtitle: 'PLUMBING & FITTINGS',
                desc: 'Top-tier branded sanitary fixtures and concealed plumbing fittings.',
                icon: Droplets,
                points: [
                  'Branded Kohler / Jaquar sanitaryware & CP fittings',
                  'Concealed wall-hung diverters & overhead shower',
                  'Anti-cockroach floor traps in all bathrooms',
                  'Dual-flush water-saving cisterns'
                ]
              },
              {
                code: '06',
                title: 'Concealed Copper Wiring',
                subtitle: 'ELECTRICAL & POWER',
                desc: 'Fire-resistant concealed copper electrical wiring with modular switches.',
                icon: Zap,
                points: [
                  'Finolex / Havells flame-retardant copper wiring',
                  'Modular touch switches with AC & TV points',
                  'MCB distribution board with ELCB safety protection',
                  'Inverter wiring provision in every flat'
                ]
              },
              {
                code: '07',
                title: 'Solar Water Heating',
                subtitle: 'ECO ENERGY SYSTEM',
                desc: 'Rooftop solar water heating grid connected to master bathrooms.',
                icon: Sun,
                points: [
                  'Centralized rooftop solar collector grid',
                  '24x7 hot water supply to master bathrooms',
                  'Significant monthly energy cost savings',
                  'Eco-friendly green building standard'
                ]
              },
              {
                code: '08',
                title: 'EV Charging & Backup',
                subtitle: 'INFRASTRUCTURE',
                desc: 'Dedicated EV charging points and 100% generator power backup.',
                icon: Car,
                points: [
                  'EV charging infrastructure point in parking',
                  'Automatic DG power backup for lifts & pumps',
                  'Emergency common area lighting backup',
                  '24/7 CCTV surveillance grid'
                ]
              }
            ].map((spec, i) => {
              const SpecIcon = spec.icon || CheckCircle2
              const isExpanded = expandedSpec === i

              return (
                <div
                  key={i}
                  className={`min-w-[280px] sm:min-w-[320px] lg:min-w-[calc(25%-1.125rem)] w-[calc(25%-1.125rem)] shrink-0 snap-start bg-white border ${
                    isExpanded ? 'border-[#966042] ring-1 ring-[#966042]/20' : 'border-slate-200/90'
                  } p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group relative`}
                >
                  {/* Top Card Row: Code, Icon & Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs font-bold text-[#966042] tracking-wider">
                        {spec.code}
                      </span>
                      <div className="w-10 h-10 rounded-none bg-stone-100 border border-slate-200/80 flex items-center justify-center text-[#966042] group-hover:bg-[#966042] group-hover:text-white transition-colors duration-300">
                        <SpecIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="font-mono text-[10px] text-slate-500 tracking-[0.2em] uppercase font-semibold block mb-1.5">
                      {spec.subtitle}
                    </span>

                    <h3 className="font-serif text-xl sm:text-2xl font-light text-slate-900 group-hover:text-[#966042] transition-colors leading-snug">
                      {spec.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-2.5">
                      {spec.desc}
                    </p>
                  </div>

                  {/* Interactive Expandable Bullet Points Section */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    
                    {/* Arrow Button to Toggle Points */}
                    <button
                      onClick={() => toggleSpec(i)}
                      className="w-full flex items-center justify-between text-xs font-mono font-semibold tracking-wider uppercase text-slate-900 hover:text-[#966042] transition-colors cursor-pointer group/btn"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Key Points'}</span>
                      <div
                        className={`w-7 h-7 border border-slate-200 rounded-full flex items-center justify-center transition-all ${
                          isExpanded
                            ? 'rotate-90 bg-[#966042] text-white border-[#966042]'
                            : 'bg-stone-50 text-slate-700 group-hover/btn:bg-[#966042] group-hover/btn:text-white group-hover/btn:border-[#966042]'
                        }`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    {/* Bullet Points revealed when arrow is clicked */}
                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-stone-200/80 space-y-2 animate-fadeIn">
                        <span className="font-mono text-[10px] text-[#966042] uppercase tracking-widest block font-bold">
                          KEY FEATURES
                        </span>
                        <ul className="space-y-2 text-xs text-slate-600 font-sans font-normal">
                          {spec.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#966042] shrink-0 mt-0.5" />
                              <span className="leading-snug">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                </div>
              )
            })}
          </div>
        </section>

        {/* ================= PINNED AMENITIES SHOWCASE & BOTTOM-RIGHT EXPANDING FLOOR MAP ================= */}
        <FloorMapSection onEnquire={openEnquiry}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col justify-center">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="font-mono text-xs text-[#B89230] tracking-[0.25em] uppercase font-bold block mb-2">
                AMENITIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-slate-900 leading-[1.1] tracking-tight">
                Amenities That Make Everyday Living Better
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 font-light leading-relaxed max-w-xl mx-auto">
                Modern living is about more than four walls. It is about having the right facilities close to home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Category 1: Lifestyle & Convenience */}
              <div className="uiverse-card p-6 sm:p-7 h-[250px] text-white group">
                <div className="uiverse-card-border" />
                <div className="uiverse-card-bottom-text">SKY CONNECT • LIFESTYLE</div>
                
                <div className="flex items-center gap-3 relative z-10 shrink-0">
                  <div className="w-10 h-10 rounded-none bg-[#18181B] border border-[#EFCA74]/40 text-[#EFCA74] flex items-center justify-center shadow-md shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-light text-white tracking-wide">Lifestyle & Convenience</h3>
                </div>
                
                <ul className="uiverse-card-list space-y-2.5 font-sans text-xs sm:text-sm text-slate-200 font-normal relative z-10 mt-3 pr-1">
                  <li className="flex items-center gap-2.5"><TreePine className="w-4 h-4 text-[#EFCA74] shrink-0" /> Rooftop Garden</li>
                  <li className="flex items-center gap-2.5"><Car className="w-4 h-4 text-[#EFCA74] shrink-0" /> Individual Covered Parking</li>
                  <li className="flex items-center gap-2.5"><UtensilsCrossed className="w-4 h-4 text-[#EFCA74] shrink-0" /> Semi-Modular Kitchen</li>
                  <li className="flex items-center gap-2.5"><Droplets className="w-4 h-4 text-[#EFCA74] shrink-0" /> 24×7 Water Supply</li>
                  <li className="flex items-center gap-2.5"><Building2 className="w-4 h-4 text-[#EFCA74] shrink-0" /> Park-Facing Homes</li>
                  <li className="flex items-center gap-2.5"><ArrowUpCircle className="w-4 h-4 text-[#EFCA74] shrink-0" /> Lift Access to Rooftop</li>
                </ul>
              </div>

              {/* Category 2: Smart & Secure Living */}
              <div className="uiverse-card p-6 sm:p-7 h-[250px] text-white group">
                <div className="uiverse-card-border" />
                <div className="uiverse-card-bottom-text">SKY CONNECT • SECURITY</div>

                <div className="flex items-center gap-3 relative z-10 shrink-0">
                  <div className="w-10 h-10 rounded-none bg-[#18181B] border border-[#EFCA74]/40 text-[#EFCA74] flex items-center justify-center shadow-md shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-light text-white tracking-wide">Smart & Secure Living</h3>
                </div>
                
                <ul className="uiverse-card-list space-y-2.5 font-sans text-xs sm:text-sm text-slate-200 font-normal relative z-10 mt-3 pr-1">
                  <li className="flex items-center gap-2.5"><Video className="w-4 h-4 text-[#EFCA74] shrink-0" /> 24×7 CCTV Surveillance</li>
                  <li className="flex items-center gap-2.5"><Video className="w-4 h-4 text-[#EFCA74] shrink-0" /> Smart Video Doorbell</li>
                  <li className="flex items-center gap-2.5"><Lock className="w-4 h-4 text-[#EFCA74] shrink-0" /> Smart Biometric Lock Provision</li>
                  <li className="flex items-center gap-2.5"><ArrowUpCircle className="w-4 h-4 text-[#EFCA74] shrink-0" /> Lift with ARD System</li>
                </ul>
              </div>

              {/* Category 3: Sustainable Living Features */}
              <div className="uiverse-card p-6 sm:p-7 h-[250px] text-white group">
                <div className="uiverse-card-border" />
                <div className="uiverse-card-bottom-text">SKY CONNECT • SUSTAINABLE</div>

                <div className="flex items-center gap-3 relative z-10 shrink-0">
                  <div className="w-10 h-10 rounded-none bg-[#18181B] border border-[#EFCA74]/40 text-[#EFCA74] flex items-center justify-center shadow-md shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-light text-white tracking-wide">Sustainable Living</h3>
                </div>
                
                <ul className="uiverse-card-list space-y-2.5 font-sans text-xs sm:text-sm text-slate-200 font-normal relative z-10 mt-3 pr-1">
                  <li className="flex items-center gap-2.5"><Zap className="w-4 h-4 text-[#EFCA74] shrink-0" /> EV Charging Provision</li>
                  <li className="flex items-center gap-2.5"><Droplets className="w-4 h-4 text-[#EFCA74] shrink-0" /> Rainwater Harvesting System</li>
                  <li className="flex items-center gap-2.5"><Sun className="w-4 h-4 text-[#EFCA74] shrink-0" /> Solar-Powered Common Areas</li>
                </ul>
              </div>

            </div>
          </div>
        </FloorMapSection>

        {/* ================= FINAL CTA BANNER ================= */}
        <section className="py-20 bg-[#FAF8F5] border-t border-slate-200 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <span className="font-mono text-xs text-[#B89230] tracking-[0.25em] uppercase font-bold block">
              YOUR NEW HOME AWAITS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight">
              Your New Home Could Be at Sky Connect
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 mt-3 font-light leading-relaxed max-w-2xl mx-auto">
              A comfortable home is where thoughtful design, everyday convenience, and a well-connected location come together. Discover Sky Connect today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => openEnquiry("Enquire Now")}
                className="px-8 py-4 bg-[#B89230] text-white font-mono text-xs font-bold uppercase tracking-[0.25em] rounded-none hover:bg-[#9a7724] transition-all cursor-pointer shadow-md"
              >
                Enquire Now
              </button>
              <button
                onClick={() => openEnquiry("Schedule a Site Visit")}
                className="px-8 py-4 bg-white border border-slate-300 text-slate-800 font-mono text-xs font-bold uppercase tracking-[0.25em] rounded-none hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#B89230]" />
                Schedule a Site Visit
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* Interactive Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  )
}
