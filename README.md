# Reveniir Resort Website 🏨

Premium hotel website for **Reveniir Resort & Spa, Lonavala** built with Next.js 14, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
reveniir-resort/
├── public/
│   └── images/
│       ├── hero.jpg              # Hero section
│       ├── rooms/
│       │   ├── suite.jpg         # Premium King Suite
│       │   ├── deluxe.jpg        # Deluxe Double
│       │   ├── superior.jpg      # Superior Valley View
│       │   └── standard.jpg      # Standard Room
│       ├── amenities/
│       │   ├── pool.jpg          # Swimming pool
│       │   └── events.jpg        # Events/gatherings
│       └── gallery/
│           ├── balcony.jpg
│           ├── lounge.jpg
│           ├── gathering.jpg
│           └── ...
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout + SEO metadata
│   │   ├── page.tsx              # Main page assembler
│   │   └── globals.css           # Tailwind + global styles
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky nav + mobile menu
│   │   │   └── Footer.tsx        # Full footer
│   │   │
│   │   └── sections/
│   │       ├── Hero.tsx          # Parallax hero
│   │       ├── BookingBar.tsx    # Date picker + WhatsApp booking
│   │       ├── Intro.tsx         # About section
│   │       ├── Rooms.tsx         # Room cards with pricing
│   │       ├── Amenities.tsx     # Facilities grid
│   │       ├── Gallery.tsx       # Photo gallery + lightbox
│   │       ├── Testimonials.tsx  # Guest reviews
│   │       ├── CtaBanner.tsx     # Book now banner
│   │       └── Location.tsx      # Google Maps + directions
│   │
│   ├── data/
│   │   └── hotel.ts              # ⚙️ ALL content lives here (edit this)
│   │
│   ├── hooks/
│   │   ├── useScrolled.ts        # Navbar scroll detection
│   │   └── useFadeUp.ts          # Scroll-reveal animations
│   │
│   └── lib/
│       └── utils.ts              # Helpers (formatPrice, WhatsApp URL, etc.)
```

---

## ⚙️ Customise Content

**All hotel data is in one file:** `src/data/hotel.ts`

Update these before delivery:

```ts
export const HOTEL = {
  phone: '+91 XXXXX XXXXX',       // ← Real phone number
  whatsapp: '91XXXXXXXXXX',       // ← WhatsApp number (no + or spaces)
  email: 'info@yourhotel.com',    // ← Real email
  // ...
}
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Intersection Observer | Scroll reveals |
| React Hot Toast | Notifications |
| Lucide React | Icons |
| next/image | Optimised images |

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys.

---

## 📱 Features

- ✅ Fully responsive — mobile, tablet, desktop
- ✅ SEO optimised — meta tags, OpenGraph, Twitter cards
- ✅ WhatsApp booking integration
- ✅ Parallax hero with real hotel photos
- ✅ Animated scroll reveals
- ✅ Photo lightbox gallery
- ✅ Google Maps embed
- ✅ Sticky navbar with scroll behaviour
- ✅ Mobile hamburger menu
- ✅ Next.js Image optimisation (WebP/AVIF)
- ✅ Accessible (focus states, aria labels, semantic HTML)
