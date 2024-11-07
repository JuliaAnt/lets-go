import styles from './IntroForm.module.scss'
import { ButtonChange } from './ButtonChange/ButtonChange'
import { Level } from './Level/Level'
import { Tags } from './Tags/Tags'
import { Transport } from './Transport/Transport'
import introPhoto from '../../assets/images/photo_demin.jpg'
import { useTranslation } from 'react-i18next'

export const IntroForm = () => {
  const { t } = useTranslation('translation')

  return (
    <section className={`${styles.introForm}`}>
      <div className={`${styles.topWrapper}`}>
        <div className={`${styles.top}`}>
          <h1>{t('directions')}</h1>
          <Level />
          <div className={`${styles.photo}`}>
            <img src={introPhoto} width={220} height={237} alt='man' />
          </div>
        </div>
      </div>

      <div className={`${styles.down}`}>
        <ButtonChange />
        <div className={`${styles.tags}`}>
          <h3>{t('tags')}</h3>
          <Tags />
        </div>
        <div className={`${styles.transport}`}>
          <h3>{t('transport')}</h3>
          <Transport />
        </div>
      </div>
    </section>
  )
}
