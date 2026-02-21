'use client'

import { motion } from 'framer-motion'

import styles from './WhyChooseUs.module.css'

const items = [
  'No surface damage — safe for valuable equipment',
  'No chemicals or abrasive blasting',
  'Minimal dust, no secondary cleanup',
  'Faster than traditional sandblasting',
  'Fully mobile, on-site service',
  'Transparent pricing — no hidden fees',
]

export const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Local Businesses Choose Us</h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <span className={styles.check}>✓</span>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
