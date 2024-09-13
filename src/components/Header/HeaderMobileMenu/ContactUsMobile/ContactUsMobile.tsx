import {Link} from 'react-router-dom';
import iconPhoneMobile from '../../../../assets/icons/header/icon-phone-mobile.svg';
import iconMailMobile from '../../../../assets/icons/header/icon-mail-mobile.svg';

export const ContactUsMobile = () => {
  return (
    <ul>
      <li>
        <span>
          <img src={iconPhoneMobile} width={16} height={15} alt='phone' />
        </span>
        <Link to='tel:88005558628'>8 800 555-86-28</Link>
      </li>
      <li>
        <span>
          <img src={iconMailMobile} width={18} height={13} alt='mail' />
        </span>
        <Link to='mailto:mail@htmlacademy.ru'>mail@htmlacademy.ru</Link>
      </li>
    </ul>
  );
};
