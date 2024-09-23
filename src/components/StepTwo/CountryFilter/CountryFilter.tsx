import styles from './CountryFilter.module.scss'
import React from 'react'
import { ALPHABET_LETTERS } from '../../../utils/consts'
import { CountryItem } from './CountryItem'
import { CountriesList } from '../CountriesList/CountriesList'

interface CountryFilterProps {
  open: boolean // Используйте 'boolean' с маленькой буквы
}

export const CountryFilter: React.FC<CountryFilterProps> = ({ open }) => {
  return (
    <div className={`${styles.countryFilter} ${open ? styles.isOpen : ''}`}>
      <div className={styles.countryFilterWrapper}>
        <ul className={styles.countryFilterList}>
          {ALPHABET_LETTERS.map((letter, index) => (
            <CountryItem letter={letter} key={index + 1} />
          ))}
        </ul>

        <CountriesList countries={['russia', 'canada', 'japan']} />
      </div>
    </div>
  )
}
