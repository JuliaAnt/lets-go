import { useAppSelector } from '../../hooks/redux-hooks'
import { getCurrentPageNumber, getFilteredCards } from '../../store/catalogData/catalogDataSelector'
import { getUuid } from '../../store/formData/formDataSelector'
import { CARDS_PER_PAGE } from '../../utils/consts'
import { TravelerCard } from './TravelerCard/TravelerCard'
import styles from './TravelList.module.scss'

export const TravelerList = () => {
  const filteredCards = useAppSelector(getFilteredCards)
  const uuidState = useAppSelector(getUuid)
  const currentPage = useAppSelector(getCurrentPageNumber)
  const startPageIndex = (currentPage - 1) * CARDS_PER_PAGE
  const endPageIndex = currentPage * CARDS_PER_PAGE

  return (
    <div className={styles.travelerList}>
      {filteredCards.slice(startPageIndex, endPageIndex).map((card) => (
        <TravelerCard key={card.uuid} card={card} uuidState={uuidState} />
      ))}
    </div>
  )
}
