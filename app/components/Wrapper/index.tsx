import { type FC, memo, type ReactNode } from 'react'

import styles from './Wrapper.module.css'

interface IProps {
  children: ReactNode
  classes?: any
}

export const Wrapper: FC<IProps> = memo(({ children, classes }) => (
  <div className={`${styles.wrapper} ${classes || ''}`}>{children}</div>
))
