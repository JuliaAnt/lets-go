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
