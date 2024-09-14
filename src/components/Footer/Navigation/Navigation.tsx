import styles from './navigation.module.scss';
import {Link} from 'react-router-dom';

import iconTelegram from '../../../assets/icons/footer/telegram.svg';
import iconVk from '../../../assets/icons/footer/vkontakte.svg';
import iconYoutube from '../../../assets/icons/footer/youtube.svg';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="#">
            <img src={iconTelegram} width={32} height={32} alt="telagram" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={iconVk} width={32} height={32} alt="vkontakte" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={iconYoutube} width={32} height={32} alt="youtube" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
