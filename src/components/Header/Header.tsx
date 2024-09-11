import styles from './header.module.scss';

import logo from '../../assets/logo_full.svg';
import iconCall from '../../assets/icons/header/icon-call.svg';
import iconMail from '../../assets/icons/header/icon-mail.svg';

export const Header = ({title = 'Направления'}) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <a className={styles.headerLogo} href="#">
            <img src={logo} alt="logo" />
          </a>

          <div className={styles.headerLine}></div>

          <nav className={styles.nav}>
            <ul className={`${styles.navList} ${styles.navListFirst}`}>
              <li>
                <a href="#">
                  <span data-hover="О СЕРВИСЕ">о сервисе</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span data-hover="НАПРАВЛЕНИЯ">направления</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span data-hover="ПОПУТЧИКИ">попутчики</span>
                </a>
              </li>
            </ul>

            <ul className={`${styles.navList} ${styles.navListSecond}`}>
              <li>
                <a href="#">
                  <img src={iconCall} width="16" height="16" alt="phone_img" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={iconMail} width="16" height="16" alt="mail_img" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className={styles.headerTitle}>{title}</p>
      </div>
    </header>
  );
};

export default Header;
