export enum AppRoute {
  Form = '/',
  Catalog = '/catalog',
}

export const NAVIGATION_MAP = [
  { text: 'о сервисе', hoverText: 'О СЕРВИСЕ' },
  { text: 'направления', hoverText: 'НАПРАВЛЕНИЯ' },
  { text: 'попутчики', hoverText: 'ПОПУТЧИКИ' },
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
