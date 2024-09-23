import { combineReducers } from '@reduxjs/toolkit'
import { NameSpace } from '../utils/consts'
import { formData } from './formSlice/formDataSlice'

export const rootReducer = combineReducers({
  [NameSpace.FORM_DATA]: formData.reducer,
//   [NameSpace.BackendData]: backendData.reducer,
})
