import styles from './AddCountry.module.scss'
import IconPlus from '../../../assets/icons/stepTwo/icon-plus.svg'
import { useTranslation } from 'react-i18next'

type AddCountryProps = {
  setNewSelect: (newSelect: boolean) => void
}

export const AddCountry = ({ setNewSelect }: AddCountryProps) => {
  const { t } = useTranslation('translation')

  return (
    <div className={styles.addCountryWrapper}>
      <button className={styles.addButton} type='button' onClick={() => setNewSelect(true)}>
        {t('addCountry')}
        <img src={IconPlus} width={21} height={21} alt='Add country' />
      </button>

      <span></span>
    </div>
  )
}
