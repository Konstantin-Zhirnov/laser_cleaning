import { Wrapper } from '../Wrapper'
import { Card } from '../Card'

import styles from './Advantages.module.css'

const advantages = [
  'Rust on equipment and tools',
  'Paint removal before refinishing',
  'Oil and grease contamination',
  'Surface preparation before welding',
  'Graffiti removal',
  'Corrosion on metal structures',
]

export const Advantages = () => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>Common Cleaning Problems We Fix</h2>

        <div className={styles.grid}>
          {advantages.map((item, i) => (
            <Card key={i} i={i} component="Advantages">
              <p className={styles.text}>{item}</p>
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
