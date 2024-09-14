import {Link} from 'react-router-dom';
import styles from './Transport.module.scss';
import iconPlane from '../../../assets/icons/intro/icon_plane.svg';
import iconBus from '../../../assets/icons/intro/icon_bus.svg';
import iconBicycle from '../../../assets/icons/intro/icon_bicycle.svg';
import iconRun from '../../../assets/icons/intro/icon_run.svg';


export const Transport = () => {
  return (
      <ul className={`${styles.iconList}`}>
        <li>
          <Link to="#">
            <img src={iconPlane} width={22} height={22} alt="icon_plane" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={iconBus} width={22} height={22} alt="icon_bicycle" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={iconBicycle} width={22} height={22} alt="phone_img" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={iconRun} width={22} height={22} alt="icon_run" />
          </Link>
        </li>
      </ul>
  )
};