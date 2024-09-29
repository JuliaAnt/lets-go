import { ReactComponent as IconBus } from '../../../assets/icons/intro/icon_bus.svg'
import { ReactComponent as IconPlane } from '../../../assets/icons/intro/icon_plane.svg'
import { ReactComponent as IconRun } from '../../../assets/icons/intro/icon_run.svg'
import { ReactComponent as IconBicycle } from '../../../assets/icons/intro/icon_bicycle.svg'
import { ReactComponent as IconHearth } from '../../../assets/icon_heart.svg'
import styles from './TravelerCard.module.scss'
import { Card } from '../../../types/card'
import { TransportType } from '../../../utils/consts'
import LevelIcon from '../LevelIcon/LevelIcon'
import { useAppSelector } from '../../../hooks/redux-hooks'
import { getUuid } from '../../../store/formData/formDataSelector'

type TravelerCardProps = {
  card: Card
}

export const TravelerCard = ({ card }: TravelerCardProps) => {
  const { uuid, firstName, lastName, photoUrl, tags, countries, transport, likes, level } = card
  const uuidState = useAppSelector(getUuid)
  const offlineStatus: boolean = Boolean(uuid !== uuidState)
  const follow: boolean = Boolean(uuid !== uuidState)
  const tagsString = tags.slice(0, 3).join(' ')

  return (
    <div className={styles.travelerCard}>
      <div className={styles.avatarWrapper}>
        <img
          className={styles.avatar}
          src={photoUrl}
          srcSet={`${photoUrl} 1x, ${photoUrl} 2x`}
          width={285}
          height={285}
          alt='User profile'
        />
      </div>
      <div className={styles.personalData}>
        <p
          className={`${styles.name} ${offlineStatus ? styles.offlineName : ''}`}
        >{`${firstName} ${lastName}`}</p>
        <p className={styles.tags}>{tagsString}</p>
      </div>
      {follow && (
        <div className={styles.followBlock}>
          <a href='/call'>Позвать!</a>
          <div className={styles.followWrapper}>
            <button className={styles.followButton} type='button' aria-label='Кнопка лайка'>
              <IconHearth />
            </button>
            <span className={styles.followCounter}>{likes}</span>
          </div>
        </div>
      )}
      <div className={styles.travelerInfo}>
        <ul className={styles.transportList}>
          <li
            key='plane'
            className={`${styles.transportItem} ${
              transport.includes(TransportType.PLANE) ? styles.activeItem : ''
            }`}
          >
            <IconPlane />
            <span className={styles.toolTip}>Авиаперелет</span>
          </li>
          <li
            key='bus'
            className={`${styles.transportItem} ${
              transport.includes(TransportType.BUS) ? styles.activeItem : ''
            }`}
          >
            <IconBus />
            <span className={styles.toolTip}>Автотранспорт</span>
          </li>
          <li
            key='bicycle'
            className={`${styles.transportItem} ${
              transport.includes(TransportType.BICYCLE) ? styles.activeItem : ''
            }`}
          >
            <IconBicycle />
            <span className={styles.toolTip}>Велосипед</span>
          </li>
          <li
            key='run'
            className={`${styles.transportItem} ${
              transport.includes(TransportType.RUN) ? styles.activeItem : ''
            }`}
          >
            <IconRun />
            <span className={styles.toolTip}>Пешком</span>
          </li>
        </ul>
        <div className={styles.level}>
          <LevelIcon value={level} />
          <span className={styles.levelCounter}>{level}</span>
          <span className={styles.levelText}>level</span>
        </div>
      </div>
      <ul className={styles.countriesList}>
        {countries.map((country, index) => (
          <li key={country.name || index} className={styles.countryItem}>
            <img
              className={styles.flag}
              src={country.flags}
              srcSet={`${country.flags} 1x, ${country.flags} 2x`}
              width={35}
              height={24}
              alt={country.alt}
            />
            <span className={styles.toolTip}>{country.name}</span>
            <span className={styles.countryName}>{country.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
