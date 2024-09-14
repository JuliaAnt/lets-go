import styles from './Level.module.scss';
import roundLine from '../../../assets/icons/intro/round-line.svg';


export const Level = () => {
  return (
      <div className={`${styles.level}`}>
        <img src={roundLine} width={95} height={95} alt="line" />
        <span className={`${styles.number}`}>80</span>
        <span className={`${styles.text}`}>level</span>
      </div>
  )
};