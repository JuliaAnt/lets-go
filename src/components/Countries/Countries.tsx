import React, { useState } from 'react'
import { CountriesData } from './CountriesData/CountriesData'
import { ReactComponent as IconClose } from '../../assets/icon_close.svg'
import styles from './Countries.module.scss'
import { ReactComponent as IconFilter } from '../../assets/icon_filter.svg'
import { ReactComponent as IconShow } from '../../assets/icon-show.svg'
import { REGIONS_MAP } from '../../utils/consts'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { getCountries, getRegions } from '../../store/catalogData/catalogDataSelector'
import { changeCountries, changeRegions } from '../../store/catalogData/catalogDataSlice'
import { CountryData } from '../../types/countriesData'

export const Countries = () => {
  const [isContentVisible, setContentVisible] = useState(false)
  const dispatch = useAppDispatch()
  const selectedRegionsState = useAppSelector(getRegions)
  const selectedCountriesState = useAppSelector(getCountries)

  const toggleContent = () => {
    setContentVisible(!isContentVisible)
  }

  const handleCountrySelect = (country: CountryData) => {
    dispatch(changeCountries(country))
  }

  return (
    <section className={styles.countries}>
      <div
        className={`${styles.countriesHeader} ${isContentVisible ? styles.filterTextMobile : ''}`}
      >
        <p className={styles.filterText}>
          <IconFilter />
          <span>Фильтрация по странам:</span>
        </p>
        <ul className={`${styles.filterList} ${isContentVisible ? styles.mobileVisible : ''}`}>
          {REGIONS_MAP.map((region) => (
            <li
              key={region.regionName}
              className={`${styles.filterItem} ${
                selectedRegionsState.includes(region.regionTitle) ? styles.activeFilter : ''
              }`}
              onClick={() => dispatch(changeRegions(region.regionTitle))}
            >
              <Link to=''>{region.regionTitle}</Link>
            </li>
          ))}
        </ul>
        <button className={styles.toggleButton} type='button' onClick={toggleContent}>
          {isContentVisible ? (
            <span className={`${styles.toggleSpan}`}>
              <span className={styles.hideSpan}>Свернуть</span>
              <IconClose />
            </span>
          ) : (
            <span className={styles.toggleSpan}>
              <span className={styles.showSpan}>Показать все</span>
              <IconShow />
            </span>
          )}
        </button>
      </div>
      <div
        className={`${styles.contentWrapper} ${isContentVisible ? styles.visible : styles.hidden}`}
      >
        <CountriesData
          selectedRegions={selectedRegionsState}
          selectedCountries={selectedCountriesState}
          handleCountrySelect={handleCountrySelect}
        />
        <button className={styles.hideButton} type='button' onClick={toggleContent}>
          <IconClose />
          Свернуть
        </button>
      </div>
    </section>
  )
}
