import React, { useState } from 'react'
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import SiteVisitModal from './SiteVisitModal.jsx'

export default function ContactSection() {
  const [siteVisitModalOpen, setSiteVisitModalOpen] = useState(false)
  const [inlineForm, setInlineForm] = useState({ name: '', phone: '', email: '', date: '', message: '' })
  const [inlineSubmitted, setInlineSubmitted] = useState(false)
  const todayDate = new Date().toISOString().split('T')[0]

  const handleInlineSubmit = (e) => {
    e.preventDefault()
    if (!inlineForm.name.trim() || !inlineForm.phone || inlineForm.phone.length !== 10) return
    setInlineSubmitted(true)
    setTimeout(() => {
      setInlineSubmitted(false)
      setInlineForm({ name: '', phone: '', email: '', date: '', message: '' })
    }, 4000)
  }

  return (
    <>
      <section id="contact" className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-stone-300/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#966042] uppercase block">
                ENQUIRE
              </span>
              
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Your next address <br className="hidden sm:inline" />
                <span className="italic font-bold">starts here.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Schedule an exclusive private site visit or send your enquiry to discover luxury 3 BHK residences at Sky Connect, Jaiprakash Nagar, Nagpur.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setSiteVisitModalOpen(true)}
                  className="px-8 py-4 bg-[#18181B] text-white font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#966042] transition-all flex items-center gap-3 shadow-md cursor-pointer group"
                >
                  <span>BOOK A SITE VISIT</span>
                  <Calendar className="w-4 h-4 text-[#EFCA74] group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-stone-300 shadow-xl relative">
              {inlineSubmitted ? (
                <div className="py-12 text-center space-y-3 font-sans">
                  <div className="w-12 h-12 rounded-full bg-[#966042]/20 text-[#966042] flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">Enquiry Received!</h3>
                  <p className="text-sm text-stone-600 max-w-sm mx-auto">
                    Thank you <span className="font-semibold text-slate-900">{inlineForm.name}</span>. Our sales concierge will connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-6 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-stone-600 font-medium mb-1 uppercase tracking-wider text-[10px]">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={inlineForm.name}
                        onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value.replace(/[^a-zA-Z\s]/g, '') })}
                        className="w-full bg-slate-50/50 border-b-2 border-stone-300 p-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#966042] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-600 font-medium mb-1 uppercase tracking-wider text-[10px]">Phone *</label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={inlineForm.phone}
                        onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value.replace(/\D/g, '') })}
                        className="w-full bg-slate-50/50 border-b-2 border-stone-300 p-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#966042] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-stone-600 font-medium mb-1 uppercase tracking-wider text-[10px]">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@example.com"
                        value={inlineForm.email}
                        onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                        className="w-full bg-slate-50/50 border-b-2 border-stone-300 p-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#966042] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-600 font-medium mb-1 uppercase tracking-wider text-[10px]">Preferred Date</label>
                      <input
                        type="date"
                        min={todayDate}
                        value={inlineForm.date}
                        onChange={(e) => setInlineForm({ ...inlineForm, date: e.target.value })}
                        className="w-full bg-slate-50/50 border-b-2 border-stone-300 p-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#966042] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-600 font-medium mb-1 uppercase tracking-wider text-[10px]">Message</label>
                    <textarea
                      rows="3"
                      placeholder="Tell us about your home requirements..."
                      value={inlineForm.message}
                      onChange={(e) => setInlineForm({ ...inlineForm, message: e.target.value })}
                      className="w-full bg-slate-50/50 border-b-2 border-stone-300 p-3.5 text-sm text-slate-900 focus:outline-none focus:border-[#966042] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-[#18181B] text-white font-mono text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#966042] transition-all flex items-center gap-3 shadow-md cursor-pointer"
                    >
                      <span>SEND ENQUIRY</span>
                      <ArrowRight className="w-4 h-4 text-[#EFCA74]" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <SiteVisitModal
        isOpen={siteVisitModalOpen}
        onClose={() => setSiteVisitModalOpen(false)}
      />
    </>
  )
}
