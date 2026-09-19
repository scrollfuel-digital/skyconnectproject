import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import logo from '../../assets/SkyConnect Logo.png'

export default function Footer() {
  return (
    <footer className="w-full bg-white text-zinc-900 pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 font-sans relative border-t border-zinc-200">
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
        
        {/* Top Section: Logo & Tagline on Far Left, 3 Columns Pinned to Far Right */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 lg:gap-14">
          
          {/* Left: Brand Logo & Italic Tagline */}
          <div className="shrink-0">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Sky Connect"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain filter drop-shadow-xs"
              />
            </Link>
            <p className="font-serif italic text-base sm:text-lg text-zinc-500 mt-2 font-light tracking-normal">
              Your Home in Nagpur.
            </p>
          </div>

          {/* Right: Exactly 3 Navigation Columns Pinned to the Far Right Margin */}
          <div className="ml-auto w-full md:w-auto grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row md:justify-end gap-10 sm:gap-12 md:gap-14 lg:gap-20 xl:gap-28 pt-1">
            
            {/* Column 1: EXPLORE */}
            <div className="min-w-[100px] sm:min-w-[120px]">
              <h4 className="font-mono text-xs text-black tracking-[0.25em] uppercase mb-4 sm:mb-5 font-semibold">
                EXPLORE
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-sm text-zinc-700 font-sans font-normal">
                <li>
                  <Link to="/" className="hover:text-black transition-colors block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-black transition-colors block">
                    About
                  </Link>
                </li>
                <li>
                  <a href="/#amenities" className="hover:text-black transition-colors block">
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="/#floor-map" className="hover:text-black transition-colors block">
                    Floor Map
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-black transition-colors block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: SERVICE */}
            <div className="min-w-[100px] sm:min-w-[120px]">
              <h4 className="font-mono text-xs text-black tracking-[0.25em] uppercase mb-4 sm:mb-5 font-semibold">
                SERVICE
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-sm text-zinc-700 font-sans font-normal">
                <li>
                  <a href="/#layouts" className="hover:text-black transition-colors block">
                    Floor Plans
                  </a>
                </li>
                <li>
                  <a href="/#specifications" className="hover:text-black transition-colors block">
                    Specifications
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-black transition-colors block">
                    Site Visit
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-black transition-colors block">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: FOLLOW ALONG (Social media & Contact info at Far Right) */}
            <div className="min-w-[140px] sm:min-w-[170px]">
              <h4 className="font-mono text-xs text-black tracking-[0.25em] uppercase mb-4 sm:mb-5 font-semibold">
                FOLLOW ALONG
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-sm text-zinc-700 font-sans font-normal">
                <li>
                  <a
                    href="https://www.instagram.com/skyconnectnagpur?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-700 hover:text-black transition-colors group"
                  >
                    <Instagram className="w-4 h-4 text-zinc-700 group-hover:text-black shrink-0 stroke-[1.5]" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=skyconnectinfra@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors block break-all"
                  >
                    skyconnectinfra@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918989666888"
                    className="hover:text-black transition-colors block"
                  >
                    +91 8989-666-888
                  </a>
                </li>
                <li className="text-xs text-zinc-500">
                  Jaiprakash Nagar, Nagpur
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full border-t border-zinc-200 my-8 sm:my-10" />

        {/* Bottom Bar: Copyright on Far Left, Privacy & Terms on Far Right */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-400 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} SKY CONNECT</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-700 transition-colors">
              PRIVACY
            </a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-700 transition-colors">
              TERMS
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

