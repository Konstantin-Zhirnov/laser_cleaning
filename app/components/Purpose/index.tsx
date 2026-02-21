import { Wrapper } from '../Wrapper'
import { Card } from '../Card'

import styles from './Purpose.module.css'

const apps = [
  { title: 'Auto repair & body shops', img: '/images/auto_repair.png' },
  { title: 'Contractors & builders', img: '/images/contractors.png' },
  { title: 'Property maintenance companies', img: '/images/property.png' },
  { title: 'Small manufacturing shops', img: '/images/small_shops.png' },
  { title: 'Restoration workshops', img: '/images/restoration.png' },
  { title: 'Equipment owners', img: '/images/equipment.png' },
  { title: 'Food processing facilities', img: '/images/food.png' },
  { title: 'Marine & boat maintenance', img: '/images/marine.png' },
  { title: 'Residential property owners', img: '/images/owners.png' },
]

export const Purpose = () => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>Who We Work With</h2>

        <div className={styles.grid}>
          {apps.map((app, i) => (
            <Card key={i} i={i} component="Applications">
              <img src={app.img} alt={app.title} className={styles.img} />

              <p className={styles.text}>{app.title}</p>
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
