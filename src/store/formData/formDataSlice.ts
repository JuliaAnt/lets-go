import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { COUNTER_INPUT_MAP, ERROR_MAP, TransportType } from '../../utils/consts'
import { setTransportType } from '../../helpers/setTransportType'
import { ChangedCountryType, CountryData } from '../../types/countriesData'
import { TravelDates } from '../../types/travelDates'
import { Entertainment } from '../../types/entertainments'
import avatar from '../../assets/avatars/2.png'
import { Error } from '../../types/error'
import { setError } from '../../helpers/setError'

export interface FormState {
  uuid: string
  firstName: string
  lastName: string
  photoUrl: string
  companionsAmount: number
  travelDuration: number
  isChildrenAllowed: boolean
  transportType: TransportType[]
  selectedCountries: CountryData[]
  tags: string[]
  travelDates: TravelDates
  entertainments: Entertainment[]
  errors: Error[]
}

const initialState: FormState = {
  uuid: 'some-uuid',
  firstName: 'Петя',
  lastName: 'Демин',
  photoUrl: avatar,
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
  errors: ERROR_MAP,
}

export const formData = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeCompanionsAmount: (state, action: PayloadAction<number>) => {
      state.companionsAmount = action.payload
    },
    changeTravelDuration: (state, action: PayloadAction<number>) => {
      state.travelDuration = action.payload
    },
    toggleChildrenAllowed: (state, action: PayloadAction<boolean>) => {
      state.isChildrenAllowed = action.payload
    },
    changeTransportType: (state, action: PayloadAction<TransportType>) => {
      state.transportType = setTransportType(state.transportType, action.payload)
      state.errors = setError(state)

      console.log(state.errors)
    },
    addCountry: (state, action: PayloadAction<CountryData>) => {
      state.selectedCountries = [...state.selectedCountries, action.payload]
      state.errors = setError(state)

      console.log(state.selectedCountries.map((country) => country.name))
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
      state.errors = setError(state)

      console.log(state.selectedCountries.map((country) => country.name))
    },
    changeCountry: (state, action: PayloadAction<ChangedCountryType>) => {
      const changedCountries = [...state.selectedCountries]
      const selectedCountryIndex = state.selectedCountries.findIndex(
        (country) => country.name === action.payload.selectedValue.name,
      )
      changedCountries.splice(selectedCountryIndex, 1, action.payload.newValue)
      state.selectedCountries = [...changedCountries]
      state.errors = setError(state)

      console.log(state.selectedCountries.map((country) => country.name))
    },
    changeTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
      state.errors = setError(state)

      console.log(state.errors)
    },
    changeStartTravelDate: (state, action: PayloadAction<string>) => {
      state.travelDates.startDate = action.payload
      state.errors = setError(state)

      console.log(state.errors)
    },
    changeEndTravelDate: (state, action: PayloadAction<string>) => {
      state.travelDates.endDate = action.payload
      state.errors = setError(state)

      console.log(state.errors)
    },
    addEntertainment: (state, action: PayloadAction<Entertainment>) => {
      state.entertainments = [...state.entertainments, action.payload]
      state.errors = setError(state)

      console.log(state.errors)
    },
    changeErrors: (state) => {
      state.errors = setError(state)
      console.log(state.errors)
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
  changeCountry,
  changeTags,
  changeStartTravelDate,
  changeEndTravelDate,
  addEntertainment,
  changeErrors,
} = formData.actions
export default formData.reducer
