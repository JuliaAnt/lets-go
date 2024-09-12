import styles from './navigation.module.scss';
import {NavBar} from './NavBar/NavBar';
import {ContactUs} from './ContactUs/ContactUs';

export const Navigation = () => {
  return (
    <nav className={`${styles.nav} ${styles.navMobile}`}>
      <NavBar />
      <ContactUs />
    </nav>
  );
};

export default Navigation;
