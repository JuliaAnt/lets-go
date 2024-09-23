import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { setRegions } from '../../helpers/setRegions'

export interface CatalogState {
  regions: string[]
}

const initialState: CatalogState = {
  regions: [],
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
})

export const { changeRegions } = catalogData.actions
export default catalogData.reducer
