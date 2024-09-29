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
  const dispatch = useAppDispatch()
  const selectedCountriesState = useAppSelector(getSelectedCountries)

  const changeCountry = (selectedCountry: CountryData | null, newCountry: CountryData) => {
    if (selectedCountry && selectedCountry.name === newCountry.name) {
      return
    }

    if (selectedCountry) {
      dispatch(changeCountryState({ selectedValue: selectedCountry, newValue: newCountry }))
    }

    if (
      !selectedCountry &&
      !selectedCountriesState.find((country) => country.name === newCountry.name)
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
            selectedCountriesState.find((selectedCountry) => country.name === selectedCountry.name),
          )}
          onClick={() => changeCountry(selectedOption, country)}
        >
          {country.name}
        </button>
      ))}
    </ul>
  )
}
