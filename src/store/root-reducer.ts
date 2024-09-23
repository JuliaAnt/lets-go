import { combineReducers } from '@reduxjs/toolkit'
import { NameSpace } from '../utils/consts'
import { formData } from './formData/formDataSlice'
import { catalogData } from './catalogData/catalogDataSlice'

export const rootReducer = combineReducers({
  [NameSpace.FORM_DATA]: formData.reducer,
  [NameSpace.CATALOG_DATA]: catalogData.reducer,
})
