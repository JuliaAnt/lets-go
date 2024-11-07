import { useTranslation } from 'react-i18next'
import styles from './IntroForm.module.scss'

export const IntroCatalog = () => {
  const { t } = useTranslation('translation')

  return (
    <section className={`${styles.introForm} ${styles.introCatalog}`}>
      <div className={`${styles.topWrapper}`}>
        <div className={`${styles.top} ${styles.catalogTop}`}>
          <h1>{t('companions')}</h1>
        </div>
      </div>
    </section>
  )
}
