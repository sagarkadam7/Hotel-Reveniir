'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, MapPin, Waves, UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/utils'
import { HOTEL } from '@/data/hotel'
import ReviewMarquee from '@/components/ui/ReviewMarquee'

const HERO_SLIDES = [
  {
    image: '/images/amenities/pool.jpg',
    position: 'center center',
    label: 'Rooftop pool',
    caption: 'Swim with the hills around you',
  },
  {
    image: '/images/rooms/suite.jpg',
    position: 'center center',
    label: 'Cosy rooms',
    caption: 'Spaces made for switching off',
  },
  {
    image: '/images/gallery/balcony.jpg',
    position: 'center center',
    label: 'Valley views',
    caption: 'Morning mist from your balcony',
  },
  {
    image: '/images/amenities/restaurant.jpg',
    position: 'center center',
    label: 'Good food',
    caption: 'Meals that feel home-cooked',
  }
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const slideDuration = 6000 // 6 seconds per slide

  // Start autoplay timer and progress bar tracking
  useEffect(() => {
    startTimer()
    return () => {
      stopTimer()
    }
  }, [current])

  const startTimer = () => {
    stopTimer()
    setProgress(0)
    
    // Autoplay transition
    timerRef.current = setTimeout(() => {
      handleNext()
    }, slideDuration)

    // Progress bar update (every 50ms)
    const steps = slideDuration / 50
    let currentStep = 0
    progressIntervalRef.current = setInterval(() => {
      currentStep++
      setProgress(Math.min((currentStep / steps) * 100, 100))
    }, 50)
  }

  const stopTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const handleDotClick = (index: number) => {
    setCurrent(index)
  }

  return (
    <section
      className="relative flex items-end overflow-hidden w-full"
      style={{ height: '100vh', minHeight: '660px' }}
    >
      {/* Slideshow background images with Ken Burns zoom */}
      <div className="absolute inset-0 w-full h-full bg-neutral-950">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current
          return (
            <div
              key={slide.image}
              className={cn(
                "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <div
                className="relative w-full h-full transition-transform ease-out"
                style={{
                  transform: isActive ? 'scale(1.12)' : 'scale(1.02)',
                  transitionDuration: isActive ? `${slideDuration}ms` : '0ms',
                }}
              >
                <Image
                  src={slide.image}
                  alt="Resort View"
                  fill
                  style={{ objectFit: 'cover', objectPosition: slide.position }}
                  priority={index === 0}
                  sizes="100vw"
                  quality={90}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Modern Vignette Overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(10,8,6,0.96) 0%, rgba(10,8,6,0.55) 50%, rgba(10,8,6,0.3) 100%)',
        }}
      />

      {/* Dynamic Colored Accent Line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] z-30"
        style={{ background: 'linear-gradient(90deg, var(--magenta), var(--navy), var(--magenta))' }}
      />

      {/* Content wrapper */}
      <div className="relative z-30 w-full px-6 lg:px-16 pb-28 md:pb-24 pt-32 max-w-4xl mx-auto text-left">
        {/* Glassmorphic Badge */}
        <div
          className="inline-flex items-center gap-2 mb-4 lg:mb-6 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full backdrop-blur-md"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Star size={11} className="text-yellow-400 fill-yellow-400 animate-pulse" />
          <span className="text-[9px] lg:text-[10px]" style={{ color: 'white', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
            4.7 RATED RESORT
          </span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px' }}>·</span>
          <span className="text-[9px] lg:text-[10px]" style={{ color: 'var(--magenta-light)', letterSpacing: '0.15em', fontWeight: 500 }}>
            LONAVALA HILLS
          </span>
        </div>

        {/* Slogan Headline */}
        <h1
          className="font-display font-light text-white mb-4 lg:mb-6 tracking-tight leading-none"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 76px)',
            lineHeight: '1.05',
          }}
        >
          <span className="block text-white/80 text-[0.45em] font-sans font-medium tracking-[0.2em] uppercase mb-2">
            Hotel Reveniir
          </span>
          A hotel that feels like<br />
          <em className="font-serif italic" style={{ color: 'var(--magenta-light)' }}>
            coming home
          </em>
        </h1>

        {/* Description text */}
        <p
          className="font-light text-white/70 mb-6 lg:mb-8 max-w-xl leading-relaxed text-xs sm:text-sm lg:text-base"
        >
          Tucked into the hills of Lonavala, Reveniir gives you a proper escape — warm rooms, a rooftop pool, home-cooked meals, and mornings that smell like the Sahyadris.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 lg:gap-4 items-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            className="btn-primary group relative overflow-hidden"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            <span className="relative z-10">Check Availability</span>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <a href="#rooms" className="btn-outline group">
            <span>See Our Rooms</span>
          </a>
        </div>
      </div>

      {/* Navigation Controls (Dots & Arrows) */}
      <div className="absolute bottom-8 right-6 lg:right-16 z-30 flex items-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
          style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          aria-label="Previous image"
        >
          <ChevronLeft size={18} className="lg:w-5 lg:h-5" />
        </button>

        {/* Slideshow Progress and Dots */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, index) => {
            const isActive = index === current
            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="group relative py-2 px-1 focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Horizontal bar indicator */}
                <div
                  className={cn(
                    "h-[3px] rounded-full transition-all duration-500 overflow-hidden",
                    isActive ? "w-8 bg-pink-500" : "w-3 bg-white/35 group-hover:bg-white/60"
                  )}
                >
                  {/* Progress bar fill for active slide */}
                  {isActive && (
                    <div
                      className="h-full bg-white rounded-full transition-all duration-50"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
          style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          aria-label="Next image"
        >
          <ChevronRight size={18} className="lg:w-5 lg:h-5" />
        </button>
      </div>

      {/* Scroll indicator (Bottom Left) */}
      <div className="absolute bottom-8 left-6 lg:left-16 hidden md:flex items-center gap-3 z-30">
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, var(--magenta), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }}
        />
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Scroll down
        </span>
      </div>
    </section>
  )
}
