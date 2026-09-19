import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Phone,
  Menu as MenuIcon,
  X,
  ArrowRight
} from 'lucide-react'
import logo from '../../assets/Untitled logo.png'
import EnquiryModal from '../common/EnquiryModal.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Auto-hide on scroll down, reveal on scroll back up with smooth accumulator
  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0
    let accumulatedDown = 0
    let accumulatedUp = 0
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = Math.max(0, window.pageYOffset || document.documentElement.scrollTop || 0)
      const diff = currentScrollY - lastScrollY

      // Check scrolled state for dark background
      const section1 = document.getElementById('main-content')
      if (section1) {
        const rect = section1.getBoundingClientRect()
        setIsScrolled(rect.top <= 120)
      } else {
        setIsScrolled(currentScrollY > 50)
      }

      // Auto-hide when scrolling down, reveal when scrolling back up
      if (currentScrollY <= 30) {
        // Near the top -> always show
        setIsVisible(true)
        accumulatedDown = 0
        accumulatedUp = 0
      } else if (diff > 0) {
        // Scrolling DOWN
        accumulatedUp = 0
        accumulatedDown += diff
        if (accumulatedDown > 10 && currentScrollY > 60) {
          setIsVisible(false)
        }
      } else if (diff < 0) {
        // Scrolling BACK UP
        accumulatedDown = 0
        accumulatedUp += Math.abs(diff)
        if (accumulatedUp > 5) {
          setIsVisible(true)
        }
      }

      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('touchmove', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchmove', onScroll)
    }
  }, [location.pathname])

  return (
    <>
      {/* ======================================================================
          STICKY / FIXED LUXURY NAVBAR (AUTO-HIDE ON SCROLL DOWN, REVEAL ON SCROLL UP)
          ====================================================================== */}
      <header
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, background-color 0.3s ease, padding 0.3s ease'
        }}
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 lg:px-12 ${
          isScrolled
            ? 'bg-[#18181B]/95 backdrop-blur-xl border-b border-[#966042]/30 shadow-[0_4px_20px_rgba(0,0,0,0.35)] py-2 sm:py-2.5'
            : 'bg-transparent py-2.5 sm:py-3.5'
        }`}
      >
        {/* ONE MAIN DIV (FLEX BETWEEN LOGO DIV AND NAVBAR DIV) */}
        <div className="w-full flex items-center justify-between relative px-2 sm:px-4">
          
          {/* DIV FOR LOGO */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2 group transition-all duration-300">
              <img
                src={logo}
                alt="Sky Connect Nagpur"
                className="h-[52px] sm:h-[60px] lg:h-[72px] xl:h-[82px] w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>

          {/* DIV FOR NAVBAR */}
          <div className="flex items-center gap-4 sm:gap-6 xl:gap-8">
            
            <nav className="hidden lg:flex items-center gap-6 sm:gap-8 xl:gap-10 font-sans text-base lg:text-[17px] xl:text-[18px] font-medium tracking-wide">
              <NavLink to="/about" className="group cursor-pointer">
                {({ isActive }) => (
                  <div className="relative overflow-hidden h-7 leading-7">
                    <p className={`group-hover:-translate-y-7 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium ${
                      isScrolled
                        ? (isActive ? 'text-[#EFCA74]' : 'text-white')
                        : (isActive ? 'text-[#966042]' : 'text-navbar-black')
                    }`}>
                      About
                    </p>
                    <p className={`absolute top-7 left-0 group-hover:top-0 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium whitespace-nowrap ${
                      isScrolled ? 'text-[#EFCA74]' : 'text-[#966042]'
                    }`}>
                      About
                    </p>
                  </div>
                )}
              </NavLink>

              <a href="/#amenities" className="group cursor-pointer">
                <div className="relative overflow-hidden h-7 leading-7">
                  <p className={`group-hover:-translate-y-7 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium ${
                    isScrolled ? 'text-white' : 'text-navbar-black'
                  }`}>
                    Amenities
                  </p>
                  <p className={`absolute top-7 left-0 group-hover:top-0 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium whitespace-nowrap ${
                    isScrolled ? 'text-[#EFCA74]' : 'text-[#966042]'
                  }`}>
                    Amenities
                  </p>
                </div>
              </a>

              <a href="/#floor-map" className="group cursor-pointer">
                <div className="relative overflow-hidden h-7 leading-7">
                  <p className={`group-hover:-translate-y-7 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium ${
                    isScrolled ? 'text-white' : 'text-navbar-black'
                  }`}>
                    Floor Map
                  </p>
                  <p className={`absolute top-7 left-0 group-hover:top-0 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium whitespace-nowrap ${
                    isScrolled ? 'text-[#EFCA74]' : 'text-[#966042]'
                  }`}>
                    Floor Map
                  </p>
                </div>
              </a>

              <NavLink to="/contact" className="group cursor-pointer">
                {({ isActive }) => (
                  <div className="relative overflow-hidden h-7 leading-7">
                    <p className={`group-hover:-translate-y-7 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium ${
                      isScrolled
                        ? (isActive ? 'text-[#EFCA74]' : 'text-white')
                        : (isActive ? 'text-[#966042]' : 'text-navbar-black')
                    }`}>
                      Contact
                    </p>
                    <p className={`absolute top-7 left-0 group-hover:top-0 duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] font-medium whitespace-nowrap ${
                      isScrolled ? 'text-[#EFCA74]' : 'text-[#966042]'
                    }`}>
                      Contact
                    </p>
                  </div>
                )}
              </NavLink>
            </nav>

            {/* Uiverse Gold Shimmer Enquire Now Button (Rightmost Position) */}
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold-enquire shadow-md cursor-pointer shrink-0"
              aria-label="Enquire Now"
            />

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden p-1.5 transition-colors cursor-pointer ${
                isScrolled ? 'text-zinc-200 hover:text-white' : 'text-zinc-800 hover:text-black'
              }`}
              aria-label="Open Navigation Menu"
            >
              <MenuIcon className="w-5 h-5" />
            </button>

          </div>

        </div>
      </header>

      {/* MOBILE OVERLAY DRAWER MENU */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md bg-[#121212] text-white p-6 shadow-2xl border-b border-zinc-800"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="font-mono text-xs text-[#EFCA74] tracking-widest uppercase font-bold">
                  SKY CONNECT NAGPUR
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1 text-white hover:text-[#EFCA74] cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="py-6 space-y-4">
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-serif text-white hover:text-[#EFCA74]"
                >
                  About
                </NavLink>
                <a
                  href="/#amenities"
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-serif text-white hover:text-[#EFCA74]"
                >
                  Amenities
                </a>
                <a
                  href="/#floor-map"
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-serif text-white hover:text-[#EFCA74]"
                >
                  Floor Map
                </a>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-serif text-white hover:text-[#EFCA74]"
                >
                  Contact
                </NavLink>
              </nav>

              <div className="pt-4 border-t border-zinc-800 space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#EFCA74]" />
                  <span>Jaiprakash Nagar, Nagpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#EFCA74]" />
                  <span>+91 8989-666-888</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Enquire About Sky Connect"
      />
    </>
  )
}
