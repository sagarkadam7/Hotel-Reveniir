'use client'

import { MapPin, ExternalLink } from 'lucide-react'
import { HOTEL, DISTANCES } from '@/data/hotel'
import { useFadeUp } from '@/hooks/useFadeUp'
import { cn } from '@/lib/utils'

export default function Location() {
  const { ref: textRef, inView: textVisible } = useFadeUp()
  const { ref: mapRef, inView: mapVisible } = useFadeUp({ threshold: 0.1 })

  return (
    <section id="location" className="py-24 lg:py-32 px-6 lg:px-16" style={{ background: 'var(--resort-dark)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <div ref={textRef} className={cn('transition-all duration-700', textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <p className="section-label mb-4">Getting here</p>
          <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.1 }}>
            Easy to find.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--magenta-light)' }}>Hard to leave.</em>
          </h2>

          <div className="divider-brand my-7" />

          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.85', marginBottom: '28px', fontWeight: 300 }}>
            We&apos;re just off the Mumbai–Pune Expressway in Gold Valley, Tungarli — straightforward to reach by car. Coming by train? Lonavala station is about 4 km away. Ask us for a pickup when you book and we&apos;ll arrange it.
          </p>

          <div className="mb-8">
            {DISTANCES.map((d) => (
              <div key={d.place} className="flex justify-between items-center py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>{d.place}</span>
                <span className="font-display font-light" style={{ fontSize: '18px', color: 'var(--magenta-light)' }}>{d.km} km</span>
              </div>
            ))}
          </div>

          <a href={HOTEL.googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
            <MapPin size={14} />
            Open in Google Maps
            <ExternalLink size={12} />
          </a>
        </div>

        <div
          ref={mapRef}
          className={cn('transition-all duration-700 delay-200 overflow-hidden', mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
          style={{ height: '460px', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <iframe
            src={HOTEL.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, opacity: 0.88 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Reveniir Location"
          />
        </div>
      </div>
    </section>
  )
}
