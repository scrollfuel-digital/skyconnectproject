import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Phone, Mail, CheckCircle2, Building2, Sparkles, AlertCircle } from 'lucide-react'

export default function EnquiryModal({ isOpen, onClose, title = "Schedule a Site Visit" }) {
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
      onClose()
    }, 2500)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-white rounded-none p-6 sm:p-8 border border-slate-300 shadow-2xl z-10 overflow-hidden"
        >
          {/* Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#EFCA74] via-[#D4AF37] to-[#EFCA74]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-none bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-none bg-[#EFCA74]/20 border border-[#EFCA74] flex items-center justify-center text-[#B89230] mb-6 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-light text-slate-900 mb-2">
                Enquiry Submitted!
              </h3>
              <p className="font-sans text-sm text-slate-600 max-w-xs leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our Sky Connect sales team will contact you shortly.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-300 text-[#B89230] text-[10px] font-mono tracking-[0.25em] uppercase font-bold mb-3 rounded-none">
                  <Sparkles className="w-3 h-3" />
                  SKY CONNECT NAGPUR
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-slate-900">
                  {title}
                </h3>
                <p className="font-sans text-xs text-slate-600 mt-1">
                  Fill in your details below to schedule your site visit or request brochure information.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleNameChange}
                      className={`w-full bg-slate-50 border ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                      } rounded-none pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all`}
                    />
                  </div>
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
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className={`w-full bg-slate-50 border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } rounded-none pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all`}
                      />
                    </div>
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
                    <label className="block font-medium text-slate-700 mb-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="date"
                        required
                        min={todayDate}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-none pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-none pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your home requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-none px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#18181B] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-none hover:bg-slate-800 transition-all duration-200 shadow-md cursor-pointer mt-2"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
