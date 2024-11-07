import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { getSelectedCountries } from '../../../store/formData/formDataSelector'
import {
  addCountry,
  changeCountry as changeCountryState,
} from '../../../store/formData/formDataSlice'
import { CountryData } from '../../../types/countriesData'
import styles from './CountriesList.module.scss'
import React from 'react'

interface CountriesListProps {
  countries: CountryData[]
  selectedOption: CountryData | null
  setOpen: (isOpen: boolean) => void
  setSelectedOption: (selectedOption: CountryData) => void
}

export const CountriesList: React.FC<CountriesListProps> = ({
  countries,
  selectedOption,
  setOpen,
}) => {
  const { t } = useTranslation('countries')
  const dispatch = useAppDispatch()
  const selectedCountriesState = useAppSelector(getSelectedCountries)

  const changeCountry = (selectedCountry: CountryData | null, newCountry: CountryData) => {
    if (selectedCountry && selectedCountry.countryCode === newCountry.countryCode) {
      return
    }

    if (selectedCountry) {
      dispatch(changeCountryState({ selectedValue: selectedCountry, newValue: newCountry }))
    }

    if (
      !selectedCountry &&
      !selectedCountriesState.find((country) => country.countryCode === newCountry.countryCode)
    ) {
      dispatch(addCountry(newCountry))
    }
    setOpen(false)
  }

  return (
    <ul className={styles.countriesList}>
      {countries.map((country, index) => (
        <button
          key={index + 1}
          type='button'
          disabled={Boolean(
            selectedCountriesState.find(
              (selectedCountry) => country.countryCode === selectedCountry.countryCode,
            ),
          )}
          onClick={() => changeCountry(selectedOption, country)}
        >
          {t(country.countryCode)}
        </button>
      ))}
    </ul>
  )
}
