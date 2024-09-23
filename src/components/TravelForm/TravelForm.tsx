import styles from './TravelForm.module.scss'
import { StepOne } from '../StepOne/StepOne'
import { StepTwo } from '../StepTwo/StepTwo'
import { StepThree } from '../StepThree/StepThree'
import { DotsList } from './DotsList/DotsList'
import { useState } from 'react'
import { StepsMap } from '../../utils/consts'

export const TravelForm = () => {
  const [currentStep, setCurrentStep] = useState<StepsMap>(StepsMap.STEP_ONE)

  const getCurrentStep = () => {
    switch (currentStep) {
      case StepsMap.STEP_ONE:
        return <StepOne currentStep={currentStep} setCurrentStep={setCurrentStep} />
      case StepsMap.STEP_TWO:
        return <StepTwo currentStep={currentStep} setCurrentStep={setCurrentStep} />
      case StepsMap.STEP_THREE:
        return <StepThree currentStep={currentStep} setCurrentStep={setCurrentStep} />
    }
  }

  return (
    <form className={styles.travelForm}>
      <div className={styles.header}>
        <h2>Добавить план:</h2>
        <DotsList />
      </div>
      {getCurrentStep()}
    </form>
  )
}
