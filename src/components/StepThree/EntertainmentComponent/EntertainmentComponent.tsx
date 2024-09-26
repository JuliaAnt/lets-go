import styles from '../StepThree.module.scss'
import { CountryData } from '../../../types/countriesData'
import { ChangeEvent, useState } from 'react'
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

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const getEntertainmentValue = () => {
    let entertainmentValue = ''
    if (inputValue) {
      entertainmentValue = inputValue
    } else if (entertainmentState) {
      entertainmentValue = entertainmentState.description
    } else {
      entertainmentValue = ''
    }
    return entertainmentValue
  }

  return (
    <div key={country.name} className={styles.entertainmentComponent}>
      <p>{country.name}</p>
      <textarea
        name='top'
        id='top'
        value={getEntertainmentValue()}
        maxLength={200}
        placeholder='План действий'
        onChange={(e) => handleInputChange(e)}
        onBlur={() => handleBlur(inputValue, country.name)}
      ></textarea>
    </div>
  )
}
