import styles from './header.module.scss';
import logo from '../../assets/logo_full.svg';
import iconMobile from '../../assets/icons/header/icon-mobile.svg';

import Navigation from './Navigation';
import HeaderMenu from './HeaderMenu';

export const Header = ({title = 'Направления'}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <a className={styles.headerLogo} href="#">
            <img src={logo} alt="logo" />
          </a>
          <a className={styles.headerLogoMobile} href="#">
            <img src={iconMobile} alt="logo-mobile" />
          </a>

          <div className={styles.headerLine}></div>

          <Navigation />

          <button className={styles.button} type="button" aria-label="открыть">
            <span className={styles.buttonLineFirst}></span>
            <span className={styles.buttonLineSecond}></span>
          </button>
        </div>
        <p className={styles.headerTitle}>{title}</p>

        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
