import {Link} from 'react-router-dom';
import styles from './Pagination.module.scss';
import pageArrow from '../../assets/icons/pagination/page-arrow.svg';


export const Pagination = () => {
  return (
    <section className={`${styles.wrapper}`}>
      <ul className={`${styles.pageList}`}>
        <li className={`${styles.activePage}`}>
          <Link to="#">
            <span>1</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span>2</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span>3</span>
          </Link>
        </li>
        <li>
          <Link to="#">
            <span>4</span>
          </Link>
        </li>
      </ul>
      <div className={`${styles.arrows}`}>
        <button className={`${styles.arrowLeft}`}>
          <img src={pageArrow} width={10} height={17} alt="phone_img" />
        </button>
        <button className={`${styles.arrowRight}`}>
          <img src={pageArrow} width={10} height={17} alt="phone_img" />
        </button>
      </div>
    </section>
  )
};