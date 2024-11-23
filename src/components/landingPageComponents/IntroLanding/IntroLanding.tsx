import { useTranslation } from 'react-i18next'
import styles from './IntroLanding.module.scss'
import { TRAVEL_STEPS } from '../../../utils/consts'

export const IntroLanding = () => {
  const { t } = useTranslation('landing')
  return (
    <section className={styles.introWrapper}>
      <div className={styles.travellerImg}>
        <h1 className={styles.introTitle}>{t('introTitle')}</h1>
        <div className={styles.travelSteps}>
          {TRAVEL_STEPS.map((step) => (
            <div className={`${styles.travelStep} ${styles[step.stepName]}`}>
              <div className={styles.stepName}>{t(step.stepName)}</div>
              <div className={styles.stepNumber}>{step.stepNumber}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
