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
import logo from '../../assets/LOGO/Untitled logo.png'
import EnquiryModal from './EnquiryModal.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredNav, setHoveredNav] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = Math.max(0, window.pageYOffset || document.documentElement.scrollTop || 0)

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
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [location.pathname])

  const getActiveNavId = () => {
    if (activeSection) return activeSection
    return 'home'
  }

  const activeNavId = getActiveNavId()
  const currentHighlightedId = hoveredNav || activeNavId

  const navItems = [
    { id: 'hero', label: 'HOME', href: '#hero' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'layouts', label: 'LAYOUTS', href: '#layouts' },
    { id: 'floor-map', label: 'FLOOR MAP', href: '#floor-map' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ]

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 lg:px-12 bg-[#141210]/30 backdrop-blur-md border-b border-white/10 py-2 sm:py-2.5 shadow-md"
      >
        <div className="w-full flex items-center justify-between relative max-w-7xl mx-auto">
          
          <div className="flex items-center shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex items-center group transition-all duration-300"
            >
              <img
                src={logo}
                alt="Sky Connect Nagpur"
                className="h-11 sm:h-13 lg:h-15 xl:h-16 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>

          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12 font-sans text-xs lg:text-sm font-semibold tracking-[0.16em] uppercase"
          >
            {navItems.map((item) => {
              const isHighlighted = currentHighlightedId === item.id

              const navContent = (
                <span className="relative inline-block py-1 px-1">
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

                  {isHighlighted && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#EFCA74] rounded-full shadow-[0_0_10px_rgba(239,202,116,0.7)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </span>
              )

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="group relative cursor-pointer"
                >
                  {navContent}
                </a>
              )
            })}
          </nav>

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
                    className="p-1 text-[#EFCA74] hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="py-8 space-y-6">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className="block text-lg font-sans font-semibold tracking-[0.16em] uppercase text-white hover:text-[#EFCA74] transition-colors"
                    >
                      {item.label}
                    </a>
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
                  <a
                    href="https://wa.me/918989666888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-[#EFCA74] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#EFCA74]" />
                    <span>+91 8989-666-888</span>
                  </a>
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
