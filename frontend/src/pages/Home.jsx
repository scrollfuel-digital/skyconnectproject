import React, { useState } from 'react'
import HeroSection from '../components/ui/HeroSection.jsx'
import AboutSection from '../components/ui/AboutSection.jsx'
import RooftopGardenBanner from '../components/ui/RooftopGardenBanner.jsx'
import FunctionalLayoutShowcase from '../components/ui/FunctionalLayoutShowcase.jsx'
import FloorMapSection from '../components/ui/FloorMapSection.jsx'
import SpecificationsSection from '../components/ui/SpecificationsSection.jsx'
import LocationSection from '../components/ui/LocationSection.jsx'
import GallerySection from '../components/ui/GallerySection.jsx'
import ContactSection from '../components/ui/ContactSection.jsx'
import EnquiryModal from '../components/ui/EnquiryModal.jsx'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("Schedule a Site Visit")

  const openEnquiry = (title = "Enquire About Sky Connect") => {
    setModalTitle(title)
    setModalOpen(true)
  }

  return (
    <div className="bg-[#FAF8F5] text-[#18181B] min-h-screen font-sans selection:bg-[#EFCA74] selection:text-[#18181B] relative">
      {/* 1. HERO SECTION */}
      <HeroSection onEnquire={openEnquiry} />

      {/* MAIN PAGE SCROLL CONTENT */}
      <div className="relative w-full bg-[#FAF8F5]">
        {/* 2. ABOUT SECTION */}
        <AboutSection onEnquire={openEnquiry} />

        {/* 3. ROOFTOP GARDEN BANNER */}
        <RooftopGardenBanner />

        {/* 4. FUNCTIONAL LAYOUT SHOWCASE */}
        <FunctionalLayoutShowcase onEnquire={openEnquiry} />

        {/* 5. FLOOR MAP SECTION WITH PINNED SPECIFICATIONS LAYER */}
        <FloorMapSection onEnquire={openEnquiry}>
          <SpecificationsSection />
        </FloorMapSection>

        {/* 6. GALLERY SECTION */}
        <GallerySection />

        {/* 7. CONNECTED LOCATION MAP SECTION */}
        <LocationSection />

        {/* 8. CONTACT & INLINE ENQUIRY SECTION */}
        <ContactSection />
      </div>

      {/* General Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  )
}
