import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setRegions } from '../../helpers/setRegions'
import { fetchCatalogData, sendFormData } from '../api-actions'
import { Card } from '../../types/card'
import { CountryData } from '../../types/countriesData'
import { setCountry } from '../../helpers/setCountry'
import { filterCards } from '../../helpers/filterCards'

export interface CatalogState {
  regions: string[]
  countries: CountryData[]
  cards: Card[]
  isReloaded: boolean
  currentPage: number
  filteredCards: Card[]
}

const initialState: CatalogState = {
  regions: [],
  countries: [],
  cards: [],
  isReloaded: true,
  currentPage: 1,
  filteredCards: [],
}

export const catalogData = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    changeRegions: (state, action: PayloadAction<string>) => {
      state.regions = setRegions(state.regions, action.payload)
      state.filteredCards = filterCards(state.cards, state.regions, state.countries)
      console.log(state.regions)
      console.log(`cards:${state.cards.length}, filteredCards:${state.filteredCards.length}`)
    },
    changeCountries: (state, action: PayloadAction<CountryData>) => {
      state.countries = setCountry(state.countries, action.payload)
      state.filteredCards = filterCards(state.cards, state.regions, state.countries)
      console.log(state.countries)
      console.log(`cards:${state.cards.length}, filteredCards:${state.filteredCards.length}`)
    },
    changeReloadStatus: (state, action: PayloadAction<boolean>) => {
      state.isReloaded = action.payload
    },
    changePageNumber: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
      console.log(state.currentPage)
    },
    filterCards: (state) => {
      state.filteredCards = filterCards(state.cards, state.regions, state.countries)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFormData.fulfilled, (state, action) => {
        state.cards = action.payload
        state.filteredCards = filterCards(state.cards, state.regions, state.countries)
      })
      .addCase(fetchCatalogData.fulfilled, (state, action) => {
        state.cards = action.payload
        state.filteredCards = filterCards(state.cards, state.regions, state.countries)
      })
  },
})

export const { changeRegions, changeCountries, changeReloadStatus, changePageNumber } =
  catalogData.actions
export default catalogData.reducer
