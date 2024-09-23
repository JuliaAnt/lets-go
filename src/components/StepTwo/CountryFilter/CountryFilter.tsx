import styles from './CountryFilter.module.scss'
import React, { useEffect, useState } from 'react'
import { ALPHABET_LETTERS } from '../../../utils/consts'
import { CountryItem } from './CountryItem'
import { CountriesList } from '../CountriesList/CountriesList'
import { countriesData } from '../../../data'
import { CountryData } from '../../../types/countriesData'

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
  const [selectedLetter, setSelectedLetter] = useState<string>(ALPHABET_LETTERS[0])
  const [filtredCountries, setFiltredCountries] = useState<CountryData[]>([])

  useEffect(() => {
    const filtredCountriesData =
      countriesData.find((countriesList) => countriesList.letter === selectedLetter)?.countries ||
      []

    setFiltredCountries(filtredCountriesData)
  }, [selectedLetter])

  return (
    <div className={`${styles.countryFilter} ${open ? styles.isOpen : ''}`}>
      <div className={styles.countryFilterWrapper}>
        <ul className={styles.countryFilterList}>
          {ALPHABET_LETTERS.map((letter, index) => (
            <CountryItem
              letter={letter}
              selectedLetter={selectedLetter}
              key={index + 1}
              setSelectedLetter={setSelectedLetter}
            />
          ))}
        </ul>

        <CountriesList
          countries={filtredCountries}
          selectedOption={selectedOption}
          setOpen={setOpen}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </div>
  )
}
