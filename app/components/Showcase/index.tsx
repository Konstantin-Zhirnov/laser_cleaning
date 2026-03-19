import { Wrapper } from '../Wrapper'

import styles from './Showcase.module.css'

const images = [
  '/images/laser_cleaning_1.webp',
  '/images/laser_cleaning_2.webp',
  '/images/laser_cleaning_3.webp',
  '/images/laser_cleaning_4.webp',
  '/images/laser_cleaning_5.webp',
]

export const Showcase = () => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>Before & After</h2>

        <div className={styles.grid}>
          {images.map((item, i) => (
            <img src={item} className={styles.img} alt="laser cleanning" />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
