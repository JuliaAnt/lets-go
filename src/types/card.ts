import { TransportType } from '../utils/consts'
import { CountryData } from './countriesData'

export type Card = {
  uuid: string
  firstName: string
  lastName: string
  photoUrl: string
  tags: string[]
  countries: CountryData[]
  transport: TransportType[]
  likes: number
  level: number
}
