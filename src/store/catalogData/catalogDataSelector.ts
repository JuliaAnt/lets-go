import { Card } from '../../types/card'
import { NameSpace } from '../../utils/consts'
import { RootState } from '../store'

export const getRegions = (state: RootState): string[] => state[NameSpace.CATALOG_DATA].regions
export const getCards = (state: RootState): Card[] => state[NameSpace.CATALOG_DATA].cards
