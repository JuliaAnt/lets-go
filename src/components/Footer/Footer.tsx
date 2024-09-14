import styles from './footer.module.scss'

import { Logo } from './Logo/Logo'
import { Navigation } from './Navigation/Navigation'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Logo />
        <Navigation />
      </div>
    </footer>
  )
}
