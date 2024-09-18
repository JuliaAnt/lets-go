import iconPlane from '../assets/icons/intro/icon_plane.svg'
import iconBus from '../assets/icons/intro/icon_bus.svg'
import iconBicycle from '../assets/icons/intro/icon_bicycle.svg'
import iconRun from '../assets/icons/intro/icon_run.svg'

export enum AppRoute {
  Form = '/',
  Catalog = '/catalog',
}

export enum TransportType {
  PLANE = 'plane',
  BUS = 'bus',
  BICYCLE = 'bicycle',
  RUN = 'run',
}

export const TRANSPORT_TYPES_LIST = [
  {
    type: TransportType.PLANE,
    alt: 'icon_plane',
    icon: iconPlane,
  },
  {
    type: TransportType.BUS,
    alt: 'icon_bus',
    icon: iconBus,
  },
  {
    type: TransportType.BICYCLE,
    alt: 'bicycle',
    icon: iconBicycle,
  },
  {
    type: TransportType.RUN,
    alt: 'icon_run',
    icon: iconRun,
  },
]

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

export enum NameSpace {
  FormData = 'FORM_DATA',
  BackendData = 'BACKEND_DATA',
}
