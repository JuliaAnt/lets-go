import { CountryData } from '../types/countriesData'

export const setCountry = (countries: CountryData[], country: CountryData) => {
  const countryIndex = countries.findIndex((currentCountry) => currentCountry.name === country.name)
  let selectedCountries: CountryData[] = []
  if (countryIndex === -1) {
    selectedCountries = [...countries, country]
  } else {
    selectedCountries = countries.filter((currentCountry) => currentCountry.name !== country.name)
  }
  return selectedCountries
}
