import { Link } from 'react-router-dom'
import { Languages } from '../../../utils/consts'
import styles from './CountriesData.module.scss'
import React, { useEffect, useState } from 'react'
import { CountriesDataType, CountryData } from '../../../types/countriesData'
import i18n from '../../../localization/i18n'
import { getCountriesByLetter } from '../../../helpers/getCountriesByLetter'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation('countries')
  const [selectedLetter, setSelectedLetter] = useState<string>('letter-1')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0)
  const [filteredCountries, setFilteredCountries] = useState<CountriesDataType[]>([])
  const [alphabetLetters, setAlphabetLetters] = useState<string[]>([])

  useEffect(() => {
    const updateCountries = () => {
      const lang = i18n.language
      const countriesData = getCountriesByLetter(lang as Languages)
      setAlphabetLetters(countriesData.alphabet)
      setFilteredCountries(countriesData.sortedCountriesByLetter)
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

    const countriesDataByLetter = updateCountries()
    i18n.on('languageChanged', updateCountries)

    const filteredCountriesData = countriesDataByLetter.sortedCountriesByLetter
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
      setFilteredCountries(countriesDataByLetter.sortedCountriesByLetter)
    }

    setAlphabetLetters(countriesDataByLetter.alphabet)
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
          {alphabetLetters.map((letter, index) => (
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
          {alphabetLetters.map((letter, index) => (
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
                  key={country.countryCode}
                  className={`${styles.countriesItem} ${
                    selectedCountries.includes(country) ? styles.countriesItemDown : ''
                  }`}
                  onClick={() => handleCountrySelect(country)}
                >
                  <Link to='#' className={styles.countriesLink} data-region-type={country.region}>
                    {t(country.countryCode)}
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
