import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowRight,
  Instagram,
  Phone
} from 'lucide-react'
import logo from '../../assets/LOGO/SkyConnect Logo.png'

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.012-1.052z" />
    </svg>
  )
}

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Residences', href: '#layouts' },
    { label: 'Specifications', href: '#specifications' },
  ]

  const exploreLinks = [
    { label: 'Floor Map', href: '#floor-map' },
    { label: 'Location', href: '#location' },
    { label: 'Gallery', href: '#hero' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="w-full bg-[#FAF7F2] text-[#3C2D24] pt-10 pb-6 font-sans border-t border-[#EAE3D2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 items-start">

          {/* COLUMN 1 (BRAND & SOCIALS - 4 COLS) */}
          <div className="lg:col-span-4 space-y-2.5">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Skyconnect"
                className="h-28 sm:h-32 w-auto object-contain filter contrast-125 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#6B5A4E] font-sans leading-relaxed max-w-sm">
              Elevating modern living with contemporary architecture, thoughtful planning, and serene luxury sanctuaries in the heart of Nagpur.
            </p>

            <div className="w-12 h-[2px] bg-[#966042]/40 my-2" />

            <div className="flex items-center gap-2.5 pt-0.5">
              <a
                href="https://www.instagram.com/skyconnectnagpur?stkn=b28zcjdvejlwendj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#EFE9DD] hover:bg-[#966042] text-[#3C2D24] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918989666888"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#EFE9DD] hover:bg-[#25D366] text-[#3C2D24] hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 (QUICK LINKS - 2 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#3C2D24] relative inline-block">
              Quick Links
              <span className="block w-6 h-[1.5px] bg-[#966042] mt-1" />
            </h4>
            <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#6B5A4E]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#966042] transition-colors duration-200 block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 (EXPLORE - 2 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#3C2D24] relative inline-block">
              Explore
              <span className="block w-6 h-[1.5px] bg-[#966042] mt-1" />
            </h4>
            <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#6B5A4E]">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#966042] transition-colors duration-200 block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 (OUR LOCATION + GET DIRECTIONS ON TOP RIGHT + LARGER MAP BELOW) */}
          <div className="lg:col-span-4 pl-0 lg:pl-6 lg:border-l border-[#EAE3D2] space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#966042]">
                  <MapPin className="w-5 h-5 fill-[#966042]/15 text-[#966042]" />
                  <h4 className="font-serif text-lg font-bold text-[#3C2D24]">
                    Our Location
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#6B5A4E] leading-relaxed">
                  7 CROWN, Plot 30–31, Beside Hotel Trance,
                  Jaiprakash Nagar, Nagpur – 440025
                </p>
                <div className="pt-2 space-y-1.5 text-xs font-sans">
                  <a
                    href="tel:+918989666888"
                    className="flex items-center gap-2 text-[#3C2D24] hover:text-[#966042] transition-colors font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#966042] shrink-0" />
                   <span>
  8989&nbsp;&nbsp;&nbsp;666&nbsp;&nbsp;&nbsp;888, 94040&nbsp;&nbsp;&nbsp;70345, 89898&nbsp;&nbsp;&nbsp;32323
</span>
                  </a>
                 
                </div>
              </div>

              {/* Get Directions Button in Yellow Box Area */}
              <a
                href="https://maps.google.com/maps?daddr=7+CROWN,+Plot+30-31,+Beside+Hotel+Trance,+Jaiprakash+Nagar,+Nagpur+-+440025"
                target="_blank"
                rel="noopener noreferrer"
                className="group shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#966042] rounded-full text-xs font-serif text-[#966042] hover:bg-[#966042] hover:text-white transition-all duration-300 shadow-xs mt-0.5"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Expanded Size Rectangular Map */}
            <div className="relative w-full max-w-sm h-[145px] sm:h-[155px] rounded-xl overflow-hidden border border-[#966042]/25 shadow-sm bg-stone-200 group">
              <iframe
                title="Skyconnect Rectangular Footer Map"
                src="https://maps.google.com/maps?q=7+CROWN,+Plot+30-31,+Beside+Hotel+Trance,+Jaiprakash+Nagar,+Nagpur+-+440025&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter saturate-90 group-hover:scale-105 transition-transform duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none" />
            </div>

          </div>

        </div>

        <div className="pt-5 border-t border-[#E5DEC9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#6B5A4E]">
          <div>
            © {new Date().getFullYear()} Skyconnect. All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-sans">
            <a href="#" className="hover:text-[#3C2D24] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#966042]/40">|</span>
            <a href="#" className="hover:text-[#3C2D24] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
