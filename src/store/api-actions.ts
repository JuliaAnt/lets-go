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
      const { data } = await axios.post<Card[]>('https://mabori.ru/api/travels', formData)
      // const { data } = await axios.post<Card[]>('http://localhost:5050/api/travels', formData)
      onSuccess()
      return data
    } catch (error: any) {
      onError(error)
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const fetchCatalogData = createAsyncThunk<
  Card[],
  {
    page: string
    limit: string
  }
>('catalog/fetchData', async ({ page, limit }) => {
  const { data } = await axios.get<Card[]>('https://mabori.ru/api/travels', {
    // const { data } = await axios.get<Card[]>('http://localhost:5050/api/travels', {
    params: {
      page,
      limit,
      // regions: regions.length > 0 ? regions.join(',') : ['All'],
    },
  })
  return data
})
