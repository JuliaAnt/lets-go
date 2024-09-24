import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TransportType } from '../../utils/consts'
import { setTransportType } from '../../helpers/setTransportType'
import { CountryData } from '../../types/countriesData'

export interface FormState {
  companionsAmount: number
  travelDuration: number
  isChildrenAllowed: boolean
  transportType: TransportType[]
  selectedCountries: CountryData[]
  tags: string[]
}

const initialState: FormState = {
  companionsAmount: 1,
  travelDuration: 2,
  isChildrenAllowed: false,
  transportType: [],
  selectedCountries: [],
  tags: [],
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
    addCountry: (state, action: PayloadAction<CountryData>) => {
      state.selectedCountries = [...state.selectedCountries, action.payload]
      console.log(`selectedCountries: ${state.selectedCountries.map((country) => country.name)}`)
    },
    removeCountry: (state, action: PayloadAction<CountryData>) => {
      const updatedCountries = state.selectedCountries.filter(
        (country) => country.name !== action.payload.name,
      )
      state.selectedCountries = updatedCountries
      console.log(`selectedCountries: ${state.selectedCountries.map((country) => country.name)}`)
    },
    changeTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
      console.log(`tags: ${state.tags}`)
    },
  },
})

export const {
  changeCompanionsAmount,
  changeTravelDuration,
  toggleChildrenAllowed,
  changeTransportType,
  addCountry,
  removeCountry,
  changeTags,
} = formData.actions
export default formData.reducer
