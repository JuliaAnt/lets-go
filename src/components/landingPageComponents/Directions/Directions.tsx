import styles from './Directions.module.scss'
import person from '../../../assets/icons/landing/person.svg'
import { useTranslation } from 'react-i18next'
import thailandDesktop from '../../../assets/images/thailand-desktop.svg'
import franceDesktop from '../../../assets/images/france-desktop.svg'
import czechDesktop from '../../../assets/images/czech-desktop.svg'
import { MainButton } from '../../../ui/buttons/MainButton/MainButton'

const countryCards = [
  {
    name: 'TH',
    text: 'thailandText',
    flag: 'https://flagcdn.com/w320/th.png',
    image: thailandDesktop,
    travelersNumber: 18321,
  },
  {
    name: 'FR',
    text: 'franceText',
    flag: 'https://flagcdn.com/w320/fr.png',
    image: franceDesktop,
    travelersNumber: 12518,
  },
  {
    name: 'CZ',
    text: 'czechiaText',
    flag: 'https://flagcdn.com/w320/cz.png',
    image: czechDesktop,
    travelersNumber: 5326,
  },
]

export const Directions = () => {
  const { t } = useTranslation(['landing', 'countries'])

  return (
    <section className={styles.directionsWrapper}>
      <div className={styles.countriesBlock}>
        {countryCards.map((card) => (
          <div className={styles.country} style={{ backgroundImage: `url(${card.image})` }}>
            <div className={styles.countryInfo}>
              <h3 className={styles.name}>{t(card.name, { ns: 'countries' })}</h3>
              <p className={styles.text}>{t(card.text)}</p>
              <div className={styles.travelers}>
                <img src={person} alt='Person icon' />
                <span>{card.travelersNumber}</span>
              </div>
            </div>
            <div className={styles.countryImg}>
              <img className={styles.flag} src={card.flag} alt={`${card.name} flag`} />
              {/* <img src={card.image} alt={`${card.name}`} /> */}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.textBlock}>
        <h2>{t('directions')}</h2>
        <p>{t('directionsText1')}</p>
        <p>{t('directionsText2')}</p>
        <MainButton text={t('showAll')} />
      </div>
    </section>
  )
}
