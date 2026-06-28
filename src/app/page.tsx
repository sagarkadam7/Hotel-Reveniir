import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BookingBar from '@/components/sections/BookingBar'
import Intro from '@/components/sections/Intro'
import Rooms from '@/components/sections/Rooms'
import Dining from '@/components/sections/Dining'
import Amenities from '@/components/sections/Amenities'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import CtaBanner from '@/components/sections/CtaBanner'
import Location from '@/components/sections/Location'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <BookingBar />
      <Intro />
      <Rooms />
      <Dining />
      <Amenities />
      <Gallery />
      <Testimonials />
      <CtaBanner />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
