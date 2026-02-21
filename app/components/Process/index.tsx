'use client'

import { motion } from 'framer-motion'
import styles from './Process.module.css'

const steps = [
  'Send us photos of the surface',
  'Receive a clear, written estimate',
  'We arrive on-site and complete the job efficiently',
]

export const Process = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Simple. Fast. Professional.</h2>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.number}>{index + 1}</div>

              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
