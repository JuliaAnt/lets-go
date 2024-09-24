import styles from './StepThree.module.scss'
import { StepsList } from '../StepsList/StepsList'
import iconArrowButton from '../../assets/icons/stepTwo/icon-arrow-triangular.svg'
import lineCountry from '../../assets/line_country.svg'
import lineCountryMobile from '../../assets/line_country_mobile.svg'
import { StepsMap } from '../../utils/consts'
import { useAppSelector } from '../../hooks/redux-hooks'
import { getSelectedCountries } from '../../store/formData/formDataSelector'
import { PrevStepButton } from '../../ui/buttons/PrevStepButton/PrevStepButton'

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
  const selectedCountriesState = useAppSelector(getSelectedCountries)

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
          const className = `textarea${index + 1}`
          return (
            <div key={country.name} className={styles[className]}>
              <p>{country.name}</p>
              <textarea name='top' id='top' maxLength={200} placeholder='План действий'></textarea>
            </div>
          )
        })}
        {/* <div className={styles.textareaTop}>
      <p>Босния</p>
      <textarea name='top' id='top' placeholder='План действий'></textarea>
    </div>
    <div className={styles.textareaDown}>
      <p>Чехия</p>
        defaultValue={
          'Пить пиво и лазить по старым замкам, наслаждаться архитектурой и вот это все'
        }
      ></textarea>
    </div> */}
        <div className={styles.areaFlags}>
          {selectedCountriesState.map((country) => (
            <img key={country.name} src={country.flags} width={70} height={47} alt={country.alt} />
          ))}
          {/* <img src={flagBosniaAndHerzegovina} width={70} height={47} alt='BosniaAndHerzegovina' />
    <img src={flagCzech} width={70} height={47} alt='flagCzech' /> */}
          <div className={styles.decorDesktop}>
            <img src={lineCountry} width={14} height={274} alt='decor' />
          </div>
          <div className={styles.decorMobile}>
            <img src={lineCountryMobile} width={17} height={287} alt='decor' />
          </div>
        </div>
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
