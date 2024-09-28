import { useAppSelector } from '../../hooks/redux-hooks'
import { getCards } from '../../store/catalogData/catalogDataSelector'
import { TravelerCard } from './TravelerCard/TravelerCard'
import styles from './TravelList.module.scss'

export const TravelerList = () => {
  const cards = useAppSelector(getCards)

  return (
    <div className={styles.travelerList}>
      {cards.map((card) => (
        <TravelerCard card={card} />
      ))}
    </div>
  )
}
