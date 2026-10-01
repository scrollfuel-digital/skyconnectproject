import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Sun,
  Moon,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Sparkles
} from 'lucide-react'
import EnquiryModal from '../components/ui/EnquiryModal.jsx'
import frontViewImg from '../assets/About section/frontView.jpg'
import blogHeaderImg from '../assets/blog-header-perspective.jpg'

export default function Blog7Crown() {
  const [activeSection, setActiveSection] = useState('section-1')
  const [openFaq, setOpenFaq] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('Book a Site Visit - 7 Crown')

  // Set Page Title & Meta Tags for SEO
  useEffect(() => {
    document.title = "7 Things to Check Before Buying a Flat in 2026 | 7 Crown Buyer's Guide"
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = "description"
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = "Planning to buy a flat in 2026? Discover 7 important things to check, from location and cost to documents, construction quality, amenities, and future needs."

    window.scrollTo(0, 0)
  }, [])

  // Intersection Observer for active sidebar link tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'section-1', 'section-2', 'section-3', 'section-4',
        'section-5', 'section-6', 'section-7', 'faq-section'
      ]
      
      const scrollPosition = window.scrollY + 250

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const openEnquiry = (title = 'Book a Site Visit - 7 Crown') => {
    setModalTitle(title)
    setModalOpen(true)
  }

  // Guide sidebar navigation links
  const guideLinks = [
    { id: 'section-1', num: '01', title: 'Location & Micro-Market' },
    { id: 'section-2', num: '02', title: 'RERA & Legal Credentials' },
    { id: 'section-3', num: '03', title: 'Total Acquisition Cost' },
    { id: 'section-4', num: '04', title: 'Construction Quality' },
    { id: 'section-5', num: '05', title: 'Amenities & Green Ratio' },
    { id: 'section-6', num: '06', title: 'Builder Track Record' },
    { id: 'section-7', num: '07', title: 'Resale & Future Value' },
    { id: 'faq-section', num: 'FAQ', title: 'Frequently Asked Questions' },
  ]

  // FAQs exact data
  const faqs = [
    {
      q: 'What legal documents must be verified before buying a flat in 2026?',
      a: 'Key legal documents include the MahaRERA Registration Certificate, Title Search Report for 30 years, Encumbrance Certificate, Approved Architectural Building Plan, Land Non-Agricultural (NA) order, Commencement Certificate, and Municipal Clearance Certificates.'
    },
    {
      q: 'Is RERA registration mandatory for all new flats for sale in Nagpur?',
      a: 'Yes, under the Real Estate (Regulation and Development) Act, all residential projects exceeding 500 square meters or 8 apartments must be registered under RERA before advertising or booking flats for sale.'
    },
    {
      q: 'How do floor-rise and PLC charges impact the total cost of buying a flat?',
      a: 'Floor-rise charges typically increase the base rate per sq. ft. by ₹25 to ₹100 for higher levels to account for better light, air quality, and views. Premium Location Charges (PLC) apply to corner units, park-facing flats, or east-facing layouts.'
    },
    {
      q: 'Why is carpet area definition critical when evaluating residential flats?',
      a: 'Carpet area represents the net usable floor area inside the apartment walls, excluding balconies, terrace, and common areas. Under RERA guidelines, developers must price flats strictly based on carpet area rather than vague super-built-up calculations.'
    },
    {
      q: 'What makes 7 Crown in Jaiprakash Nagar a high-appreciation asset?',
      a: '7 Crown offers premium 3 BHK luxury residences situated directly along the Wardha Road growth corridor in Jaiprakash Nagar, Nagpur. With 3-minute access to the Metro line, Nagpur Airport, and major retail hubs, it offers strong rental yield and capital appreciation.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-[#EFCA74] selection:text-[#18181B] relative">
      
      {/* 1. HERO BANNER - FULL SCREEN BACKDROP IMAGE LIKE HOME PAGE */}
      <section className="relative w-full h-screen min-h-[680px] bg-[#141210] text-white border-b border-white/10 overflow-hidden flex items-center justify-center">
        
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={blogHeaderImg}
            alt="7 Crown Blog Perspective Background"
            className="w-full h-full object-cover object-center filter saturate-[1.05]"
          />
          {/* Lightened Dark Overlay Gradient for vibrant background visibility & clear text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full pt-16">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-[#EFCA74]/70 backdrop-blur-md text-[#EFCA74] font-mono text-[11px] uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#EFCA74]" />
              <span>7 CROWN BUYER'S GUIDE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-lg">
              7 Things to Check Before <br />
              <span className="text-[#EFCA74]">Buying a Flat in 2026</span>
            </h1>

            <p className="font-sans text-stone-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl drop-shadow-md">
              Navigating the 2026 luxury property market requires a rigorous assessment of legal credentials, true total acquisition costs, spatial ergonomics, and future-ready infrastructure.
            </p>

            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-mono tracking-widest text-stone-300 uppercase">
              <span>Buyer's guide</span>
              <span className="text-[#EFCA74]">•</span>
              <span>5 min read</span>
              <span className="text-[#EFCA74]">•</span>
              <span>Updated 2026</span>
            </div>

          </div>
        </div>

        {/* Scroll Indicator Pill */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#EFCA74]">
            SCROLL TO READ
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-[#EFCA74]/60 p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-2.5 bg-[#EFCA74] rounded-full"
            />
          </div>
        </div>

      </section>

      {/* 3. MAIN BODY LAYOUT - EXACT TYPOGRAPHY & COLORS FROM HOME PAGE */}
      <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* STICKY LEFT SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-8 p-6 border-l border-stone-300 bg-transparent">
              
              <div>
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#966042] uppercase block mb-1">
                  LUXURY BUYER'S GUIDE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  In this guide
                </h3>
              </div>

              <nav className="space-y-2">
                {guideLinks.map((link) => {
                  const isActive = activeSection === link.id
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`group flex items-start gap-3 py-2 px-3 border-l-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[#966042] ${
                        isActive
                          ? 'border-[#966042] text-[#966042] font-bold bg-[#966042]/5'
                          : 'border-transparent text-slate-700 hover:border-[#966042] hover:text-slate-900'
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-[#966042] pt-0.5">
                        {link.num}
                      </span>
                      <span className="font-sans font-normal leading-snug">{link.title}</span>
                    </a>
                  )
                })}
              </nav>

              <div className="pt-6 border-t border-stone-300 space-y-4">
                <div className="p-5 bg-[#141210] text-white border border-[#EFCA74]/40 shadow-lg">
                  <span className="font-serif text-lg font-bold text-[#EFCA74] block mb-1">
                    Skyconnect 7 Crown
                  </span>
                  <p className="font-sans text-xs text-stone-300 leading-relaxed font-normal mb-4">
                    Looking for luxury 3 BHK residential flats in Jaiprakash Nagar, Nagpur?
                  </p>
                  <button
                    onClick={() => openEnquiry('Enquire 7 Crown Flat Availability')}
                    className="w-full py-2.5 bg-[#EFCA74] text-slate-950 font-mono text-[11px] uppercase font-bold tracking-widest hover:bg-white transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </aside>

          {/* READING COLUMN - EXACT HOME PAGE TEXT COLOR (slate-900 & slate-800) */}
          <article className="lg:col-span-8 max-w-[680px] mx-auto lg:mx-0 space-y-16">
            
            {/* LEAD PARAGRAPH */}
            <div className="space-y-6">
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight border-b border-stone-300 pb-10">
                Buying a flat in 2026 is an essential milestone that demands both financial prudence and an uncompromising eye for architectural standards.
              </p>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                As real estate development evolves alongside smart building tech, green norms, and updated regulatory frameworks, asking the right questions before signing an agreement can make all the difference between a lifelong asset and a costly regret.
              </p>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                Whether you are exploring high-end <strong>flats for sale</strong> in rapid-growth metro corridors or seeking family-oriented <strong>residential flats</strong>, evaluating a home requires looking far past glossy brochure renderings. Here is the definitive 7-step checklist every prospective homebuyer must perform in 2026.
              </p>
            </div>

            {/* SECTION 1 */}
            <section id="section-1" className="space-y-6 pt-8 border-t border-stone-300">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#966042]">01</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Location & Micro-Market Growth Potential
                </h2>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                When <strong>buying a flat</strong>, prime location remains the single greatest driver of long-term capital appreciation and everyday convenience. However, in 2026, location is no longer just about central city proximity—it is defined by micro-market connectivity to transit hubs, healthcare, top schools, and retail corridors.
              </p>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                Before committing to any <strong>flats for sale</strong>, evaluate the surrounding infrastructure pipeline: Is there an operational or upcoming Metro line within 5 minutes? How seamlessly does the property connect to major expressways and the international airport? Premium micro-markets like Wardha Road and Jaiprakash Nagar in Nagpur have seen steady 12%–15% annual value appreciation precisely due to direct arterial connectivity and established commercial hubs.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="section-2" className="space-y-6 pt-8 border-t border-stone-300">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#966042]">02</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  RERA Registration & Legal Document Verification
                </h2>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                Never make a financial deposit on any project without first auditing its regulatory credentials on the official RERA portal (such as MahaRERA in Maharashtra). RERA compliance guarantees that the land title is clear, architectural sanctions are approved by local municipal bodies, and customer funds are held in designated escrow accounts.
              </p>

              <div className="p-6 bg-white border border-stone-300 shadow-sm space-y-3">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#966042] uppercase block">
                  Mandatory Legal Verification Checklist
                </span>
                <ul className="space-y-2.5 font-sans text-base text-slate-800 font-normal leading-relaxed">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#966042] shrink-0" />
                    <span>MahaRERA Registration Number and quarterly progress disclosures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#966042] shrink-0" />
                    <span>30-Year Title Search Report proving unencumbered ownership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#966042] shrink-0" />
                    <span>Sanctioned Architectural Building Plans & Commencement Certificate (CC)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#966042] shrink-0" />
                    <span>No-Objection Certificates (NOCs) from Fire, Airport Authority & Water Authorities</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="section-3" className="space-y-6 pt-8 border-t border-stone-300">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#966042]">03</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Total Acquisition Cost Beyond Base Price
                </h2>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                The advertised base square-foot rate rarely reflects the actual out-of-pocket investment needed to acquire a home. When budgeting for <strong>buying a flat</strong> in 2026, request an itemized cost sheet to avoid unexpected financial surprises at possession.
              </p>

              {/* CLEAN RULED LIST OF COST ITEMS */}
              <div className="border-t border-b border-stone-300 divide-y divide-stone-300 my-6">
                
                <div className="py-4 flex items-center justify-between gap-4">
                  <span className="font-serif text-lg sm:text-xl font-bold text-slate-900">Stamp Duty & Registration Charges</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#966042] uppercase tracking-wider">5% – 7% of Agreement Value</span>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <span className="font-serif text-lg sm:text-xl font-bold text-slate-900">Covered Car Parking Allocation</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#966042] uppercase tracking-wider">Fixed Lump Sum</span>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <span className="font-serif text-lg sm:text-xl font-bold text-slate-900">Advance Maintenance & Corpus Fund</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#966042] uppercase tracking-wider">12–24 Months Deposit</span>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <span className="font-serif text-lg sm:text-xl font-bold text-slate-900">Taxes & GST Compliance</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#966042] uppercase tracking-wider">1% (Affordable) / 5% (Luxury)</span>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <span className="font-serif text-lg sm:text-xl font-bold text-slate-900">Floor-Rise & Premium Location Charges (PLC)</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#966042] uppercase tracking-wider">Graduated Per Floor</span>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <span className="font-serif text-lg sm:text-xl font-bold text-slate-900">Other Costs (Utility Connection & Legal Fees)</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#966042] uppercase tracking-wider">Meter & Infrastructure Fees</span>
                </div>

              </div>
            </section>

            {/* SECTION 4 WITH CALLOUT BOX */}
            <section id="section-4" className="space-y-6 pt-8 border-t border-stone-300">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#966042]">04</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Construction Quality & Spatial Ergonomics
                </h2>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                Visual aesthetics fade quickly if the underlying structural engineering and internal floor layouts are flawed. Prioritize developers who utilize modern MIVAN aluminum formwork or high-grade RCC frame construction for superior earthquake resistance and seamless wall finishes.
              </p>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                In terms of spatial ergonomics, examine room dimensions and natural light orientation. A well-designed 3 BHK residence should provide dual-aspect ventilation, zero wasted corridor space, and generous balcony depth for indoor-outdoor living.
              </p>

              {/* CALLOUT BOX */}
              <div className="bg-white border-l-4 border-[#966042] border border-stone-300 p-6 my-8 shadow-sm space-y-2">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#966042] uppercase block">
                  ARCHITECTURAL STANDARD TIP
                </span>
                <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed italic">
                  "Inspect the structural grid and ceiling heights before finalizing. Premium developments like Skyconnect 7 Crown utilize floor-to-ceiling heights exceeding 10.5 feet alongside soundproof acoustic glazing, ensuring thermal insulation and acoustic privacy for decades to come."
                </p>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="section-5" className="space-y-6 pt-8 border-t border-stone-300">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#966042]">05</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Amenities, Parking & Green Living Ratio
                </h2>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                Modern buyers considering <strong>new flats for sale</strong> expect lifestyle amenities that extend seamlessly into their daily routine. Look beyond standard gym equipment and check for future-proof infrastructure: EV charging provisions in every parking bay, high-speed dual elevators, multi-tier biometric security, and dedicated rooftop recreational gardens.
              </p>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                Equally vital is the green living ratio. Sustainable developments incorporate solar rooftop grid integration, rainwater harvesting systems, and energy-efficient LED common lighting—substantially lowering monthly maintenance overheads for apartment owners.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="section-6" className="space-y-6 pt-8 border-t border-stone-300">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#966042]">06</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Builder Track Record & Financial Stability
                </h2>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                A developer’s historical performance is the strongest predictor of your project’s delivery timeline and construction fidelity. Research past projects delivered by the builder group: Were previous phases handed over on schedule? Did the final finish match the original architectural specifications?
              </p>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                Reputable builders like Skyconnect maintain strong financial solvency, zero debt-encumbrance on project land, and a proven legacy of delivering landmark high-rise residences across prime central neighborhoods.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="section-7" className="space-y-6 pt-8 border-t border-stone-300">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#966042]">07</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Resale Value & Future Infrastructure Alignment
                </h2>
              </div>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                Even if you intend to reside in your flat indefinitely, assessing future resale demand for <strong>residential flats</strong> is vital for long-term wealth creation. Properties positioned in established residential enclaves with high rental demand from working professionals and business leaders consistently command premium exit multiples.
              </p>

              <p className="font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[75ch]">
                By ensuring your chosen property meets all 7 criteria—from legal title clarity to spatial design excellence—you secure a home that delivers both elevated living standards and enduring capital value.
              </p>
            </section>

            {/* ENDING: DARK LUXURY "FINAL THOUGHTS" BLOCK */}
            <div className="bg-[#141210] text-white p-8 sm:p-12 relative border border-[#EFCA74]/40 space-y-6 shadow-xl my-16">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#EFCA74] font-bold block">
                SUMMARY & NEXT STEPS
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Final thoughts on securing your dream home in 2026
              </h3>

              <p className="font-sans text-stone-300 text-base leading-relaxed font-normal">
                Skyconnect 7 Crown sets the benchmark for 3 BHK luxury living in Jaiprakash Nagar, Nagpur—combining prime Wardha Road location, 100% MahaRERA compliance, zero space wastage, and uncompromised architectural quality.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openEnquiry('Explore 7 Crown New Flats For Sale')}
                  className="px-7 py-3.5 bg-[#EFCA74] text-slate-950 font-mono text-xs font-bold uppercase tracking-[0.18em] hover:bg-white transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>EXPLORE NEW FLATS FOR SALE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* FAQ ACCORDION SECTION */}
            <section id="faq-section" className="space-y-8 pt-8 border-t border-stone-300">
              <div>
                <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#966042] uppercase block mb-1">
                  CLEAR ANSWERS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="divide-y divide-stone-300 border-t border-b border-stone-300">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div key={index} className="py-5">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#966042] py-1"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif text-xl sm:text-2xl font-bold leading-snug text-slate-900">
                          {faq.q}
                        </span>
                        <span className="font-mono text-2xl text-[#966042] shrink-0 select-none">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-4 pb-2 font-sans text-base sm:text-lg text-slate-800 font-normal leading-relaxed max-w-[70ch]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>

          </article>

        </div>
      </main>

      {/* ENQUIRY MODAL */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  )
}
