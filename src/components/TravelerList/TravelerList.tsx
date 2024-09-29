import { useAppSelector } from '../../hooks/redux-hooks'
import { getCards, getCountries, getRegions } from '../../store/catalogData/catalogDataSelector'
import { TravelerCard } from './TravelerCard/TravelerCard'
import styles from './TravelList.module.scss'

export const TravelerList = () => {
  const cards = useAppSelector(getCards)
  const selectedRegionsState = useAppSelector(getRegions)
  const selectedCountriesState = useAppSelector(getCountries)

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

  return (
    <div className={styles.travelerList}>
      {filteredCards.map((card) => (
        <TravelerCard key={card.uuid} card={card} />
      ))}
    </div>
  )
}
