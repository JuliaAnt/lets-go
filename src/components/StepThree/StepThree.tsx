import styles from './StepThree.module.scss'
import { StepsList } from '../StepsList/StepsList'
import iconArrowButton from '../../assets/icons/stepTwo/icon-arrow-triangular.svg'
import lineCountry from '../../assets/line_country.svg'
import lineCountryMobile from '../../assets/line_country_mobile.svg'
import { StepsMap } from '../../utils/consts'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { getEntertainments, getSelectedCountries } from '../../store/formData/formDataSelector'
import { PrevStepButton } from '../../ui/buttons/PrevStepButton/PrevStepButton'
import { addEntertainment } from '../../store/formData/formDataSlice'
import { EntertainmentComponent } from './EntertainmentComponent/EntertainmentComponent'

// interface StepsTextareaListProps {
//     length: number;
//     text: string;
// }

// export const Textarea = ({length, text}: StepsTextareaListProps) => {
//   return <textarea name="top" id="top" maxLength={`${length}`} placeholder='План действий'>`${text}`</textarea>;
// };

type StepThreeProps = {
  currentStep: StepsMap
  setCurrentStep: (currentStep: StepsMap) => void
}

export const StepThree = ({ currentStep, setCurrentStep }: StepThreeProps) => {
  const dispatch = useAppDispatch()
  const selectedCountriesState = useAppSelector(getSelectedCountries)
  const entertainmentsState = useAppSelector(getEntertainments)

  const handleBlur = (inputValue: string, country: string) => {
    dispatch(
      addEntertainment({
        country: country,
        description: inputValue,
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
        {selectedCountriesState.map((country, index) => {
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
                  <img src={lineCountry} width={14} height={274} alt='decor' />
                </div>
                <div className={styles.decorMobile}>
                  <img src={lineCountryMobile} width={17} height={287} alt='decor' />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.pageLinks}>
        <button className={styles.nextStep}>
          Отправить
          <span>
            <img src={iconArrowButton} width={14} height={14} alt='Отправить' />
          </span>
        </button>
        <PrevStepButton onClick={() => setCurrentStep(StepsMap.STEP_TWO)} />
      </div>
    </section>
  )
}
