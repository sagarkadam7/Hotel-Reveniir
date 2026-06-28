'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { HOTEL, NAV_LINKS } from '@/data/hotel'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--resort-black)' }} className="pt-20 pb-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-white flex items-center justify-center" style={{ border: '2px solid var(--magenta)' }}>
                <Image src="/images/logo.jpg" alt="Hotel Reveniir Logo" width={42} height={42} style={{ objectFit: 'contain', borderRadius: '50%' }} />
              </div>
              <div>
                <div className="font-display font-semibold text-white" style={{ fontSize: '16px', letterSpacing: '0.05em' }}>
                  HOTEL <span style={{ color: 'var(--magenta)' }}>REVENIIR</span>
                </div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px' }}>
                  Riyo Hospitality
                </div>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: '1.85', fontWeight: 300, maxWidth: '260px' }}>
              A hillside hotel in Lonavala — warm rooms, a rooftop pool, and a team that keeps things simple.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-pink-400 transition-colors" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-blue-400 transition-colors" aria-label="Facebook"><Facebook size={17} /></a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--magenta)', marginBottom: '20px', fontWeight: 500 }}>
              Navigate
            </h4>
            <ul className="space-y-3 list-none">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', fontWeight: 300 }} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault()
                    window.dispatchEvent(new CustomEvent('open-booking'))
                  }}
                  style={{ fontSize: '13px', color: 'var(--magenta-light)', fontWeight: 300 }}
                  className="hover:text-white transition-colors"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--magenta)', marginBottom: '20px', fontWeight: 500 }}>
              Good for
            </h4>
            <ul className="space-y-3 list-none">
              {['Couples & honeymoons', 'Family getaways', 'Team offsites', 'Reunions & events', 'Monsoon trips', 'Weekend escapes'].map(item => (
                <li key={item}><span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>{item}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--magenta)', marginBottom: '20px', fontWeight: 500 }}>
              Get in touch
            </h4>
            <div className="space-y-4">
              <div className="flex gap-2.5">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-white/25" />
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: '1.7', fontWeight: 300 }}>{HOTEL.location}</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone size={13} className="flex-shrink-0 text-white/25" />
                <a href={`tel:${HOTEL.phone}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }} className="hover:text-white transition-colors">{HOTEL.phone}</a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail size={13} className="flex-shrink-0 text-white/25" />
                <a href={`mailto:${HOTEL.email}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }} className="hover:text-white transition-colors break-all">{HOTEL.email}</a>
              </div>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', marginTop: '12px', lineHeight: '1.6' }}>
                Check-in: {HOTEL.checkIn}<br />Check-out: {HOTEL.checkOut}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.18)', fontWeight: 300 }}>
            © {new Date().getFullYear()} Hotel Reveniir · Managed by Riyo Hospitality · Lonavala
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms', 'TripAdvisor'].map(item => (
              <a key={item} href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', fontWeight: 300 }} className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
