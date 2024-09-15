import styles from './ButtonChange.module.scss';


export const ButtonChange = () => {
  return (
      <button type="button" className={`${styles.buttonChange}`}>
        <span className={`${styles.text}`}>сменить фото</span>
      </button>
  )
};