import { useAppSelector } from '../../hooks/redux-hooks'
import { getUuid } from '../../store/formData/formDataSelector'
import { Card } from '../../types/card'
import { TravelerCard } from './TravelerCard/TravelerCard'
import styles from './TravelList.module.scss'

export const TravelerList = ({ cards, loading }: { cards: Card[]; loading: boolean }) => {
  const uuidState = useAppSelector(getUuid)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className={styles.travelerList}>
      {cards.map((card) => (
        <TravelerCard key={card.uuid} card={card} uuidState={uuidState} />
      ))}
    </div>
  )
}
