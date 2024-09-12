import styles from './headerMenu.module.scss';
import {Link} from 'react-router-dom';

import iconMobile from '../../assets/icons/header/icon-mobile-open.svg';
import iconClose from '../../assets/icons/header/icon-close.svg';
import iconPhoneMobile from '../../assets/icons/header/icon-phone-mobile.svg';
import iconMailMobile from '../../assets/icons/header/icon-mail-mobile.svg';
import iconTelegram from '../../assets/icons/header/telegram.svg';
import iconVkontakte from '../../assets/icons/header/vkontakte.svg';
import iconYoutube from '../../assets/icons/header/youtube.svg';

export const HeaderMenu = () => {
  return (
    <div className={styles.headerMenu}>
      <div className={styles.headerContainer}>
        <nav className={styles.nav}>
          <Link to="#">
            <img src={iconMobile} alt="logo" />
          </Link>

          <button type="button" aria-label="закрыть">
            <img src={iconClose} alt="icon-close"></img>
          </button>
        </nav>

        <p>О&nbsp;сервисе Направления Попутчики</p>

        <ul>
          <li>
            <span>
              <img src={iconPhoneMobile} width={16} height={15} alt="phone" />
            </span>
            <a href="tel:88005558628">8 800 555-86-28</a>
          </li>
          <li>
            <span>
              <img src={iconMailMobile} width={18} height={13} alt="mail" />
            </span>
            <a href="mailto:mail@htmlacademy.ru">mail@htmlacademy.ru</a>
          </li>
        </ul>

        <nav className={styles.footer}>
          <ul>
            <li>
              <Link to="#">
                <img src={iconTelegram} width={20} height={18} alt="Telegram" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={iconVkontakte} width={30} height={16} alt="VK" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={iconYoutube} width={23} height={23} alt="Youtube" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;
