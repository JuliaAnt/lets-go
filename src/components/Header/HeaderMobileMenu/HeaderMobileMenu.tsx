import styles from './headerMobileMenu.module.scss';
import {Link} from 'react-router-dom';

import iconMobile from '../../../assets/icons/header/icon-mobile-open.svg';
import iconClose from '../../../assets/icons/header/icon-close.svg';
import {ContactUsMobile} from './ContactUsMobile/ContactUsMobile';
import {SocialMobile} from './SocialMobile/SocialMobile';

type HeaderMobileMenuProps = {
  isOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
};

export const HeaderMobileMenu = ({isOpen, setIsMobileMenuOpen}: HeaderMobileMenuProps) => {
  return (
    <div className={`${styles.headerMenu} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <Link to="#">
            <img src={iconMobile} alt="logo" />
          </Link>

          <button type="button" aria-label="закрыть" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={iconClose} alt="icon-close"></img>
          </button>
        </nav>

        <p>О&nbsp;сервисе Направления Попутчики</p>

        <ContactUsMobile />
        <SocialMobile />
      </div>
    </div>
  );
};
