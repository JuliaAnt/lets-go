import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setRegions } from '../../helpers/setRegions'
import { fetchCatalogData, sendFormData } from '../api-actions'
import { Card } from '../../types/card'
import { CountryData } from '../../types/countriesData'
import { setCountry } from '../../helpers/setCountry'

export interface CatalogState {
  regions: string[]
  countries: CountryData[]
  cards: Card[]
}

const initialState: CatalogState = {
  regions: [],
  countries: [],
  cards: [],
}

export const catalogData = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    changeRegions: (state, action: PayloadAction<string>) => {
      state.regions = setRegions(state.regions, action.payload)
    },
    changeCountries: (state, action: PayloadAction<CountryData>) => {
      state.countries = setCountry(state.countries, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.fulfilled, (state, action) => {
        state.cards = action.payload
      })
      .addCase(fetchCatalogData.fulfilled, (state, action) => {
        state.cards = action.payload
      })
  },
})

export const { changeRegions, changeCountries } = catalogData.actions
export default catalogData.reducer
