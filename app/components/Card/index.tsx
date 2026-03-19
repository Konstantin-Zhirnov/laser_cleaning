'use client'

import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

import styles from './Card.module.css'

interface IProps {
  i: number
  component: 'Advantages' | 'Applications'
  children: ReactNode
}

export const Card: FC<IProps> = ({ i, component, children }) => {
  const initialY = component === 'Advantages' ? 40 : 50

  const transition =
    component === 'Advantages' ? { delay: i * 0.1 } : { delay: i * 0.15, duration: 0.6 }

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      // whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.div>
  )
}
