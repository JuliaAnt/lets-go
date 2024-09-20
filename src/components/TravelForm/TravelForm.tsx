import styles from './TravelForm.module.scss'
import { StepOne } from '../StepOne/StepOne'
import { StepTwo } from '../StepTwo/StepTwo'
import { DotsList } from './DotsList/DotsList'

export const TravelForm = () => {
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
      <StepTwo />
    </form>
  )
}
