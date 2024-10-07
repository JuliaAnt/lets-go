import styles from './footer.module.scss'
import React from 'react'

import { Logo } from './Logo/Logo'
import { Navigation } from './Navigation/Navigation'

type footerProps = {
  bgColor?: string
}

export const Footer: React.FC<footerProps> = ({ bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor ? bgColor : '' }}>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <Logo />
          <Navigation />
        </div>
      </footer>
    </div>
  )
}
