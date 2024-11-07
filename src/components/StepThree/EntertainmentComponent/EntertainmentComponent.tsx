import styles from '../StepThree.module.scss'
import { CountryData } from '../../../types/countriesData'
import { ChangeEvent, useEffect, useState } from 'react'
import { Entertainment } from '../../../types/entertainments'
import { useTranslation } from 'react-i18next'

type EntertainmentComponentProps = {
  country: CountryData
  className: string
  entertainmentState: Entertainment | undefined
  handleBlur: (inputValue: string, country: string) => void
}

export const EntertainmentComponent = ({
  country,
  className,
  entertainmentState,
  handleBlur,
}: EntertainmentComponentProps) => {
  const { t } = useTranslation(['translation', 'countries'])
  const [inputValue, setInputValue] = useState<string>('')
  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  useEffect(() => {
    if (entertainmentState) {
      setInputValue(entertainmentState?.description)
    }
  }, [entertainmentState])

  const onElementBlur = (value: string, country: string) => {
    handleBlur(value, country)

    if (!value) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
  }

  return (
    <div key={country.countryCode} className={styles.entertainmentComponent}>
      <p>{t(country.countryCode, { ns: 'countries' })}</p>
      <div className={styles.errorWrapper}>
        <textarea
          name='top'
          id='top'
          value={inputValue}
          maxLength={200}
          placeholder={t('activityPlaceholder')}
          onChange={(e) => handleInputChange(e)}
          onBlur={() => onElementBlur(inputValue, country.countryCode)}
          className={isEmpty ? styles.errorBorder : ''}
        ></textarea>
        {isEmpty && <div className={styles.errorMessage}>{t('activityError')}</div>}
      </div>
    </div>
  )
}
