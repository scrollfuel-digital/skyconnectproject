import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import Navbar from './components/ui/Navbar.jsx'
import Footer from './components/ui/Footer.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function SmoothScrollProvider({ children }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    if (hash) {
      const targetId = hash.replace('#', '')
      const el = document.getElementById(targetId)
      if (el) {
        setTimeout(() => {
          lenis.scrollTo(el, { offset: -75, duration: 1.4 })
        }, 100)
      }
    }

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [pathname, hash])

  return children
}

function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col font-sans selection:bg-[#EFCA74] selection:text-[#18181B]">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}

export default App
