import styles from './Select.module.scss'
import arrowBack from '../../assets/icons/stepTwo/arrow-back.svg'
import iconClose from '../../assets/icons/stepTwo/icon-close.svg'
import iconSmallArrow from '../../assets/icons/stepTwo/icon-small-arrow.svg'
import { useState } from 'react'
import { CountryFilter } from '../../components/StepTwo/CountryFilter/CountryFilter'
import { FlagItem } from '../../components/StepTwo/FlagItem/FlagItem'

export const Select = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className={`${styles.selectWrapper} ${selectedOption ? 'isSelect' : ''}`}>
      <div className={`${styles.select} ${isOpen ? styles.isOpen : ''}`}>
        <div className={styles.selectInner} onClick={() => setOpen(!isOpen)}>
          <p>{selectedOption || 'Выберите страну'}</p>
          <button className={styles.selectButton} type='button'>
            {isOpen ? (
              <img src={iconClose} width={22} height={24} alt='Закрыть'></img>
            ) : (
              <img src={arrowBack} width={22} height={24} alt='Открыть'></img>
            )}
          </button>
        </div>

        <CountryFilter open={isOpen} />
      </div>

      <FlagItem flag='flagName' />
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
