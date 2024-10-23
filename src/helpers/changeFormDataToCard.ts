import { Card } from '../types/card'
import { FormData } from '../types/formData'

export const changeFormDataToCard = (formData: FormData) => {
  const newCard: Card = {
    uuid: formData.uuid,
    firstName: formData.firstName,
    lastName: formData.lastName,
    photoUrl: formData.photoUrl,
    tags: formData.tags,
    countries: formData.selectedCountries,
    transport: formData.transportType,
    likes: Math.ceil(Math.random() * 2000),
    level: Math.ceil(Math.random() * 100),
  }

  return newCard
}
