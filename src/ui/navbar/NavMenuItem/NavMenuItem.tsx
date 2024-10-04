import { Link } from 'react-router-dom'
import styles from './navMenuitem.module.scss'

type NavMenuItemProps = {
  data: {
    id: number
    hoverText: string
    text: string
    url: string
  }

  isOpen?: boolean
  onNavItemClick: (url: string) => void
}

export const NavMenuItem = ({ data, isOpen, onNavItemClick }: NavMenuItemProps) => {
  return (
    <li className={`${styles.menuItem} ${isOpen ? `${styles.isOpen}` : ''}`}>
      <Link to={data.url} onClick={() => onNavItemClick(data.url)}>
        <span data-hover={data.hoverText}>{data.text}</span>
      </Link>
    </li>
  )
}
