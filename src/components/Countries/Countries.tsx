import React, { useState } from 'react';
import { CountriesData } from './CountriesData/CountriesData';
import { ReactComponent as IconClose} from '../../assets/icon_close.svg';
import styles from './Countries.module.scss';
import { ReactComponent as IconFilter} from '../../assets/icon_filter.svg';
import { ReactComponent as IconShow} from '../../assets/icon-show.svg';

export const Countries = () => {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return <section className={styles.countries}>
    <div className={`${styles.countriesHeader} ${isContentVisible ? styles.filterTextMobile : ''}`}>
      <p className={styles.filterText}>
        <IconFilter />
        <span>Фильтрация по странам:</span>
      </p>
      <ul className={`${styles.filterList} ${isContentVisible ? styles.mobileVisible : ''}`}>
        <li className={`${styles.filterItem} ${styles.activeFilter}`}><a href="">Европа</a></li>
        <li className={styles.filterItem}><a href="">Азия</a></li>
        <li className={styles.filterItem}><a href="">Америка</a></li>
        <li className={styles.filterItem}><a href="">Острова</a></li>
      </ul>
      <button className={styles.toggleButton} type='button' onClick={toggleContent}>
        {isContentVisible ? (
          <span className={`${styles.toggleSpan}`}>
            <span className={styles.hideSpan}>Свернуть</span>
            <IconClose />
          </span>
        ) : (
          <span className={styles.toggleSpan}>
            <span className={styles.showSpan}>Показать все</span>
            <IconShow />
          </span>
        )}
      </button>
    </div>
    <div className={`${styles.contentWrapper} ${isContentVisible ? styles.visible : styles.hidden}`}>
      <CountriesData />
      <button className={styles.hideButton} type="button" onClick={toggleContent}>
        <IconClose />
        Свернуть
      </button>
    </div>
  </section>
};