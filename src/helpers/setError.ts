import { CountryData } from '../types/countriesData'
import { Entertainment } from '../types/entertainments'
import { Error } from '../types/error'
import { TravelDates } from '../types/travelDates'
import { ERROR_MAP, TransportType } from '../utils/consts'

type MandatoryFields = {
  transportType: TransportType[]
  selectedCountries: CountryData[]
  tags: string[]
  travelDates: TravelDates
  entertainments: Entertainment[]
}

const getError = (errorName: string) => {
  const error = ERROR_MAP.find((error) => error.errorName === errorName)
  return error as Error
}

const validateField = <T>(field: T, errorName: string, errorList: Error[]): Error[] => {
  if (!field || (Array.isArray(field) && field.length === 0)) {
    const error = getError(errorName)
    if (error) {
      errorList.push(error)
    }
  } else {
    errorList = errorList.filter((err) => err.errorName !== errorName)
  }
  return errorList
}

export const setError = ({
  transportType,
  selectedCountries,
  tags,
  travelDates,
  entertainments,
}: MandatoryFields) => {
  let errors: Error[] = []

  errors = validateField(transportType, 'transportTypeError', errors)
  errors = validateField(selectedCountries, 'selectedCountriesError', errors)
  errors = validateField(tags, 'tagsError', errors)

  if (
    !entertainments ||
    (Array.isArray(entertainments) && entertainments.length === 0) ||
    (Array.isArray(entertainments) && entertainments.length !== selectedCountries.length)
  ) {
    errors.push(getError('entertainmentsError'))
  } else {
    errors = errors.filter((error) => error.errorName !== 'entertainmentsError')
  }

  if (!travelDates.startDate || !travelDates.endDate) {
    errors.push(getError('travelDatesError'))
  } else {
    errors = errors.filter((error) => error.errorName !== 'travelDatesError')
  }
  return errors
}
