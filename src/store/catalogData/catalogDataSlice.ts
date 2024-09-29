import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setRegions } from '../../helpers/setRegions'
import { fetchCatalogData, sendFormData } from '../api-actions'
import { Card } from '../../types/card'

export interface CatalogState {
  regions: string[]
  cards: Card[]
}

const initialState: CatalogState = {
  regions: [],
  cards: [],
}

export const catalogData = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    changeRegions: (state, action: PayloadAction<string>) => {
      state.regions = setRegions(state.regions, action.payload)
      console.log(`regions: ${state.regions}`)
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

export const { changeRegions } = catalogData.actions
export default catalogData.reducer
