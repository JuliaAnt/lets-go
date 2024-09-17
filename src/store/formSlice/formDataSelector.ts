import { NameSpace } from '../../utils/consts'
import { RootState } from '../store'

export const getCompanionsAmount = (state: RootState): number =>
  state[NameSpace.FormData].companionsAmount
export const getTravelDuration = (state: RootState): number =>
  state[NameSpace.FormData].travelDuration
