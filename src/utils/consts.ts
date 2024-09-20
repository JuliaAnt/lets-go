export enum AppRoute {
  Form = '/',
  Catalog = '/catalog',
}

export const NAVIGATION_MAP = [
  { id: 1, text: 'о сервисе', hoverText: 'О СЕРВИСЕ', url: '#' },
  { id: 2, text: 'направления', hoverText: 'НАПРАВЛЕНИЯ', url: AppRoute.Form },
  { id: 3, text: 'попутчики', hoverText: 'ПОПУТЧИКИ', url: AppRoute.Catalog },
]

export const COUNTER_INPUT_MAP = {
  travelerCounter: {
    id: 'travelerCounter',
    label: 'ищу попутчиков',
    min: 1,
    max: 10,
    unit: 'чел.',
  },
  travelLength: {
    id: 'travelLength',
    label: 'длительность',
    min: 2,
    max: 31,
    unit: 'дн.',
  },
}

export const DAYS_OF_WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const MONTHS_LIST = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

export const ALPHABET_LETTERS = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'З',
  'И',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ч',
  'Ш',
  'Э',
  'Ю',
  'Я',
]
