import styles from './navigation.module.scss';
import iconCall from '../../assets/icons/header/icon-call.svg';
import iconMail from '../../assets/icons/header/icon-mail.svg';

export const Navigation = () => {
  return (
    <nav className={`${styles.nav} ${styles.navMobile}`}>
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
            <img src={iconCall} width={16} height={16} alt="phone_img" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconMail} width={16} height={16} alt="mail_img" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
