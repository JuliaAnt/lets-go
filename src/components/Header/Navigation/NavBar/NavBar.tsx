import styles from '../navigation.module.scss'
import { NAVIGATION_MAP } from '../../../../utils/consts'
import { NavMenuItem } from '../../../../ui/navbar/NavMenuItem/NavMenuItem'

type NavBarProps = {
  onNavItemClick: (url: string) => void
}

export const NavBar = ({ onNavItemClick }: NavBarProps) => {
  return (
    <ul className={`${styles.navList} ${styles.navListFirst}`}>
      {NAVIGATION_MAP.map((navItem) => (
        <NavMenuItem data={navItem} key={navItem.id} onNavItemClick={onNavItemClick} />
      ))}
    </ul>
  )
}
