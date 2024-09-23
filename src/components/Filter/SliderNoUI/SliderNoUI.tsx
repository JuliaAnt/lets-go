import styles from './nouislider.module.scss'
import createUiSlider from '../../../vendor/init-nouislider.js'
import { useEffect, useRef } from 'react'

interface SliderElement extends HTMLDivElement {
  noUiSlider?: any
}

export const SliderNoUI = () => {
  const sliderRef = useRef<SliderElement>(null)

  useEffect(() => {
    if (sliderRef.current) {
      if (!sliderRef.current.noUiSlider) {
        createUiSlider(sliderRef.current)
        sliderRef.current.classList.add('inputRange')
      }
    }
  }, [])

  return <div ref={sliderRef} className={`${styles.inputRange}`} data-slider-duration='1'></div>
}
