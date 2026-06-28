'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const HERO_SLIDES = [
  {
    image: '/images/amenities/pool.jpg',
    position: 'center center',
    label: 'The Rooftop',
    caption: 'A pool suspended in the Sahyadris',
    index: '01',
  },
  {
    image: '/images/rooms/suite.jpg',
    position: 'center center',
    label: 'The Suites',
    caption: 'Quiet rooms, slow mornings',
    index: '02',
  },
  {
    image: '/images/gallery/balcony.jpg',
    position: 'center center',
    label: 'The Valley',
    caption: 'Mist that rolls in by sunrise',
    index: '03',
  },
  {
    image: '/images/amenities/restaurant.jpg',
    position: 'center center',
    label: 'The Table',
    caption: 'Home-cooked, hill-grown',
    index: '04',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const slideDuration = 7000

  useEffect(() => {
    startTimer()
    return () => stopTimer()
  }, [current])

  const startTimer = () => {
    stopTimer()
    setProgress(0)
    timerRef.current = setTimeout(() => handleNext(), slideDuration)
    const steps = slideDuration / 50
    let s = 0
    progressIntervalRef.current = setInterval(() => {
      s++
      setProgress(Math.min((s / steps) * 100, 100))
    }, 50)
  }

  const stopTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
  }

  const handleNext = () => setCurrent((p) => (p + 1) % HERO_SLIDES.length)
  const handlePrev = () => setCurrent((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)

  const activeSlide = HERO_SLIDES[current]

  return (
    <section
      className="relative overflow-hidden w-full bg-neutral-950"
      style={{ height: '100vh', minHeight: '720px' }}
    >
      {/* === Background slides with slow Ken Burns === */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current
          return (
            <div
              key={slide.image}
              className={cn(
                'absolute inset-0 transition-opacity ease-in-out',
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              )}
              style={{ transitionDuration: '1600ms' }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transform: isActive ? 'scale(1.08)' : 'scale(1.0)',
                  transition: isActive
                    ? `transform ${slideDuration + 1600}ms ease-out`
                    : 'transform 0ms',
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  style={{ objectFit: 'cover', objectPosition: slide.position }}
                  priority={index === 0}
                  sizes="100vw"
                  quality={95}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* === Cinematic overlays === */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(12,10,9,0.55) 0%, rgba(12,10,9,0.15) 30%, rgba(12,10,9,0.35) 65%, rgba(12,10,9,0.92) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-20 pointer-events-none hidden lg:block"
        style={{
          background:
            'linear-gradient(90deg, rgba(12,10,9,0.55) 0%, rgba(12,10,9,0.2) 35%, rgba(12,10,9,0) 65%)',
        }}
      />
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* === Left rail: vertical brandline === */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-6">
        <span
          className="text-[10px] tracking-[0.4em] text-white/50 uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Est. Lonavala · Maharashtra
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* === Main content === */}
      <div className="relative z-30 h-full w-full">
        <div className="h-full max-w-[1400px] mx-auto px-6 lg:px-20 flex flex-col justify-end pb-32 lg:pb-40">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="h-px w-10 bg-white/50" />
            <span
              className="text-[10px] lg:text-[11px] tracking-[0.35em] uppercase text-white/80"
              style={{ fontWeight: 500 }}
            >
              A Boutique Retreat · Est. 2014
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-serif text-white tracking-tight"
            style={{
              fontSize: 'clamp(44px, 8vw, 112px)',
              lineHeight: 0.98,
              fontWeight: 300,
              letterSpacing: '-0.02em',
            }}
          >
            A hotel that feels
            <br />
            <span className="italic font-light text-[#E4007C]">like coming home.</span>
          </h1>

          {/* Description */}
          <p
            className="mt-8 lg:mt-10 max-w-xl text-white/80 leading-relaxed"
            style={{
              fontSize: 'clamp(14px, 1.05vw, 16px)',
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            Tucked into the hills of Lonavala, Reveniir is a slow, warm escape — sunlit
            rooms, a rooftop pool above the valley, and mornings that smell like the
            Sahyadris.
          </p>

          {/* CTAs */}
          <div className="mt-10 lg:mt-12 flex flex-wrap items-center gap-5 lg:gap-8">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
              className="group inline-flex items-center gap-3 bg-white text-neutral-900 px-7 lg:px-9 py-4 lg:py-[18px] text-[11px] lg:text-[12px] tracking-[0.25em] uppercase font-medium transition-all duration-500 hover:bg-[#E4007C] hover:text-white"
              style={{ cursor: 'pointer', borderRadius: 0 }}
            >
              <span>Reserve Your Stay</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            <a
              href="#rooms"
              className="group inline-flex items-center gap-2 text-white text-[11px] lg:text-[12px] tracking-[0.25em] uppercase font-medium pb-1 border-b border-white/30 hover:border-[#E4007C] hover:text-[#E4007C] transition-colors duration-500"
            >
              <span>Explore the Rooms</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom bar === */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="h-px bg-white/15" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-5 lg:py-7 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5 lg:gap-7 min-w-0">
            <span
              className="font-serif text-[#E4007C] text-2xl lg:text-3xl tabular-nums"
              style={{ fontWeight: 300 }}
            >
              {activeSlide.index}
            </span>
            <div className="h-8 w-px bg-white/20" />
            <div className="min-w-0">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">
                {activeSlide.label}
              </div>
              <div className="text-sm lg:text-[15px] text-white/90 font-light truncate">
                {activeSlide.caption}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 lg:gap-8 shrink-0">
            <div className="hidden sm:flex items-center gap-3">
              {HERO_SLIDES.map((s, i) => {
                const isActive = i === current
                return (
                  <button
                    key={s.index}
                    onClick={() => setCurrent(i)}
                    className="group flex items-center gap-2"
                    aria-label={`Slide ${s.index}`}
                  >
                    <span
                      className={cn(
                        'text-[11px] tabular-nums transition-colors duration-500',
                        isActive ? 'text-[#E4007C]' : 'text-white/35 group-hover:text-white/70'
                      )}
                    >
                      {s.index}
                    </span>
                    <div
                      className={cn(
                        'h-px transition-all duration-500 overflow-hidden',
                        isActive ? 'w-12 bg-[#E4007C]/40' : 'w-4 bg-white/15'
                      )}
                    >
                      {isActive && (
                        <div
                          className="h-full bg-[#E4007C]"
                          style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
                        />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#E4007C] hover:border-[#E4007C] transition-all duration-500"
                aria-label="Previous"
              >
                <ArrowRight size={15} className="rotate-180" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#E4007C] hover:border-[#E4007C] transition-all duration-500"
                aria-label="Next"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Top-right floating rating chip === */}
      <div className="absolute top-28 lg:top-32 right-6 lg:right-20 z-30 hidden md:flex flex-col items-end">
        <div className="flex items-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="#E4007C"
              className={i < 4 ? '' : 'opacity-50'}
            >
              <path d="M12 .587l3.668 7.568L24 9.75l-6 5.847 1.416 8.253L12 19.771l-7.416 4.079L6 15.597 0 9.75l8.332-1.595z" />
            </svg>
          ))}
        </div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">
          4.7 · 1,240 Guest Reviews
        </div>
      </div>
    </section>
  )
}