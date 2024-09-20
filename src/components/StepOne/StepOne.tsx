import styles from './StepOne.module.scss'
import { StepsList } from '../StepsList/StepsList'
import { COUNTER_INPUT_MAP } from '../../utils/consts'
import { CounterInput } from './CounterInput/CounterInput'
import { Link } from 'react-router-dom'
import { CalendarTable } from '../Calendar/CalendarTable'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import {
  getChildrenAllowed,
  getCompanionsAmount,
  getTravelDuration,
} from '../../store/formSlice/formDataSelector'
import {
  changeCompanionsAmount,
  changeTravelDuration,
  toggleChildrenAllowed,
} from '../../store/formSlice/formDataSlice'

export const StepOne = () => {
  const dispatch = useAppDispatch()
  const companionsAmount = useAppSelector(getCompanionsAmount)
  const travelDuration = useAppSelector(getTravelDuration)
  const isChildrenAllowed = useAppSelector(getChildrenAllowed)

  return (
    <div className={styles.stepOne}>
      <div className={styles.wrapper}>
        <h3>Шаг 1. Даты&nbsp;пребывания</h3>
        <p>
          Укажите предпочтительное количество попутчиков, которых вы хотели бы позвать в поездку, и
          ее предполагаемую длительность.
        </p>
        <StepsList currentStep='dates' />
      </div>
      <div className={styles.inputWrapper}>
        <CounterInput
          data={COUNTER_INPUT_MAP.travelerCounter}
          amount={companionsAmount}
          setAmount={(amount: number) => dispatch(changeCompanionsAmount(amount))}
        />
        <CounterInput
          data={COUNTER_INPUT_MAP.travelLength}
          amount={travelDuration}
          className={styles.secondInput}
          setAmount={(duration: number) => dispatch(changeTravelDuration(duration))}
        />
        <div className={styles.checkboxWrapper}>
          <input
            type='checkbox'
            id='acceptChildren'
            defaultChecked={isChildrenAllowed}
            onClick={() => dispatch(toggleChildrenAllowed(!isChildrenAllowed))}
          />
          <label htmlFor='acceptChildren'> Можно с детьми </label>
        </div>
      </div>

      <CalendarTable />

      <Link to='#second-step' className={styles.nextStepButton}>
        Следующий шаг
        <svg
          width='11'
          height='14'
          viewBox='0 0 11 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M11 7L0.5 13.0622V0.937822L11 7Z' fill='#1D2E5B' />
        </svg>
      </Link>
    </div>
  )
}
