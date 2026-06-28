'use client'

import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import { Calendar, Users, BedDouble, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'
import { HOTEL, ROOM_TYPES_FORM } from '@/data/hotel'
import { getTomorrowDate, getDayAfterTomorrow } from '@/lib/utils'
import BookingModal from './BookingModal'

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState<Date | null>(getTomorrowDate())
  const [checkOut, setCheckOut] = useState<Date | null>(getDayAfterTomorrow())
  const [guests, setGuests] = useState('2 Guests')
  const [roomType, setRoomType] = useState('Any Room')
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent
      if (customEvent.detail?.roomType) {
        setRoomType(customEvent.detail.roomType)
      }
      setModalOpen(true)
    }
    window.addEventListener('open-booking', handleOpen)
    return () => window.removeEventListener('open-booking', handleOpen)
  }, [])

  const handleCheck = () => {
    if (!checkIn || !checkOut) {
      toast.error('Pick your dates first.')
      return
    }
    if (checkOut <= checkIn) {
      toast.error('Check-out must be after check-in.')
      return
    }
    setModalOpen(true)
  }

  const field: React.CSSProperties = {
    flex: 1,
    padding: '22px 24px',
    borderRight: '1px solid rgba(255,255,255,0.06)',
    cursor: 'pointer',
    transition: 'background 0.2s',
  }
  const label: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '5px',
    fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase',
    color: 'var(--magenta-light)', fontWeight: 600, marginBottom: '6px',
  }
  const input: React.CSSProperties = {
    background: 'transparent', border: 'none', outline: 'none',
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '17px', fontWeight: 300, color: 'white',
    width: '100%', cursor: 'pointer', colorScheme: 'dark',
  }

  return (
    <>
      <div id="booking" style={{ background: 'var(--resort-dark)' }}>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="grid grid-cols-2 lg:grid-cols-5 w-full">
            <div className="hover:bg-white/[0.03] p-4 lg:p-6 border-b lg:border-b-0 border-r border-white/5 flex flex-col justify-center cursor-pointer">
              <div style={label}><Calendar size={9} />Check-In</div>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                minDate={new Date()}
                dateFormat="dd-MM-yyyy"
                className="w-full bg-transparent border-none outline-none font-display font-light text-[17px] text-white cursor-pointer"
                placeholderText="Select date"
              />
            </div>
            <div className="hover:bg-white/[0.03] p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center cursor-pointer">
              <div style={label}><Calendar size={9} />Check-Out</div>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                minDate={checkIn || new Date()}
                dateFormat="dd-MM-yyyy"
                className="w-full bg-transparent border-none outline-none font-display font-light text-[17px] text-white cursor-pointer"
                placeholderText="Select date"
              />
            </div>
            <div className="hover:bg-white/[0.03] p-4 lg:p-6 border-r border-white/5 flex flex-col justify-center cursor-pointer">
              <div style={label}><Users size={9} />Guests</div>
              <select value={guests} onChange={e => setGuests(e.target.value)} style={{ ...input, appearance: 'none' as any }}>
                {['1 Guest','2 Guests','3 Guests','4 Guests','4+ Guests'].map(g => (
                  <option key={g} value={g} style={{ background: 'var(--resort-dark)' }}>{g}</option>
                ))}
              </select>
            </div>
            <div className="hover:bg-white/[0.03] p-4 lg:p-6 lg:border-r border-white/5 flex flex-col justify-center cursor-pointer">
              <div style={label}><BedDouble size={9} />Room Type</div>
              <select value={roomType} onChange={e => setRoomType(e.target.value)} style={{ ...input, appearance: 'none' as any }}>
                {ROOM_TYPES_FORM.map(r => (
                  <option key={r} value={r} style={{ background: 'var(--resort-dark)' }}>{r}</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleCheck}
              className="col-span-2 lg:col-span-1 flex items-center justify-center gap-2 font-semibold uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:scale-95 py-5 lg:py-0"
              style={{
                background: 'linear-gradient(135deg, var(--magenta), var(--navy))',
                color: 'white', fontSize: '11px', letterSpacing: '0.18em',
                whiteSpace: 'nowrap', border: 'none', cursor: 'pointer',
              }}
            >
              Book Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <BookingModal
          checkIn={checkIn ? checkIn.toISOString().split('T')[0] : ''}
          checkOut={checkOut ? checkOut.toISOString().split('T')[0] : ''}
          guests={guests}
          roomType={roomType}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}
