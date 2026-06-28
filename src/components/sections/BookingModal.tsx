'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { HOTEL } from '@/data/hotel'
import { buildWhatsAppUrl, formatDateForWhatsApp } from '@/lib/utils'

interface Props {
  checkIn: string
  checkOut: string
  guests: string
  roomType: string
  onClose: () => void
}

export default function BookingModal({ checkIn, checkOut, guests, roomType, onClose }: Props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [special, setSpecial] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const nights = checkIn && checkOut
    ? Math.max(1, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 1

  const handleWhatsApp = () => {
    if (!name.trim() || !phone.trim()) {
      toast.error('Please enter your name and phone number.')
      return
    }
    const ci = new Date(checkIn)
    const co = new Date(checkOut)
    const msg = `Hello Hotel Reveniir! 🙏\n\nI'd like to make a booking:\n\n👤 Name: ${name}\n📞 Phone: ${phone}${email ? `\n📧 Email: ${email}` : ''}\n\n📅 Check-in: ${formatDateForWhatsApp(ci)}\n📅 Check-out: ${formatDateForWhatsApp(co)}\n🌙 Nights: ${nights}\n👥 Guests: ${guests}\n🛏 Room: ${roomType}${special ? `\n\n💬 Special requests: ${special}` : ''}\n\nPlease confirm availability. Thank you!`
    window.open(buildWhatsAppUrl(msg, HOTEL.whatsapp), '_blank')
    setSubmitted(true)
  }

  const handleCall = () => {
    window.open(`tel:${HOTEL.phone}`)
  }

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        style={{ background: 'var(--cream)', borderRadius: '0' }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-8 py-5"
          style={{ background: 'linear-gradient(135deg, var(--magenta), var(--navy))', color: 'white' }}
        >
          <div>
            <h2 className="font-display font-light text-2xl text-white">Book your stay</h2>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginTop: '2px', letterSpacing: '0.05em' }}>
              Hotel Reveniir · Lonavala
            </p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors p-1">
            <X size={22} />
          </button>
        </div>

        {!submitted ? (
          <div className="p-8">
            {/* Booking summary */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-0 mb-8"
              style={{ border: '1px solid rgba(0,0,0,0.08)' }}
            >
              {[
                { label: 'Check-In', val: checkIn ? new Date(checkIn).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—' },
                { label: 'Check-Out', val: checkOut ? new Date(checkOut).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '—' },
                { label: 'Nights', val: String(nights) },
                { label: 'Guests', val: guests },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="text-center py-4 px-3"
                  style={{ borderRight: i < 3 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}
                >
                  <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--resort-muted)', fontWeight: 600, marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  <div className="font-display font-light" style={{ fontSize: '20px', color: 'var(--resort-dark)' }}>
                    {item.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Room type badge */}
            <div className="mb-8 flex items-center gap-2">
              <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--resort-muted)', fontWeight: 600 }}>
                Room:
              </span>
              <span
                className="px-3 py-1"
                style={{ background: 'rgba(224,21,122,0.08)', color: 'var(--magenta)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.05em' }}
              >
                {roomType}
              </span>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Priya Mehta"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your@email.com (optional)"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Any Special Requests?</label>
                <textarea
                  className="form-input resize-none"
                  rows={3}
                  placeholder="Early check-in, anniversary, dietary needs — anything helps"
                  value={special}
                  onChange={e => setSpecial(e.target.value)}
                />
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={handleWhatsApp} className="btn-primary flex-1 justify-center gap-2">
                <MessageCircle size={16} />
                Confirm on WhatsApp
              </button>
              <button onClick={handleCall} className="btn-outline-dark flex-1 justify-center gap-2">
                <Phone size={15} />
                Call instead
              </button>
            </div>

            <p style={{ fontSize: '12px', color: 'var(--resort-muted)', textAlign: 'center', marginTop: '16px', lineHeight: '1.6' }}>
              WhatsApp opens with your details pre-filled. We usually reply within 30 minutes.
            </p>
          </div>
        ) : (
          <div className="p-12 flex flex-col items-center text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ background: 'rgba(224,21,122,0.1)' }}
            >
              <CheckCircle size={40} style={{ color: 'var(--magenta)' }} />
            </div>
            <h3 className="font-display font-light text-3xl mb-3" style={{ color: 'var(--resort-dark)' }}>
              Message sent
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--resort-muted)', lineHeight: '1.7', maxWidth: '380px', marginBottom: '28px' }}>
              Your booking request is on WhatsApp. Our team will confirm your dates shortly — usually within 30 minutes.
            </p>
            <button onClick={onClose} className="btn-primary">
              Back to the site
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
