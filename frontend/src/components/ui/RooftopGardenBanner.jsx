import React, { useState, useRef, useEffect } from 'react'
import video1 from '../../assets/Header video/Video Project 7.mp4'
import video2 from '../../assets/Header video/Video Project 6.mp4'

export default function RooftopGardenBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef(null)
  const videos = [video1, video2]

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }
  }, [currentIndex])

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length)
  }

  return (
    <section
      id="rooftop-banner"
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[640px] overflow-hidden bg-stone-900 group select-none border-y border-stone-300/80"
    >
      {/* Background Video Player (Exact Header Videos) */}
      <video
        key={currentIndex}
        ref={videoRef}
        src={videos[currentIndex]}
        autoPlay
        muted
        loop={false}
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none z-[5]" />

      <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 lg:bottom-16 lg:left-20 z-10 max-w-xl text-left space-y-2 pointer-events-none">
        <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#EFCA74] uppercase block">
          ROOFTOP GARDEN
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight drop-shadow-lg">
          Panoramic <br />
          <span className="italic font-semibold">Sky Decks.</span>
        </h2>
      </div>

      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-12 z-10 flex items-center gap-2">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Rooftop Video ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIndex
                ? 'w-8 bg-[#EFCA74]'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
