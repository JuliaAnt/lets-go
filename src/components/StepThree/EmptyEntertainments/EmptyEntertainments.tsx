import { useTranslation } from 'react-i18next'
import styles from '../StepThree.module.scss'

export const EmptyEntertainments = () => {
  const { t } = useTranslation('translation')
  return <div className={styles.empty}>{t('selectedCountriesError')}</div>
}
