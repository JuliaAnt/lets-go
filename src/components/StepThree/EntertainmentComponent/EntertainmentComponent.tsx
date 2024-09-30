import styles from '../StepThree.module.scss'
import { CountryData } from '../../../types/countriesData'
import { ChangeEvent, useEffect, useState } from 'react'
import { Entertainment } from '../../../types/entertainments'

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

  // const getEntertainmentValue = () => {
  //   let entertainmentValue = ''
  //   if (inputValue) {
  //     entertainmentValue = inputValue
  //   } else if (entertainmentState) {
  //     entertainmentValue = entertainmentState.description
  //   } else {
  //     entertainmentValue = ''
  //   }
  //   return entertainmentValue
  // }

  const onElementBlur = (value: string, country: string) => {
    handleBlur(value, country)

    if (!value) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
  }

  return (
    <div key={country.name} className={styles.entertainmentComponent}>
      <p>{country.name}</p>
      <div className={styles.errorWrapper}>
        <textarea
          name='top'
          id='top'
          value={inputValue}
          maxLength={200}
          placeholder='План действий'
          onChange={(e) => handleInputChange(e)}
          onBlur={() => onElementBlur(inputValue, country.name)}
          className={isEmpty ? styles.errorBorder : ''}
        ></textarea>
        {isEmpty && <div className={styles.errorMessage}>Это поле должно быть заполнено</div>}
      </div>
    </div>
  )
}
