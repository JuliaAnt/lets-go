import { countriesEn, countriesPl, countriesRu } from '../data/countriesListByLang'
import { countriesData } from '../data/countriesData'
import { Languages } from '../utils/consts'
import { CountryData } from '../types/countriesData'

// type CountryType = {
//   countryCode: string
//   flags: string
//   alt: string
//   region: string
// }

type countriesByLetterType = {
  letter: string
  countries: CountryData[]
}

export const getCountriesByLetter = (language: Languages) => {
  const getCountries = (lang: Languages) => {
    if (lang === Languages.PL) return countriesPl
    if (lang === Languages.RU) return countriesRu
    return countriesEn
  }

  const countries = getCountries(language)

  const countriesByLetter: countriesByLetterType[] = []
  for (const [code, name] of Object.entries(countries)) {
    const firstLetter = name.charAt(0).toUpperCase()
    let letterGroup = countriesByLetter.find((group) => group.letter === firstLetter)

    if (!letterGroup) {
      letterGroup = { letter: firstLetter, countries: [] }
      countriesByLetter.push(letterGroup)
    }

    const countryData = countriesData.find((country: CountryData) => country.countryCode === code)
    if (countryData) {
      letterGroup.countries.push({ ...countryData })
    }
  }

  const sortedCountriesByLetter = countriesByLetter.sort((a, b) => {
    if (a.letter > b.letter) return 1
    if (a.letter < b.letter) return -1
    return 0
  })
  const alphabet = sortedCountriesByLetter.map((group) => group.letter)

  return { sortedCountriesByLetter, alphabet }
}
