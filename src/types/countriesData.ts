export type CountryData = {
  flags: string
  alt: string
  countryCode: string
  region: string
}

export type CountriesDataType = {
  letter: string
  countries: CountryData[]
}

export type ChangedCountryType = {
  selectedValue: CountryData
  newValue: CountryData
}
