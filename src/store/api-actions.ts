import { createAsyncThunk } from '@reduxjs/toolkit'
import { Card } from '../types/card'
import { FormData } from '../types/formData'
import axios, { AxiosError } from 'axios'

type SendFormDataProps = {
  formData: FormData
  onSuccess(): void
  onError(error: AxiosError): void
}

export const sendFormData = createAsyncThunk<Card[], SendFormDataProps>(
  'form/sendData',
  async ({ formData, onError, onSuccess }, thunkAPI) => {
    try {
      const { data } = await axios.post<Card[]>('https://mabori.ru/api/travels/', formData)
      onSuccess()
      return data
    } catch (error: any) {
      onError(error)
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const fetchCatalogData = createAsyncThunk<Card[], undefined>(
  'catalog/fetchData',
  async (_arg) => {
    const { data } = await axios.get<Card[]>('https://mabori.ru/api/travels/')
    return data
  },
)
