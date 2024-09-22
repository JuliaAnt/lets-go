import styles from './StepTwo.module.scss'
import { Link } from 'react-router-dom'
import { StepsList } from '../StepsList/StepsList'
import { Select } from '../../ui/select/Select'
import { AddCountry } from './AddCountry/AddCountry'
import iconArrowButton from '../../assets/icons/stepTwo/icon-arrow-triangular.svg'

export const StepTwo = () => {
  return (
    <section className={styles.stepTwo}>
      <div className={styles.header}>
        <h3>Шаг 2. Маршрут</h3>
        <p>
          Укажите страны, которые вы&nbsp;хотели&nbsp;бы посетить. Это может быть одна или сразу
          несколько.
        </p>
        <StepsList currentStep='route' />
      </div>

      <div className={styles.selectWrapper}>
        <Select />
        <Select />
        <Select />
        <AddCountry />

        <div className={styles.pageLinks}>
          <Link className={styles.nextStep} to='#'>
            Следующий шаг
            <span>
              <img src={iconArrowButton} width={14} height={14} alt='Следующий шаг' />
            </span>
          </Link>
          <Link className={styles.backStep} to='#'>
            <span>
              <img src={iconArrowButton} width={14} height={14} alt='Следующий шаг' />
            </span>
            На шаг назад
          </Link>
        </div>
      </div>
    </section>
  )
}
