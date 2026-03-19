'use client'

import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'

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
            <motion.div
              key={item}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className={styles.text}>{item}</p>
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}
