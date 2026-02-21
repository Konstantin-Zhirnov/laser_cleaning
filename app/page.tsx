import { Hero } from './components/Hero'
import { Trust } from './components/Trust'
import { Advantages } from './components/Advantages'
import { Purpose } from './components/Purpose'
import { Comparison } from './components/Comparison'
import { Contact } from './components/Contact'
import { ROI } from './components/ROI'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { ServiceArea } from './components/ServiceArea'
import { FinalCTA } from './components/FinalCTA'

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'LaserClean Pro',
    description: 'Industrial laser rust removal and surface cleaning services in Canada.',
    areaServed: 'Canada',
    geo: { '@type': 'GeoCoordinates', latitude: 43.65107, longitude: -79.347015 },
    serviceType: 'Industrial Laser Cleaning Services',
    url: 'https://laser-cleaning.ca',
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
