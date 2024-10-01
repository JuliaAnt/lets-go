import styles from './Filter.module.scss';
import {ButtonShow} from './ButtonShow/ButtonShow';
import {SliderNoUI} from './SliderNoUI/SliderNoUI';
import iconPlane from '../../assets/icons/intro/icon_plane.svg'
import iconBus from '../../assets/icons/intro/icon_bus.svg'
import iconBicycle from '../../assets/icons/intro/icon_bicycle.svg'
import iconRun from '../../assets/icons/intro/icon_run.svg'
import arrowDown from '../../assets/triangle-2.svg'
import iconCheck from '../../assets/icon_check.svg'
// import initAccordions from '../../vendor/init-accordions.js'


export const Filter = () => {
  return (
    <article className={`${styles.wrapperFilter}`}>
      <h2>Подберите идеального попутчика</h2>
      <div className={`${styles.accordionFilter}`} data-accordion="parent" data-single>
        <form action="get">
          <div className={`${styles.elementFilter}`} data-accordion="element">
            <fieldset>
              <button className={`${styles.accordionButtonFilter}`} type="button" data-accordion="button">
                <span>хобби</span>
                <img className={styles.arrow} src={arrowDown} width={10} height={6} alt="arrow" />
              </button>
              <div className={`${styles.accordionContentFilter}`} data-accordion="content">
                <div className={`${styles.accordionWrapperFilter}`}>
                  <label htmlFor="sport"> 
                    <input type="checkbox" id="sport" name="sport"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Спортзал
                  </label>
                  <label htmlFor="shisha"> 
                    <input type="checkbox" id="shisha" name="shisha"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Кальян
                  </label>
                  <label htmlFor="couch"> 
                    <input type="checkbox" id="couch" name="couch"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Диван
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className={`${styles.elementFilter}`} data-accordion="element">
            <fieldset>              
              <button className={`${styles.accordionButtonFilter}`} type="button" data-accordion="button">
                <span>музыка</span>
                <img className={styles.arrow} src={arrowDown} width={10} height={6} alt="arrow" />
              </button>
              <div className={`${styles.accordionContentFilter}`} data-accordion="content">
                <div className={`${styles.accordionWrapperFilter}`}>
                  <label htmlFor="rock">
                    <input type="checkbox" id="rock" name="rock"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Тяжелый рок
                  </label>
                  <label htmlFor="rap">
                    <input type="checkbox" id="rap" name="rap"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Русский рэп
                  </label>
                  <label htmlFor="eurodance"> 
                    <input type="checkbox" id="eurodance" name="eurodance"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Евроденс
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className={`${styles.elementFilter}`} data-accordion="element">
            <fieldset>              
              <button className={`${styles.accordionButtonFilter}`} type="button" data-accordion="button">
                <span>еда</span>
                <img className={styles.arrow} src={arrowDown} width={10} height={6} alt="arrow" />
              </button>
              <div className={`${styles.accordionContentFilter}`} data-accordion="content">
                <div className={`${styles.accordionWrapperFilter}`}>
                  <label htmlFor="meat"> 
                    <input type="checkbox" id="meat" name="meat"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Мясоед
                  </label>
                  <label htmlFor="proper"> 
                    <input type="checkbox" id="proper" name="proper"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Сидит на ПП
                  </label>
                  <label htmlFor="raw"> 
                    <input type="checkbox" id="raw" name="raw"></input>
                    <span>
                      <img className={styles.arrow} src={iconCheck} width={11} height={11} alt="arrow" />
                    </span>
                    Веган-сыроед
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className={`${styles.elementFilter} ${styles.transportFilter}`} data-accordion="element">
            <fieldset>
              <button className={`${styles.accordionButtonFilter}`} type="button" data-accordion="button">
                <span>транспорт</span>
                <img className={styles.arrow} src={arrowDown} width={10} height={6} alt="arrow" />
              </button>
              <div className={`${styles.accordionContentFilter}`} data-accordion="content">
                <div className={`${styles.accordionWrapperFilter}`}>
                  <label htmlFor="plane"> 
                    <input type="checkbox" id="plane" name="plane"></input>                    
                    <span>
                      <img className={styles.plane} src={iconPlane} width={20} height={20} alt="logo" />
                    </span>
                  </label>
                  <label htmlFor="bus">                     
                    <input type="checkbox" id="bus" name="bus"></input>
                    <span>
                      <img className={styles.bus} src={iconBus} width={23} height={22} alt="logo" />
                    </span>
                  </label>
                  <label htmlFor="bicycle">
                    <input type="checkbox" id="bicycle" name="bicycle"></input>
                    <span>
                      <img className={styles.bicycle} src={iconBicycle} width={23} height={22} alt="logo" />
                    </span>
                  </label>
                  <label htmlFor="run">
                    <input type="checkbox" id="run" name="run"></input>
                    <span>
                      <img className={styles.run} src={iconRun} width={23} height={22} alt="logo" /> 
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
      <div className={`${styles.sliderFilter}`} data-accordion="element">
        <p>ЛЕВЕЛ</p>  
        <div className={`${styles.sliderValueFilter}`}>
          <div id="lower-value">
          </div>
          <div className={`${styles.sliderDashFilter}`}>
          </div>
          <div id="upper-value">
          </div>
        </div>      
        <SliderNoUI/>
      </div>
      <ButtonShow/>
    </article>
  );
};
