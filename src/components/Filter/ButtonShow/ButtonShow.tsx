import { useTranslation } from 'react-i18next'
import styles from './ButtonShow.module.scss'

export const ButtonShow = () => {
  const { t } = useTranslation('filters')

  return (
    <button type='button' className={`${styles.buttonShow}`}>
      <span className={`${styles.text}`}>{t('showBtn')}</span>
    </button>
  )
}
