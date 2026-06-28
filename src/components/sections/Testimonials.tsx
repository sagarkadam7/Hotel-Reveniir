'use client'

import { useFadeUp } from '@/hooks/useFadeUp'
import { cn } from '@/lib/utils'
import { HOTEL } from '@/data/hotel'
import ReviewMarquee from '@/components/ui/ReviewMarquee'

export default function Testimonials() {
  const { ref: headerRef, inView: headerVisible } = useFadeUp()

  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center mb-14">
        <div
          ref={headerRef}
          className={cn('transition-all duration-700', headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
        >
          <p className="section-label mb-4">Guest reviews</p>
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

      <div className="mt-14 flex flex-col items-center gap-2 px-6">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: 'var(--magenta)', fontSize: '16px' }}>★</span>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: 'var(--resort-muted)' }}>
          <strong style={{ color: 'var(--resort-dark)' }}>{HOTEL.rating} out of 5</strong> from 200+ Google reviews
        </p>
      </div>
    </section>
  )
}
