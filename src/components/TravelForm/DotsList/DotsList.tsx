import styles from './DotsList.module.scss';

export const DotsList = () => {
  return <ul className={styles.dotsList}>
    <li className={styles.current} aria-label='Первый шаг'></li>
    <li aria-label='Второй шаг'></li>
    <li aria-label='Третий шаг'></li>
  </ul>;
};