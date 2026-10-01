import React, { useState } from 'react'
import HeroSection from '../components/ui/HeroSection.jsx'
import AboutSection from '../components/ui/AboutSection.jsx'
import RooftopGardenBanner from '../components/ui/RooftopGardenBanner.jsx'
import GallerySection from '../components/ui/GallerySection.jsx'
import ContactSection from '../components/ui/ContactSection.jsx'
import EnquiryModal from '../components/ui/EnquiryModal.jsx'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState("Schedule a Site Visit")

  const openEnquiry = (title = "Enquire About Skyconnect") => {
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

        {/* 4. GALLERY SECTION */}
        <GallerySection />

        {/* 5. CONTACT & INLINE ENQUIRY SECTION */}
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
