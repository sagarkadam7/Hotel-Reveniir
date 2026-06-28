import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}

export function buildWhatsAppUrl(message: string, number: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function formatDateForWhatsApp(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function getTomorrowDate(): Date {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d
}

export function getDayAfterTomorrow(): Date {
  const d = new Date()
  d.setDate(d.getDate() + 2)
  return d
}
