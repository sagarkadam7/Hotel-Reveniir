'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'
import { HOTEL } from '@/data/hotel'
import { useFadeUp } from '@/hooks/useFadeUp'
import { cn } from '@/lib/utils'
import BookingModal from './BookingModal'
import { getTomorrowDate, getDayAfterTomorrow } from '@/lib/utils'

export default function CtaBanner() {
  const { ref, inView } = useFadeUp({ threshold: 0.2 })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden" style={{ height: '460px' }}>
        <Image src="/images/amenities/pool.jpg" alt="Swimming pool" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'rgba(18,16,14,0.78)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(224,21,122,0.18), rgba(26,43,109,0.25))' }} />

        <div
          ref={ref}
          className={cn('relative z-10 h-full flex flex-col items-center justify-center text-center px-6 transition-all duration-700', inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
        >
          <p className="section-label mb-4">Plan your trip</p>
          <h2 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(30px,5vw,58px)', lineHeight: 1.1 }}>
            The hills are waiting.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--magenta-light)' }}>When are you coming?</em>
          </h2>
          <p className="font-light mb-10 max-w-md leading-relaxed" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}>
            Lonavala fills up fast on long weekends and during monsoon. Pick your dates now — it takes about two minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              <MessageCircle size={15} />
              Book in 2 minutes
            </button>
            <a href={`tel:${HOTEL.phone}`} className="btn-outline flex items-center gap-2">
              <Phone size={14} />
              Give us a call
            </a>
          </div>
        </div>
      </section>

      {modalOpen && (
        <BookingModal
          checkIn={getTomorrowDate().toISOString().split('T')[0]}
          checkOut={getDayAfterTomorrow().toISOString().split('T')[0]}
          guests="2 Guests"
          roomType="Any Room"
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}
