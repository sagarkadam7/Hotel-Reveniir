'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
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
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400',
        )}
        style={{
          padding: scrolled ? '10px 48px' : '18px 48px',
          background: scrolled ? 'rgba(18,16,14,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline z-10 flex-shrink-0">
          <div
            className="overflow-hidden rounded-full flex-shrink-0 flex items-center justify-center"
            style={{
              width: scrolled ? '44px' : '54px',
              height: scrolled ? '44px' : '54px',
              transition: 'all 0.3s ease',
              background: 'white',
            }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Hotel Reveniir Logo"
              width={scrolled ? 38 : 48}
              height={scrolled ? 38 : 48}
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
          className="lg:hidden text-white p-2 z-10"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-400',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ background: 'rgba(18,16,14,0.98)', backdropFilter: 'blur(12px)' }}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="mb-4">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 bg-white flex items-center justify-center" style={{ borderColor: 'var(--magenta)' }}>
            <Image src="/images/logo.jpg" alt="Logo" width={72} height={72} style={{ objectFit: 'contain', borderRadius: '50%' }} />
          </div>
        </div>

        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-display text-4xl font-light text-white hover:text-pink-400 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}

        <button
          onClick={() => {
            setMobileOpen(false)
            window.dispatchEvent(new CustomEvent('open-booking'))
          }}
          className="btn-primary mt-4"
          style={{ border: 'none', cursor: 'pointer' }}
        >
          Book Now
        </button>
      </div>
    </>
  )
}
