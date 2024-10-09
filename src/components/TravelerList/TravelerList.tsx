import { useAppSelector } from '../../hooks/redux-hooks'
import { getUuid } from '../../store/formData/formDataSelector'
import { Card } from '../../types/card'
import { ShowMoreButton } from '../ShowMoreButton/ShowMoreButton'
import { TravelerCard } from './TravelerCard/TravelerCard'
import styles from './TravelList.module.scss'

type TravelerListProps = {
  cards: Card[]
  loading: boolean
  showMoreCards: () => void
}

export const TravelerList = ({ cards, loading, showMoreCards }: TravelerListProps) => {
  const uuidState = useAppSelector(getUuid)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <div className={styles.travelerList}>
        {cards.map((card) => (
          <TravelerCard key={card.uuid} card={card} uuidState={uuidState} />
        ))}
      </div>
      <ShowMoreButton showMoreCards={showMoreCards} />
    </div>
  )
}
