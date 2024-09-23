import styles from './StepTwo.module.scss'
import { Link } from 'react-router-dom'
import { StepsList } from '../StepsList/StepsList'
import { Select } from '../../ui/select/Select'
import { AddCountry } from './AddCountry/AddCountry'
import iconArrowButton from '../../assets/icons/stepTwo/icon-arrow-triangular.svg'
import { StepsMap } from '../../utils/consts'
import { useState } from 'react'
import { useAppSelector } from '../../hooks/redux-hooks'
import { getSelectedCountries } from '../../store/formData/formDataSelector'

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
          <Link
            className={styles.nextStep}
            to='#'
            onClick={() => setCurrentStep(StepsMap.STEP_THREE)}
          >
            Следующий шаг
            <span>
              <img src={iconArrowButton} width={14} height={14} alt='Следующий шаг' />
            </span>
          </Link>
          <Link
            className={styles.backStep}
            to='#'
            onClick={() => setCurrentStep(StepsMap.STEP_ONE)}
          >
            <span>
              <img src={iconArrowButton} width={14} height={14} alt='Предыдущий шаг' />
            </span>
            На шаг назад
          </Link>
        </div>
      </div>
    </section>
  )
}
