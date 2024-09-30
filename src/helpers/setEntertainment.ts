import { Entertainment } from '../types/entertainments'

export const setEntertainment = (
  entertainments: Entertainment[],
  country: string,
  description: string,
) => {
  const entertainmentIndex = entertainments.findIndex(
    (entertainment) => entertainment.country === country,
  )
  let addedEntertainments: Entertainment[] = []

  if (description) {
    if (entertainmentIndex === -1) {
      addedEntertainments = [...entertainments, { country, description }]
    } else {
      addedEntertainments = entertainments.map((entertainment) =>
        entertainment.country === country ? { ...entertainment, description } : entertainment,
      )
    }
  } else {
    if (entertainmentIndex !== -1) {
      addedEntertainments = entertainments.filter(
        (entertainment) => entertainment.country !== country,
      )
    } else {
      addedEntertainments = entertainments
    }
  }
  return addedEntertainments
}
