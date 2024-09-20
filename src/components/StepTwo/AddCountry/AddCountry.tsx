import styles from './AddCountry.module.scss'
import IconPlus from '../../../assets/icons/stepTwo/icon-plus.svg'

export const AddCountry = () => {
  return (
    <div className={styles.addCountryWrapper}>
      <button className={styles.addButton} type='button'>
        Добавить Страну
        <img src={IconPlus} width={21} height={21} alt='Добавить' />
      </button>

      <span></span>
    </div>
  )
}
