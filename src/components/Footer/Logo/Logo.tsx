import styles from './logo.module.scss'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import footerLogo from '../../../assets/icons/footer/logo-footer_en.svg'
import footerLogoMobile from '../../../assets/icons/footer/logo-mobile_en.svg'
import { AppRoute } from '../../../utils/consts'

export const Logo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Link to={AppRoute.MAIN}>
      {isMobile ? (
        <img
          className={styles.logo}
          src={footerLogoMobile}
          width={96}
          height={15}
          alt='logo-mobile'
        />
      ) : (
        <img className={styles.logo} src={footerLogo} width={200} height={50} alt='logo' />
      )}
    </Link>
  )
}
