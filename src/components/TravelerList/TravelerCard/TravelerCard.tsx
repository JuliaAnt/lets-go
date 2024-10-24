import { ReactComponent as IconBus } from '../../../assets/icons/intro/icon_bus.svg'
import { ReactComponent as IconPlane } from '../../../assets/icons/intro/icon_plane.svg'
import { ReactComponent as IconRun } from '../../../assets/icons/intro/icon_run.svg'
import { ReactComponent as IconBicycle } from '../../../assets/icons/intro/icon_bicycle.svg'
import { ReactComponent as IconHearth } from '../../../assets/icon_heart.svg'
import styles from './TravelerCard.module.scss'
import { Card } from '../../../types/card'
import { TransportType } from '../../../utils/consts'
import LevelIcon from '../LevelIcon/LevelIcon'
import { useState } from 'react'

type TravelerCardProps = {
  card: Card
  uuidState: string
}

export const TravelerCard = ({ card, uuidState }: TravelerCardProps) => {
  const { uuid, firstName, lastName, photoUrl, tags, countries, transport, likes, level } = card
  const [isFollowed, setIsFollowed] = useState<boolean>(false)
  const [likesAmount, setLikesAmount] = useState<number>(likes)

  const offlineStatus: boolean = Boolean(uuid !== uuidState)
  const follow: boolean = Boolean(uuid !== uuidState)
  const tagsString = tags.slice(0, 3).join(' ')

  const onFollowButtonClick = () => {
    setIsFollowed(!isFollowed)

    if (!isFollowed) {
      setLikesAmount(likes + 1)
    } else {
      setLikesAmount(likes)
    }
  }

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
            <button
              className={`${styles.followButton} ${isFollowed ? styles.isActive : ''}`}
              type='button'
              aria-label='Кнопка лайка'
              onClick={onFollowButtonClick}
            >
              <IconHearth />
            </button>
            <span className={styles.followCounter}>{likesAmount}</span>
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
