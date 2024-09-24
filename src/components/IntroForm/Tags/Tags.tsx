import { ChangeEvent, useState } from 'react'
import styles from './Tags.module.scss'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { changeTags } from '../../../store/formData/formDataSlice'

export const Tags = () => {
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    const words = value.split(' ').map((word) => {
      return word.startsWith('#') ? word : `#${word}`
    })

    setInputValue(words.join(' '))
  }

  const handleBlur = () => {
    const words = inputValue.split(' ').filter((word) => {
      return word !== '#'
    })

    setInputValue(words.join(' '))
    dispatch(changeTags(words))
  }

  return (
    <div className={`${styles.tagList}`}>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder='Коротко о себе в виде 5-8 хештэгов'
        className={styles.inputField}
      />
    </div>
  )
}
