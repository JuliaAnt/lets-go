import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  companionsAmount: number
  travelDuration: number
}

const initialState: FormState = {
  companionsAmount: 0,
  travelDuration: 0,
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
  },
})

export const { changeCompanionsAmount, changeTravelDuration } = formData.actions
export default formData.reducer
