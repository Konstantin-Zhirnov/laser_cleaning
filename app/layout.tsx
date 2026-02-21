import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Header } from './components/Header'

import './globals.css'

export const metadata: Metadata = {
  title: 'Laser Cleaning Services in Vancouver Island | Rust & Paint Removal',
  description:
    'Mobile laser cleaning services for local businesses and homeowners on Vancouver Island. Rust removal, paint stripping, and surface restoration — no chemicals, no damage.',
  openGraph: {
    title: 'Laser Cleaning Services | Vancouver Island',
    description:
      'Professional on-site laser rust and paint removal for businesses and residential clients on Vancouver Island.',
    url: 'https://laser-cleaning-jl9n.vercel.app/',
    siteName: 'LaserClean Pro',
    images: [
      {
        url: 'https://laser-cleaning-jl9n.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 800,
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laser Cleaning Services | Vancouver Island',
    description: 'On-site laser rust and paint removal for businesses and homeowners.',
    images: ['https://laser-cleaning.ca/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  )
}
