import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEn from '../locales/en/translation.json'
import countriesEn from '../locales/en/countries.json'
import translationPl from '../locales/pl/translation.json'
import countriesPl from '../locales/pl/countries.json'
import translationRu from '../locales/ru/translation.json'
import countriesRu from '../locales/ru/countries.json'
import calendarEn from '../locales/en/calendar.json'
import calendarPl from '../locales/pl/calendar.json'
import calendarRu from '../locales/ru/calendar.json'
import filtersEn from '../locales/en/filters.json'
import filtersPl from '../locales/pl/filters.json'
import filtersRu from '../locales/ru/filters.json'
import { Languages } from '../utils/consts'

const resources = {
  EN: {
    translation: translationEn,
    countries: countriesEn,
    calendar: calendarEn,
    filters: filtersEn,
  },
  PL: {
    translation: translationPl,
    countries: countriesPl,
    calendar: calendarPl,
    filters: filtersPl,
  },
  RU: {
    translation: translationRu,
    countries: countriesRu,
    calendar: calendarRu,
    filters: filtersRu,
  },
}

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    supportedLngs: [Languages.EN, Languages.PL, Languages.RU],
    fallbackLng: Languages.EN,
    debug: false,
    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // },
  })

export default i18n
