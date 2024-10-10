import styles from './TravelForm.module.scss'
import { StepOne } from '../StepOne/StepOne'
import { StepTwo } from '../StepTwo/StepTwo'
import { StepThree } from '../StepThree/StepThree'
import { DotsList } from './DotsList/DotsList'
import { useEffect, useState } from 'react'
import { StepsMap } from '../../utils/consts'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { changeErrors } from '../../store/formData/formDataSlice'

export const TravelForm = () => {
  const dispatch = useAppDispatch()
  const [currentStep, setCurrentStep] = useState<StepsMap>(StepsMap.STEP_ONE)

  useEffect(() => {
    dispatch(changeErrors())
  }, [dispatch])

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
        <DotsList currentStep={currentStep} />
      </div>
      {getCurrentStep()}
    </form>
  )
}
