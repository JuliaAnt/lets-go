import styles from './Filter.module.scss';
import {ButtonShow} from './ButtonShow/ButtonShow';
import {SliderNoUI} from './SliderNoUI/SliderNoUI';
import iconPlane from '../../assets/icons/intro/icon_plane.svg'
import iconBus from '../../assets/icons/intro/icon_bus.svg'
import iconBicycle from '../../assets/icons/intro/icon_bicycle.svg'
import iconRun from '../../assets/icons/intro/icon_run.svg'


export const Filter = () => {
  return (
    <article className={`${styles.wrapperFilter}`}>
      <h2>Подберите идеального попутчика</h2>
      <div className={`${styles.filtersFilter}`}>
        <form action="get">
          <div className={`${styles.hobbyFilter}`}>
            <fieldset>
              <legend>хобби:</legend>
              <label htmlFor="sport"> Спортзал
                <input type="checkbox" id="sport" name="sport"></input>
              </label>
              <label htmlFor="shisha"> Кальян
                <input type="checkbox" id="shisha" name="shisha"></input>
              </label>
              <label htmlFor="couch"> Диван
                <input type="checkbox" id="couch" name="couch"></input>
              </label>
            </fieldset>
          </div>
          <div className={`${styles.musicFilter}`}>
            <fieldset>
              <legend>музыка:</legend>
              <label htmlFor="rock"> Тяжелый рок
                <input type="checkbox" id="rock" name="rock"></input>
              </label>
              <label htmlFor="rap"> Русский рэп
                <input type="checkbox" id="rap" name="rap"></input>
              </label>
              <label htmlFor="eurodance"> Евроденс
                <input type="checkbox" id="eurodance" name="eurodance"></input>
              </label>
            </fieldset>
          </div>
          <div className={`${styles.mealFilter}`}>
            <fieldset>
              <legend>еда:</legend>
              <label htmlFor="meat"> Мясоед
                <input type="checkbox" id="meat" name="meat"></input>
              </label>
              <label htmlFor="proper"> Сидит на ПП
                <input type="checkbox" id="proper" name="proper"></input>
              </label>
              <label htmlFor="raw"> Веган-сыроед
                <input type="checkbox" id="raw" name="raw"></input>
              </label>
            </fieldset>
          </div>
          <div className={`${styles.transportFilter}`}>
            <fieldset>
              <legend>транспорт:</legend>
              <label htmlFor="plane"> 
                <img className={styles.plane} src={iconPlane} width={43} height={43} alt="logo" />
                <input type="checkbox" id="plane" name="plane"></input>
              </label>
              <label htmlFor="bus"> 
                <img className={styles.bus} src={iconBus} width={43} height={43} alt="logo" />
                <input type="checkbox" id="bus" name="bus"></input>
              </label>
              <label htmlFor="bicycle">
                <img className={styles.bicycle} src={iconBicycle} width={43} height={43} alt="logo" />
                <input type="checkbox" id="bicycle" name="bicycle"></input>
              </label>
              <label htmlFor="run">
                <img className={styles.run} src={iconRun} width={43} height={43} alt="logo" /> 
                <input type="checkbox" id="run" name="run"></input>
              </label>
            </fieldset>
          </div>
        </form>
      </div>
      <div className={`${styles.sliderFilter}`}>
        <p>ЛЕВЕЛ:</p>
        <SliderNoUI/>
      </div>
      <ButtonShow/>
    </article>
  );
};

// .filters
//     form(action="get", data-form)
//       .filters__wrapper
//         .filters__input-range.input-range
//           p.input-range__title Стоимость курса
//           .input-range__slider.slider(data-slider-money)
//         each filter in filtersList
//           if (filter.type === 'button')
//             .filters__checkbox-button-input.checkbox-button-input
//               fieldset
//                 legend #{filter.name}
//                 .checkbox-button-input__wrapper
//                   each item in filter.list
//                     label(for= item.name)
//                       input(type="checkbox", id=item.name, name=item.name, tabindex="-1", checked=item.isChecked)
//                       span(tabindex="0") #{item.text}
//           else
//             .filters__checkbox-input.checkbox-input(class="checkbox-input--" + filter.id)
//               fieldset
//                 legend #{filter.name}
//                 each item in filter.list
//                   label(for= item.name)
//                     input(type="checkbox", id=item.name, name=item.name, checked=item.isChecked)
//                     span(tabindex="0")
//                       +icon("icon-check", 9, 7.5)
//                     | !{item.text}
//         .filters__input-range.filters__input-range--duration.input-range.input-range--duration
//           p.input-range__title  Продолжительность (от&nbsp;1&nbsp;до&nbsp;24&nbsp;месяцев)
//           .input-range__slider(data-slider-duration)
