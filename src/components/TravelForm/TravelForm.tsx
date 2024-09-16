import styles from './TravelForm.module.scss'
import { StepOne } from '../StepOne/StepOne'
import { DotsList } from './DotsList/DotsList'
import { useState } from 'react'
import { COUNTER_INPUT_MAP } from '../../utils/consts'

export const TravelForm = () => {
  const [companionsAmount, setCompanionsAmount] = useState<number>(
    COUNTER_INPUT_MAP.travelerCounter.min,
  )
  const [travelDuration, setTravelDuration] = useState<number>(COUNTER_INPUT_MAP.travelLength.min)

  return (
    <form className={styles.travelForm}>
      <div className={styles.header}>
        <h2>Добавить план:</h2>
        <DotsList />
      </div>
      <StepOne
        companionsAmount={companionsAmount}
        travelDuration={travelDuration}
        setCompanionsAmount={setCompanionsAmount}
        setTravelDuration={setTravelDuration}
      />
    </form>
  )
}
