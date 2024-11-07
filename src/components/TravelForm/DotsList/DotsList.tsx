import { StepsMap } from '../../../utils/consts'
import styles from './DotsList.module.scss'

type DotsListProps = {
  currentStep: StepsMap
}

export const DotsList = ({ currentStep }: DotsListProps) => {
  return (
    <ul className={styles.dotsList}>
      <li
        className={`${currentStep === StepsMap.STEP_ONE ? styles.current : ''}`}
        aria-label='Step one'
      ></li>
      <li
        className={`${currentStep === StepsMap.STEP_TWO ? styles.current : ''}`}
        aria-label='Step two'
      ></li>
      <li
        className={`${currentStep === StepsMap.STEP_THREE ? styles.current : ''}`}
        aria-label='Step three'
      ></li>
    </ul>
  )
}
