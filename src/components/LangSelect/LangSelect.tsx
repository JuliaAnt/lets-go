import { countriesData } from '../../data/countriesData'
import i18n from '../../localization/i18n'
import { Languages } from '../../utils/consts'
import styles from './LangSelect.module.scss'
import { useEffect, useRef, useState } from 'react'
import arrow from '../../assets/icons/header/lang-arrow.svg'

const LangIcon = ({ lang }: { lang: string | undefined }) => {
  const getLink = (lang: string | undefined) => {
    const country =
      lang === Languages.PL || lang === Languages.RU
        ? countriesData.find((data) => data.countryCode === lang)
        : countriesData.find((data) => data.countryCode === 'US')
    return { flag: country?.flags, alt: country?.alt }
  }
  return <img src={getLink(lang).flag} width={30} height={20} alt={getLink(lang).alt} className={styles.langFlag}/>
}

export const LangSelect = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedLang, setSelectedLang] = useState<string | undefined>(i18n.resolvedLanguage)
  const inputRef = useRef<HTMLDivElement | null>(null)
  const availableOptions = Object.keys(Languages).filter((option) => option !== selectedLang)

  useEffect(() => {
    const handler = (evt: any) => {
      if (inputRef.current && !inputRef.current.contains(evt.target)) {
        setShowMenu(false)
      }
    }

    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [])

  const handleInputClick = () => {
    setShowMenu(!showMenu)
  }

  const isSelected = (option: string) => {
    return selectedLang === option
  }

  const onLangChange = (option: string) => {
    i18n.changeLanguage(option)
    setSelectedLang(option)
  }

  return (
    <div className={styles.langSelectContainer}>
      <div ref={inputRef} onClick={handleInputClick} className={styles.dropdownInput}>
        {/* <div className={`dropdown-selected-value`}> */}
        <LangIcon lang={selectedLang} />
        <img
          src={arrow}
          width={18}
          height={11}
          alt='Open'
          className={`${showMenu ? styles.arrowOpen : styles.arrowClose}`}
        ></img>
        {/* </div> */}
      </div>

      {showMenu && (
        <div className={styles.dropdownMenu}>
          {availableOptions.map((option) => (
            <div
              onClick={() => onLangChange(option)}
              key={option}
              className={`${styles.dropdownItem} ${isSelected(option) && 'selected'}`}
            >
              <LangIcon lang={option} />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
