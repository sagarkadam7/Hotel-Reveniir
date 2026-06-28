'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Phone, MessageSquare } from 'lucide-react'
import { useScrolled } from '@/hooks/useScrolled'
import { NAV_LINKS, HOTEL } from '@/data/hotel'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const scrolled = useScrolled(80)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 px-6 md:px-12 lg:px-16',
          scrolled ? 'py-2.5 shadow-md border-b' : 'py-4 md:py-6'
        )}
        style={{
          background: scrolled ? 'rgba(18, 16, 14, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderColor: 'rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline z-10 flex-shrink-0">
          <div
            className="overflow-hidden rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
            style={{
              width: scrolled ? '38px' : '48px',
              height: scrolled ? '38px' : '48px',
              borderColor: 'rgba(255, 255, 255, 0.25)',
            }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Hotel Reveniir Logo"
              width={scrolled ? 34 : 42}
              height={scrolled ? 34 : 42}
              style={{ objectFit: 'contain', borderRadius: '50%' }}
            />
          </div>
          <div className="hidden sm:block">
            <div
              className="font-display font-semibold leading-none"
              style={{
                fontSize: scrolled ? '16px' : '18px',
                color: 'white',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
              }}
            >
              HOTEL <span style={{ color: 'var(--magenta)' }}>REVENIIR</span>
            </div>
            <div
              style={{
                fontSize: '9px',
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                marginTop: '2px',
              }}
            >
              Managed by Riyo Hospitality
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
          <li>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
              className="btn-primary"
              style={{ padding: '10px 24px', fontSize: '11px', border: 'none', cursor: 'pointer' }}
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white flex items-center justify-center z-10 rounded-full border transition-all duration-300 hover:bg-white/10 active:scale-95"
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.06)',
            borderColor: 'rgba(255, 255, 255, 0.16)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)'
          }}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 transition-all duration-500',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ background: 'rgba(10, 8, 6, 0.90)', backdropFilter: 'blur(24px)' }}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="mb-2">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 bg-white flex items-center justify-center" style={{ borderColor: 'var(--magenta)' }}>
            <Image src="/images/logo.jpg" alt="Logo" width={72} height={72} style={{ objectFit: 'contain', borderRadius: '50%' }} />
          </div>
        </div>

        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "font-display text-3xl font-light text-white hover:text-[var(--magenta-light)] transition-all duration-300",
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: mobileOpen ? `${i * 75}ms` : '0ms' }}
          >
            {link.label}
          </a>
        ))}

        <button
          onClick={() => {
            setMobileOpen(false)
            window.dispatchEvent(new CustomEvent('open-booking'))
          }}
          className="btn-primary mt-2"
          style={{ border: 'none', cursor: 'pointer' }}
        >
          Book Now
        </button>

        <div className="flex flex-col items-center gap-2 mt-6 pt-6 border-t border-white/5 w-48 text-center text-xs text-white/40">
          <a href={`tel:${HOTEL.phone}`} className="hover:text-white transition-colors flex items-center gap-1.5">
            <Phone size={10} /> +91 {HOTEL.phone}
          </a>
          <a href={`https://wa.me/${HOTEL.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
            <MessageSquare size={10} /> Chat on WhatsApp
          </a>
          <span className="text-[9px] uppercase tracking-widest mt-1">Gold Valley, Lonavala</span>
        </div>
      </div>
    </>
  )
}
