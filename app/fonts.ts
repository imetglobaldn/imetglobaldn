import { Poppins, Urbanist } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-poppins',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-urbanist',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})
