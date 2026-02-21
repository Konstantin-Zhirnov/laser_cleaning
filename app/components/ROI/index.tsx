'use client'

import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'

import styles from './ROI.module.css'

export const ROI = () => {
  return (
    <section className={styles.container}>
      <Wrapper classes={styles.wrapper}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Reduce Downtime. Increase Efficiency.
        </motion.h2>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Laser cleaning reduces the cost of maintenance and waste disposal, increases the speed of
          surface treatment, ensures environmentally friendly production, and ensures the safety of
          processed materials due to non-contact and precise impact.
        </motion.p>
      </Wrapper>
    </section>
  )
}
