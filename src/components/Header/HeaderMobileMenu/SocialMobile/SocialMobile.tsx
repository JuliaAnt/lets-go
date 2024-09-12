import {Link} from 'react-router-dom';
import styles from '../headerMobileMenu.module.scss';
import iconTelegram from '../../../../assets/icons/header/telegram.svg';
import iconVkontakte from '../../../../assets/icons/header/vkontakte.svg';
import iconYoutube from '../../../../assets/icons/header/youtube.svg';

export const SocialMobile = () => {
  return (
    <nav className={styles.footer}>
      <ul>
        <li>
          <Link to='#'>
            <img src={iconTelegram} width={20} height={18} alt='Telegram' />
          </Link>
        </li>
        <li>
          <Link to='#'>
            <img src={iconVkontakte} width={30} height={16} alt='VK' />
          </Link>
        </li>
        <li>
          <Link to='#'>
            <img src={iconYoutube} width={23} height={23} alt='Youtube' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
