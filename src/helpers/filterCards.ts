import { Card } from '../types/card'
import { CountryData } from '../types/countriesData'

export const filterCards = (
  cards: Card[],
  selectedRegions: string[],
  selectedCountries: CountryData[],
) => {
  const filteredCards = cards.filter((card) => {
    const regionMatch =
      selectedRegions.length > 0
        ? card.countries.some((country) => selectedRegions.includes(country.region))
        : true

    const countryMatch =
      selectedCountries.length > 0
        ? card.countries.some((country) =>
            selectedCountries.some((selectedCountry) => selectedCountry.name === country.name),
          )
        : true

    return regionMatch && countryMatch
  })
  console.log(filteredCards)
  return filteredCards
}
