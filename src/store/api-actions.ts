import { createAsyncThunk } from '@reduxjs/toolkit'
import { Card } from '../types/card'
import { FormData } from '../types/formData'
// import axios, { AxiosError } from 'axios'
import { AxiosError } from 'axios'
import { travelerData } from '../data/travelerData'
import { changeFormDataToCard } from '../helpers/changeFormDataToCard'

type SendFormDataProps = {
  formData: FormData
  onSuccess(): void
  onError(error: AxiosError): void
}

// export const sendFormData = createAsyncThunk<Card[], SendFormDataProps>(
//   'form/sendData',
//   async ({ formData, onError, onSuccess }, thunkAPI) => {
//     try {
//       const { data } = await axios.post<Card[]>('https://mabori.ru/api/travels', formData)
//       onSuccess()
//       return data
//     } catch (error: any) {
//       onError(error)
//       return thunkAPI.rejectWithValue(error)
//     }
//   },
// )

// export const fetchCatalogData = createAsyncThunk<
//   Card[],
//   {
//     page: string
//     limit: string
//   }
// >('catalog/fetchData', async ({ page, limit }) => {
//   const { data } = await axios.get<Card[]>('https://mabori.ru/api/travels', {
//     // const { data } = await axios.get<Card[]>('http://localhost:5050/api/travels', {
//     params: {
//       page,
//       limit,
//       // regions: regions.length > 0 ? regions.join(',') : ['All'],
//     },
//   })
//   return data
// })

export const fetchCatalogData = createAsyncThunk<
  Card[],
  {
    page: string
    limit: string
  }
>('catalog/fetchData', async () => {
  console.log(travelerData)
  return travelerData
})

export const sendFormData = createAsyncThunk<Card[], SendFormDataProps>(
  'form/sendData',
  async ({ formData, onError, onSuccess }, thunkAPI) => {
    try {
      const data = changeFormDataToCard(formData)
      onSuccess()
      return [data, ...travelerData]
    } catch (error: any) {
      onError(error)
      return thunkAPI.rejectWithValue(error)
    }
  },
)
