import iconPlane from '../assets/icons/intro/icon_plane.svg'
import iconBus from '../assets/icons/intro/icon_bus.svg'
import iconBicycle from '../assets/icons/intro/icon_bicycle.svg'
import iconRun from '../assets/icons/intro/icon_run.svg'
import { Error } from '../types/error'

export enum AppRoute {
  MAIN = '/',
  FORM = '/',
  CATALOG = '/catalog',
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
  { id: 1, text: 'о сервисе', hoverText: 'О СЕРВИСЕ', url: AppRoute.MAIN },
  { id: 2, text: 'направления', hoverText: 'НАПРАВЛЕНИЯ', url: AppRoute.FORM },
  { id: 3, text: 'попутчики', hoverText: 'ПОПУТЧИКИ', url: AppRoute.CATALOG },
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
export enum NameSpace {
  FORM_DATA = 'FORM_DATA',
  CATALOG_DATA = 'CATALOG_DATA',
}

export enum StepsMap {
  STEP_ONE = 'stepOne',
  STEP_TWO = 'stepTwo',
  STEP_THREE = 'stepThree',
}

export const REGIONS_MAP = [
  {
    regionTitle: 'Европа',
    regionName: 'europe',
  },
  {
    regionTitle: 'Азия',
    regionName: 'asia',
  },
  {
    regionTitle: 'Острова',
    regionName: 'islands',
  },
  {
    regionTitle: 'Америка',
    regionName: 'america',
  },
  {
    regionTitle: 'Африка',
    regionName: 'africa',
  },
]

export const ERROR_MAP: Error[] = [
  {
    errorName: 'transportTypeError',
    errorText: 'Выберите хотя бы один вид транспорта',
  },
  {
    errorName: 'selectedCountriesError',
    errorText: '',
  },
  {
    errorName: 'tagsError',
    errorText: 'Введите хотя бы один тэг',
  },
  {
    errorName: 'travelDatesError',
    errorText: 'Выберите даты поездки',
  },
  {
    errorName: 'entertainmentsError',
    errorText: 'Опишите, чем Вы планируете заниматься в каждой из стран',
  },
]

export const CARDS_PER_PAGE = 4
