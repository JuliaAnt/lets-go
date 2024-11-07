import { ChangeEvent, useState } from 'react'
import { ReactComponent as IconMinus } from '../../../assets/minus.svg'
import { ReactComponent as IconPlus } from '../../../assets/plus.svg'
import styles from '../StepOne.module.scss'
import { useTranslation } from 'react-i18next'

interface CounterInputProps {
  data: {
    id: string
    label: string
    min: number
    max: number
    unit: string
  }
  amount: number
  className?: string
  setAmount: (amount: number) => void
}

export const CounterInput = ({ data, amount, className, setAmount }: CounterInputProps) => {
  const { t } = useTranslation('translation')
  const [inputValue, setInputValue] = useState<string>(amount.toString())

  const onIncrementCount = () => {
    if (amount === data.max) {
      setAmount(data.max)
      setInputValue(data.max.toString())
    } else {
      setAmount(amount + 1)
      setInputValue((amount + 1).toString())
    }
  }

  const onDecrementCount = () => {
    if (amount === data.min) {
      setAmount(data.min)
      setInputValue(data.min.toString())
    } else {
      setAmount(amount - 1)
      setInputValue((amount - 1).toString())
    }
  }

  const handleAmountChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
  }

  const handleBlur = () => {
    let newValue = parseFloat(inputValue)
    if (isNaN(newValue)) {
      newValue = data.min
    } else if (newValue < data.min) {
      newValue = data.min
    } else if (newValue > data.max) {
      newValue = data.max
    }
    setAmount(newValue)
    setInputValue(newValue.toString())
  }

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      handleBlur()
    }
  }

  return (
    <label
      className={`${styles.numberInput} ${className ? styles[className] : ''}`}
      htmlFor={data.id}
    >
      <span>{t(data.id)}:</span>
      <span className={styles.inputInner}>
        <button
          className={styles.minusButton}
          type='button'
          aria-label='Минус один'
          onClick={onDecrementCount}
        >
          <IconMinus />
        </button>
        <input
          type='number'
          id={data.id}
          value={inputValue}
          onChange={(evt) => handleAmountChange(evt)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
        <button
          className={styles.plusButton}
          type='button'
          aria-label='Плюс один'
          onClick={onIncrementCount}
        >
          <IconPlus />
        </button>
      </span>
      <span className={styles.labelData}>{t(data.unit)}</span>
    </label>
  )
}
