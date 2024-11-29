import { useTranslation } from 'react-i18next'
import styles from './About.module.scss'
import { MainButton } from '../../../ui/buttons/MainButton/MainButton'

export const About = () => {
  const { t } = useTranslation('landing')

  return (
    <section className={styles.aboutWrapper}>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{t('about')}</h2>
        <div className={styles.text}>{t('description')}</div>
        <div className={styles.subText}>{t('subDescription')}</div>
        <div className={styles.buttonContainer}>
          <MainButton text={t('readMore')} />
        </div>
      </div>
    </section>
  )
}
