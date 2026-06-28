'use client'

import Image from 'next/image'
import { useFadeUp } from '@/hooks/useFadeUp'
import { cn } from '@/lib/utils'
import { HOTEL } from '@/data/hotel'

export default function Intro() {
  const { ref: textRef, inView: textVisible } = useFadeUp()
  const { ref: imgRef, inView: imgVisible } = useFadeUp({ threshold: 0.1 })

  const stats = [
    { num: `${HOTEL.totalRooms}+`, label: 'Rooms & suites' },
    { num: `${HOTEL.rating}★`, label: 'On Google' },
    { num: `${new Date().getFullYear() - HOTEL.yearEstablished}+`, label: 'Years welcoming guests' },
  ]

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-16" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

        {/* Text */}
        <div ref={textRef} className={cn('transition-all duration-700', textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <p className="section-label mb-4">About us</p>
          <h2
            className="font-display font-light"
            style={{ fontSize: 'clamp(30px,3.5vw,50px)', color: 'var(--resort-dark)', lineHeight: 1.1 }}
          >
            We built this place<br />
            for people who need<br />
            <em style={{ fontStyle: 'italic', color: 'var(--magenta)' }}>a proper break</em>
          </h2>

          <div className="divider-brand my-7" />

          <p style={{ fontSize: '15px', color: 'var(--resort-muted)', lineHeight: '1.9', marginBottom: '18px' }}>
            Hotel Reveniir is located in Gold Valley, Tungarli – a peaceful location in Lonavala featuring palm trees and colonial buildings of white color. Our hotel seems luxurious from the outside. However, once inside, one feels comfortable enough to rest properly. This was our main aim.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--resort-muted)', lineHeight: '1.9' }}>
            Managed by Riyo Hospitality since 2018, our guests include families from Mumbai and Pune, couples on their weekend getaway, office teams and sometimes even solo travelers who need some breathing space. We are happy to note that some of them visit us during every monsoon season.
          </p>

          <div className="flex gap-10 mt-12 pt-10" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="font-display font-light"
                  style={{ fontSize: '42px', color: 'var(--magenta)', lineHeight: 1 }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--resort-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '4px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div
          ref={imgRef}
          className={cn('relative hidden lg:block transition-all duration-700 delay-200', imgVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
          style={{ height: '520px' }}
        >
          <Image
            src="/images/amenities/pool.jpg"
            alt="Rooftop pool at Hotel Reveniir"
            fill
            style={{ objectFit: 'cover' }}
            sizes="50vw"
          />
          <div
            className="absolute z-10 overflow-hidden"
            style={{ bottom: '-28px', left: '-28px', width: '180px', height: '240px', border: '5px solid var(--cream)' }}
          >
            <Image src="/images/amenities/pool.jpg" alt="Pool" fill style={{ objectFit: 'cover' }} sizes="180px" />
          </div>

          {/* Brand badge */}
          <div
            className="absolute z-20 flex flex-col items-center justify-center text-center"
            style={{
              top: '-20px', right: '-20px',
              width: '96px', height: '96px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--magenta), var(--navy))',
            }}
          >
            <span className="font-display font-light text-white" style={{ fontSize: '20px', lineHeight: 1 }}>4.7★</span>
            <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px', fontWeight: 600 }}>Google</span>
          </div>
        </div>
      </div>
    </section>
  )
}
