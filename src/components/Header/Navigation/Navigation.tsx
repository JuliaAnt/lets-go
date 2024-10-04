import styles from './navigation.module.scss'
import { NavBar } from './NavBar/NavBar'
import { ContactUs } from './ContactUs/ContactUs'

type NavigationProps = {
  onNavItemClick: (url: string) => void
}

export const Navigation = ({ onNavItemClick }: NavigationProps) => {
  return (
    <nav className={`${styles.nav} ${styles.navMobile}`}>
      <NavBar onNavItemClick={onNavItemClick}/>
      <ContactUs />
    </nav>
  )
}

export default Navigation
