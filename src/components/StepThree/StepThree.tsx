import styles from './StepThree.module.scss'
import { StepsList } from '../StepsList/StepsList'
import iconArrowButton from '../../assets/icons/stepTwo/icon-arrow-triangular.svg'
import { AppRoute, StepsMap } from '../../utils/consts'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { getFormDataState } from '../../store/formData/formDataSelector'
import { PrevStepButton } from '../../ui/buttons/PrevStepButton/PrevStepButton'
import { addEntertainment } from '../../store/formData/formDataSlice'
import { EntertainmentComponent } from './EntertainmentComponent/EntertainmentComponent'
import { sendFormData } from '../../store/api-actions'
import { FormData } from '../../types/formData'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { getCards } from '../../store/catalogData/catalogDataSelector'
import { EmptyEntertainments } from './EmptyEntertainments/EmptyEntertainments'

type StepThreeProps = {
  currentStep: StepsMap
  setCurrentStep: (currentStep: StepsMap) => void
}

export const StepThree = ({ currentStep, setCurrentStep }: StepThreeProps) => {
  const dispatch = useAppDispatch()
  const formDataState = useAppSelector(getFormDataState)
  const selectedCountriesState = formDataState.selectedCountries
  const entertainmentsState = formDataState.entertainments
  const cardsState = useAppSelector(getCards)
  const errors = formDataState.errors

  const navigate = useNavigate()

  const handleBlur = (inputValue: string, country: string) => {
    dispatch(
      addEntertainment({
        country: country,
        description: inputValue,
      }),
    )
  }

  const handleSubmit = () => {
    const formData: FormData = {
      uuid: formDataState.uuid,
      firstName: formDataState.firstName,
      lastName: formDataState.lastName,
      photoUrl: formDataState.photoUrl,
      companionsAmount: formDataState.companionsAmount,
      travelDuration: formDataState.travelDuration,
      isChildrenAllowed: formDataState.isChildrenAllowed,
      transportType: formDataState.transportType,
      selectedCountries: formDataState.selectedCountries,
      tags: formDataState.tags,
      travelDates: formDataState.travelDates,
      entertainments: formDataState.entertainments,
    }

    dispatch(
      sendFormData({
        formData,
        onSuccess: () => {
          console.log(cardsState)
          navigate(AppRoute.CATALOG)
        },
        onError: (error: AxiosError) => {
          console.error(error)
        },
      }),
    )
  }

  return (
    <section className={styles.StepThree}>
      <div className={styles.header}>
        <h3>Шаг 3. Развлечения</h3>
        <p>
          Наконец, расскажите о&nbsp;своих планах времяпровождения. <br />
          Можно писать в&nbsp;свободной форме и&nbsp;ставить тэги.
        </p>
        <StepsList currentStep={currentStep} />
      </div>
      <div className={styles.textareaWrapper}>
        {selectedCountriesState.length > 0 ? (
          selectedCountriesState.map((country, index) => {
            const entertainmentState = entertainmentsState.find(
              (entertainment) => entertainment.country === country.name,
            )
            return (
              <div key={country.name} className={styles.entertainmentItem}>
                <EntertainmentComponent
                  entertainmentState={entertainmentState}
                  country={country}
                  className={styles.entertainmentComponent}
                  handleBlur={handleBlur}
                />
                <div className={styles.areaFlags}>
                  <img src={country.flags} width={70} height={47} alt={country.alt} />
                  <div className={styles.decorDesktop}>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='7' cy='7' r='7' fill='#1D2E5B' />
                    </svg>
                    {index < selectedCountriesState.length - 1 ? (
                      <svg
                        width='2'
                        height='248'
                        viewBox='0 0 2 248'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <line x1='1' x2='1' y2='248' stroke='#1D2E5B' stroke-width='2' />
                      </svg>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className={styles.decorMobile}>
                    {selectedCountriesState.length === 1 ||
                    index === selectedCountriesState.length - 1 ? (
                      <svg
                        width='6'
                        height='6'
                        viewBox='0 0 6 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='3' cy='3' r='3' fill='#1D2E5B' />
                      </svg>
                    ) : (
                      <svg
                        width='17'
                        height='287'
                        viewBox='0 0 17 287'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='14' cy='3' r='3' fill='#1D2E5B' />
                        <circle cx='14' cy='284' r='3' fill='#1D2E5B' />
                        <rect x='2' y='2' width='11' height='2' fill='#1D2E5B' />
                        <rect y='283' width='12' height='2' fill='#1D2E5B' />
                        <rect
                          y='285'
                          width='283'
                          height='2'
                          transform='rotate(-90 0 285)'
                          fill='#1D2E5B'
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <EmptyEntertainments />
        )}
      </div>
      <div className={styles.pageLinks}>
        <button
          type='button'
          className={styles.nextStep}
          onClick={handleSubmit}
          disabled={Boolean(errors.length !== 0)}
        >
          Отправить
          <span>
            <img src={iconArrowButton} width={14} height={14} alt='Отправить' />
          </span>
        </button>
        <PrevStepButton onClick={() => setCurrentStep(StepsMap.STEP_TWO)} />
      </div>
      <div className={styles.errorList}>
        {errors.map((error) => (
          <div key={error.errorName}>{error.errorText}</div>
        ))}
      </div>
    </section>
  )
}
