import styles from './header.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo_full.svg';
import iconMobile from '../../assets/icons/header/icon-mobile.svg';

import Navigation from './Navigation';
import HeaderMenu from './HeaderMenu';

export const Header = ({title = 'Направления'}) => {
  return (
    <header className={styles.header}>
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
