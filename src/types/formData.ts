import { TransportType } from '../utils/consts'
import { CountryData } from './countriesData'
import { Entertainment } from './entertainments'
import { TravelDates } from './travelDates'

export interface FormData {
  uuid: string
  firstName: string
  lastName: string
  photoUrl: string
  companionsAmount: number
  travelDuration: number
  isChildrenAllowed: boolean
  transportType: TransportType[]
  selectedCountries: CountryData[]
  tags: string[]
  travelDates: TravelDates
  entertainments: Entertainment[]
}
