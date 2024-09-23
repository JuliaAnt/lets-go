import styles from './FlagItem.module.scss'
import React from 'react'
import iconClose from '../../../assets/icons/stepTwo/icon-close-grey.svg'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { removeCountry } from '../../../store/formData/formDataSlice'
import { CountryData } from '../../../types/countriesData'

interface FlagItemProps {
  country: CountryData | null
  setCountry: (country: CountryData | null) => void
}

export const FlagItem: React.FC<FlagItemProps> = ({ country, setCountry }) => {
  const dispatch = useAppDispatch()

  const removeSelectedCountry = (country: CountryData | null) => {
    if (country) {
      dispatch(removeCountry(country))
      setCountry(null)
    }
  }

  return (
    <span className={`${styles.flagItem} ${country ? styles.isFlag : ''}`}>
      {country ? (
        <>
          <img src={country.flags} width={70} height={47} alt={country.alt} />
          <button type='button' onClick={() => removeSelectedCountry(country)}>
            <img src={iconClose} width={22} height={24} alt='Close' />
          </button>
        </>
      ) : (
        <></>
      )}
    </span>
  )
}
