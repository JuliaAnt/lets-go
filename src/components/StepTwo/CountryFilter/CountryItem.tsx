import React from 'react'
import styles from './CountryItem.module.scss'

interface CountryItemProps {
  letter: string
  selectedLetter: string
  setSelectedLetter: (letter: string) => void
}

export const CountryItem: React.FC<CountryItemProps> = ({
  letter,
  selectedLetter,
  setSelectedLetter,
}) => {
  return (
    <li className={styles.countryItem}>
      <button
        className={`${letter === selectedLetter ? styles.active : ''}`}
        type='button'
        onClick={() => setSelectedLetter(letter)}
      >
        {letter}
      </button>
    </li>
  )
}
