import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo_full.svg'
import iconMobile from '../../assets/icons/header/icon-mobile.svg'

import Navigation from './Navigation/Navigation'
import { HeaderMobileMenu } from './HeaderMobileMenu/HeaderMobileMenu'
import { useEffect, useState, useRef } from 'react'
import { AppRoute } from '../../utils/consts'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { changeReloadStatus } from '../../store/catalogData/catalogDataSlice'

export const Header = () => {
  const dispatch = useAppDispatch()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (headerRef.current) {
      setIsSticky(window.scrollY >= headerRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const onNavItemClick = (url: string) => {
    if (url === AppRoute.CATALOG) {
      dispatch(changeReloadStatus(false))
    }
  }

  return (
    <header ref={headerRef} className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <Link className={styles.headerLogo} to={AppRoute.FORM}>
            <img src={logo} alt='logo' />
          </Link>
          <Link className={styles.headerLogoMobile} to={AppRoute.FORM}>
            <img src={iconMobile} alt='logo-mobile' />
          </Link>

          <div className={styles.headerLine}></div>

          <Navigation onNavItemClick={onNavItemClick} />

          <button
            className={styles.button}
            type='button'
            aria-label='открыть'
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className={styles.buttonLineFirst}></span>
            <span className={styles.buttonLineSecond}></span>
          </button>
        </div>

        <HeaderMobileMenu isOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  )
}

export default Header
