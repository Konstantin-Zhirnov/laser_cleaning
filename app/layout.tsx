import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Header } from './components/Header'

import './globals.css'

export const metadata: Metadata = {
  title: 'Industrial Laser Cleaning Services | LaserClean Pro',
  description:
    'Professional laser rust removal and industrial surface cleaning without chemicals or abrasives in Canada.',
  openGraph: {
    title: 'Industrial Laser Cleaning Services | LaserClean Pro',
    description: 'Professional laser rust removal and surface cleaning.',
    url: 'https://laser-cleaning.ca',
    siteName: 'LaserClean Pro',
    images: [{ url: 'https://laser-cleaning.ca/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Laser Cleaning Services',
    description: 'Laser rust removal & industrial cleaning Canada',
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
