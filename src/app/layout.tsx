import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E0157A',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hotelreveniir.com'),
  title: 'Hotel Reveniir — Lonavala | Managed by Riyo Hospitality',
  description: 'A hillside hotel in Lonavala with a rooftop pool, cosy rooms, and valley views. About 2.5 hours from Mumbai. Book direct for the best rates.',
  keywords: ['Hotel Reveniir Lonavala', 'Riyo Hospitality', 'hotel with pool Lonavala', 'weekend getaway Mumbai Pune', 'Lonavala resort'],
  authors: [{ name: 'Hotel Reveniir' }],
  openGraph: {
    title: 'Hotel Reveniir — Your quiet corner in the hills',
    description: 'Lonavala hillside hotel with a pool, comfortable rooms and mountain views. Managed by Riyo Hospitality.',
    type: 'website',
    images: [{ url: '/images/amenities/pool.jpg', width: 1200, height: 630, alt: 'Rooftop pool at Hotel Reveniir' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Reveniir — Lonavala',
    description: 'Hillside hotel in Lonavala with a pool, good food and Sahyadri views.',
    images: ['/images/amenities/pool.jpg'],
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#12100E',
              color: '#FAF7F2',
              border: '1px solid #E0157A',
              fontFamily: 'Jost, sans-serif',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  )
}
