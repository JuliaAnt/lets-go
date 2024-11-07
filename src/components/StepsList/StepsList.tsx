import { useTranslation } from 'react-i18next'
import { StepsMap } from '../../utils/consts'
import styles from './StepsList.module.scss'

interface StepsListProps {
  currentStep: StepsMap
}

export const StepsList = ({ currentStep }: StepsListProps) => {
  const { t } = useTranslation('translation')

  return (
    <ul className={styles.stepsList}>
      <li
        className={`${currentStep === StepsMap.STEP_ONE ? styles.currentStep : ''} ${
          styles.stepsItem
        }`}
      >
        {t('dates')}
      </li>
      <li
        className={`${currentStep === StepsMap.STEP_TWO ? styles.currentStep : ''} ${
          styles.stepsItem
        }`}
      >
        {t('route')}
      </li>
      <li
        className={`${currentStep === StepsMap.STEP_THREE ? styles.currentStep : ''} ${
          styles.stepsItem
        }`}
      >
        {t('activities')}
      </li>
    </ul>
  )
}
