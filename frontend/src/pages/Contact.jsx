import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Building2, Calendar, CheckCircle2, Sparkles, Send, User, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  })

  // Prevent past dates in datepicker
  const todayDate = new Date().toISOString().split('T')[0]

  // Name handler: allow only letters and spaces (strips numbers & special chars)
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '')
    setFormData((prev) => ({ ...prev, name: value }))
    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }))
  }

  // Phone handler: allow only digits and limit to 10 digits
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10)
    setFormData((prev) => ({ ...prev, phone: value }))
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.'
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Full name can only contain letters and spaces.'
    }

    if (!formData.phone) {
      newErrors.phone = 'Mobile number is required.'
    } else if (formData.phone.length !== 10) {
      newErrors.phone = 'Mobile number must be exactly 10 digits.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', date: '', message: '' })
    }, 4000)
  }

  return (
    <div className="bg-[#F8FAFC] text-[#f1d89d] min-h-screen font-sans selection:bg-[#EFCA74] selection:text-[#18181B]">
      
      {/* Banner */}
      <section className="bg-[#121212] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-zinc-800">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-700 text-[#EFCA74] text-xs font-mono tracking-[0.25em] uppercase font-bold rounded-none">
            <Sparkles className="w-3.5 h-3.5" />
            BOOK A SITE VISIT
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight">
            Contact Sky Connect
          </h1>
          <p className="font-sans text-base text-slate-300 max-w-xl mx-auto font-normal">
            Contact Sky Connect to learn about the project, amenities, specifications, location, and schedule your site visit in Nagpur.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-[#B89230] tracking-[0.25em] uppercase font-bold block">
            WE ARE HERE TO HELP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#18181B]">
            Let's Talk About Your New Home
          </h2>
          <p className="font-sans text-base text-[#475569] font-normal leading-relaxed">
            Interested in learning more about Sky Connect? Our team is here to help you with information about the project, home layouts, specifications, amenities, location, and site visits.
          </p>
        </div>

        {/* Contact Cards & Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Phone */}
          <div className="p-8 bg-white rounded-none border border-slate-300 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-none bg-[#18181B] text-[#EFCA74] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-light text-[#18181B]">Call Us</h3>
            <div className="font-sans text-sm text-[#475569] space-y-1 font-medium">
              <p>+91 8989-666-888</p>
              <p>+91 94040-70345</p>
              <p>+91 89898-32323</p>
            </div>
          </div>

          {/* Email */}
          <div className="p-8 bg-white rounded-none border border-slate-300 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-none bg-[#18181B] text-[#EFCA74] flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-light text-[#18181B]">Email Us</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=skyconnectinfra@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#475569] font-medium hover:text-[#18181B] block underline"
            >
              skyconnectinfra@gmail.com
            </a>
          </div>

          {/* Site Address */}
          <div className="p-8 bg-white rounded-none border border-slate-300 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-none bg-[#18181B] text-[#EFCA74] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-light text-[#18181B]">Site Address</h3>
            <p className="font-sans text-xs text-[#475569] font-normal leading-relaxed">
              7 Crown, Plot 30–31, Beside Hotel Trance, Jaiprakash Nagar, Nagpur – 440025
            </p>
          </div>

          {/* Office Address */}
          <div className="p-8 bg-white rounded-none border border-slate-300 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-none bg-[#18181B] text-[#EFCA74] flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-light text-[#18181B]">Office Address</h3>
            <p className="font-sans text-xs text-[#475569] font-normal leading-relaxed">
              2nd Floor, Slesha Apartment, 201, Near Airport, Karve Nagar, Nagpur, Maharashtra – 440025
            </p>
          </div>

        </div>

        {/* Enquiry Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-[#B89230] tracking-[0.25em] uppercase font-bold block">
              SCHEDULE A VISIT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#18181B]">
              Schedule a Site Visit
            </h2>
            <p className="font-sans text-base text-[#475569] font-normal leading-relaxed">
              The best way to understand a home is to experience it in person. Visit Sky Connect to explore the project, understand the layouts, see the amenities, and get answers directly from our team.
            </p>

            <div className="p-6 bg-white rounded-none border border-slate-300 space-y-3">
              <div className="flex items-center gap-3 text-sm font-sans text-[#18181B] font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#B89230]" />
                <span>Guided Project Walkthrough</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-sans text-[#18181B] font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#B89230]" />
                <span>Sample Home & Floor Plan Review</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-sans text-[#18181B] font-bold">
                <CheckCircle2 className="w-5 h-5 text-[#B89230]" />
                <span>Direct Interaction with Sales Team</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-none border border-slate-300 shadow-lg">
            <h3 className="font-serif text-2xl font-light text-[#18181B] mb-2">
              Send Us Your Enquiry
            </h3>
            <p className="font-sans text-xs text-[#475569] mb-6 font-normal">
              Fill in the form and our team will get in touch with you.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#B89230] mx-auto animate-bounce" />
                <h4 className="font-serif text-2xl font-light text-[#18181B]">Thank You!</h4>
                <p className="font-sans text-sm text-[#475569] font-normal max-w-sm mx-auto">
                  Your enquiry has been sent successfully. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleNameChange}
                    className={`w-full bg-slate-50 border ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                    } rounded-none px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all`}
                  />
                  {errors.name ? (
                    <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.name}
                    </p>
                  ) : (
                    <p className="text-slate-400 text-[10px] mt-0.5">Letters and spaces only (numbers not allowed)</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full bg-slate-50 border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } rounded-none px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all`}
                    />
                    {errors.phone ? (
                      <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.phone}
                      </p>
                    ) : (
                      <p className="text-slate-400 text-[10px] mt-0.5">Exactly 10 digits required ({formData.phone.length}/10)</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Preferred Visit Date</label>
                    <input
                      type="date"
                      required
                      min={todayDate}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Your message or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-none px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#18181B] text-white font-bold text-xs uppercase tracking-[0.25em] rounded-none hover:bg-slate-800 transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#EFCA74]" />
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </section>
    </div>
  )
}
