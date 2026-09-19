import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Clock, ArrowDown } from 'lucide-react'
import EnquiryModal from '../components/common/EnquiryModal.jsx'
import exteriorImg from '../assets/7crown-exterior.jpg'
import hallImg from '../assets/Hall Image.png'
import kitchenImg from '../assets/kitchens Image.png'
import homePageImg from '../assets/home page image.png'

/**
 * ============================================================================
 * BLOG PAGE COMPONENT - SKY CONNECT NAGPUR
 * ============================================================================
 * Editorial real estate insights and lifestyle articles page for Sky Connect.
 * 
 * Key Features:
 * - Full-Bleed Dark Luxury Hero Banner with Animated Headline Entrance
 * - Alternating 2-Column Zig-Zag Storytelling Grid Layout
 * - Giant Background Watermark Numbers ('01', '02', etc.) for Visual Hierarchy
 * - Side-Triggered Scroll Entrance Animations using Framer Motion (x: -120 / x: 120)
 * - Dynamic Title-Aware Lead Enquiry Modal ('READ MORE' click triggers modal)
 * - Sharp Architectural Edges (rounded-none elements)
 * ============================================================================
 */
export default function Blog() {
  // --------------------------------------------------------------------------
  // STATE MANAGEMENT
  // --------------------------------------------------------------------------
  // Controls visibility of the lead enquiry modal
  const [modalOpen, setModalOpen] = useState(false)

  // Dynamic modal title customized based on the clicked article title
  const [modalTitle, setModalTitle] = useState("Explore Real Estate Insights")

  /**
   * Opens the enquiry modal with a custom modal title derived from the article
   * @param {string} title - Article title or default prompt string
   */
  const openModal = (title = "Enquire About Sky Connect") => {
    setModalTitle(title)
    setModalOpen(true)
  }

  // --------------------------------------------------------------------------
  // BLOG ARTICLES DATASET
  // --------------------------------------------------------------------------
  // List of editorial real estate guides, location breakdowns, and lifestyle posts
  const blogPosts = [
    {
      id: 1,
      num: '01',
      tag: 'GET STARTED',
      title: '7 Things to Consider Before Buying a Flat in Nagpur',
      desc: 'Planning to buy a flat in Nagpur? Learn about the important factors to evaluate, including location, connectivity, layout, construction quality, amenities, parking, and smart security.',
      category: 'Home Buying Guide',
      readTime: '5 min read',
      image: homePageImg
    },
    {
      id: 2,
      num: '02',
      tag: 'LOCATION & CONNECTIVITY',
      title: 'Why Location Matters When Buying a Home',
      desc: 'A well-connected location can make everyday life easier. Discover why proximity to schools, workplaces, hospitals, highways, Metro Stations, airports, and shopping destinations matters when selecting a home.',
      category: 'Location Guide',
      readTime: '4 min read',
      image: exteriorImg
    },
    {
      id: 3,
      num: '03',
      tag: 'INFRASTRUCTURE',
      title: 'Benefits of Living Near Nagpur International Airport',
      desc: 'Airport connectivity can be especially useful for professionals, frequent travellers, and families. Explore the benefits of choosing a home with convenient access to Nagpur International Airport.',
      category: 'Infrastructure',
      readTime: '4 min read',
      image: hallImg
    },
    {
      id: 4,
      num: '04',
      tag: 'MODERN LIFESTYLE',
      title: 'Modern Amenities to Look for in a New Home',
      desc: 'From EV charging and rooftop gardens to smart security and sustainable features, discover the amenities that can enhance modern residential living.',
      category: 'Amenities',
      readTime: '6 min read',
      image: kitchenImg
    },
    {
      id: 5,
      num: '05',
      tag: 'FAMILY PLANNING',
      title: 'How to Choose the Right Home Layout for Your Family',
      desc: 'Every family has different needs. Learn how factors such as space, layout, bedrooms, kitchen design, balconies, natural light, and functionality can influence your decision.',
      category: 'Lifestyle',
      readTime: '5 min read',
      image: hallImg
    },
    {
      id: 6,
      num: '06',
      tag: 'SECURITY & SMART HOMES',
      title: 'Smart Security Features in Modern Homes',
      desc: 'Security is an important part of comfortable living. Explore how CCTV surveillance, smart video doorbells, biometric access, and other modern security features support a safer residential environment.',
      category: 'Smart Living',
      readTime: '4 min read',
      image: exteriorImg
    },
    {
      id: 7,
      num: '07',
      tag: 'SUSTAINABILITY',
      title: 'Sustainable Features for Modern Homes in Nagpur',
      desc: 'Learn how features such as rainwater harvesting, EV charging, and solar-powered common areas can support more responsible and sustainable residential development.',
      category: 'Sustainability',
      readTime: '5 min read',
      image: homePageImg
    }
  ]

  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans selection:bg-[#EFCA74] selection:text-[#18181B] overflow-x-hidden">
      
      {/* ======================================================================
          SECTION 1: FULL-BLEED HERO BANNER
          ====================================================================== */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white px-6">
        
        {/* Background Image with Dark Luxury Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={homePageImg}
            alt="Sky Connect Blog Hero"
            className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-black/70" />
        </div>

        {/* Hero Content & Staggered Entrance Animations */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 my-auto pt-16">
          {/* Monospaced Gold Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-black/60 backdrop-blur-md border border-[#EFCA74]/40 text-[#EFCA74] text-xs font-mono tracking-[0.3em] uppercase font-bold rounded-none"
          >
            <Sparkles className="w-3.5 h-3.5" />
            A SKY CONNECT GUIDE
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.15] tracking-tight drop-shadow-2xl"
          >
            Be Prepared For <span className="italic font-normal text-[#EFCA74]">Modern Living</span> & Beyond!
          </motion.h1>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Read expert insights on home buying, real estate trends in Nagpur, modern amenities, construction quality, and residential lifestyle.
          </motion.p>

          {/* Scroll Down Cue Anchor Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 flex justify-center"
          >
            <a
              href="#blog-list"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#EFCA74] hover:text-white transition-colors group cursor-pointer"
            >
              SCROLL DOWN
              <ArrowDown className="w-4 h-4 text-[#EFCA74] group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 2: ZIG-ZAG ALTERNATING STORYTELLING BLOG LIST
          ====================================================================== */}
      <section id="blog-list" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-28 sm:space-y-40">
        {blogPosts.map((post, idx) => {
          // Check if article index is even to alternate column layout
          const isEven = idx % 2 === 0

          return (
            <div
              key={post.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Giant Background Watermark Number ('01', '02', etc.) */}
              <div
                className={`absolute -top-12 sm:-top-20 z-0 font-serif text-8xl sm:text-[140px] font-bold text-white/[0.04] select-none pointer-events-none ${
                  isEven ? 'left-0 sm:left-4' : 'right-0 sm:right-4'
                }`}
              >
                {post.num}
              </div>

              {/* --------------------------------------------------------------
                  LEFT COLUMN: Text Content if even, Image if odd
                  (Slides in from left for even, right for odd using Framer Motion)
                  -------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:col-span-6 relative z-10 space-y-6 ${
                  isEven ? 'order-1' : 'order-2 lg:order-1'
                }`}
              >
                {!isEven ? (
                  // Showcase Image when item is ODD (desktop left side)
                  <div className="rounded-none overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group relative">
                    <div className="h-[360px] sm:h-[460px] w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  </div>
                ) : (
                  // Article Text Content when item is EVEN (desktop left side)
                  <div className="space-y-6">
                    {/* Category Tag Line */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[2px] bg-[#EFCA74]" />
                      <span className="font-mono text-xs text-[#EFCA74] tracking-[0.3em] uppercase font-bold">
                        {post.num} / {post.tag}
                      </span>
                    </div>

                    {/* Article Headline */}
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.2] tracking-tight">
                      {post.title}
                    </h2>

                    {/* Article Summary */}
                    <p className="font-sans text-base text-zinc-400 font-light leading-relaxed max-w-xl">
                      {post.desc}
                    </p>

                    {/* Action Bar (Read More Button & Read Time Indicator) */}
                    <div className="pt-2 flex items-center gap-6">
                      <button
                        onClick={() => openModal(post.title)}
                        className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#EFCA74] hover:text-white transition-colors cursor-pointer group"
                      >
                        READ MORE
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <span className="text-xs font-mono text-zinc-600">|</span>
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#B89230]" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* --------------------------------------------------------------
                  RIGHT COLUMN: Image if even, Text Content if odd
                  (Slides in from right for even, left for odd using Framer Motion)
                  -------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 120 : -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:col-span-6 relative z-10 space-y-6 ${
                  isEven ? 'order-2' : 'order-1 lg:order-2'
                }`}
              >
                {isEven ? (
                  // Showcase Image when item is EVEN (desktop right side)
                  <div className="rounded-none overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group relative">
                    <div className="h-[360px] sm:h-[460px] w-full overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                  </div>
                ) : (
                  // Article Text Content when item is ODD (desktop right side)
                  <div className="space-y-6">
                    {/* Category Tag Line */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-[2px] bg-[#EFCA74]" />
                      <span className="font-mono text-xs text-[#EFCA74] tracking-[0.3em] uppercase font-bold">
                        {post.num} / {post.tag}
                      </span>
                    </div>

                    {/* Article Headline */}
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.2] tracking-tight">
                      {post.title}
                    </h2>

                    {/* Article Summary */}
                    <p className="font-sans text-base text-zinc-400 font-light leading-relaxed max-w-xl">
                      {post.desc}
                    </p>

                    {/* Action Bar (Read More Button & Read Time Indicator) */}
                    <div className="pt-2 flex items-center gap-6">
                      <button
                        onClick={() => openModal(post.title)}
                        className="inline-flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#EFCA74] hover:text-white transition-colors cursor-pointer group"
                      >
                        READ MORE
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <span className="text-xs font-mono text-zinc-600">|</span>
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#B89230]" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )
        })}
      </section>

      {/* ======================================================================
          SECTION 3: FINAL CALL-TO-ACTION BANNER
          ====================================================================== */}
      <section className="py-24 bg-zinc-950 text-white text-center relative border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="font-mono text-xs text-[#EFCA74] tracking-[0.25em] uppercase font-bold block">
            08 / STAY INFORMED
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight">
            Ready to Find Your New Home in Nagpur?
          </h2>
          <p className="font-sans text-base text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Explore Sky Connect's thoughtfully planned homes, modern amenities, and prime connectivity in Jaiprakash Nagar.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openModal("Enquire About Sky Connect")}
              className="px-8 py-4 bg-[#EFCA74] text-[#18181B] font-mono text-xs font-bold uppercase tracking-[0.25em] rounded-none hover:bg-[#deb45a] transition-all cursor-pointer shadow-xl"
            >
              Explore Sky Connect
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          INTERACTIVE LEAD ENQUIRY MODAL
          ====================================================================== */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  )
}
