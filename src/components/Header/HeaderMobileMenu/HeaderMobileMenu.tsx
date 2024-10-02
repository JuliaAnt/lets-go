import styles from './headerMobileMenu.module.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import iconMobile from '../../../assets/icons/header/icon-mobile-open.svg'
import iconClose from '../../../assets/icons/header/icon-close.svg'
import { ContactUsMobile } from './ContactUsMobile/ContactUsMobile'
import { SocialMobile } from './SocialMobile/SocialMobile'
import { AppRoute, NAVIGATION_MAP } from '../../../utils/consts'
import { NavMenuItem } from '../../../ui/navbar/NavMenuItem/NavMenuItem'

type HeaderMobileMenuProps = {
  isOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
  onNavItemClick: (url: string) => void
}

export const HeaderMobileMenu = ({
  isOpen,
  setIsMobileMenuOpen,
  onNavItemClick,
}: HeaderMobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll)
    } else {
      document.body.classList.remove(styles.noScroll)
    }

    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [isOpen])

  return (
    <div className={`${styles.headerMenu} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <Link to={AppRoute.FORM}>
            <img src={iconMobile} alt='logo' />
          </Link>

          <button type='button' aria-label='закрыть' onClick={() => setIsMobileMenuOpen(false)}>
            <img src={iconClose} alt='icon-close'></img>
          </button>
        </nav>
        <ul className={styles.mobileMenuList}>
          {NAVIGATION_MAP.map((navItem) => (
            <NavMenuItem
              data={navItem}
              key={navItem.id}
              isOpen={isOpen}
              onNavItemClick={onNavItemClick}
            />
          ))}
        </ul>
        <ContactUsMobile />
        <SocialMobile />
      </div>
    </div>
  )
}
