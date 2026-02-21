'use client'

import Image from 'next/image'
import cn from 'classnames'
import { motion } from 'framer-motion'

import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="/video/laser.mp4" type="video/mp4" />
      </video>

      <div className={styles.gradient} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>Laser Cleaning on Vancouver Island</h1>

        <p className={styles.accent}>Fast. Clean. On-Site.</p>

        <p className={styles.text}>
          Helping local shops, contractors, and manufacturers remove rust, paint, grease, and
          buildup — without chemicals, damage, or downtime.
        </p>

        <a href="mailto:kostya.zhirnov@gmail.com?subject=Laser%20Cleaning" className={styles.btn}>
          Get Your Free Estimate
        </a>

        <div className={styles.plus}>
          <span>✔ Mobile Service</span>
          <span>✔ No Sandblasting</span>
          <span>✔ No Chemicals</span>
          <span>✔ Minimal Downtime</span>
        </div>
      </motion.div>
    </section>
  )
}
