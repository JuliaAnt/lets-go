import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TransportType } from '../../utils/consts'
import { setTransportType } from '../../helpers/setTransportType'

export interface FormState {
  companionsAmount: number
  travelDuration: number
  isChildrenAllowed: boolean
  transportType: TransportType[]
}

const initialState: FormState = {
  companionsAmount: 1,
  travelDuration: 2,
  isChildrenAllowed: false,
  transportType: [],
}

export const formData = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeCompanionsAmount: (state, action: PayloadAction<number>) => {
      state.companionsAmount = action.payload
      console.log(`companionsAmount: ${state.companionsAmount}`)
    },
    changeTravelDuration: (state, action: PayloadAction<number>) => {
      state.travelDuration = action.payload
      console.log(`travelDuration: ${state.travelDuration}`)
    },
    toggleChildrenAllowed: (state, action: PayloadAction<boolean>) => {
      state.isChildrenAllowed = action.payload
      console.log(`isChildrenAllowed: ${state.isChildrenAllowed}`)
    },
    changeTransportType: (state, action: PayloadAction<TransportType>) => {
      state.transportType = setTransportType(state.transportType, action.payload)
      console.log(`transportTypes: ${state.transportType}`)
    },
  },
})

export const {
  changeCompanionsAmount,
  changeTravelDuration,
  toggleChildrenAllowed,
  changeTransportType,
} = formData.actions
export default formData.reducer
