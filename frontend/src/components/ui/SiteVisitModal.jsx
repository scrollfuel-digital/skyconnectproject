import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react'

export default function SiteVisitModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('12:00 PM')
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const timeSlots = ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM']
  const todayDate = new Date().toISOString().split('T')[0]

  const handleNext = () => {
    if (step === 1 && !date) return
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleConfirm = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.phone || formData.phone.length !== 10) return
    setSubmitted(true)
  }

  const handleCloseModal = () => {
    setStep(1)
    setSubmitted(false)
    setDate('')
    setTime('12:00 PM')
    setFormData({ name: '', phone: '', email: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#FAF8F5] p-8 sm:p-10 border border-stone-300 shadow-2xl z-10 text-[#18181B]"
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-6 right-6 text-stone-500 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-[#966042] font-bold uppercase mb-2">
                SITE VISIT · 0{step}/03
              </div>

              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Choose a date.</h3>
                  <div>
                    <input
                      type="date"
                      min={todayDate}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-white border border-stone-300 p-4 text-sm font-sans focus:outline-none focus:border-[#966042] cursor-pointer shadow-sm"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Choose a time.</h3>
                  <div className="grid grid-cols-2 gap-4 font-sans text-xs font-bold tracking-wider">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`p-4 border transition-all cursor-pointer ${
                          time === slot
                            ? 'bg-[#18181B] text-white border-[#18181B] shadow-md'
                            : 'bg-white text-stone-800 border-stone-300 hover:border-[#966042]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleConfirm} className="space-y-6">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Your details.</h3>
                  <div className="space-y-3 font-sans text-xs">
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value.replace(/[^a-zA-Z\s]/g, '') })}
                      className="w-full bg-white border border-stone-300 p-4 text-sm focus:outline-none focus:border-[#966042] shadow-sm"
                    />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="Phone (10 digits)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      className="w-full bg-white border border-stone-300 p-4 text-sm focus:outline-none focus:border-[#966042] shadow-sm"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-stone-300 p-4 text-sm focus:outline-none focus:border-[#966042] shadow-sm"
                    />
                  </div>
                </form>
              )}

              <div className="flex items-center justify-between pt-8 mt-6 border-t border-stone-300/60">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1}
                  className={`flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider ${
                    step === 1 ? 'opacity-30 cursor-not-allowed text-stone-400' : 'text-stone-700 hover:text-[#966042] cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> BACK
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={step === 1 && !date}
                    className={`px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                      step === 1 && !date
                        ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                        : 'bg-[#18181B] text-white hover:bg-[#966042] shadow-md'
                    }`}
                  >
                    NEXT <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="px-7 py-3.5 bg-[#966042] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#18181B] transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    CONFIRM <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4 font-sans">
              <div className="w-14 h-14 rounded-full bg-[#966042]/20 text-[#966042] flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-slate-900">Site Visit Confirmed!</h3>
              <p className="text-sm text-stone-600 max-w-xs mx-auto leading-relaxed">
                Thank you <span className="font-semibold text-slate-900">{formData.name}</span>. Your site visit to Sky Connect is scheduled for <span className="font-semibold text-slate-900">{date}</span> at <span className="font-semibold text-slate-900">{time}</span>.
              </p>
              <button
                onClick={handleCloseModal}
                className="mt-4 px-8 py-3.5 bg-[#18181B] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#966042] transition-all cursor-pointer shadow-md"
              >
                CLOSE
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
