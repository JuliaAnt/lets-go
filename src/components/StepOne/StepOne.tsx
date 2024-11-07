import styles from './StepOne.module.scss'
import { StepsList } from '../StepsList/StepsList'
import { COUNTER_INPUT_MAP, StepsMap } from '../../utils/consts'
import { CounterInput } from './CounterInput/CounterInput'
import { CalendarTable } from '../Calendar/CalendarTable'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import {
  getChildrenAllowed,
  getCompanionsAmount,
  getTravelDuration,
} from '../../store/formData/formDataSelector'
import {
  changeCompanionsAmount,
  changeTravelDuration,
  toggleChildrenAllowed,
} from '../../store/formData/formDataSlice'
import { NextStepButton } from '../../ui/buttons/NextStepButton/NextStepButton'
import { useTranslation } from 'react-i18next'

type StepOneProps = {
  currentStep: StepsMap
  setCurrentStep: (currentStep: StepsMap) => void
}

export const StepOne = ({ currentStep, setCurrentStep }: StepOneProps) => {
  const { t } = useTranslation('translation')
  const dispatch = useAppDispatch()
  const companionsAmount = useAppSelector(getCompanionsAmount)
  const travelDuration = useAppSelector(getTravelDuration)
  const isChildrenAllowed = useAppSelector(getChildrenAllowed)

  return (
    <div className={styles.stepOne}>
      <div className={styles.wrapper}>
        <h3>{t('stepOne')}</h3>
        <p>{t('stepOneText')}</p>
        <StepsList currentStep={currentStep} />
      </div>
      <div className={styles.inputWrapper}>
        <CounterInput
          data={COUNTER_INPUT_MAP.travelerCounter}
          amount={companionsAmount}
          setAmount={(amount: number) => dispatch(changeCompanionsAmount(amount))}
        />
        <CounterInput
          className='secondInput'
          data={COUNTER_INPUT_MAP.travelLength}
          amount={travelDuration}
          setAmount={(duration: number) => dispatch(changeTravelDuration(duration))}
        />
        <div className={styles.checkboxWrapper}>
          <input
            type='checkbox'
            id='acceptChildren'
            defaultChecked={isChildrenAllowed}
            onClick={() => dispatch(toggleChildrenAllowed(!isChildrenAllowed))}
          />
          <label htmlFor='acceptChildren'>{t('acceptChildren')}</label>
        </div>
      </div>

      <CalendarTable />

      <div className={styles.buttonWrapper}>
        <NextStepButton onClick={() => setCurrentStep(StepsMap.STEP_TWO)} />
      </div>
    </div>
  )
}
