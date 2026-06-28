'use client'

import { TESTIMONIALS } from '@/data/hotel'

type ReviewMarqueeProps = {
  variant?: 'compact' | 'cards'
  className?: string
}

function ReviewCard({ testimonial, compact }: { testimonial: typeof TESTIMONIALS[0]; compact?: boolean }) {
  if (compact) {
    return (
      <div
        className="flex items-center gap-4 shrink-0 px-5 py-3 rounded-full backdrop-blur-md"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div className="flex gap-0.5 shrink-0">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} style={{ color: 'var(--magenta-light)', fontSize: '11px' }}>★</span>
          ))}
        </div>
        <p className="font-display italic text-white/80 whitespace-nowrap" style={{ fontSize: '14px' }}>
          "{testimonial.quote.length > 72 ? `${testimonial.quote.slice(0, 72)}…` : testimonial.quote}"
        </p>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px' }}>·</span>
        <span className="text-[11px] text-white/50 whitespace-nowrap">
          {testimonial.author}
        </span>
      </div>
    )
  }

  return (
    <div
      className="shrink-0 w-[340px] md:w-[380px] text-left p-8 bg-white"
      style={{
        borderBottom: '3px solid',
        borderImage: 'linear-gradient(90deg, var(--magenta), var(--navy)) 1',
        boxShadow: '0 4px 24px rgba(18,16,14,0.06)',
      }}
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} style={{ color: 'var(--magenta)', fontSize: '14px', letterSpacing: '2px' }}>★</span>
        ))}
      </div>
      <p className="font-display font-light italic mb-6 leading-relaxed" style={{ fontSize: '17px', color: 'var(--resort-dark)', lineHeight: 1.75 }}>
        "{testimonial.quote}"
      </p>
      <div>
        <p className="text-xs font-medium text-[var(--resort-muted)]">
          {testimonial.author}
        </p>
        <p className="text-[11px] text-[var(--magenta)] mt-1">
          {testimonial.origin}
        </p>
      </div>
    </div>
  )
}

export default function ReviewMarquee({ variant = 'cards', className = '' }: ReviewMarqueeProps) {
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS]
  const gap = variant === 'compact' ? 'gap-4' : 'gap-6'

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`marquee-track ${gap}`}>
        {duplicated.map((t, i) => (
          <ReviewCard key={`${t.author}-${i}`} testimonial={t} compact={variant === 'compact'} />
        ))}
      </div>
    </div>
  )
}
