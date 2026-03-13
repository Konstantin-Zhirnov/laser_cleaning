import { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'

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
    url: 'https://laser-cleaning.ca',
    siteName: 'LaserClean Pro',
    images: [
      {
        url: 'https://laser-cleaning.ca/images/og-image.jpg',
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
    images: ['https://laser-cleaning.ca/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17852461067"
          strategy="afterInteractive"
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17852461067');
          `}
        </Script>
      </body>
    </html>
  )
}
