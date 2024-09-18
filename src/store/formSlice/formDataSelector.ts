import { NameSpace, TransportType } from '../../utils/consts'
import { RootState } from '../store'

export const getCompanionsAmount = (state: RootState): number =>
  state[NameSpace.FormData].companionsAmount
export const getTravelDuration = (state: RootState): number =>
  state[NameSpace.FormData].travelDuration
export const getChildrenAllowed = (state: RootState): boolean =>
  state[NameSpace.FormData].isChildrenAllowed
export const getTransportType = (state: RootState): TransportType[] =>
  state[NameSpace.FormData].transportType
