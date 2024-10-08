import { Card } from '../../types/card'
import { CountryData } from '../../types/countriesData'
import { NameSpace } from '../../utils/consts'
import { RootState } from '../store'

export const getRegions = (state: RootState): string[] => state[NameSpace.CATALOG_DATA].regions
export const getCountries = (state: RootState): CountryData[] =>
  state[NameSpace.CATALOG_DATA].countries
export const getCards = (state: RootState): Card[] => state[NameSpace.CATALOG_DATA].cards
export const getReloadStatus = (state: RootState): boolean =>
  state[NameSpace.CATALOG_DATA].isReloaded
