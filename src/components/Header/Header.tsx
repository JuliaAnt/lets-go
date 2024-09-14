import styles from './header.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_full.svg';
import iconMobile from '../../assets/icons/header/icon-mobile.svg';

import Navigation from './Navigation/Navigation';
import {HeaderMobileMenu} from './HeaderMobileMenu/HeaderMobileMenu';
import {useEffect, useState} from 'react';

export const Header = ({title = 'Направления'}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY >= 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <Link className={styles.headerLogo} to="#">
            <img src={logo} alt="logo" />
          </Link>
          <Link className={styles.headerLogoMobile} to="#">
            <img src={iconMobile} alt="logo-mobile" />
          </Link>

          <div className={styles.headerLine}></div>

          <Navigation />

          <button
            className={styles.button}
            type="button"
            aria-label="открыть"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className={styles.buttonLineFirst}></span>
            <span className={styles.buttonLineSecond}></span>
          </button>
        </div>
        <p className={styles.headerTitle}>{title}</p>

        <HeaderMobileMenu isOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
