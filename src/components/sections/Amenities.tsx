'use client'

import Image from 'next/image'
import { AMENITIES } from '@/data/hotel'
import { useFadeUp } from '@/hooks/useFadeUp'
import { cn } from '@/lib/utils'

export default function Amenities() {
  const { ref: textRef, inView: textVisible } = useFadeUp()
  const { ref: imgRef, inView: imgVisible } = useFadeUp({ threshold: 0.08 })

  return (
    <section id="amenities" className="py-24 lg:py-32 px-6 lg:px-16" style={{ background: 'var(--cream-dark)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Text */}
        <div ref={textRef} className={cn('transition-all duration-700', textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <p className="section-label mb-4">What we offer</p>
          <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px,3.5vw,48px)', lineHeight: 1.1, color: 'var(--resort-dark)' }}>
            The small things that<br />
            make a stay<br />
            <em style={{ fontStyle: 'italic', color: 'var(--magenta)' }}>worth remembering</em>
          </h2>

          <div className="divider-brand my-7" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
            {AMENITIES.map((a, i) => (
              <div
                key={a.name}
                className="pb-6"
                style={{ borderBottom: '1px solid rgba(0,0,0,0.07)', transitionDelay: `${i * 60}ms` }}
              >
                <div className="text-3xl mb-3 leading-none">{a.icon}</div>
                <h4 className="font-display font-light mb-1.5" style={{ fontSize: '19px', color: 'var(--resort-dark)' }}>
                  {a.name}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--resort-muted)', lineHeight: '1.65', fontWeight: 300 }}>
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div
          ref={imgRef}
          className={cn('relative hidden lg:block transition-all duration-700 delay-200', imgVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
          style={{ height: '620px' }}
        >
          <div className="absolute top-0 right-0 overflow-hidden" style={{ width: '78%', height: '400px' }}>
            <Image src="/images/amenities/events.jpg" alt="Events at the pool" fill style={{ objectFit: 'cover' }} sizes="40vw" />
          </div>
          <div className="absolute bottom-0 left-0 overflow-hidden z-10" style={{ width: '55%', height: '300px', border: '5px solid var(--cream-dark)' }}>
            <Image src="/images/gallery/balcony.jpg" alt="Balcony view" fill style={{ objectFit: 'cover' }} sizes="25vw" />
          </div>
          <div
            className="absolute z-20 flex flex-col items-center justify-center text-center"
            style={{
              bottom: '60px', right: '0',
              width: '118px', height: '118px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--magenta), var(--navy))',
            }}
          >
            <span className="font-display font-light text-white" style={{ fontSize: '28px', lineHeight: 1 }}>5★</span>
            <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px', fontWeight: 600 }}>
              Treebo<br />Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
