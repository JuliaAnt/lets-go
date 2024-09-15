import styles from '../navigation.module.scss'
import { NAVIGATION_MAP } from '../../../../utils/consts'
import { NavMenuItem } from '../../../../ui/navbar/NavMenuItem/NavMenuItem'

export const NavBar = () => {
  return (
    <ul className={`${styles.navList} ${styles.navListFirst}`}>
      {NAVIGATION_MAP.map((navItem) => (
        <NavMenuItem data={navItem} key={navItem.id} />
      ))}
    </ul>
  )
}
