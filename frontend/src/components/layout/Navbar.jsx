import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredNav, setHoveredNav] = useState(null)
  const location = useLocation()

  // Auto-hide on scroll down, reveal on scroll back up
  useEffect(() => {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0
    let accumulatedDown = 0
    let accumulatedUp = 0
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = Math.max(0, window.pageYOffset || document.documentElement.scrollTop || 0)
      const diff = currentScrollY - lastScrollY

      // Auto-hide when scrolling down, reveal when scrolling back up
      if (currentScrollY <= 30) {
        setIsVisible(true)
        accumulatedDown = 0
        accumulatedUp = 0
      } else if (diff > 0) {
        accumulatedUp = 0
        accumulatedDown += diff
        if (accumulatedDown > 15 && currentScrollY > 70) {
          setIsVisible(false)
        }
      } else if (diff < 0) {
        accumulatedDown = 0
        accumulatedUp += Math.abs(diff)
        if (accumulatedUp > 8) {
          setIsVisible(true)
        }
      }

      // Update active section on home page scroll
      if (location.pathname === '/') {
        const floorMapEl = document.getElementById('floor-map')
        const amenitiesEl = document.getElementById('amenities')
        const scrollPosition = currentScrollY + 250

        if (floorMapEl && scrollPosition >= floorMapEl.offsetTop) {
          setActiveSection('floor-map')
        } else if (amenitiesEl && scrollPosition >= amenitiesEl.offsetTop) {
          setActiveSection('amenities')
        } else {
          setActiveSection('home')
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
    updateScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchmove', onScroll)
    }
  }, [location.pathname, location.hash])

  // Determine active item id
  const getActiveNavId = () => {
    if (location.pathname === '/contact') return 'contact'
    if (location.pathname === '/') {
      if (location.hash === '#floor-map' || location.hash === '#floormap' || activeSection === 'floor-map') return 'floor-map'
      if (location.hash === '#amenities' || activeSection === 'amenities') return 'amenities'
      return 'home'
    }
    return null
  }

  const activeNavId = getActiveNavId()
  const currentHighlightedId = hoveredNav || activeNavId

  const navItems = [
    { id: 'home', label: 'HOME', href: '/', isLink: true },
    { id: 'amenities', label: 'AMENITIES', href: '/#amenities', isLink: false },
    { id: 'floor-map', label: 'FLOOR MAP', href: '/#floor-map', isLink: false },
    { id: 'contact', label: 'CONTACT', href: '/contact', isLink: true },
  ]

  return (
    <>
      {/* ======================================================================
          STICKY / FIXED LUXURY NAVBAR (EXACT REFERENCE DESIGN WITH ALL-ITEMS HOVER ANIMATION)
          ====================================================================== */}
      <header
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, background-color 0.3s ease, padding 0.3s ease'
        }}
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 lg:px-12 bg-[#141210]/30 backdrop-blur-md border-b border-white/10 py-2 sm:py-2.5 shadow-md"
      >
        <div className="w-full flex items-center justify-between relative max-w-7xl mx-auto">
          
          {/* DIV FOR LOGO */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center group transition-all duration-300">
              <img
                src={logo}
                alt="Sky Connect Nagpur"
                className="h-11 sm:h-13 lg:h-15 xl:h-16 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>

          {/* DIV FOR CENTER NAV LINKS WITH ENQUIRE-STYLE FONT */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-10 lg:gap-14 xl:gap-18 font-sans text-xs lg:text-sm font-semibold tracking-[0.16em] uppercase"
          >
            {navItems.map((item) => {
              const isHighlighted = currentHighlightedId === item.id

              const navContent = (
                <span className="relative inline-block py-1 px-1">
                  {/* Rolling Word Hover Effect */}
                  <span className="relative overflow-hidden inline-block align-bottom h-7 leading-7">
                    <span
                      className={`block transition-transform duration-300 ease-out group-hover:-translate-y-7 ${
                        isHighlighted ? 'text-[#EFCA74]' : 'text-white/90'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="block absolute top-7 left-0 w-full transition-transform duration-300 ease-out group-hover:-translate-y-7 text-[#EFCA74] whitespace-nowrap font-semibold">
                      {item.label}
                    </span>
                  </span>

                  {/* Gold Underline Line Animation (Shows on Hover & Active) */}
                  {isHighlighted && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#EFCA74] rounded-full shadow-[0_0_10px_rgba(239,202,116,0.7)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </span>
              )

              if (item.isLink) {
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onClick={() => {
                      if (item.href === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="group relative cursor-pointer"
                  >
                    {navContent}
                  </Link>
                )
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  className="group relative cursor-pointer"
                >
                  {navContent}
                </a>
              )
            })}
          </nav>

          {/* DIV FOR RIGHT ACTIONS (ENQUIRE NOW BUTTON + HAMBURGER MENU) */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setModalOpen(true)}
              className="border border-[#EFCA74]/80 rounded-full px-4 sm:px-6 py-2 text-[#EFCA74] hover:bg-[#EFCA74] hover:text-black transition-all duration-300 font-medium tracking-widest text-xs lg:text-sm uppercase flex items-center gap-2 shadow-sm cursor-pointer group"
              aria-label="Enquire Now"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="p-1 text-white hover:text-[#EFCA74] transition-colors cursor-pointer md:hidden"
              aria-label="Open Navigation Menu"
            >
              <MenuIcon className="w-6 h-6 stroke-[1.75]" />
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE / SIDE OVERLAY DRAWER MENU */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-sm bg-[#141210] text-white p-6 sm:p-8 shadow-2xl border-l border-white/10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <span className="font-mono text-xs text-[#EFCA74] tracking-widest uppercase font-bold">
                    SKY CONNECT NAGPUR
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-1 text-white hover:text-[#EFCA74] transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="py-8 space-y-6">
                  {navItems.map((item) => (
                    item.isLink ? (
                      <Link
                        key={item.id}
                        to={item.href}
                        onClick={() => {
                          setMenuOpen(false)
                          if (item.href === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className="block text-lg font-sans font-semibold tracking-[0.16em] uppercase text-white hover:text-[#EFCA74] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-lg font-sans font-semibold tracking-[0.16em] uppercase text-white hover:text-[#EFCA74] transition-colors"
                      >
                        {item.label}
                      </a>
                    )
                  ))}
                </nav>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <button
                  onClick={() => { setMenuOpen(false); setModalOpen(true); }}
                  className="w-full border border-[#EFCA74] rounded-full py-3 text-[#EFCA74] hover:bg-[#EFCA74] hover:text-black transition-all duration-300 font-medium tracking-widest text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ENQUIRE NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="space-y-2 text-xs font-sans text-zinc-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#EFCA74]" />
                    <span>Jaiprakash Nagar, Nagpur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#EFCA74]" />
                    <span>+91 8989-666-888</span>
                  </div>
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
