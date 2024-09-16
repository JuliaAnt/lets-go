import styles from './TravelForm.module.scss';
import {StepOne} from '../StepOne/StepOne';
import { DotsList } from './DotsList/DotsList';
import { Countries } from '../Countries/Countries';

export const TravelForm = () => {
  return <form className={styles.travelForm}>
    <div className={styles.header}>
      <h2>Добавить план:</h2>
      <DotsList/>
    </div>
    <StepOne/>
    <Countries/>
  </form>;
};