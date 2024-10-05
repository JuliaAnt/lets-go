import React, { useState, useRef, useEffect } from 'react'
import styles from './Filter.module.scss'
import { ButtonShow } from './ButtonShow/ButtonShow'
import { SliderNoUI } from './SliderNoUI/SliderNoUI'
import iconPlane from '../../assets/icons/intro/icon_plane.svg'
import iconBus from '../../assets/icons/intro/icon_bus.svg'
import iconBicycle from '../../assets/icons/intro/icon_bicycle.svg'
import iconRun from '../../assets/icons/intro/icon_run.svg'
import arrowDown from '../../assets/triangle-2.svg'
import iconCheck from '../../assets/icon_check.svg'

type Section = 'hobby' | 'music' | 'food' | 'transport' | 'level'
type OpenSectionsState = Record<Section, boolean>

export const FilterCopy = () => {
  const [openSections, setOpenSections] = useState<OpenSectionsState>({
    hobby: true,
    music: true,
    food: true,
    transport: true,
    level: true,
  })

  const sectionsRef = useRef<HTMLDivElement[]>([])
  const [sectionsHeight, setSectionsHeight] = useState<number[]>([])

  const toggleSection = (section: Section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const sections: Section[] = ['hobby', 'music', 'food', 'transport', 'level']

  useEffect(() => {
    const heights = sectionsRef.current.map((ref) => (ref ? ref.scrollHeight : 0))
    setSectionsHeight(heights)
  }, [openSections])

  return (
    <article className={`${styles.wrapperFilter}`}>
      <h2>Подберите идеального попутчика</h2>
      <div className={`${styles.accordionFilter}`} data-accordion='parent' data-single>
        <form action='get'>
          {sections.map((section, index) => (
            <div className={`${styles.elementFilter}`} key={section} data-accordion='element'>
              <fieldset>
                <button
                  className={`${styles.accordionButtonFilter}`}
                  type='button'
                  onClick={() => toggleSection(section)}
                >
                  <span>
                    {section === 'hobby'
                      ? 'хобби'
                      : section === 'music'
                      ? 'музыка'
                      : section === 'food'
                      ? 'еда'
                      : section === 'transport'
                      ? 'транспорт'
                      : 'левел'}
                  </span>
                  <img
                    className={`${styles.arrow} ${openSections[section] ? styles.arrowOpen : ''}`}
                    src={arrowDown}
                    width={10}
                    height={6}
                    alt='arrow'
                  />
                </button>
                <div
                  ref={(el) => (sectionsRef.current[index] = el!)}
                  className={`${styles.accordionContentFilter} ${
                    openSections[section] ? styles.open : ''
                  }`}
                  style={{
                    maxHeight: openSections[section] ? `${sectionsHeight[index]}px` : '0px',
                  }}
                >
                  {section === 'hobby' && (
                    <div className={`${styles.accordionWrapperFilter}`}>
                      <label htmlFor='sport'>
                        <input type='checkbox' id='sport' name='sport' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Спортзал
                      </label>
                      <label htmlFor='shisha'>
                        <input type='checkbox' id='shisha' name='shisha' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Кальян
                      </label>
                      <label htmlFor='couch'>
                        <input type='checkbox' id='couch' name='couch' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Диван
                      </label>
                    </div>
                  )}
                  {section === 'music' && (
                    <div className={`${styles.accordionWrapperFilter}`}>
                      <label htmlFor='rock'>
                        <input type='checkbox' id='rock' name='rock' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Тяжелый рок
                      </label>
                      <label htmlFor='rap'>
                        <input type='checkbox' id='rap' name='rap' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Русский рэп
                      </label>
                      <label htmlFor='eurodance'>
                        <input type='checkbox' id='eurodance' name='eurodance' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Евроденс
                      </label>
                    </div>
                  )}
                  {section === 'food' && (
                    <div className={`${styles.accordionWrapperFilter}`}>
                      <label htmlFor='meat'>
                        <input type='checkbox' id='meat' name='meat' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Мясоед
                      </label>
                      <label htmlFor='proper'>
                        <input type='checkbox' id='proper' name='proper' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Сидит на ПП
                      </label>
                      <label htmlFor='raw'>
                        <input type='checkbox' id='raw' name='raw' />
                        <span>
                          <img
                            className={styles.arrow}
                            src={iconCheck}
                            width={11}
                            height={11}
                            alt='check'
                          />
                        </span>
                        Веган-сыроед
                      </label>
                    </div>
                  )}
                  {section === 'transport' && (
                    <div className={`${styles.transportFilter}`}>
                      <div className={`${styles.accordionWrapperFilter}`}>
                        <label htmlFor='plane'>
                          <input type='checkbox' id='plane' name='plane' />
                          <span>
                            <img
                              className={styles.plane}
                              src={iconPlane}
                              width={20}
                              height={20}
                              alt='logo'
                            />
                          </span>
                        </label>
                        <label htmlFor='bus'>
                          <input type='checkbox' id='bus' name='bus' />
                          <span>
                            <img
                              className={styles.bus}
                              src={iconBus}
                              width={23}
                              height={22}
                              alt='logo'
                            />
                          </span>
                        </label>
                        <label htmlFor='bicycle'>
                          <input type='checkbox' id='bicycle' name='bicycle' />
                          <span>
                            <img
                              className={styles.bicycle}
                              src={iconBicycle}
                              width={23}
                              height={22}
                              alt='logo'
                            />
                          </span>
                        </label>
                        <label htmlFor='run'>
                          <input type='checkbox' id='run' name='run' />
                          <span>
                            <img
                              className={styles.run}
                              src={iconRun}
                              width={23}
                              height={22}
                              alt='logo'
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                  {section === 'level' && (
                    <div className={`${styles.accordionWrapperFilter}`}>
                      <div className={`${styles.sliderFilter}`}>                        
                        <div className={`${styles.sliderValueFilter}`}>
                          {/* <div id='lower-value'></div> */}
                          <input type='number' min='0' max='99' step='1' id='lower-value'></input>
                          <div className={`${styles.sliderDashFilter}`}></div>
                          {/* <div id='upper-value'></div> */}
                          <input type='number' min='1' max='100' step='1' id='upper-value'></input>
                        </div>
                        <SliderNoUI />                        
                      </div>
                    </div>
                  )}
                </div>
              </fieldset>
            </div>
          ))}
        </form>
      </div>
      <ButtonShow />
    </article>
  )
}
