import React from 'react';
import styles from './StepOne.module.scss';
import { Calendar } from '../Calendar/Calendar';
import { StepsList } from '../StepsList/StepsList';
import { ReactComponent as IconMinus} from '../../assets/minus.svg';
import { ReactComponent as IconPlus} from '../../assets/plus.svg';

export const StepOne = () => {
  return (
    <div className={styles.stepOne}>
      <div className={styles.wrapper}>
        <h3>Шаг 1. Даты&nbsp;пребывания</h3>
        <p>Укажите предпочтительное количество попутчиков, которых вы хотели бы позвать в поездку, и ее предполагаемую длительность.</p>
        <StepsList currentStep="dates"/>
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.numberInput} htmlFor='travelerCounter'>
          <span>ищу попутчиков:</span>
          <span className={styles.inputInner}>
            <button className={styles.minusButton} type='button' aria-label='Минус один'>
              <IconMinus/>
            </button>
            <input type='number' id='travelerCounter' min={1} max={10} placeholder='2' />
            <button className={styles.plusButton} type='button' aria-label='Плюс один'>
              <IconPlus/>
            </button>
          </span>
          <span className={styles.labelData}>чел.</span>
        </label>
        <label className={`${styles.numberInput} ${styles.secondInput}`} htmlFor='traveleLength'>
          <span>длительность:</span>
          <span className={styles.inputInner}>
            <button className={styles.minusButton} type='button' aria-label='Минус один'>
              <IconMinus/>
            </button>
            <input type='number' id='traveleLength' min={2} max={31} placeholder='3' />
            <button className={styles.plusButton} type='button' aria-label='Плюс один'>
              <IconPlus/>
            </button>
          </span>
          <span className={styles.labelData}>дн.</span>
        </label>
        <div className={styles.checkboxWrapper}>
          <input type='checkbox' id='acceptChildren' defaultChecked/>
          <label htmlFor='acceptChildren'> Можно с детьми </label>
        </div>
      </div>

      <Calendar/>

      <a href="#second-step" className={styles.nextStepButton}>Следующий шаг
        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 7L0.5 13.0622V0.937822L11 7Z" fill="#1D2E5B"/>
        </svg>
      </a>
    </div>
  );
};
