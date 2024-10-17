import styles from './Select.module.scss'
import arrowBack from '../../assets/icons/stepTwo/arrow-back.svg'
import iconClose from '../../assets/icons/stepTwo/icon-close.svg'
import iconSmallArrow from '../../assets/icons/stepTwo/icon-small-arrow.svg'
import { useEffect, useState } from 'react'
import { CountryFilter } from '../../components/StepTwo/CountryFilter/CountryFilter'
import { FlagItem } from '../../components/StepTwo/FlagItem/FlagItem'
import { CountryData } from '../../types/countriesData'

type SelectProps = {
  selectedCountry: CountryData | null
}

export const Select = ({ selectedCountry }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<CountryData | null>(selectedCountry)
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setSelectedOption(selectedCountry)
  }, [selectedCountry])

  return (
    <div className={`${styles.selectWrapper} ${selectedOption ? '' : styles.noSelect}`}>
      <div className={`${styles.select} ${isOpen ? styles.isOpen : ''}`}>
        <div
          className={`${styles.selectInner} ${isOpen ? styles.isOpen : ''}`}
          onClick={() => setOpen(!isOpen)}
        >
          <p>{selectedOption ? selectedOption.name : 'Выберите страну'}</p>
          <button className={styles.selectButton} type='button'>
            {isOpen ? (
              <img src={iconClose} width={22} height={24} alt='Закрыть'></img>
            ) : (
              <img src={arrowBack} width={22} height={24} alt='Открыть'></img>
            )}
          </button>
        </div>

        <CountryFilter
          open={isOpen}
          selectedOption={selectedOption}
          setOpen={setOpen}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <FlagItem country={selectedOption ? selectedOption : null} setCountry={setSelectedOption} />
      <img
        className={styles.selectArrow}
        src={iconSmallArrow}
        width={10}
        height={10}
        alt='Стрелка вниз'
      />
    </div>
  )
}
