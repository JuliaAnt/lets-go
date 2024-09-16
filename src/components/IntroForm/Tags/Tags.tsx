import {Link} from 'react-router-dom';
import styles from './Tags.module.scss';


export const Tags = () => {
  return (
      <ul className={`${styles.tagList}`}>
        <li>
          <Link to="#">
            #бургер
          </Link>
        </li>
        <li>
          <Link to="#">
            #бар
          </Link>
        </li>
        <li>
          <Link to="#">
            #футбол
          </Link>
        </li>
        <li>
          <Link to="#">
            #концерт
          </Link>
        </li>
        <li>
          <Link to="#">
            #крафт
          </Link>
        </li>
      </ul>
  )
};