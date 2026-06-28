'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Maximize2, Users, ArrowRight } from 'lucide-react'
import { ROOMS } from '@/data/hotel'
import { useFadeUp } from '@/hooks/useFadeUp'
import { cn, formatPrice } from '@/lib/utils'
import BookingModal from './BookingModal'
import { getTomorrowDate, getDayAfterTomorrow } from '@/lib/utils'

export default function Rooms() {
  const { ref: headerRef, inView: headerVisible } = useFadeUp()
  const [modalRoom, setModalRoom] = useState<string | null>(null)

  const handleBook = (roomName: string) => setModalRoom(roomName)

  return (
    <>
      <section id="rooms" className="py-24 lg:py-32 px-6 lg:px-16" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div ref={headerRef} className={cn('flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6 transition-all duration-700', headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
            <div>
              <p className="section-label mb-4">Where You Sleep</p>
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(30px,4vw,52px)', lineHeight: 1.05, color: 'var(--resort-dark)' }}>
                Rooms that actually<br />
                <em style={{ fontStyle: 'italic', color: 'var(--resort-muted)' }}>let you rest</em>
              </h2>
              <div className="divider-brand mt-6" />
            </div>
            <a href="#booking" className="btn-primary flex-shrink-0">View All Rooms</a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            {ROOMS.map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} onBook={() => handleBook(room.name)} />
            ))}
          </div>
        </div>
      </section>

      {modalRoom && (
        <BookingModal
          checkIn={getTomorrowDate().toISOString().split('T')[0]}
          checkOut={getDayAfterTomorrow().toISOString().split('T')[0]}
          guests="2 Guests"
          roomType={modalRoom}
          onClose={() => setModalRoom(null)}
        />
      )}
    </>
  )
}

function RoomCard({ room, index, onBook }: { room: typeof ROOMS[0], index: number, onBook: () => void }) {
  const { ref, inView } = useFadeUp()
  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden group cursor-pointer transition-all duration-700', inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden" style={{ height: '500px' }}>
        <Image
          src={room.image}
          alt={room.name}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
          className="group-hover:scale-105"
          sizes="33vw"
        />
        <div
          className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300"
          style={{ background: 'linear-gradient(to top, rgba(10,8,6,1) 0%, rgba(10,8,6,0.88) 45%, rgba(10,8,6,0.45) 72%, rgba(10,8,6,0.08) 100%)' }}
        >
          <div
            className="inline-block self-start px-2.5 py-1 mb-3 text-[9px] font-semibold tracking-widest uppercase"
            style={{ background: 'linear-gradient(90deg, var(--magenta), var(--navy))', color: 'white', letterSpacing: '0.18em' }}
          >
            {room.type}
          </div>

          <h3 className="font-display font-light text-white mb-2" style={{ fontSize: '24px', lineHeight: 1.2 }}>
            {room.name}
          </h3>

          <p className="font-light mb-4 leading-relaxed" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.82)', lineHeight: 1.65 }}>
            {room.description}
          </p>

          <div className="flex gap-4 mb-4">
            <span className="flex items-center gap-1.5 text-white/65 text-xs"><Maximize2 size={10} />{room.size}</span>
            <span className="flex items-center gap-1.5 text-white/65 text-xs"><Users size={10} />{room.guests} Guests max</span>
          </div>

          <p className="text-white/75 text-sm mb-4">
            from <span className="font-display font-light text-white text-2xl">{formatPrice(room.price)}</span> / night
          </p>

          <button
            onClick={onBook}
            className="flex items-center gap-2 text-[11px] font-medium tracking-widest uppercase transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            style={{ color: 'var(--magenta-light)', letterSpacing: '0.18em', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            Book This Room <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}
