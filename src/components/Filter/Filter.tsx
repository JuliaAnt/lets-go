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
import { useTranslation } from 'react-i18next'

type Section = 'hobby' | 'music' | 'food' | 'transport' | 'level'
type OpenSectionsState = Record<Section, boolean>

export const Filter = () => {
  const { t } = useTranslation('filters')
  const [openSections, setOpenSections] = useState<OpenSectionsState>({
    hobby: false,
    music: true,
    food: false,
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
      <h2>{t('filtersTitle')}</h2>
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
                      ? t('hobby')
                      : section === 'music'
                      ? t('music')
                      : section === 'food'
                      ? t('food')
                      : section === 'transport'
                      ? t('transport')
                      : t('level')}
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
                      <label htmlFor='sport' tabIndex={0}>
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
                        {t('sport')}
                      </label>
                      <label htmlFor='shisha' tabIndex={0}>
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
                        {t('hookah')}
                      </label>
                      <label htmlFor='couch' tabIndex={0}>
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
                        {t('sofa')}
                      </label>
                    </div>
                  )}
                  {section === 'music' && (
                    <div className={`${styles.accordionWrapperFilter}`}>
                      <label htmlFor='rock' tabIndex={0}>
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
                        {t('rock')}
                      </label>
                      <label htmlFor='rap' tabIndex={0}>
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
                        {t('rap')}
                      </label>
                      <label htmlFor='eurodance' tabIndex={0}>
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
                        {t('eurodance')}
                      </label>
                    </div>
                  )}
                  {section === 'food' && (
                    <div className={`${styles.accordionWrapperFilter}`}>
                      <label htmlFor='meat' tabIndex={0}>
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
                        {t('meat')}
                      </label>
                      <label htmlFor='proper' tabIndex={0}>
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
                        {t('proper')}
                      </label>
                      <label htmlFor='raw' tabIndex={0}>
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
                        {t('raw')}
                      </label>
                    </div>
                  )}
                  {section === 'transport' && (
                    <div className={`${styles.transportFilter}`}>
                      <div className={`${styles.accordionWrapperFilter}`}>
                        <label htmlFor='plane' tabIndex={0}>
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
                        <label htmlFor='bus' tabIndex={0}>
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
                        <label htmlFor='bicycle' tabIndex={0}>
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
                        <label htmlFor='run' tabIndex={0}>
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
                          <input type='number' min='0' max='99' step='1' id='lower-value'></input>
                          <div className={`${styles.sliderDashFilter}`}></div>
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
