import { useTranslation } from 'react-i18next'
import styles from './ButtonChange.module.scss'

export const ButtonChange = () => {
  const { t } = useTranslation('translation')

  return (
    <button type='button' className={`${styles.buttonChange}`}>
      <span className={`${styles.text}`}>{t('changePhoto')}</span>
    </button>
  )
}
