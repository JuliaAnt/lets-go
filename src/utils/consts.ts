export enum AppRoute {
  Form = '/',
  Catalog = '/catalog',
}

export const NAVIGATION_MAP = [
  { id: 1, text: 'о сервисе', hoverText: 'О СЕРВИСЕ' },
  { id: 2, text: 'направления', hoverText: 'НАПРАВЛЕНИЯ' },
  { id: 3, text: 'попутчики', hoverText: 'ПОПУТЧИКИ' },
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
