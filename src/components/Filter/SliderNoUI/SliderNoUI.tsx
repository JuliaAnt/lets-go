import styles from './nouislider.module.scss';
import createUiSlider from '../../../vendor/init-nouislider.js';

// window.addEventListener('load', () => {
//   createUiSlider();
// });
createUiSlider();

export const SliderNoUI = () => {
  return (
    <div className={`${styles.inputRange}`} data-slider-duration></div>
  )
};