import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import logoEn from '../../assets/logo_full_en.svg'
import iconMobile from '../../assets/icons/header/icon-mobile_en.svg'
import Navigation from './Navigation/Navigation'
import { HeaderMobileMenu } from './HeaderMobileMenu/HeaderMobileMenu'
import { useEffect, useState, useRef } from 'react'
import { AppRoute } from '../../utils/consts'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { changeReloadStatus } from '../../store/catalogData/catalogDataSlice'
import { LangSelect } from '../LangSelect/LangSelect'

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
          <Link className={styles.headerLogo} to={AppRoute.MAIN}>
            <img src={logoEn} alt='logo' />
          </Link>
          <Link className={styles.headerLogoMobile} to={AppRoute.MAIN}>
            <img src={iconMobile} alt='logo-mobile' />
          </Link>

          <div className={styles.headerLine}></div>

          <Navigation onNavItemClick={onNavItemClick} />

          {/* <div className={styles.langSwitcher}>
            {Object.keys(Languages).map((lng) => (
              <button
                key={lng}
                style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                type='submit'
                onClick={() => i18n.changeLanguage(lng)}
              >
                {Languages[lng as keyof typeof Languages]}
              </button>
            ))}
          </div> */}
          <LangSelect />

          <button
            className={styles.button}
            type='button'
            aria-label='open'
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className={styles.buttonLineFirst}></span>
            <span className={styles.buttonLineSecond}></span>
          </button>
        </div>

        <HeaderMobileMenu
          isOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          onNavItemClick={onNavItemClick}
        />
      </div>
    </header>
  )
}

export default Header
