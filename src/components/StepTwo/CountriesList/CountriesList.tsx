import styles from './CountriesList.module.scss'
import React from 'react'

interface CountriesListProps {
  countries: string[]
}

export const CountriesList: React.FC<CountriesListProps> = ({ countries }) => {
  return (
    <ul className={styles.countriesList}>
      {countries.map((country, index) => (
        <button key={index + 1} type='button'>
          {country}
        </button>
      ))}
    </ul>
  )
}
