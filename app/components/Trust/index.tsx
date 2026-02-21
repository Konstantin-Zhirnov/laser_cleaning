'use client'

import { motion } from 'framer-motion'
import cn from 'classnames'

import styles from './Trust.module.css'
import { Wrapper } from '../Wrapper'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '100+', label: 'Projects Completed' },
  { value: '30%', label: 'Cost Reduction' },
  { value: '0', label: 'Surface Damage' },
]

// Up to 70% faster than sandblasting
// No post-cleaning disposal costs

export const Trust = () => {
  return (
    <section className={styles.container}>
      <Wrapper classes={styles.grid}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.title}>{stat.value}</h3>

            <p className={styles.text}>{stat.label}</p>
          </motion.div>
        ))}
      </Wrapper>
    </section>
  )
}
