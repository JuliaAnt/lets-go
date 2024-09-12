import styles from './navigation.module.scss';
import {Link} from 'react-router-dom';
import iconCall from '../../assets/icons/header/icon-call.svg';
import iconMail from '../../assets/icons/header/icon-mail.svg';

export const Navigation = () => {
  return (
    <nav className={`${styles.nav} ${styles.navMobile}`}>
      <ul className={`${styles.navList} ${styles.navListFirst}`}>
        <li>
          <Link to="#">
            <span data-hover="О СЕРВИСЕ">о сервисе</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span data-hover="НАПРАВЛЕНИЯ">направления</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span data-hover="ПОПУТЧИКИ">попутчики</span>
          </Link>
        </li>
      </ul>

      <ul className={`${styles.navList} ${styles.navListSecond}`}>
        <li>
          <Link to="#">
            <img src={iconCall} width={16} height={16} alt="phone_img" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={iconMail} width={16} height={16} alt="mail_img" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
