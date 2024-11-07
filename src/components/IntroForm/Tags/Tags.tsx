import { ChangeEvent, useEffect, useState } from 'react'
import styles from './Tags.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks'
import { changeTags } from '../../../store/formData/formDataSlice'
import { getTags } from '../../../store/formData/formDataSelector'
import { useTranslation } from 'react-i18next'

export const Tags = () => {
  const { t } = useTranslation('translation')
  const dispatch = useAppDispatch()
  const tagsState = useAppSelector(getTags)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (tagsState.length > 0) {
      setInputValue(tagsState.join(' '))
    }
  }, [tagsState])

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
        placeholder={t('tagsPlaceholder')}
        className={styles.inputField}
      />
    </div>
  )
}
