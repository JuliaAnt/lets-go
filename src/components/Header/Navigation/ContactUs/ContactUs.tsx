import {Link} from 'react-router-dom';
import styles from '../navigation.module.scss';
import iconCall from '../../../../assets/icons/header/icon-call.svg';
import iconMail from '../../../../assets/icons/header/icon-mail.svg';

export const ContactUs = () => {
  return (
    <ul className={`${styles.navList} ${styles.navListSecond}`}>
      <li>
        <Link to='#'>
          <img src={iconCall} width={16} height={16} alt='phone_img' />
        </Link>
      </li>
      <li>
        <Link to='#'>
          <img src={iconMail} width={16} height={16} alt='mail_img' />
        </Link>
      </li>
    </ul>
  );
};
