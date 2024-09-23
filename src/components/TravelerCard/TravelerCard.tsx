
import { ReactComponent as IconBus } from '../../assets/icons/intro/icon_bus.svg'
import { ReactComponent as IconPlane } from '../../assets/icons/intro/icon_plane.svg'
import { ReactComponent as IconRun } from '../../assets/icons/intro/icon_run.svg'
import { ReactComponent as IconBicycle } from '../../assets/icons/intro/icon_bicycle.svg'
import { ReactComponent as IconHearth } from '../../assets/icon_heart.svg'
import styles from './TravelerCard.module.scss'


interface Picture {
  imagePath: string;
  imageSecondPath: string;
  imageWidth: number;
  imageHeight: number;
  imageAltText: string
}

interface Country {
  picture: Picture;
  name: string;
}

interface Transport {
  plane: boolean;
  bus: boolean;
  run: boolean;
  bicycle: boolean;
}

interface levelPicture {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  imageWidth: number;
  imageHeight: number;
  circleClass: string;
}

interface TravelerCardProps {
  data: {
    picture: Picture;
    offlineStatus: boolean;
    name: string;
    tags: string;
    follow: boolean;
    followCounter: number;
    transport: Transport;
    countriesList: Country[];
    levelCounter: number;
    level: levelPicture;
  }
}

export const TravelerCard: React.FC<TravelerCardProps> = ({data}) => {
  const SvgComponent = data.level.svg;

  return <div className={styles.travelerCard}>
    <div className={styles.avatarWrapper}>
      <img className={styles.avatar} src={data.picture.imagePath} srcSet={`${data.picture.imagePath} 1x, ${data.picture.imageSecondPath} 2x`} width={data.picture.imageWidth} height={data.picture.imageHeight} alt={data.picture.imageAltText} />
    </div>
    <div className={styles.personalData}>
      <p className={`${styles.name} ${data.offlineStatus ? styles.offlineName : ''}`}>
        {data.name}
      </p>
      <p className={styles.tags}>{data.tags}</p>
    </div>
    {data.follow && (<div className={styles.followBlock}>
        <a href="/call">Позвать!</a>
        <div className={styles.followWrapper}>
          <button className={styles.followButton} type="button" aria-label='Кнопка лайка'>
            <IconHearth/>
          </button>
          <span className={styles.followCounter}>{data.followCounter}</span>
        </div>
      </div>
      )}
    <div className={styles.travelerInfo}>
      <ul className={styles.transportList}>
        <li key="plane" className={`${styles.transportItem} ${data.transport.plane ? styles.activeItem : ''}`}>
          <IconPlane/>
          <span className={styles.toolTip}>Авиаперелет</span>
        </li>
        <li key="bus" className={`${styles.transportItem} ${data.transport.bus ? styles.activeItem : ''}`}>
          <IconBus/>
          <span className={styles.toolTip}>Автотранспорт</span>
        </li>
        <li key="bicycle" className={`${styles.transportItem} ${data.transport.bicycle ? styles.activeItem : ''}`}>
          <IconBicycle/>
          <span className={styles.toolTip}>Велосипед</span>
        </li>
        <li key="run" className={`${styles.transportItem} ${data.transport.run ? styles.activeItem : ''}`}>
          <IconRun/>
          <span className={styles.toolTip}>Пешком</span>
        </li>
      </ul>
      <div className={styles.level}>
        <SvgComponent className={`${styles.levelCircle} ${data.level.circleClass ? styles[data.level.circleClass] : ''}`} width={data.level.imageWidth} height={data.level.imageHeight}/>
        <span className={styles.levelCounter}>{data.levelCounter}</span>
        <span className={styles.levelText}>level</span>
      </div>
    </div>
    <ul className={styles.countriesList}>
      {data.countriesList.map((country, index) => (
        <li key={country.name || index} className={styles.countryItem}>
          <img className={styles.flag} src={country.picture.imagePath} srcSet={`${country.picture.imagePath} 1x, ${country.picture.imageSecondPath} 2x`} width={country.picture.imageWidth} height={country.picture.imageHeight} alt={country.picture.imageAltText} />
          <span className={styles.toolTip}>{country.name}</span>
          <span className={styles.countryName}>{country.name}</span>
        </li>
      ))}
    </ul>
  </div>
}