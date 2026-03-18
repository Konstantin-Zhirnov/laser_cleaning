import { Wrapper } from '../Wrapper'
import { Card } from '../Card'

import styles from './Purpose.module.css'

const apps = [
  { title: 'Auto repair & body shops', img: '/images/auto_repair.webp' },
  { title: 'Contractors & builders', img: '/images/contractors.webp' },
  { title: 'Property maintenance companies', img: '/images/property.webp' },
  { title: 'Small manufacturing shops', img: '/images/small_shops.webp' },
  { title: 'Restoration workshops', img: '/images/restoration.webp' },
  { title: 'Equipment owners', img: '/images/equipment.webp' },
  { title: 'Food processing facilities', img: '/images/food.webp' },
  { title: 'Marine & boat maintenance', img: '/images/marine.webp' },
  { title: 'Residential property owners', img: '/images/residential_owners.webp' },
]

export const Purpose = () => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>Who We Work With</h2>

        <div className={styles.grid}>
          {apps.map((app, i) => (
            <Card key={app.title} i={i} component="Applications">
              <img src={app.img} alt={app.title} className={styles.img} />

              <p className={styles.text}>{app.title}</p>
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
