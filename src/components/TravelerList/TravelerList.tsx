import { useAppSelector } from '../../hooks/redux-hooks'
import { getCountries, getRegions } from '../../store/catalogData/catalogDataSelector'
import { getUuid } from '../../store/formData/formDataSelector'
import { Card } from '../../types/card'
import { TravelerCard } from './TravelerCard/TravelerCard'
import styles from './TravelList.module.scss'

export const TravelerList = ({ cards, loading }: { cards: Card[]; loading: boolean }) => {
  const selectedRegionsState = useAppSelector(getRegions)
  const selectedCountriesState = useAppSelector(getCountries)
  const uuidState = useAppSelector(getUuid)

  const filteredCards = cards.filter((card) => {
    const regionMatch =
      selectedRegionsState.length > 0
        ? card.countries.some((country) => selectedRegionsState.includes(country.region))
        : true

    const countryMatch =
      selectedCountriesState.length > 0
        ? card.countries.some((country) =>
            selectedCountriesState.some((selectedCountry) => selectedCountry.name === country.name),
          )
        : true

    return regionMatch && countryMatch
  })

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className={styles.travelerList}>
      {filteredCards.map((card) => (
        <TravelerCard key={card.uuid} card={card} uuidState={uuidState} />
      ))}
    </div>
  )
}
