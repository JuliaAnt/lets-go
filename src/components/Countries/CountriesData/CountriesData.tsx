import { Link } from 'react-router-dom'
import { countriesData } from '../../../data'
import { ALPHABET_LETTERS } from '../../../utils/consts'
import styles from './CountriesData.module.scss'
import React, { useEffect, useState } from 'react'
import { CountriesDataType, CountryData } from '../../../types/countriesData'

type CountriesDataProps = {
  selectedRegions: string[]
  selectedCountries: CountryData[]
  handleCountrySelect: (country: CountryData) => void
}

export const CountriesData: React.FC<CountriesDataProps> = ({
  selectedRegions,
  selectedCountries,
  handleCountrySelect,
}) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('letter-1')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0)
  const [filteredCountries, setFilteredCountries] = useState<CountriesDataType[]>(countriesData)

  useEffect(() => {
    const filteredCountriesData = countriesData
      .map((countriesList) => ({
        ...countriesList,
        countries: countriesList.countries.filter((country) =>
          selectedRegions.includes(country.region),
        ),
      }))
      .filter((countriesList) => countriesList.countries.length > 0)

    if (selectedRegions.length > 0) {
      setFilteredCountries(filteredCountriesData)
    } else {
      setFilteredCountries(countriesData)
    }
  }, [selectedRegions])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLetter(event.target.id)
  }

  const secondHandleChange = (idx: number) => {
    setSelectedIndex(idx)
  }

  return (
    <div className={styles.countriesWrapper}>
      <div className={styles.lettersList}>
        <div className={styles.inputWrapper}>
          {ALPHABET_LETTERS.map((letter, index) => (
            <input
              key={letter}
              className={`lettersInput lettersInput--${index + 1}`}
              type='radio'
              name='letter'
              id={`letter-${index + 1}`}
              checked={selectedLetter === `letter-${index + 1}`}
              onChange={handleChange}
            />
          ))}
        </div>

        <ul className={styles.lettersWrapper}>
          {ALPHABET_LETTERS.map((letter, index) => (
            <li key={letter} className={styles.lettersItem}>
              <label
                className={`${styles.lettersButton} ${
                  selectedLetter === `letter-${index + 1}` ? styles.selected : ''
                }`}
                htmlFor={`letter-${index + 1}`}
                onClick={() => secondHandleChange(index)}
              >
                {letter}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <ul className={styles.countriesData}>
        {filteredCountries.map(({ letter, countries }, index) => (
          <li key={index} className={styles.wrapperItem}>
            <p className={styles.letter}>{letter}</p>
            <ul
              className={`${styles.countriesList} ${
                selectedIndex === index ? styles.visible : styles.hidden
              }`}
            >
              {countries.map((country) => (
                <li
                  key={country.name}
                  className={`${styles.countriesItem} ${
                    selectedCountries.includes(country) ? styles.countriesItemDown : ''
                  }`}
                  onClick={() => handleCountrySelect(country)}
                >
                  <Link to='#' className={styles.countriesLink} data-region-type={country.region}>
                    {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
