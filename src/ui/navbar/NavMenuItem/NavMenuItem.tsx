import { Link } from 'react-router-dom'
import styles from './navMenuitem.module.scss'
import { useTranslation } from 'react-i18next'

type NavMenuItemProps = {
  data: {
    id: number
    text: string
    url: string
  }

  isOpen?: boolean
  onNavItemClick: (url: string) => void
}

export const NavMenuItem = ({ data, isOpen, onNavItemClick }: NavMenuItemProps) => {
  const { t } = useTranslation('translation')

  return (
    <li className={`${styles.menuItem} ${isOpen ? `${styles.isOpen}` : ''}`}>
      <Link to={data.url} onClick={() => onNavItemClick(data.url)}>
        <span data-hover={t(data.text)}>{t(data.text)}</span>
      </Link>
    </li>
  )
}
