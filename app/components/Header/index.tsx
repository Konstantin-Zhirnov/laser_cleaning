'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { Wrapper } from '../Wrapper'

import styles from './Header.module.css'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const handleClick = () => {
    if (typeof window.gtag !== 'function') return

    window.gtag('event', 'conversion', {
      send_to: 'AW-17852461067/y9yqCOuDx4ccEIvg28BC',
      value: 1.0,
      currency: 'CAD',
    })

    window.location.href = 'tel:+12507972834'
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn(styles.header, { [styles.scrolled]: scrolled })}>
      <Wrapper classes={styles.wrapper}>
        <Image src="/images/logo.png" alt="logo" width={130} height={59} />

        <a onClick={handleClick} className={styles.phone} href="tel:2507972834">
          250.797.2834
        </a>

        <a href="mailto:kostya.zhirnov@gmail.com?subject=Laser%20Cleaning" className={styles.email}>
          Send Email
        </a>
      </Wrapper>
    </header>
  )
}
