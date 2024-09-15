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
