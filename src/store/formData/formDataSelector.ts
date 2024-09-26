import { CountryData } from '../../types/countriesData'
import { Entertainment } from '../../types/entertainments'
import { TravelDates } from '../../types/travelDates'
import { NameSpace, TransportType } from '../../utils/consts'
import { RootState } from '../store'

export const getCompanionsAmount = (state: RootState): number =>
  state[NameSpace.FORM_DATA].companionsAmount
export const getTravelDuration = (state: RootState): number =>
  state[NameSpace.FORM_DATA].travelDuration
export const getChildrenAllowed = (state: RootState): boolean =>
  state[NameSpace.FORM_DATA].isChildrenAllowed
export const getTransportType = (state: RootState): TransportType[] =>
  state[NameSpace.FORM_DATA].transportType
export const getSelectedCountries = (state: RootState): CountryData[] =>
  state[NameSpace.FORM_DATA].selectedCountries
export const getTags = (state: RootState): string[] => state[NameSpace.FORM_DATA].tags
export const getTravelDates = (state: RootState): TravelDates =>
  state[NameSpace.FORM_DATA].travelDates
export const getEntertainments = (state: RootState): Entertainment[] =>
  state[NameSpace.FORM_DATA].entertainments
