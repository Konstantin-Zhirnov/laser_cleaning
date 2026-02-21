'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { Wrapper } from '../Wrapper'

import styles from './Header.module.css'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

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

        <a className={styles.phone} href="tel:2507972834">
          250.797.2834
        </a>

        <a href="mailto:kostya.zhirnov@gmail.com?subject=Laser%20Cleaning" className={styles.email}>
          Send Email
        </a>
      </Wrapper>
    </header>
  )
}
