import styles from './CountryFilter.module.scss'
import React, { useEffect, useState } from 'react'
import { Languages } from '../../../utils/consts'
import { CountryItem } from './CountryItem'
import { CountriesList } from '../CountriesList/CountriesList'
import { CountryData } from '../../../types/countriesData'
import i18n from '../../../localization/i18n'
import { getCountriesByLetter } from '../../../helpers/getCountriesByLetter'

interface CountryFilterProps {
  open: boolean
  selectedOption: CountryData | null
  setOpen: (isOpen: boolean) => void
  setSelectedOption: (selectedOption: CountryData) => void
}

export const CountryFilter: React.FC<CountryFilterProps> = ({
  open,
  selectedOption,
  setOpen,
  setSelectedOption,
}) => {
  const [alphabetLetters, setAlphabetLetters] = useState<string[]>([])
  const [selectedLetter, setSelectedLetter] = useState<string>(alphabetLetters[0])
  const [filteredCountries, setFilteredCountries] = useState<CountryData[]>([])

  useEffect(() => {
    const updateCountries = () => {
      const lang = i18n.language
      const countriesData = getCountriesByLetter(lang as Languages)

      setAlphabetLetters(countriesData.alphabet)

      const initialLetter = countriesData.alphabet[0]
      setSelectedLetter(initialLetter)

      const initialFilteredCountries =
        countriesData.sortedCountriesByLetter.find(
          (countriesList) => countriesList.letter === initialLetter,
        )?.countries || []

      setFilteredCountries(initialFilteredCountries)
    }

    updateCountries()
    i18n.on('languageChanged', updateCountries)

    return () => {
      i18n.off('languageChanged', updateCountries)
    }
  }, [])

  useEffect(() => {
    const updateCountries = () => {
      const lang = i18n.language
      return getCountriesByLetter(lang as Languages)
    }

    const countriesData = updateCountries()
    i18n.on('languageChanged', updateCountries)

    const filteredCountriesData =
      countriesData.sortedCountriesByLetter.find(
        (countriesList) => countriesList.letter === selectedLetter,
      )?.countries || []

    setFilteredCountries(filteredCountriesData)
    setAlphabetLetters(countriesData.alphabet)
  }, [selectedLetter])

  return (
    <div className={`${styles.countryFilter} ${open ? styles.isOpen : ''}`}>
      <div className={styles.countryFilterWrapper}>
        <ul className={styles.countryFilterList}>
          {alphabetLetters.map((letter, index) => (
            <CountryItem
              letter={letter}
              selectedLetter={selectedLetter}
              key={index + 1}
              setSelectedLetter={setSelectedLetter}
            />
          ))}
        </ul>

        <CountriesList
          countries={filteredCountries}
          selectedOption={selectedOption}
          setOpen={setOpen}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </div>
  )
}
