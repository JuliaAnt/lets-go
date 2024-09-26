import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { COUNTER_INPUT_MAP, TransportType } from '../../utils/consts'
import { setTransportType } from '../../helpers/setTransportType'
import { CountryData } from '../../types/countriesData'
import { TravelDates } from '../../types/travelDates'
import { Entertainment } from '../../types/entertainments'

export interface FormState {
  companionsAmount: number
  travelDuration: number
  isChildrenAllowed: boolean
  transportType: TransportType[]
  selectedCountries: CountryData[]
  tags: string[]
  travelDates: TravelDates
  entertainments: Entertainment[]
}

const initialState: FormState = {
  companionsAmount: COUNTER_INPUT_MAP.travelerCounter.min,
  travelDuration: COUNTER_INPUT_MAP.travelLength.min,
  isChildrenAllowed: false,
  transportType: [],
  selectedCountries: [],
  tags: [],
  travelDates: {
    startDate: '',
    endDate: '',
  },
  entertainments: [],
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
      const updatedEntertainments = state.entertainments.filter(
        (entertainment) => entertainment.country !== action.payload.name,
      )
      state.selectedCountries = updatedCountries
      state.entertainments = updatedEntertainments
      console.log(`selectedCountries: ${state.selectedCountries.map((country) => country.name)}`)
      console.log(
        state.entertainments.map(
          (entertainment) =>
            `country: ${entertainment.country}, description: ${entertainment.description}`,
        ),
      )
    },
    changeTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
      console.log(`tags: ${state.tags}`)
    },
    changeStartTravelDate: (state, action: PayloadAction<string>) => {
      state.travelDates.startDate = action.payload
      console.log(`startDate: ${state.travelDates.startDate}`)
    },
    changeEndTravelDate: (state, action: PayloadAction<string>) => {
      state.travelDates.endDate = action.payload
      console.log(`endDate: ${state.travelDates.endDate}`)
    },
    addEntertainment: (state, action: PayloadAction<Entertainment>) => {
      state.entertainments = [...state.entertainments, action.payload]
      console.log(
        state.entertainments.map(
          (entertainment) =>
            `country: ${entertainment.country}, description: ${entertainment.description}`,
        ),
      )
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
  changeStartTravelDate,
  changeEndTravelDate,
  addEntertainment,
} = formData.actions
export default formData.reducer
