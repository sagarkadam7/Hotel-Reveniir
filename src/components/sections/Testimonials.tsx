'use client'

import { useFadeUp } from '@/hooks/useFadeUp'
import { cn } from '@/lib/utils'
import { HOTEL } from '@/data/hotel'
import ReviewMarquee from '@/components/ui/ReviewMarquee'

export default function Testimonials() {
  const { ref: headerRef, inView: headerVisible } = useFadeUp()

  // Updated with authentic, high-quality South Asian/Indian portraits from Unsplash
  const guestAvatars = [
    "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=150&h=150&q=80", // Woman
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=150&h=150&q=80", // Man
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80", // Woman
    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=150&h=150&q=80", // Man
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80", // Woman
  ]

  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-14">
        <div
          ref={headerRef}
          className={cn('transition-all duration-700', headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
        >
          <p className="section-label mb-4 uppercase tracking-widest text-sm font-semibold text-gray-500">
            Guest reviews
          </p>
          <h2
            className="font-display font-light mx-auto"
            style={{ fontSize: 'clamp(28px,4vw,48px)', color: 'var(--resort-dark)', lineHeight: 1.1 }}
          >
            Hear it from<br />
            <em style={{ fontStyle: 'italic', color: 'var(--resort-muted)' }}>people who&apos;ve stayed</em>
          </h2>
          <div className="divider-brand mx-auto mt-6" />
        </div>
      </div>

      {/* Infinite horizontal review scroll */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--cream), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--cream), transparent)' }}
        />
        <ReviewMarquee variant="cards" />
      </div>

      {/* Trust & Social Proof Section */}
      <div className="mt-14 flex flex-col items-center gap-4 px-6">
        
        {/* Overlapping Avatar Stack */}
        <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
          {guestAvatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Recent guest"
              className="w-12 h-12 rounded-full border-2 object-cover shadow-sm hover:-translate-y-1 transition-transform duration-200"
              style={{ borderColor: 'var(--cream)' }}
              loading="lazy"
            />
          ))}
          {/* "And more" indicator */}
          <div 
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-xs font-semibold shadow-sm z-10 relative"
            style={{ 
              borderColor: 'var(--cream)', 
              backgroundColor: 'var(--resort-dark)', 
              color: 'var(--cream)' 
            }}
          >
            200+
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: 'var(--magenta)', fontSize: '18px' }}>★</span>
            ))}
          </div>
          <p style={{ fontSize: '14px', color: 'var(--resort-muted)' }}>
            <strong style={{ color: 'var(--resort-dark)' }}>{HOTEL.rating} out of 5</strong> Stars
          </p>
        </div>
      </div>
    </section>
  )
}