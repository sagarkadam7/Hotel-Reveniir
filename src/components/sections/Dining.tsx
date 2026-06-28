'use client'

import Image from 'next/image'
import { useFadeUp } from '@/hooks/useFadeUp'
import { cn } from '@/lib/utils'

export default function Dining() {
  const { ref: leftRef, inView: leftVisible } = useFadeUp()
  const { ref: rightRef, inView: rightVisible } = useFadeUp({ threshold: 0.1 })

  return (
    <section id="dining" className="py-24 lg:py-32 px-6 lg:px-16" style={{ background: 'var(--resort-dark)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Food & dining</p>
          <h2
            className="font-display font-light text-white mx-auto"
            style={{ fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.1 }}
          >
            Food that tastes like<br />
            <em style={{ fontStyle: 'italic', color: 'var(--magenta-light)' }}>someone cared</em>
          </h2>
          <div className="divider-brand mx-auto mt-6" />
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          {/* Restaurant */}
          <div
            ref={leftRef}
            className={cn('relative overflow-hidden group cursor-pointer transition-all duration-700 h-[380px] sm:h-[440px] lg:h-[520px]', leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
          >
            <Image
              src="/images/amenities/restaurant.jpg"
              alt="Our restaurant dining hall"
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
              className="group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10"
              style={{ background: 'linear-gradient(to top, rgba(18,16,14,0.95) 0%, rgba(18,16,14,0.2) 60%, transparent 100%)' }}
            >
              <div
                className="inline-block self-start px-3 py-1 mb-4 text-[10px] font-semibold tracking-widest uppercase"
                style={{ background: 'var(--magenta)', color: 'white', letterSpacing: '0.2em' }}
              >
                Restaurant
              </div>
              <h3 className="font-display font-light text-white mb-3" style={{ fontSize: '28px' }}>
                The dining room
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', fontWeight: 300, maxWidth: '380px' }}>
                Arched windows, long tables for families, and a menu that mixes Maharashtrian home cooking with the Indian dishes you already know and like. Works well for groups.
              </p>
              <div className="flex gap-4 mt-5">
                {['Multi-cuisine', 'Group seating', 'Live cooking'].map(tag => (
                  <span key={tag} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Breakfast */}
          <div
            ref={rightRef}
            className={cn('relative overflow-hidden group cursor-pointer transition-all duration-700 delay-150 h-[380px] sm:h-[440px] lg:h-[520px]', rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
          >
            <Image
              src="/images/amenities/breakfast.jpg"
              alt="Morning breakfast spread"
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
              className="group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10"
              style={{ background: 'linear-gradient(to top, rgba(18,16,14,0.95) 0%, rgba(18,16,14,0.2) 60%, transparent 100%)' }}
            >
              <div
                className="inline-block self-start px-3 py-1 mb-4 text-[10px] font-semibold tracking-widest uppercase"
                style={{ background: 'var(--navy)', color: 'white', letterSpacing: '0.2em' }}
              >
                Breakfast Buffet
              </div>
              <h3 className="font-display font-light text-white mb-3" style={{ fontSize: '28px' }}>
                Breakfast, sorted
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', fontWeight: 300, maxWidth: '380px' }}>
                Parathas, eggs, toast, fruit, and chai — laid out every morning so you don&apos;t have to think about it. The spread shifts with the season, which keeps things interesting.
              </p>
              <div className="flex gap-4 mt-5">
                {['Included', 'Seasonal', '7am – 10:30am'].map(tag => (
                  <span key={tag} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center mt-8" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
          Vegetarian, vegan, or something specific? Mention it when you book — we&apos;ll sort it out.
        </p>
      </div>
    </section>
  )
}
