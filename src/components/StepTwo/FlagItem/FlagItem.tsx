import styles from './FlagItem.module.scss'
import React from 'react'
import iconClose from '../../../assets/icons/stepTwo/icon-close-grey.svg'

interface FlagItemProps {
  flag: string
}

export const FlagItem: React.FC<FlagItemProps> = ({ flag }) => {
  return (
    <span className={`${styles.flagItem} ${flag ? styles.isFlag : ''}`}>
      <img src={flag} width={70} height={47} alt='Имя флага' />

      {flag ? (
        <button type='button'>
          <img src={iconClose} width={22} height={24} alt='Close' />
        </button>
      ) : (
        <></>
      )}
    </span>
  )
}
