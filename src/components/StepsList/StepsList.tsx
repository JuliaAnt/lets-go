import { StepsMap } from '../../utils/consts'
import styles from './StepsList.module.scss'

interface StepsListProps {
  currentStep: StepsMap
}

export const StepsList = ({ currentStep }: StepsListProps) => {
  return (
    <ul className={styles.stepsList}>
      <li
        className={`${currentStep === StepsMap.STEP_ONE ? styles.currentStep : ''} ${
          styles.stepsItem
        }`}
      >
        Даты
      </li>
      <li
        className={`${currentStep === StepsMap.STEP_TWO ? styles.currentStep : ''} ${
          styles.stepsItem
        }`}
      >
        маршрут
      </li>
      <li
        className={`${currentStep === StepsMap.STEP_THREE ? styles.currentStep : ''} ${
          styles.stepsItem
        }`}
      >
        развлечения
      </li>
    </ul>
  )
}
