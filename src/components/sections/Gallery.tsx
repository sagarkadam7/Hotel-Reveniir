'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { GALLERY_IMAGES } from '@/data/hotel'
import { cn } from '@/lib/utils'

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

  const open = (src: string, alt: string) => { setLightboxSrc(src); setLightboxAlt(alt) }
  const close = () => setLightboxSrc(null)

  return (
    <>
      <section id="gallery" style={{ background: 'var(--resort-dark)' }} className="py-16 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <p className="section-label mb-4">Photo gallery</p>
          <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(28px,3.5vw,48px)' }}>
            A look around<br />
            <em style={{ fontStyle: 'italic', color: 'var(--magenta-light)' }}>before you visit</em>
          </h2>
          <div className="divider-brand mx-auto mt-6" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0.5">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={cn(
                'relative overflow-hidden group cursor-pointer w-full',
                i === 0 ? 'col-span-2 row-span-2 h-[320px] sm:h-[420px] md:h-[562px]' : 'h-[180px] sm:h-[220px] md:h-[280px]'
              )}
              onClick={() => open(img.src, img.alt)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="group-hover:scale-105"
                sizes={i === 0 ? '50vw' : '25vw'}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <ZoomIn size={22} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
                <span className="text-white/0 group-hover:text-white/80 transition-all duration-300 text-[9px] uppercase tracking-widest">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(4px)' }}
          onClick={close}
        >
          <button onClick={close} className="absolute top-6 right-8 text-white/70 hover:text-white transition-colors" aria-label="Close">
            <X size={32} />
          </button>
          <div
            className="relative"
            style={{ maxWidth: '90vw', maxHeight: '88vh', width: '1100px', height: '720px' }}
            onClick={e => e.stopPropagation()}
          >
            <Image src={lightboxSrc} alt={lightboxAlt} fill style={{ objectFit: 'contain' }} sizes="90vw" />
          </div>
        </div>
      )}
    </>
  )
}
