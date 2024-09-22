import styles from './ButtonShow.module.scss';


export const ButtonShow = () => {
  return (
      <button type="button" className={`${styles.buttonShow}`}>
        <span className={`${styles.text}`}>показать</span>
      </button>
  )
};