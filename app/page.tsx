import { Hero } from './components/Hero'
import { Trust } from './components/Trust'
import { Advantages } from './components/Advantages'
import { Purpose } from './components/Purpose'
import { Comparison } from './components/Comparison'
import { ROI } from './components/ROI'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { ServiceArea } from './components/ServiceArea'
import { FinalCTA } from './components/FinalCTA'

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Laser Cleaning',
    image: 'https://laser-cleaning.ca/images/og-image.jpg',
    url: 'https://laser-cleaning.ca',
    telephone: '+1-250-797-2834',
    description:
      'Professional laser cleaning services for local businesses and homeowners on Vancouver Island. Rust removal, paint stripping, grease and surface restoration without chemicals or surface damage.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver Island',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Vancouver Island, British Columbia',
    },
    serviceType: [
      'Laser rust removal',
      'Paint removal',
      'Surface preparation',
      'Graffiti removal',
      'Grease and oil cleaning',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Hero />

      <Trust />

      <Advantages />

      <Purpose />

      <Comparison />

      <ROI />

      <WhyChooseUs />

      <Process />

      <ServiceArea />

      <FinalCTA />
    </>
  )
}
