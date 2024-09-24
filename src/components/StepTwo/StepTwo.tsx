import styles from './StepTwo.module.scss'
import { StepsList } from '../StepsList/StepsList'
import { Select } from '../../ui/select/Select'
import { AddCountry } from './AddCountry/AddCountry'
import { StepsMap } from '../../utils/consts'
import { useState } from 'react'
import { useAppSelector } from '../../hooks/redux-hooks'
import { getSelectedCountries } from '../../store/formData/formDataSelector'
import { NextStepButton } from '../../ui/buttons/NextStepButton/NextStepButton'
import { PrevStepButton } from '../../ui/buttons/PrevStepButton/PrevStepButton'

type StepTwoProps = {
  currentStep: StepsMap
  setCurrentStep: (currentStep: StepsMap) => void
}

export const StepTwo = ({ currentStep, setCurrentStep }: StepTwoProps) => {
  const [newSelect, setNewSelect] = useState<boolean>(false)
  const selectedCountriesState = useAppSelector(getSelectedCountries)

  return (
    <section className={styles.stepTwo}>
      <div className={styles.header}>
        <h3>Шаг 2. Маршрут</h3>
        <p>
          Укажите страны, которые вы&nbsp;хотели&nbsp;бы посетить. Это может быть одна или сразу
          несколько.
        </p>
        <StepsList currentStep={currentStep} />
      </div>
      <div className={styles.selectWrapper}>
        <Select
          selectedCountry={selectedCountriesState.length > 0 ? selectedCountriesState[0] : null}
        />
        <Select
          selectedCountry={selectedCountriesState.length > 1 ? selectedCountriesState[1] : null}
        />
        <Select
          selectedCountry={selectedCountriesState.length > 2 ? selectedCountriesState[2] : null}
        />
        {newSelect || selectedCountriesState.length > 3 ? (
          <Select
            selectedCountry={selectedCountriesState.length > 3 ? selectedCountriesState[3] : null}
          />
        ) : (
          <AddCountry setNewSelect={setNewSelect} />
        )}
        <div className={styles.pageLinks}>
          <NextStepButton onClick={() => setCurrentStep(StepsMap.STEP_THREE)} />
          <PrevStepButton onClick={() => setCurrentStep(StepsMap.STEP_ONE)} />
        </div>
      </div>
    </section>
  )
}
