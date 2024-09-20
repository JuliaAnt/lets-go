import React from 'react'
import styles from './CountryItem.module.scss'

interface CountryItemProps {
  letter: string
}

export const CountryItem: React.FC<CountryItemProps> = ({ letter }) => {
  return (
    <li className={styles.countryItem}>
      <button type='button'>{letter}</button>
    </li>
  )
}
