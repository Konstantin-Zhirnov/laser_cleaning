'use client'

import { motion } from 'framer-motion'
import cn from 'classnames'

import { Wrapper } from '../Wrapper'

import styles from './Comparison.module.css'

const comparisonData = [
  { param: 'Surface Contact', laser: 'Non-contact process', sand: 'Physical abrasion' },
  { param: 'Surface Damage', laser: 'None / Minimal', sand: 'High risk' },
  { param: 'Dust & Waste', laser: 'Almost zero', sand: 'Heavy dust' },
  { param: 'Precision', laser: 'Micron-level accuracy', sand: 'Medium' },
]

export const Comparison = () => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>
          Why <span className={styles.accent}>Laser Cleaning</span> Wins
        </h2>

        <p className={styles.text}>
          Traditional sandblasting can damage surfaces, create heavy dust, and require costly
          cleanup. Laser cleaning delivers precision results with minimal disruption to your
          operations.
        </p>

        <div className={styles.grid}>
          <div className={cn(styles['method-column'], styles['laser-col'])}>
            <h3>Laser Technology</h3>

            {comparisonData.map((item, i) => (
              <motion.div
                key={i}
                className={styles.item}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <span className={styles.check}>✔</span>

                <div>
                  <strong>{item.param}</strong>

                  <p>{item.laser}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={cn(styles['method-column'], styles['sand-col'])}>
            <h3>Traditional Sandblasting</h3>

            {comparisonData.map((item, i) => (
              <motion.div
                key={i}
                className={styles.item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <span className={styles.cross}>✖</span>

                <div>
                  <strong>{item.param}</strong>

                  <p>{item.sand}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
