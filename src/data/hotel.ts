export const HOTEL = {
  name: 'Hotel Reveniir',
  tagline: 'Managed by Riyo Hospitality',
  subTagline: 'Your quiet corner in the Lonavala hills',
  location: 'Plot No. 5, Gold Valley Sector D, Tungarli, Lonavala, Maharashtra 410403',
  phone: '+91 21140 00000',
  whatsapp: '912114000000',
  email: 'reservations@hotelreveniir.com',
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  rating: 4.7,
  totalRooms: 32,
  yearEstablished: 2018,
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.5!2d73.403!3d18.755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801bb2590c397%3A0x99a16ed6c577155!2sTreebo%20Reveniir%20Resort%20With%20Pool!5e0!3m2!1sen!2sin!4v1',
  googleMapsLink: 'https://maps.app.goo.gl/Ya6e6X6ikupnTEFG8',
}

export const NAV_LINKS = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'Dining', href: '#dining' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
]

export const ROOMS = [
  {
    id: 'premium-suite',
    type: 'Guest favourite',
    name: 'Premium King Suite',
    description: 'Our most-loved room — a king bed you sink into, a little sitting corner, and a balcony that looks straight out over the green valley. Ideal when you want the trip to feel special.',
    price: 6500,
    image: '/images/rooms/suite.jpg',
    features: ['King Bed', 'Private Balcony', 'AC', 'LED TV', 'Mini Bar', 'Valley View'],
    size: '460 sq ft',
    guests: 2,
  },
  {
    id: 'deluxe-double',
    type: 'Most booked',
    name: 'Deluxe Double Room',
    description: 'Warm colours, comfortable beds, and everything you need for a proper night\'s sleep. Couples and small families pick this one again and again — simple, cosy, reliable.',
    price: 4200,
    image: '/images/rooms/deluxe.jpg',
    features: ['King / Twin Bed', 'AC', 'LED TV', 'Garden View', 'Work Desk', 'En-Suite Bath'],
    size: '320 sq ft',
    guests: 2,
  },
  {
    id: 'superior-valley',
    type: 'Great value',
    name: 'Superior Valley View',
    description: 'All the essentials, done well — plus a balcony where the hills show up every morning. Honestly, that view alone makes the room worth it.',
    price: 3500,
    image: '/images/rooms/superior.jpg',
    features: ['Queen Bed', 'Balcony', 'AC', 'LED TV', 'Hill View', 'Wardrobe'],
    size: '280 sq ft',
    guests: 2,
  },
]

export const AMENITIES = [
  {
    icon: '🏊',
    name: 'Swimming Pool',
    description: 'A rooftop pool with the hills in the background. Open daily, 7am to 9pm — best enjoyed around sunset.',
  },
  {
    icon: '❄️',
    name: 'Air Conditioning',
    description: 'Every room has AC, so monsoon humidity or a cold winter night — you\'re covered either way.',
  },
  {
    icon: '🍽️',
    name: 'Restaurant & Bar',
    description: 'Home-style Indian food, familiar favourites, and a dining room that works just as well for a family dinner as a team lunch.',
  },
  {
    icon: '🎉',
    name: 'Events & Gatherings',
    description: 'Corporate offsite, family reunion, small wedding — tell us what you need and we\'ll handle the rest.',
  },
  {
    icon: '📶',
    name: 'Free WiFi',
    description: 'Decent WiFi across the property. Connect and get on with your holiday — or your work call, we won\'t judge.',
  },
  {
    icon: '🌿',
    name: 'Garden & Terrace',
    description: 'Palm trees, open terraces, and balconies where you can sit with a cup of chai and do absolutely nothing.',
  },
]

export const GALLERY_IMAGES = [
  { src: '/images/amenities/pool.jpg', alt: 'Rooftop swimming pool at dusk', category: 'Pool' },
  { src: '/images/amenities/restaurant.jpg', alt: 'Restaurant dining hall', category: 'Dining' },
  { src: '/images/rooms/suite.jpg', alt: 'Premium suite interior', category: 'Rooms' },
  { src: '/images/gallery/gathering.jpg', alt: 'Guests by the pool', category: 'Pool' },
  { src: '/images/amenities/breakfast.jpg', alt: 'Morning breakfast spread', category: 'Dining' },
  { src: '/images/rooms/deluxe.jpg', alt: 'Deluxe double room', category: 'Rooms' },
  { src: '/images/rooms/superior.jpg', alt: 'Superior room with balcony', category: 'Rooms' },
  { src: '/images/gallery/balcony.jpg', alt: 'Balcony view over the valley', category: 'Rooms' },
]

export const TESTIMONIALS = [
  {
    quote: "One of the best weekend trips we've had from Mumbai. Spotless room, unreal balcony view, and the staff remembered our names by day two. That says a lot.",
    author: 'Priya & Rajan Mehta',
    origin: 'Mumbai · Anniversary trip',
    rating: 5,
  },
  {
    quote: "We brought 22 colleagues for an offsite and everything just worked. Good food, a lovely pool in the evening, and a team that never made us feel rushed.",
    author: 'Arjun Sharma',
    origin: 'Pune · Team offsite',
    rating: 5,
  },
  {
    quote: "Lonavala has plenty of hotels, but Reveniir feels quieter and more personal. The breakfast every morning was a highlight — we're already planning to go back.",
    author: 'Neha Kulkarni',
    origin: 'Nagpur · Weekend away',
    rating: 5,
  },
  {
    quote: "The rooftop pool at sunset — I'll remember that for a long time. Kids had a blast, we got our quiet, and room service was quick without feeling impersonal.",
    author: 'Deepak & Ananya Patel',
    origin: 'Ahmedabad · Family holiday',
    rating: 5,
  },
  {
    quote: "Booked last minute for a monsoon weekend and it turned out better than we hoped. Misty views, chai on the balcony, staff who actually listen.",
    author: 'Rohit Desai',
    origin: 'Mumbai · Monsoon break',
    rating: 5,
  },
  {
    quote: "Hosted our small reception here and it went smoothly — décor, food, guest rooms, all handled. Felt like a boutique place, not a big chain.",
    author: 'Sneha & Vikram Iyer',
    origin: 'Pune · Celebration',
    rating: 5,
  },
]

export const DISTANCES = [
  { place: 'Lonavala Railway Station', km: '4' },
  { place: 'Mumbai (via Expressway)', km: '83' },
  { place: 'Pune', km: '65' },
  { place: 'Bhushi Dam', km: '5' },
  { place: "Tiger's Leap", km: '11' },
  { place: 'Kune Falls', km: '8' },
]

export const ROOM_TYPES_FORM = [
  'Any room',
  'Premium King Suite — ₹6,500/night',
  'Deluxe Double Room — ₹4,200/night',
  'Superior Valley View — ₹3,500/night',
]
