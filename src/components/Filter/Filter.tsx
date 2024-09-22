import styles from './Filter.module.scss';
import {ButtonShow} from './ButtonShow/ButtonShow';
import {SliderNoUI} from './SliderNoUI/SliderNoUI';
// import {Tags} from './Tags/Tags';
// import {Transport} from './Transport/Transport';
// import introPhoto from '../../assets/images/photo_demin.jpg';


export const Filter = () => {
  return (
    <article className={`${styles.filter}`}>
      <h2>Подберите идеального попутчика</h2>
      <div className={`${styles.sliderFilter}`}>
        <p>ЛЕВЕЛ</p>
        <SliderNoUI/>
      </div>
      <ButtonShow/>
    </article>
  );
};