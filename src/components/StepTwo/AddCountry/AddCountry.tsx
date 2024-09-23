import styles from './AddCountry.module.scss'
import IconPlus from '../../../assets/icons/stepTwo/icon-plus.svg'

type AddCountryProps = {
  setNewSelect: (newSelect: boolean) => void
}

export const AddCountry = ({ setNewSelect }: AddCountryProps) => {
  return (
    <div className={styles.addCountryWrapper}>
      <button className={styles.addButton} type='button' onClick={() => setNewSelect(true)}>
        Добавить Страну
        <img src={IconPlus} width={21} height={21} alt='Добавить' />
      </button>

      <span></span>
    </div>
  )
}
