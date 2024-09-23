import styles from './StepThree.module.scss'
import { Link } from 'react-router-dom'
import { StepsList } from '../StepsList/StepsList'
// import { Select } from '../../ui/select/Select'
// import { AddCountry } from './AddCountry/AddCountry'
import iconArrowButton from '../../assets/icons/stepTwo/icon-arrow-triangular.svg'
import lineCountry from '../../assets/line_country.svg'
import lineCountryMobile from '../../assets/line_country_mobile.svg'
import flagBosniaAndHerzegovina from '../../assets/images/flags/Bosnia-and-Herzegovina.png'
import flagCzech from '../../assets/images/flags/Czech.png'
import { StepsMap } from '../../utils/consts'

// interface StepsTextareaListProps {
//     length: number;
//     text: string;
// }

// export const Textarea = ({length, text}: StepsTextareaListProps) => {
//   return <textarea name="top" id="top" maxLength={`${length}`} placeholder='План действий'>`${text}`</textarea>;
// };

type StepThreeProps = {
  setCurrentStep: (currentStep: StepsMap) => void
}

export const StepThree = ({ setCurrentStep }: StepThreeProps) => {
  return (
    <section className={styles.StepThree}>
      <div className={styles.header}>
        <h3>Шаг 3. Развлечения</h3>
        <p>
          Наконец, расскажите о&nbsp;своих планах времяпровождения. <br />
          Можно писать в&nbsp;свободной форме и&nbsp;ставить тэги.
        </p>
        <StepsList currentStep='entertainment' />
      </div>

      <div className={styles.textareaWrapper}>
        <div className={styles.textareaTop}>
          <p>Босния</p>
          {/* <textarea name="top" id="top" maxLength="200" placeholder='План действий'></textarea> */}
          <textarea name='top' id='top' placeholder='План действий'></textarea>
          {/* <Textarea length=200 /> */}
        </div>
        <div className={styles.textareaDown}>
          <p>Чехия</p>
          <textarea
            name='down'
            id='down'
            placeholder='План действий'
            defaultValue={
              'Пить пиво и лазить по старым замкам, наслаждаться архитектурой и вот это все'
            }
          >
            {/* Пить пиво и&nbsp;лазить по&nbsp;старым замкам, наслаждаться архитектурой и&nbsp;вот это
            все. */}
          </textarea>
        </div>
        <div className={styles.areaFlags}>
          <img src={flagBosniaAndHerzegovina} width={70} height={47} alt='BosniaAndHerzegovina' />
          <img src={flagCzech} width={70} height={47} alt='flagCzech' />
          <div className={styles.decorDesktop}>
            <img src={lineCountry} width={14} height={274} alt='decor' />
          </div>
          <div className={styles.decorMobile}>
            <img src={lineCountryMobile} width={17} height={287} alt='decor' />
          </div>
        </div>
      </div>
      <div className={styles.pageLinks}>
        <Link className={styles.nextStep} to='#'>
          Отправить
          <span>
            <img src={iconArrowButton} width={14} height={14} alt='Отправить' />
          </span>
        </Link>
        <Link className={styles.backStep} to='#' onClick={() => setCurrentStep(StepsMap.STEP_TWO)}>
          <span>
            <img src={iconArrowButton} width={14} height={14} alt='Предыдущий шаг' />
          </span>
          На шаг назад
        </Link>
      </div>
    </section>
  )
}
