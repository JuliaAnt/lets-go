import styles from './IntroForm.module.scss';
import {ButtonChange} from './ButtonChange/ButtonChange';
import {Level} from './Level/Level';
import {Tags} from './Tags/Tags';
import {Transport} from './Transport/Transport';
import introPhoto from '../../assets/images/photo_demin.jpg';


export const IntroForm = () => {
  return (
    <section className={`${styles.introForm}`}>
      <div className={`${styles.top}`}>
        <h2>Направления</h2>
        <Level/>
        <div className={`${styles.photo}`}>
          <img src={introPhoto} width={220} height={237} alt="man" />
        </div>
      </div>

      <div className={`${styles.down}`}>
        <ButtonChange/>
        <div className={`${styles.tags}`}>
          <h3>ТЭГИ</h3>
          <Tags/>
        </div>
        <div className={`${styles.transport}`}>
          <h3>транспорт</h3>
          <Transport/>
        </div>
      </div>
    </section>
  );
};